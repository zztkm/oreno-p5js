@echo off
git add dist/
git commit -m "update: おれのp5.js document(github pages)"
git subtree push --prefix dist origin gh-pages