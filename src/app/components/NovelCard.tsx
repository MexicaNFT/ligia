import Image from "next/image";

interface NovelCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function NovelCard({
  imageSrc,
  title,
  description,
}: NovelCardProps) {
  return (
    <div className="w-full max-w-[474px] h-[1181px] bg-gradient-to-b from-[#7B7DCD] to-[#B987C4] rounded-xl p-6 flex flex-col items-center shadow-lg">
      {/* Image Container */}
      <div className="w-[200] h-[450px] flex justify-center items-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-fit rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="mt-6 text-white text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p
          className="text-sm mt-3 leading-relaxed text-left "
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
