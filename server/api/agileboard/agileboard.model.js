'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgileboardSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Agileboard', AgileboardSchema);