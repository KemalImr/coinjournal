"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const recharts_1 = require("recharts");
const card_1 = require("./ui/card");
const chart_1 = require("./ui/chart");
const chartConfig = {
    price: {
        label: "Price",
        color: "hsl(var(--chart-1))",
    },
};
const ChartComponent = ({ prices }) => {
    const formattedData = prices.map(price => ({
        date: new Date(price.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' }),
        price: price.price,
    }));
    return (<card_1.Card>
      <card_1.CardHeader>
        <card_1.CardTitle>Area Chart - Bitcoin Prices</card_1.CardTitle>
        <card_1.CardDescription>
          Showing Bitcoin prices for the last 12 months
        </card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent>
        <chart_1.ChartContainer config={chartConfig}>
          <recharts_1.ResponsiveContainer width="100%" height={400}>
            <recharts_1.AreaChart data={formattedData} margin={{
            left: 12,
            right: 12,
        }}>
              <recharts_1.CartesianGrid vertical={false}/>
              <recharts_1.XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)}/>
              <recharts_1.YAxis />
              <recharts_1.Tooltip cursor={false} content={<chart_1.ChartTooltipContent indicator="dot"/>}/>
              <recharts_1.Area dataKey="price" type="natural" fill="hsl(var(--chart-1))" fillOpacity={0.4} stroke="hsl(var(--chart-1))"/>
            </recharts_1.AreaChart>
          </recharts_1.ResponsiveContainer>
        </chart_1.ChartContainer>
      </card_1.CardContent>
      <card_1.CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <lucide_react_1.TrendingUp className="h-4 w-4"/>
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              July 2023 - July 2024
            </div>
          </div>
        </div>
      </card_1.CardFooter>
    </card_1.Card>);
};
exports.default = ChartComponent;
