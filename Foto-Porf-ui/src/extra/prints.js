var fs = require('fs', function (fs) {
  console.log(fs);
});

// fs.readdir('img', function(err, files) {
//     if (err) {
//         throw err;
//     }
//     console.log(files);
//     files.map(function(file) {
//         return _self.path.join('img', file);
//     }).filter(function(file) {
//         return fs.statSync(file).isFile();
//     }).forEach(function(file) {
//         var ext = _self.path.extname(file);
//         var name_complete = _self.path.basename(file);
//         var name_simple = name_complete.replace(ext, "");
//         console.log("---> %s : %s (%s)", name_complete, name_simple, ext);
//     });
// });
