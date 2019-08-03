const shell = require('shelljs');

var fs = require('fs');
var path = require('path');

shell.tree = function (dirname, callback) {
    var directory = [];
    fs.readdir(dirname, function (err, list) {
        dirname = fs.realpathSync(dirname);
        if (err) {
            return callback(err);
        }
        var listlength = list.length;
        list.forEach(function (file) {
            file = path.join(dirname, file);
            fs.stat(file, function (err, stat) {
                directory.push(file);
                if (stat && stat.isDirectory()) {
                    traverseDirectory(file, function (err, parsed) {
                        directory = directory.concat(parsed);
                        if (!--listlength) {
                            callback(null, directory);
                        }
                    });
                } else {
                    if (!--listlength) {
                        callback(null, directory);
                    }
                }
            });
        });
    });
}

class Actions {
    static remakeDest(env) {
        // console.log('Remove directory at', env.dest);
        shell.rm('-rf', env.dest);

        // console.log('Make new directory at', env.dest);
        shell.mkdir('-p', env.dest);
    }
    static makeDir(env, dir) {
        // console.log('Make new directory at', env.dest + dir);
        shell.mkdir('-p', env.dest + dir);
    }
    static copyPkg(env, pkg) {
        // console.log('Copy package files and directories to', env.dest);
        for (let i = 0; i < pkg.length; i++) {
            shell.cp('-R', env.src + pkg[i], env.dest + pkg[i]);
        }
    }
    static copyPkgtTo(env, pkg, dest) {
        // console.log('Copy package files and directories to', env.dest + dest);
        for (let i = 0; i < pkg.length; i++) {
            shell.cp(pkg[i], env.dest + dest);
        }
    }
    static copyFile(env, src, dest) {
        // console.log('Copy files to', { 'from': src, 'to': env.dest + dest });
        shell.cp(src, env.dest + dest);
    }
    static copyDir(env, src, dest) {
        // console.log('Copy folders to', { 'from': src, 'to': env.dest + dest });
        shell.cp('-R', src, env.dest + target);
    }
    static consolidateCode(env, codedir, outfile) {
        // console.log('Create code-base directory at', env.dest);
        shell.mkdir(env.dest + codedir);
        shell.tree(env.src + codedir, function (err, res) {
            if (err) {
                console.log('Error', err);
            } else {
                // console.log('Consolidate code-base files into single file');
                shell.cat(res).to(env.dest + codedir + outfile);
            }
        });
    }
    static replaceText(env, file, oldtext, newtext) {
        // console.log('Replace text in', file);
        shell.sed('-i', oldtext, newtext, env.dest + file);
    }
    static renameDir(env, oldname, newname) {
        // console.log('Rename directory', { 'from': oldname, 'to': newname });
        shell.mv(env.dest + oldname, env.dest + newname);
    }
}

module.exports = Actions;