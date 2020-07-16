"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateUserService = _interopRequireDefault(require("../../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.post('/', async (request, response) => {
  const {
    name,
    email,
    password
  } = request.body;
  const createSession = new _CreateUserService.default();
  const user = await createSession.execute({
    name,
    email,
    password
  });
  return response.json(user);
});
var _default = routes;
exports.default = _default;