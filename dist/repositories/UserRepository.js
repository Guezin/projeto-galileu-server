"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.default);
  }

  async create({
    name,
    email,
    password
  }) {
    const user = this.ormRepository.create({
      name,
      email,
      password
    });
    await this.ormRepository.save(user);
    return user;
  }

  async findByEmal(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

}

var _default = UserRepository;
exports.default = _default;