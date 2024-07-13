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
exports.default = handler;
require("reflect-metadata");
const ormconfig_1 = require("@/database/ormconfig");
const user_entity_1 = require("@/database/entity/user.entity");
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Initializing DataSource...");
        if (!ormconfig_1.AppDataSource.isInitialized) {
            yield ormconfig_1.AppDataSource.initialize();
        }
        console.log("DataSource initialized:", ormconfig_1.AppDataSource.isInitialized);
        console.log("Loaded entities:", ormconfig_1.AppDataSource.entityMetadatas.map(entity => entity.name));
        const userRepository = ormconfig_1.AppDataSource.getRepository(user_entity_1.User);
        console.log("User Repository initialized");
        switch (req.method) {
            case 'GET':
                const users = yield userRepository.find();
                console.log("Fetched users:", users);
                res.status(200).json(users);
                break;
            case 'POST':
                const user = userRepository.create(req.body);
                const result = yield userRepository.save(user);
                console.log("Created user:", result);
                res.status(201).json(result);
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
}
