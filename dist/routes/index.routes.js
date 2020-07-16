"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _session = _interopRequireDefault(require("./Session/session.routes"));

var _user = _interopRequireDefault(require("./User/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/sessions', _session.default);
routes.use('/users', _user.default);
var _default = routes;
exports.default = _default;