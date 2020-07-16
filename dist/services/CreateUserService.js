"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _UserRepository = _interopRequireDefault(require("../repositories/UserRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  constructor() {
    this.userRepository = void 0;
    this.userRepository = new _UserRepository.default();
  }

  async execute({
    name,
    email,
    password
  }) {
    const userExists = await this.userRepository.findByEmal(email);

    if (userExists) {
      throw new Error('Email already in use!');
    }

    const passwordHash = await (0, _bcryptjs.hash)(password, 8);
    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash
    });
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;