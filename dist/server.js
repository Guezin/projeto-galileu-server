"use strict";

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireWildcard(require("express"));

require("express-async-errors");

var _cors = _interopRequireDefault(require("cors"));

require("./database/connectionDB");

var _index = _interopRequireDefault(require("./routes/index.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const server = (0, _express.default)();
server.use((0, _express.json)());
server.use((0, _cors.default)());
server.use(_index.default);
server.use((error, request, response, _) => {
  if (error instanceof Error) {
    return response.status(401).json({
      error: error.message
    });
  }

  return response.status(500).json({
    error: 'Internal Server Error'
  });
});
server.listen(process.env.PORT || 1995, () => console.log('Server is running on port 1995'));