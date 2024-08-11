import Image from "next/image";

export default function Card({
  image,
  summary,
  text,
}: {
  image: string;
  summary: number;
  text: string;
}) {
  return (
    <div className="bg-black rounded-[10px] w-[104px] h-[107px] rounded-[10px] pl-[14px] py-[11px]">
      <Image src={image} alt="posts" className="mb-3" width={26} height={26} />
      <h3 className="text-header mb-[5px]">{summary}</h3>
      <p className="text-small text-[#e8e8e8]">{text}</p>
    </div>
  );
}
