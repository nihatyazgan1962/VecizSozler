@echo off
color 0A
title VECIZELER APK Olusturucu
echo ========================================================
echo   VECIZELER APK Olusturucu Baslatiliyor...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0apk_yap.ps1"
