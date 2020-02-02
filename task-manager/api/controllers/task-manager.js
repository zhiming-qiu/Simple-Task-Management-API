'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  get: get,
  put: put,
  del: del,
  start: start,
  close: close,
  stop: stop
};

var _taskVault = [
  {'task_id': 'a', 'task_description': 'Task A', 'status': 'open'}
];

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function get(req, res) {
  res.json(_taskVault);
}

function put(req, res) {
  _taskVault.push(req.body);
  res.json(_taskVault);
}

function del(req, res) {
  var toDelete = -1;
  for (var i = 0; i < _taskVault.length; i++) {
    if (_taskVault[i].task_id === req.body.task_id) {
      toDelete = i;
      break;
    }
  }
  if (toDelete != -1) {
    _taskVault.splice(i, 1);
  }
  res.json(_taskVault);
}

function start(req, res) {
  for (var i = 0; i < _taskVault.length; i++) {
    if (_taskVault[i].task_id === req.body.task_id) {
      _taskVault[i].status = "in progress";
      break;
    }
  }
  res.json(_taskVault);
}

function close(req, res) {
  for (var i = 0; i < _taskVault.length; i++) {
    if (_taskVault[i].task_id === req.body.task_id) {
      _taskVault[i].status = "done";
      break;
    }
  }
  res.json(_taskVault);
}

function stop(req, res) {
  for (var i = 0; i < _taskVault.length; i++) {
    if (_taskVault[i].task_id === req.body.task_id) {
      _taskVault[i].status = "open";
      break;
    }
  }
  res.json(_taskVault);
}

