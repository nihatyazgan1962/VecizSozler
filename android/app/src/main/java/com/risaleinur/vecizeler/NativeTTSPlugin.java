package com.risaleinur.vecizeler;

import android.os.Build;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.speech.tts.Voice;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;
import java.util.Set;

@CapacitorPlugin(name = "NativeTTS")
public class NativeTTSPlugin extends Plugin implements TextToSpeech.OnInitListener {

    private TextToSpeech tts;
    private boolean isReady = false;
    private static final String TAG = "NativeTTSPlugin";
    private String currentVoiceProfile = "male_deep"; // "male_deep" | "male_natural" | "female_soft" | "female_clear" | "meditation"

    @Override
    public void load() {
        super.load();
        try {
            tts = new TextToSpeech(getContext(), this);
        } catch (Exception e) {
            Log.e(TAG, "TTS başlatılamadı", e);
        }
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS && tts != null) {
            applyVoiceSettings("male_deep");

            tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                @Override
                public void onStart(String utteranceId) {
                    JSObject ret = new JSObject();
                    ret.put("event", "start");
                    ret.put("id", utteranceId);
                    notifyListeners("ttsEvent", ret);
                }

                @Override
                public void onDone(String utteranceId) {
                    JSObject ret = new JSObject();
                    ret.put("event", "done");
                    ret.put("id", utteranceId);
                    notifyListeners("ttsEvent", ret);
                }

                @Override
                public void onError(String utteranceId) {
                    JSObject ret = new JSObject();
                    ret.put("event", "error");
                    ret.put("id", utteranceId);
                    notifyListeners("ttsEvent", ret);
                }
            });

            isReady = true;
            Log.i(TAG, "Native Android TTS başarıyla hazırlandı.");
        } else {
            Log.e(TAG, "TTS Başlatma hatası: " + status);
        }
    }

    private void applyVoiceSettings(String profile) {
        if (tts == null) return;
        this.currentVoiceProfile = profile != null ? profile : "male_deep";

        Locale trLocale = new Locale("tr", "TR");
        int result = tts.setLanguage(trLocale);
        if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            tts.setLanguage(new Locale("tr"));
        }

        boolean isMale = profile.startsWith("male") || "meditation".equals(profile);

        // Android 5.0+ (Lollipop+) Ses Paketleri arasından Erkek / Kadın ses seçimi
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            try {
                Set<Voice> voices = tts.getVoices();
                if (voices != null) {
                    Voice bestMatch = null;
                    for (Voice v : voices) {
                        if (v.getLocale() != null && v.getLocale().getLanguage().equalsIgnoreCase("tr")) {
                            String vName = v.getName().toLowerCase();
                            if (isMale) {
                                if (vName.contains("male") || vName.contains("erkek") || vName.contains("tr-tr-x-df") || vName.contains("tr-tr-x-cf") || vName.contains("network")) {
                                    bestMatch = v;
                                    break;
                                }
                            } else {
                                if (vName.contains("female") || vName.contains("kadin") || vName.contains("tr-tr-x-af") || vName.contains("tr-tr-x-bf")) {
                                    bestMatch = v;
                                    break;
                                }
                            }
                            if (bestMatch == null) {
                                bestMatch = v;
                            }
                        }
                    }
                    if (bestMatch != null) {
                        tts.setVoice(bestMatch);
                    }
                }
            } catch (Exception e) {
                Log.w(TAG, "Voice selection exception: " + e.getMessage());
            }
        }

        // Ses Tonu (Pitch) ve Konuşma Hızı (Rate) Ayarları
        switch (this.currentVoiceProfile) {
            case "male_deep":
                // Tok, kalın bas tonu, vakarlı ve tane tane
                tts.setPitch(0.72f);
                tts.setSpeechRate(0.85f);
                break;
            case "male_natural":
                // Doğal erkek anlatıcı
                tts.setPitch(0.86f);
                tts.setSpeechRate(0.90f);
                break;
            case "female_soft":
                // Zarif, yumuşak kadın tonu
                tts.setPitch(1.02f);
                tts.setSpeechRate(0.90f);
                break;
            case "female_clear":
                // Canlı ve berrak kadın sesi
                tts.setPitch(1.12f);
                tts.setSpeechRate(0.95f);
                break;
            case "meditation":
                // Derin tefekkür modu (çok tok, yavaş)
                tts.setPitch(0.68f);
                tts.setSpeechRate(0.78f);
                break;
            default:
                tts.setPitch(0.72f);
                tts.setSpeechRate(0.85f);
                break;
        }
    }

    @PluginMethod
    public void setGender(PluginCall call) {
        String profile = call.getString("gender", "male_deep");
        applyVoiceSettings(profile);
        JSObject ret = new JSObject();
        ret.put("success", true);
        ret.put("profile", currentVoiceProfile);
        call.resolve(ret);
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text");
        String id = call.getString("id", "vecize_" + System.currentTimeMillis());
        String profile = call.getString("gender", this.currentVoiceProfile);

        if (text == null || text.trim().isEmpty()) {
            call.reject("Okunacak metin boş");
            return;
        }

        if (tts == null) {
            tts = new TextToSpeech(getContext(), this);
        }

        try {
            applyVoiceSettings(profile != null ? profile : "male_deep");
            tts.stop();
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, id);

            JSObject ret = new JSObject();
            ret.put("success", true);
            ret.put("id", id);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Seslendirme hatası: " + e.getMessage());
        }
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (tts != null) {
            try {
                tts.stop();
            } catch (Exception e) {
                Log.e(TAG, "Durdurma hatası", e);
            }
        }
        JSObject ret = new JSObject();
        ret.put("success", true);
        call.resolve(ret);
    }

    @Override
    protected void handleOnDestroy() {
        if (tts != null) {
            try {
                tts.stop();
                tts.shutdown();
            } catch (Exception ignored) {}
        }
        super.handleOnDestroy();
    }
}
