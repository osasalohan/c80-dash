import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  {
    name: "Leanne",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Ervin",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Clementine",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Patricia",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Chelsey",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Dennis",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Curtis",
    uv: 3490,
    pv: 4300,
  },
];

export default function CustomAreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={sampleData}
        margin={{
          top: 10,
          right: 30,
          left: -10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A9DFD8" stopOpacity={1} />
            <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: "#FFFFFF", fontWeight: "semi-bold" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: "#FFFFFF", fontWeight: "semi-bold" }}
        />
        <Area
          type="linear"
          dataKey="uv"
          stroke="#A9DFD8"
          fill="url(#colorUv)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
