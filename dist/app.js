"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const controller_1 = require("./controllers/controller");
const app = express_1.default();
const port = 3000;
app.use(body_parser_1.default.json({ type: 'application/json' })); // TODO: NO ANDA ESTO
app.use('/', controller_1.router);
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map