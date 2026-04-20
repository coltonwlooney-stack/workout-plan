# Workout Plan PWA — Deployment Guide

## What you have
5 files that together make a fully installable phone app:
- index.html  (the app shell)
- style.css   (all styling)
- app.js      (all logic + your workout data)
- manifest.json
- sw.js       (offline support)
- icons/      (app icons)

---

## Step 1 — Create a free GitHub account
Go to github.com and sign up (free). Skip if you have one.

---

## Step 2 — Create a new repository
1. Click the "+" icon in the top right → "New repository"
2. Name it: workout-plan
3. Set to Public
4. Click "Create repository"

---

## Step 3 — Upload your files
1. On the repository page, click "uploading an existing file"
2. Drag ALL files and the icons/ folder into the upload area
3. Click "Commit changes"

---

## Step 4 — Enable GitHub Pages
1. Go to Settings (top of repo) → Pages (left sidebar)
2. Under "Source", select "Deploy from a branch"
3. Branch: main | Folder: / (root)
4. Click Save

Wait ~60 seconds, then your app will be live at:
https://[your-github-username].github.io/workout-plan

---

## Step 5 — Install on your iPhone
1. Open Safari on your iPhone (must be Safari, not Chrome)
2. Go to your GitHub Pages URL above
3. Tap the Share button (box with arrow pointing up)
4. Tap "Add to Home Screen"
5. Name it "Workout Plan" → tap Add

It will appear on your home screen like any other app.

---

## Notes
- Data saves to your phone's browser storage (persists between sessions)
- Works offline after first visit
- To update the app later: just re-upload changed files to GitHub
- The app is password-free and public — don't store sensitive info in notes
