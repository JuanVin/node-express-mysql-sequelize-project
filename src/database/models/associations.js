const Assistant = require('./Users');
const Unit = require('./Units');
const File = require('./Files');
const Observation = require('./Observations');

Unit.hasMany(File);
Assistant.hasMany(File);
Assistant.hasMany(Observation);
File.hasMany(Observation);


