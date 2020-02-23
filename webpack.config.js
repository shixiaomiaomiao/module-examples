const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(path.resolve(__dirname, 'src'));
const entry = {};
files.forEach(fileDir => {
  const dirPath = path.join(__dirname, 'src', fileDir);
  const isDir = fs.statSync(dirPath).isDirectory();
  if (isDir) {
    const dirs = fs.readdirSync(dirPath);
    dirs.forEach(dir => {
      fs.readdirSync(path.join(dirPath, dir)).forEach(fileName => {
        const filePath  = path.join(dirPath, dir, fileName);
        const filePathIsDir = fs.statSync(filePath).isDirectory();
        if (filePathIsDir) {
          fs.readdirSync(filePath).forEach(jsFile => {
            entry[`${fileDir}-${dir}-${fileName}-${jsFile}`] = [
              // "core-js/modules/es.promise",
              // "core-js/modules/es.array.iterator",
              path.join(dirPath, dir, fileName, jsFile)]
          })
        } else {
          entry[`${fileDir}-${dir}-${fileName}`] = filePath;
        }
      })
    })
  }
});

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
};