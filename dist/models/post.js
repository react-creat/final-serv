'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  author: String,
  bgcpost: String,
  imagepost: String
}, {
  timestamps: true
});

var Post = mongoose.model('Post', PostSchema);

exports.default = Post;