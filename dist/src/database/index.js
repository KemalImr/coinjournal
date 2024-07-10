"use strict";
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
exports.connect = void 0;
const ormconfig_1 = require("./ormconfig");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!ormconfig_1.AppDataSource.isInitialized) {
        yield ormconfig_1.AppDataSource.initialize();
    }
    return ormconfig_1.AppDataSource;
});
exports.connect = connect;
