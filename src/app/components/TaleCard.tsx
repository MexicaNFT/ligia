import Image from "next/image";

interface TaleCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageRight?: boolean;
}

const TaleCard: React.FC<TaleCardProps> = ({
  imageSrc,
  title,
  description,
  imageRight,
}) => {
  return (
    <div className="w-full h-auto bg-white border-2 rounded-xl border-gradient p-4 flex flex-col md:flex-row items-center md:items-start shadow-md overflow-hidden">
      {!imageRight && (
        <div className="w-24 h-24 md:w-40 md:h-52 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex-1 px-4 text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      {imageRight && (
        <div className="w-24 h-24 md:w-40 md:h-52 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default TaleCard;
