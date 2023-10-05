"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const Services = __importStar(require("../services/services"));
app_1.router.get('/', (req, res) => {
    res.send({
        message: 'OK'
    });
});
const format = [
    { tag: "PTemp", type: "int", len: 12 },
    { tag: "BattVolt.value", type: "int", len: 12 },
    { tag: "WaterLevel", type: "int", len: 8 },
];
app_1.router.post('/encode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('en encode');
    const data = { pTemp: 268, value: 224, waterLevel: 115 };
    const response = yield Services.encode(data, format);
    console.log(response);
    res.send({});
}));
app_1.router.post('/decode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('en decode');
    const buffer = new Buffer(10);
    console.log(buffer);
    const bufferString = buffer.toString('hex');
    console.log(bufferString);
    const response = yield Services.decode(buffer, format);
    console.log(response);
    res.send({});
}));
//# sourceMappingURL=controller.js.map