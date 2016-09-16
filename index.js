#!/usr/bin/env node
var program = require('commander');

program= require('./commands/create/create')(program);
program= require('./commands/model/model')(program);
program= require('./commands/controller/controller')(program);


program.parse(process.argv);