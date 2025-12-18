# How to Deploy Simtope to GitHub Pages

I have pre-configured this project to deploy automatically using **GitHub Actions**.

## Step 1: Create a Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Name the repository (e.g., `simtope-website`).
3.  Make sure it is **Public** (required for free GitHub Pages) or Private (if you have Pro).
4.  **Do not** initialize with README/gitignore (we already have them).
5.  Click **Create repository**.

## Step 2: Push your Code
Open your terminal in the `Simtope V2` folder and run these commands:

```bash
# 1. Initialize Git (if not already done)
git init
git branch -M main

# 2. Add all files (I added a .gitignore for you!)
git add .
git commit -m "Initial commit of Simtope Static Website"

# 3. Connect to your new GitHub Repo
# REPLACE <YOUR_URL> with the one from Step 1 (e.g., https://github.com/username/simtope-website.git)
git remote add origin <YOUR_URL>

# 4. Push
git push -u origin main
```

## Step 3: Enable GitHub Pages
1.  Go to your repository **Settings** on GitHub.
2.  Click **Pages** (in the left sidebar).
3.  Under **Build and deployment**, change Source to **GitHub Actions**.
4.  The workflow I created (`.github/workflows/deploy.yml`) will automatically pick this up.

## Step 4: Verify
1.  Go to the **Actions** tab in your repo.
2.  You should see a "Deploy static content to Pages" workflow running.
3.  When green, click it to see the **URL** of your live site!
