const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(path.resolve(__dirname, 'src'));
const entry = {};
files.forEach(fileDir => {
  const dirPath = path.join(__dirname, 'src', fileDir);
  const isDir = fs.statSync(dirPath);
  if (isDir) {
    const dirs = fs.readdirSync(dirPath);
    dirs.forEach(dir => {
      fs.readdirSync(path.join(dirPath, dir)).forEach(fileName => {
        entry[`${fileDir}-${dir}-${fileName}`] = path.join(dirPath, dir, fileName)
      })
    })
  }
});

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};