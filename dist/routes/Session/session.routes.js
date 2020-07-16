"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateSessionService = _interopRequireDefault(require("../../services/CreateSessionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.post('/', async (request, response) => {
  const {
    email,
    password
  } = request.body;
  const createSession = new _CreateSessionService.default();
  const user = await createSession.execute({
    email,
    password
  });
  return response.json(user);
});
var _default = routes;
exports.default = _default;