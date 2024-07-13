"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const ChartComponent_1 = __importDefault(require("./ChartComponent"));
const BitcoinPrice = () => {
    const [prices, setPrices] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const fetchMonthlyPrices = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const startDate = new Date('2023-07-01').getTime() / 1000; // UNIX-Zeitstempel in Sekunden
                const endDate = new Date('2024-07-01').getTime() / 1000; // UNIX-Zeitstempel in Sekunden
                const response = yield axios_1.default.get('/api/kucoin', {
                    params: {
                        symbol: 'BTC-USDT',
                        startAt: startDate,
                        endAt: endDate
                    }
                });
                const formattedPrices = response.data.data.map((entry) => ({
                    date: new Date(entry[0] * 1000).toISOString().split('T')[0], // UNIX-Zeitstempel zu Datum
                    price: parseFloat(entry[2]) // Schlusskurs
                }));
                setPrices(formattedPrices.reverse());
            }
            catch (err) {
                console.error(err);
                setError(true);
            }
        });
        fetchMonthlyPrices();
    }, []);
    if (error) {
        return <div>Fehler beim Abrufen der historischen Bitcoin-Preise</div>;
    }
    return (<div>
      <ChartComponent_1.default prices={prices}/>
    </div>);
};
exports.default = BitcoinPrice;
