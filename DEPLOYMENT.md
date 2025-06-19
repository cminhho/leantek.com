# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy the leanTek website to GitHub Pages using multiple methods.

## 📋 Prerequisites

1. **GitHub Repository**: Your code must be in a GitHub repository
2. **Node.js**: Version 16.0.0 or later
3. **Git**: Properly configured with your GitHub account

## 🛠 Setup Instructions

### 1. Update Repository URL

Before deploying, update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://cminhho.github.io/leantek.com"
}
```

This is already configured for the repository https://github.com/cminhho/leantek.com

### 2. Install Dependencies

```bash
npm install
```

This will install the `gh-pages` package automatically.

## 🎯 Deployment Methods

### Method 1: Manual Deployment (Recommended for Testing)

#### Using npm scripts:
```bash
# Build and deploy in one command
npm run deploy

# Or deploy with a clean slate (force push)
npm run deploy:clean
```

#### Using the deployment script:
```bash
# Make sure the script is executable (already done)
./deploy.sh
```

The script provides:
- ✅ Pre-deployment checks
- 🔍 Automatic linting
- 🏗️ Production build
- 📤 Deployment to gh-pages branch
- 🎨 Colored output for better UX

### Method 2: Automatic Deployment (Recommended for Production)

GitHub Actions will automatically deploy when you push to the main branch.

#### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment**:
   - Check the "Actions" tab in your GitHub repository
   - Wait for the green checkmark

## 🔧 Configuration Details

### Vite Configuration

The `vite.config.js` is configured for GitHub Pages:

```javascript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/leantek.com/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['@heroicons/react', 'react-icons'],
          utils: ['swiper']
        }
      }
    }
  }
})
```

### GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) includes:
- ✅ Automated testing and linting
- 🏗️ Production build
- 📤 Deployment to GitHub Pages
- 🔄 Runs on every push to main/master

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run deploy:clean` | Force deploy (overwrites existing deployment) |
| `npm run predeploy` | Runs automatically before deploy (builds the project) |
| `./deploy.sh` | Interactive deployment script with checks |

## 🌐 Accessing Your Site

After successful deployment, your site will be available at:
```
https://cminhho.github.io/leantek.com
```

**Note**: It may take 5-10 minutes for changes to be visible after deployment.

## 🔍 Troubleshooting

### Common Issues:

1. **404 Error on page refresh**:
   - This is normal for SPAs on GitHub Pages
   - Users should navigate through the site normally

2. **Assets not loading**:
   - Ensure the `base` path in `vite.config.js` matches your repository name (`/leantek.com/`)
   - Check that the `homepage` in `package.json` is correct

3. **Build fails**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

4. **Deployment permission errors**:
   - Ensure you have write access to the repository
   - Check that GitHub Actions has the necessary permissions

### Debug Commands:

```bash
# Test build locally
npm run build
npm run preview

# Check gh-pages branch
git checkout gh-pages
git log --oneline -5

# Return to main branch
git checkout main
```

## 🔒 Security Notes

- The GitHub Actions workflow uses secure tokens
- No sensitive information is exposed in the build
- All builds run in isolated environments

## 📊 Monitoring

### GitHub Actions:
- View deployment status in the "Actions" tab
- Check build logs for errors
- Monitor deployment history

### GitHub Pages:
- View site analytics in repository insights
- Monitor uptime and performance
- Check for any security alerts

## 🚀 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the `homepage` in `package.json` to your custom domain

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all prerequisites are met
4. Review the troubleshooting section

---

**Happy Deploying! 🎉** 