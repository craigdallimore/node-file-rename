var fs = require('fs');
var dir = "path to folder where files should be renamed";
var re = /regular expression or somesuch/;


var renameFile = function(fileName) {
    var newFileName = fileName.replace(re, '-');
    fs.rename(dir + fileName, dir + newFileName, function(err) {
        if (err) throw err;

        fs.stat(dir + newFileName, function(err, stats) {
            if (err) throw err;
            console.log(stats);
        });

    });
};

fs.readdir(dir, function(err, files) {
    files.forEach(renameFile);
});

