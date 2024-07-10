"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const isProduction = process.env.NODE_ENV === 'production';
console.log("Environment:", process.env.NODE_ENV);
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'kemal',
    password: 'password',
    database: 'coinjournal',
    synchronize: true,
    logging: false,
    entities: [
        path_1.default.join(__dirname, isProduction ? 'dist/database/entity/**/*.js' : 'src/database/entity/**/*.ts'),
        path_1.default.join(__dirname, 'src/database/entity/**/*.js')
    ],
    migrations: [
        path_1.default.join(__dirname, isProduction ? 'dist/database/migration/**/*.js' : 'src/database/migration/**/*.ts'),
        path_1.default.join(__dirname, 'src/database/migration/**/*.js')
    ],
    subscribers: [
        path_1.default.join(__dirname, isProduction ? 'dist/database/subscriber/**/*.js' : 'src/database/subscriber/**/*.ts'),
        path_1.default.join(__dirname, 'src/database/subscriber/**/*.js')
    ],
};
console.log("TypeORM Config:", config);
exports.AppDataSource = new typeorm_1.DataSource(config);
exports.default = config;
