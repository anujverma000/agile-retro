/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Agileboard = require('./agileboard.model');

exports.register = function(socket) {
  Agileboard.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Agileboard.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('agileboard:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('agileboard:remove', doc);
}