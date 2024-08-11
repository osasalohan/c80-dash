export default function ProgressBar({
  color,
  progress,
}: {
  color: string;
  progress: number;
}) {
  return (
    <div className="w-[246px] h-[3px] rounded-[3px] bg-[#2B2B36]">
      <div
        className={`h-full rounded-[3px] bg-[${color}]`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
