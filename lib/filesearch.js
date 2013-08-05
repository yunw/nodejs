#! /usr/bin/env node
/*
 * filesearch
 * https://github.com/yunw/filesearchinNode
 *
 * Copyright (c) 2013 Irene Wang
 * Licensed under the MIT license.
 */

exports.awesome = function() {
  return 'awesome';
};

console.log(process.argv);

var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];

var exec = require('child_process').exec;
var child = exec('ls -a | grep ' + searchParam, function(err,stdout,stderr){
    if (err) throw err;
    console.log(stdout);
}); 

