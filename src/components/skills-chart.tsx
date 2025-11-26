"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
      <ChartContainer config={chartConfig} className="min-h-[400px] w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{
              left: 10,
              right: 10,
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              width={110}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2 }}
              content={<ChartTooltipContent 
                formatter={(value, name) => [`${value}%`, name]}
                indicator='dot'
              />}
            />
            <Bar dataKey="proficiency" layout="vertical" radius={[0, 4, 4, 0]} fill="var(--color-proficiency)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
}
