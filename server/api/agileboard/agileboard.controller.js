'use strict';

var _ = require('lodash');
var Agileboard = require('./agileboard.model');

// Get list of agileboards
exports.index = function(req, res) {
  Agileboard.find(function (err, agileboards) {
    if(err) { return handleError(res, err); }
    return res.json(200, agileboards);
  });
};

// Get a single agileboard
exports.show = function(req, res) {
  Agileboard.findById(req.params.id, function (err, agileboard) {
    if(err) { return handleError(res, err); }
    if(!agileboard) { return res.send(404); }
    return res.json(agileboard);
  });
};

// Creates a new agileboard in the DB.
exports.create = function(req, res) {
  Agileboard.create(req.body, function(err, agileboard) {
    if(err) { return handleError(res, err); }
    return res.json(201, agileboard);
  });
};

// Updates an existing agileboard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Agileboard.findById(req.params.id, function (err, agileboard) {
    if (err) { return handleError(res, err); }
    if(!agileboard) { return res.send(404); }
    var updated = _.merge(agileboard, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, agileboard);
    });
  });
};

// Deletes a agileboard from the DB.
exports.destroy = function(req, res) {
  Agileboard.findById(req.params.id, function (err, agileboard) {
    if(err) { return handleError(res, err); }
    if(!agileboard) { return res.send(404); }
    agileboard.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}