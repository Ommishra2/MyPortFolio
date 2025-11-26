"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { portfolioData } from '@/lib/portfolio-data';
import { Card } from './ui/card';
import { SkillIcon } from './skill-icon';

const chartData = portfolioData.skills;

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
};

const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x - 50},${y - 12})`}>
      <foreignObject x={0} y={0} width="40" height="40">
        <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SkillIcon skillName={payload.value} className="h-6 w-6" />
        </div>
      </foreignObject>
    </g>
  );
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
              tick={<CustomTick />}
              width={60}
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
