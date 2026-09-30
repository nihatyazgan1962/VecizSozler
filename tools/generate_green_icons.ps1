Add-Type -AssemblyName System.Drawing

$resDir = "C:\Users\Nihat\Documents\Gemini\VECİZ SÖZLER\android\app\src\main\res"
$webFavicon = "C:\Users\Nihat\Documents\Gemini\VECİZ SÖZLER\favicon.png"
$wwwFavicon = "C:\Users\Nihat\Documents\Gemini\VECİZ SÖZLER\www\favicon.png"

function Generate-GreenIcon([int]$sz) {
    $bmp = New-Object System.Drawing.Bitmap($sz, $sz)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    # Rich Emerald Green Gradient Background
    $rect = New-Object System.Drawing.Rectangle(0, 0, $sz, $sz)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(255, 5, 32, 22),
        [System.Drawing.Color]::FromArgb(255, 16, 68, 46),
        45.0
    )
    $g.FillRectangle($brush, $rect)
    $brush.Dispose()

    # Outer Decorative Gold Border
    $penW = [float]($sz * 0.025)
    if ($penW -lt 1.5) { $penW = 1.5 }
    $penGold = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 212, 175, 55), $penW)
    $m1 = [int]($sz * 0.06)
    $g.DrawRectangle($penGold, $m1, $m1, [int]($sz - (2 * $m1)), [int]($sz - (2 * $m1)))
    $penGold.Dispose()

    # Inner Subtle Gold Border
    $penSub = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(160, 244, 220, 129), 1.0)
    $m2 = [int]($sz * 0.09)
    $g.DrawRectangle($penSub, $m2, $m2, [int]($sz - (2 * $m2)), [int]($sz - (2 * $m2)))
    $penSub.Dispose()

    # Center Motif and Text
    $goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 248, 225, 140))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center

    # Top Star Motif (drawn via circles/diamond)
    $cx = [float]($sz / 2.0)
    $cyStar = [float]($sz * 0.30)
    $starR = [float]($sz * 0.065)
    if ($starR -lt 3.0) { $starR = 3.0 }
    
    $pTop = New-Object System.Drawing.PointF($cx, [float]($cyStar - $starR))
    $pRight = New-Object System.Drawing.PointF([float]($cx + $starR), $cyStar)
    $pBottom = New-Object System.Drawing.PointF($cx, [float]($cyStar + $starR))
    $pLeft = New-Object System.Drawing.PointF([float]($cx - $starR), $cyStar)
    $pts = [System.Drawing.PointF[]]@($pTop, $pRight, $pBottom, $pLeft)
    $g.FillPolygon($goldBrush, $pts)

    # Dot in center
    $g.FillEllipse($goldBrush, [float]($cx - 2), [float]($cyStar - 2), 4.0, 4.0)

    # Main 'VECİZELER' Text
    $fontSize = [float]($sz * 0.14)
    if ($fontSize -lt 7.0) { $fontSize = 7.0 }
    $titleFont = New-Object System.Drawing.Font("Georgia", $fontSize, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("VECİZELER", $titleFont, $goldBrush, $cx, [float]($sz * 0.58), $sf)
    $titleFont.Dispose()

    # Subtitle 'HİKMET REHBERİ'
    if ($sz -ge 72) {
        $subFontSize = [float]($sz * 0.055)
        if ($subFontSize -lt 6.0) { $subFontSize = 6.0 }
        $subFont = New-Object System.Drawing.Font("Arial", $subFontSize, [System.Drawing.FontStyle]::Bold)
        $subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(235, 215, 235, 220))
        $g.DrawString("HİKMET REHBERİ", $subFont, $subBrush, $cx, [float]($sz * 0.76), $sf)
        $subFont.Dispose()
        $subBrush.Dispose()
    }

    $goldBrush.Dispose()
    $sf.Dispose()
    $g.Dispose()
    return $bmp
}

# 1. Master Favicon 512x512
$master = Generate-GreenIcon 512
$master.Save($webFavicon, [System.Drawing.Imaging.ImageFormat]::Png)
if (-not (Test-Path "C:\Users\Nihat\Documents\Gemini\VECİZ SÖZLER\www")) {
    New-Item -ItemType Directory -Path "C:\Users\Nihat\Documents\Gemini\VECİZ SÖZLER\www" -Force | Out-Null
}
$master.Save($wwwFavicon, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Master favicon created."

# 2. Android mipmaps
$densities = @(
    @{ Name = "mipmap-mdpi"; LegacySize = 48; ForeSize = 108 },
    @{ Name = "mipmap-hdpi"; LegacySize = 72; ForeSize = 162 },
    @{ Name = "mipmap-xhdpi"; LegacySize = 96; ForeSize = 216 },
    @{ Name = "mipmap-xxhdpi"; LegacySize = 144; ForeSize = 324 },
    @{ Name = "mipmap-xxxhdpi"; LegacySize = 192; ForeSize = 432 }
)

foreach ($d in $densities) {
    $dir = Join-Path $resDir $d.Name
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    # ic_launcher.png
    $bLegacy = Generate-GreenIcon $d.LegacySize
    $bLegacy.Save((Join-Path $dir "ic_launcher.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bLegacy.Dispose()

    # ic_launcher_round.png
    $sz = $d.LegacySize
    $bRound = New-Object System.Drawing.Bitmap($sz, $sz)
    $gR = [System.Drawing.Graphics]::FromImage($bRound)
    $gR.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gR.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $sz, $sz)
    $gR.SetClip($path)
    $innerIcon = Generate-GreenIcon $sz
    $gR.DrawImage($innerIcon, 0, 0, $sz, $sz)
    $innerIcon.Dispose()
    $path.Dispose()
    $gR.Dispose()
    $bRound.Save((Join-Path $dir "ic_launcher_round.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bRound.Dispose()

    # ic_launcher_foreground.png
    $foreSz = $d.ForeSize
    $bFore = New-Object System.Drawing.Bitmap($foreSz, $foreSz)
    $gFore = [System.Drawing.Graphics]::FromImage($bFore)
    $gFore.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gFore.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $innerSz = [int]($foreSz * 0.78)
    $offset = [int](($foreSz - $innerSz) / 2)
    $foreIcon = Generate-GreenIcon $innerSz
    $gFore.DrawImage($foreIcon, $offset, $offset, $innerSz, $innerSz)
    $foreIcon.Dispose()
    $gFore.Dispose()
    $bFore.Save((Join-Path $dir "ic_launcher_foreground.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bFore.Dispose()

    Write-Host "Generated Android icons for $($d.Name)"
}

$master.Dispose()
Write-Host "All green VECİZELER icons successfully created!"
