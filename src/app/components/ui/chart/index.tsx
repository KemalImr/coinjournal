import React from 'react';
import { TooltipProps } from 'recharts';

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

export const ChartContainer = ({ config, children }: { config: ChartConfig; children: React.ReactNode }) => (
  <div className="relative">
    {children}
  </div>
);

export const ChartTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded p-2">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const ChartTooltipContent = ({ indicator }: { indicator: string }) => (
  <div>
    <span className={`indicator ${indicator}`} />
  </div>
);
