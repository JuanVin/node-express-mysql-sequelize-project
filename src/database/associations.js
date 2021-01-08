const Assistant = require('./models/Users');
const Unit = require('./models/Units');
const File = require('./models/Files');
const Observation = require('./models/Observations');

Unit.hasMany(File);
Assistant.hasMany(File);
Assistant.hasMany(Observation);
File.hasMany(Observation);


