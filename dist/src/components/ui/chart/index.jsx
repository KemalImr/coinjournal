"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartTooltipContent = exports.ChartTooltip = exports.ChartContainer = void 0;
const react_1 = __importDefault(require("react"));
const ChartContainer = ({ config, children }) => (<div className="relative">
    {children}
  </div>);
exports.ChartContainer = ChartContainer;
const ChartTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (<div className="bg-white dark:bg-gray-800 shadow rounded p-2">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>);
    }
    return null;
};
exports.ChartTooltip = ChartTooltip;
const ChartTooltipContent = ({ indicator }) => (<div>
    <span className={`indicator ${indicator}`}/>
  </div>);
exports.ChartTooltipContent = ChartTooltipContent;
