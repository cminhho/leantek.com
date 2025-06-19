#!/bin/bash

# GitHub Pages Deployment Script for leanTek Website
# This script builds and deploys the project to GitHub Pages

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not a git repository${NC}"
    exit 1
fi

# Check if gh-pages is installed
if ! npm list gh-pages &> /dev/null; then
    echo -e "${YELLOW}⚠️  gh-pages not found. Installing...${NC}"
    npm install --save-dev gh-pages
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes${NC}"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}❌ Deployment cancelled${NC}"
        exit 1
    fi
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${BLUE}📍 Current branch: ${CURRENT_BRANCH}${NC}"

# Run linting
echo -e "${BLUE}🔍 Running linter...${NC}"
npm run lint

# Build the project
echo -e "${BLUE}🏗️  Building project...${NC}"
NODE_ENV=production npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed - dist directory not found${NC}"
    exit 1
fi

# Deploy to GitHub Pages
echo -e "${BLUE}📤 Deploying to GitHub Pages...${NC}"
npm run deploy

# Check deployment status
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your site will be available at: https://cminhho.github.io/leantek.com${NC}"
    echo -e "${YELLOW}⏰ It may take a few minutes for changes to appear on GitHub Pages${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}" 