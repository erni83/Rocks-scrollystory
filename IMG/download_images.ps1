$baseUrl = "https://laislanetwork.org/wp-content/uploads/2026/04/"
$imageFiles = @(
  "HEA26002_00309.jpg",
  "HEA26002_00525.jpg",
  "HEA26002_00574.jpg",
  "HEA26002_01383.jpg",
  "HEA26002_01383S.jpg",
  "HEA26002_02298.jpg",
  "HEA26002_02596.jpg",
  "HEA26002_02691.jpg",
  "HEA26002_02985.jpg",
  "HEA26002_03486.jpg",
  "HEA26002_03904.jpg",
  "HEA26002_04363.jpg",
  "HEA26002_04407.jpg",
  "HEA26002_04871.jpg",
  "HEA26002_04923.jpg",
  "HEA26002_04930.jpg",
  "HEA26002_04953.jpg",
  "HEA26002_04954S.jpg",
  "HEA26002_05015S.jpg",
  "HEA26002_05194.jpg",
  "HEA26002_05194S.jpg",
  "HEA26002_05227S.jpg",
  "HEA26002_05549.jpg",
  "HEA26002_05604.jpg",
  "HEA26002_05663.jpg",
  "HEA26002_05773.jpg",
  "HEA26002_05827.jpg",
  "HEA26002_05837.jpg",
  "HEA26002_05887S.jpg",
  "HEA26002_05927S.jpg",
  "HEA26002_06009.jpg",
  "HEA26002_06118.jpg",
  "HEA26002_06127.jpg",
  "HEA26002_06384.jpg",
  "HEA26002_06421.jpg",
  "HEA26002_06447.jpg",
  "HEA26002_06669.jpg",
  "HEA26002_06718.jpg",
  "HEA26002_06882.jpg",
  "HEA26002_06935.jpg",
  "HEA26002_06965.jpg",
  "HEA26002_06972.jpg",
  "HEA26002_07030.jpg",
  "HEA26002_07454.jpg",
  "HEA26002_07541.jpg",
  "HEA26002_07815.jpg",
  "HEA26002_07930.jpg",
  "HEA26002_07986.jpg",
  "HEA26002_08051.jpg",
  "HEA26002_08382S.jpg",
  "HEA26002_08612.jpg",
  "HEA26002_08621S.jpg",
  "HEA26002_09136.jpg",
  "HEA26002_09430.jpg",
  "HEA26002_09461.jpg",
  "HEA26002_09466.jpg",
  "HEA26002_09565.jpg",
  "HEA26002_09676.jpg",
  "HEA26002_09687.jpg",
  "HEA26002_09687S.jpg",
  "HEA26002_09808.jpg",
  "HEA26002_09812.jpg",
  "HEA26002_09886.jpg",
  "HEA26002_09908.jpg",
  "HEA26002_09937.jpg",
  "HEA26002_09942S.jpg",
  "HEA26002_09969S.jpg"
)

$downloaded = 0
$failed = 0

foreach ($file in $imageFiles) {
  $url = $baseUrl + $file
  $localPath = Join-Path -Path (Get-Location) -ChildPath $file
  
  # Skip if file already exists
  if (Test-Path $localPath) {
    Write-Host "Skipping $file (already exists)" -ForegroundColor Yellow
    continue
  }
  
  try {
    Write-Host "Downloading $file..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri $url -OutFile $localPath -ErrorAction Stop
    $downloaded++
    Write-Host "✓ Downloaded $file" -ForegroundColor Green
  } catch {
    $failed++
    Write-Host "✗ Failed to download $file - $($_.Exception.Message)" -ForegroundColor Red
  }
}

Write-Host "`nDownload complete: $downloaded downloaded, $failed failed"
