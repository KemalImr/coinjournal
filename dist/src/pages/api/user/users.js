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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const prisma_1 = __importDefault(require("../../../lib/prisma")); // Korrigiere den Importpfad, falls nötig
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (req.method) {
            case 'GET':
                const users = yield prisma_1.default.user.findMany();
                console.log("Fetched users:", users);
                res.status(200).json(users);
                break;
            case 'POST':
                const { name, email } = req.body;
                const user = yield prisma_1.default.user.create({
                    data: { name, email },
                });
                console.log("Created user:", user);
                res.status(201).json(user);
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
}
