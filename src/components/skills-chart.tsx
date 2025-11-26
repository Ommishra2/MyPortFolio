"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { portfolioData } from '@/lib/portfolio-data';
import { Card } from './ui/card';

const chartData = portfolioData.skills;

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
};

export function SkillsChart() {
  return (
    <Card className="p-4 shadow-lg">
      <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
        <BarChart
          data={chartData}
          layout="vertical"
          width={500}
          height={400}
          margin={{
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
            width={100}
          />
          <Tooltip
            cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2 }}
            content={<ChartTooltipContent 
              formatter={(value) => `${value}%`}
              indicator='dot'
            />}
          />
          <Bar dataKey="proficiency" layout="vertical" radius={[0, 4, 4, 0]} fill="var(--color-proficiency)" />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}
