"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _UserRepository = _interopRequireDefault(require("../repositories/UserRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateSessionService {
  constructor() {
    this.userRepository = void 0;
    this.userRepository = new _UserRepository.default();
  }

  async execute({
    email,
    password
  }) {
    const user = await this.userRepository.findByEmal(email);

    if (!user) {
      throw new Error('Sorry email/password incorrect');
    }

    const passwordIsValid = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordIsValid) {
      throw new Error('Sorry email/password incorrect');
    }

    return user;
  }

}

var _default = CreateSessionService;
exports.default = _default;