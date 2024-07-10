"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const BitcoinPriceChart = ({ prices }) => {
    const formattedData = prices.map(price => ({
        date: new Date(price.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' }),
        price: price.price
    }));
    return (<recharts_1.ResponsiveContainer width="100%" height={400}>
      <recharts_1.LineChart data={formattedData}>
        <recharts_1.CartesianGrid strokeDasharray="3 3"/>
        <recharts_1.XAxis dataKey="date"/>
        <recharts_1.YAxis />
        <recharts_1.Tooltip />
        <recharts_1.Line type="monotone" dataKey="price" stroke="#8884d8"/>
      </recharts_1.LineChart>
    </recharts_1.ResponsiveContainer>);
};
exports.default = BitcoinPriceChart;
