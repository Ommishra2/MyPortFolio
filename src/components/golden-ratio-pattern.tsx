import { cn } from "@/lib/utils";
import { useId } from "react";

export function GoldenRatioPattern({ className, ...props }: React.ComponentProps<"svg">) {
  const id = useId();
  const goldenRatio = 1.618;

  const generateFibonacciPath = (
    cx: number,
    cy: number,
    initialRadius: number,
    rotations: number
  ) => {
    let path = "";
    let r = initialRadius;
    let angle = 0;

    for (let i = 0; i < rotations; i++) {
      const x1 = cx + r * Math.cos(angle);
      const y1 = cy + r * Math.sin(angle);
      angle += Math.PI / 2;
      const x2 = cx + r * Math.cos(angle);
      const y2 = cy + r * Math.sin(angle);
      path += ` M ${x1},${y1} A ${r},${r} 0 0 1 ${x2},${y2}`;
      r *= goldenRatio;
    }
    return path;
  };

  const pathData = generateFibonacciPath(50, 50, 5, 8);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-none stroke-white/10",
        className
      )}
      {...props}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <path d={pathData} strokeWidth="0.2" />
    </svg>
  );
}
