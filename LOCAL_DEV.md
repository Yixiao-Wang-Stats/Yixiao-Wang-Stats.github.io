# Local Development Quick Start

Use this every time you want to preview the site locally.

## Start the local server

Run these commands in the project root:

```powershell
Remove-Item Env:JEKYLL_GITHUB_TOKEN -ErrorAction SilentlyContinue
Remove-Item Env:GITHUB_TOKEN -ErrorAction SilentlyContinue
Remove-Item Env:OCTOKIT_ACCESS_TOKEN -ErrorAction SilentlyContinue
$env:JEKYLL_ENV="development"
npm run serve:local
```

Then open:

- http://127.0.0.1:4000

Keep the terminal running while you edit files.

## Stop the server

- Press `Ctrl + C` in the terminal.

## If the page does not open

1. Check that `npm run serve:local` is still running (no fatal error in terminal).
2. Make sure port `4000` is not occupied by another process.
3. Restart with:

```powershell
$env:JEKYLL_ENV="development"
npm run serve:local
```

```powershell
bundle exec jekyll serve --livereload
```