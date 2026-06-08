$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$logPath = Join-Path $projectRoot "dev-server.log"

Set-Location $projectRoot

"Starting Spirit Hero dev server at $(Get-Date -Format o)" | Out-File -FilePath $logPath -Encoding utf8
npm.cmd run dev:local *>> $logPath
