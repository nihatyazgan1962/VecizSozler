Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Nihat\.gemini\antigravity-ide\brain\c0e789c5-579e-4d8f-921a-8525cf56b567\sozler_red_icon_1790109029301.jpg"
$baseResDir = Join-Path $PSScriptRoot "..\android\app\src\main\res"

Write-Host "Source image: $srcPath"
Write-Host "Target res dir: $baseResDir"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source image does not exist!"
    exit 1
}

$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Source size: $($srcBmp.Width) x $($srcBmp.Height)"

$densities = @(
    @{ Name = "mipmap-mdpi"; LegacySize = 48; ForeSize = 108 },
    @{ Name = "mipmap-hdpi"; LegacySize = 72; ForeSize = 162 },
    @{ Name = "mipmap-xhdpi"; LegacySize = 96; ForeSize = 216 },
    @{ Name = "mipmap-xxhdpi"; LegacySize = 144; ForeSize = 324 },
    @{ Name = "mipmap-xxxhdpi"; LegacySize = 192; ForeSize = 432 }
)

foreach ($d in $densities) {
    $dir = Join-Path $baseResDir $d.Name
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    # 1. ic_launcher.png (legacy square/rounded icon)
    $sz = $d.LegacySize
    $bmpLauncher = New-Object System.Drawing.Bitmap($sz, $sz)
    $g = [System.Drawing.Graphics]::FromImage($bmpLauncher)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Draw image with slight margin or fill
    $g.DrawImage($srcBmp, 0, 0, $sz, $sz)
    $g.Dispose()
    
    $outLauncher = Join-Path $dir "ic_launcher.png"
    $bmpLauncher.Save($outLauncher, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmpLauncher.Dispose()
    Write-Host "Saved: $outLauncher"

    # 2. ic_launcher_round.png (clipped to circle)
    $bmpRound = New-Object System.Drawing.Bitmap($sz, $sz)
    $gRound = [System.Drawing.Graphics]::FromImage($bmpRound)
    $gRound.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gRound.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gRound.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gRound.Clear([System.Drawing.Color]::Transparent)

    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $sz, $sz)
    $gRound.SetClip($path)
    $gRound.DrawImage($srcBmp, 0, 0, $sz, $sz)
    $gRound.ResetClip()
    $path.Dispose()
    $gRound.Dispose()

    $outRound = Join-Path $dir "ic_launcher_round.png"
    $bmpRound.Save($outRound, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmpRound.Dispose()
    Write-Host "Saved: $outRound"

    # 3. ic_launcher_foreground.png (for Adaptive Icons)
    # Total canvas is ForeSize (108/162/216/324/432).
    # Inner safe zone is 72/108 (~66-70%). So we place the book centered at ~72% size.
    $foreSz = $d.ForeSize
    $bmpFore = New-Object System.Drawing.Bitmap($foreSz, $foreSz)
    $gFore = [System.Drawing.Graphics]::FromImage($bmpFore)
    $gFore.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gFore.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gFore.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gFore.Clear([System.Drawing.Color]::Transparent)

    # In foreground, draw the red book scaled down to 72% so it fits in the adaptive circle/squircle mask
    $innerSz = [int]($foreSz * 0.72)
    $offset = [int](($foreSz - $innerSz) / 2)
    $gFore.DrawImage($srcBmp, $offset, $offset, $innerSz, $innerSz)
    $gFore.Dispose()

    $outFore = Join-Path $dir "ic_launcher_foreground.png"
    $bmpFore.Save($outFore, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmpFore.Dispose()
    Write-Host "Saved: $outFore"
}

# Also save web icons
$webFavicon = Join-Path $PSScriptRoot "..\favicon.png"
$bmpWeb = New-Object System.Drawing.Bitmap(192, 192)
$gWeb = [System.Drawing.Graphics]::FromImage($bmpWeb)
$gWeb.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gWeb.DrawImage($srcBmp, 0, 0, 192, 192)
$gWeb.Dispose()
$bmpWeb.Save($webFavicon, [System.Drawing.Imaging.ImageFormat]::Png)
$bmpWeb.Dispose()
Write-Host "Saved web favicon: $webFavicon"

$srcBmp.Dispose()
Write-Host "All icons generated successfully!"
