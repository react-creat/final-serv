'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _post = require('./models/post');

var _post2 = _interopRequireDefault(_post);

var _PostControler = require('./Controler/PostControler');

var _PostControler2 = _interopRequireDefault(_PostControler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();

app.use(cors());

var port = 8080;

var Post = new _PostControler2.default();

_mongoose2.default.connect('mongodb://127.0.0.1:27017/blogReact', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', Post.create);

app.get('/posts', Post.index);

app.get('/posts/:id', Post.read);

app.delete('/posts/:id', Post.delete);

app.put('/posts/:id', Post.update);

app.listen(port, function () {
  console.log('Server listening at ' + port);
});