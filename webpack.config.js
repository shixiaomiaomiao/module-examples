const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(path.resolve(__dirname));
let jsFileList = [];
const dirList = []
files.forEach(fileDir => {
  fs.stat(fileDir, function(err, stats) {
    if(stats.isDirectory()) {
      console.log(fileDir);
    }
    
  });
});

console.log(jsFileList);
// const fileMap = path.

module.exports = {
  mode: 'development',
  entry: {
    a: './charpter2/example-1/a.js',
    b: './charpter2/example-1/b.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};