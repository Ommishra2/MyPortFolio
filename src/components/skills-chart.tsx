"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import type { Skills } from '@/lib/portfolio-data';

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
};

interface SkillsChartProps {
  data: Skills;
}

export function SkillsChart({ data }: SkillsChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            left: 10,
            right: 10,
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border) / 0.5)" />
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
            width={180}
          />
          <Tooltip
            cursor={{ fill: 'hsl(var(--accent))', opacity: 0.1 }}
            content={<ChartTooltipContent 
              formatter={(value) => `${value}%`}
              indicator='dot'
            />}
          />
          <Bar dataKey="proficiency" layout="vertical" radius={[0, 4, 4, 0]} fill="var(--color-proficiency)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
