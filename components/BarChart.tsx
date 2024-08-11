import { BarChart, Bar, ResponsiveContainer, Legend } from "recharts";

const sampleData = [
  {
    post: 4000,
    comment: 2400,
  },
  {
    post: 3000,
    comment: 1398,
  },
  {
    post: 2000,
    comment: 9800,
  },
  {
    post: 2780,
    comment: 3908,
  },
  {
    post: 1890,
    comment: 4800,
  },
  {
    post: 2390,
    comment: 3800,
  },
  {
    post: 3490,
    comment: 4300,
  },
];

export default function CustomBarChart({
  data,
}: {
  data: { comment: number; post: number }[];
}) {
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex items-center justify-center gap-x-5 pt-2 border-0 border-t border-t-[0.5px] border-white border-opacity-[6%] mx-[-14px]">
        {payload!.map((entry: { color: string; value: string }, i: number) => (
          <>
            <div key={i} className="flex items-center">
              <div
                className="rounded-full"
                style={{
                  backgroundColor: entry.color,
                  width: 8,
                  height: 8,
                  marginRight: 11,
                }}
              ></div>
              <span className="text-small text-[#A0A0A0] capitalize">
                {entry.value}
              </span>
            </div>
            {i === 0 ? (
              <div className="h-[17px] w-[0.5px] bg-white bg-opacity-[18%]"></div>
            ) : null}
          </>
        ))}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={sampleData} // actual data looks ridiculous
        margin={{
          top: 20,
          bottom: 5,
        }}
      >
        <Legend content={renderLegend} verticalAlign="bottom" align="center" />
        <Bar
          dataKey="comment"
          stackId="a"
          fill="#A9DFD8"
          maxBarSize={13}
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="post"
          stackId="a"
          fill="#2B2B36"
          maxBarSize={13}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
