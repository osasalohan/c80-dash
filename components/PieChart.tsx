import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

export default function CustomPieChart({
  value,
  max,
}: {
  value: number;
  max: number;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          data={[
            { name: "Filled", value },
            { name: "Empty", value: max - value },
          ]}
          innerRadius={50}
          outerRadius={80}
          startAngle={180}
          endAngle={0}
          paddingAngle={0}
          stroke="none"
        >
          <Cell fill="#A9DFD8" />
          <Cell fill="#2B2B36" />
          <Label
            value={`${(value / max) * 100}%`}
            position="centerBottom"
            style={{
              fontSize: "25px",
              fill: "#FFFFFF",
              fontWeight: "bold",
              lineHeight: "30.26px",
              textAnchor: "middle",
              dominantBaseline: "middle",
            }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
