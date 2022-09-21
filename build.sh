# clean first
rm -rf ./dist

# build project
yarn build

# zip for release
zip -r dist_"`date +%Y-%m-%d_%H_%M`".zip ./dist/*