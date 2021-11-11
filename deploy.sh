#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# copy old version
cp -r ./v1 ./dist
cp -r ./v2.0 ./dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "Deploying....."
echo "https://anibalsanchez.github.io/Tailwindcss-cheatsheet/"
# echo "https://anibalsanchez.github.io/Tailwindcss-cheatsheet/" > CNAME

git init
git add -A
git commit -m "deploy" &&

git push -f git@github.com:anibalsanchez/Tailwindcss-cheatsheet.git master:gh-pages

cd -