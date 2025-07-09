import { getStrapiMedia } from "@/lib/api";
import clsx from "clsx";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  isWide: boolean;
  icon: Media | null;
  image: Media | null;
}

export interface Media {
  url: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  isWide,
  icon,
  image,
}) => {
  return (
    <div
      className={clsx(
        "card",
        isWide
          ? "w-(--card-wide-w) max-xl:w-(--card-nowide-w)"
          : "w-(--card-nowide-w)"
      )}
    >
      <div className="pt-8 pl-8 pb-8 flex flex-col justify-between h-full">
        <Image
          src={getStrapiMedia(icon!.url)}
          alt={icon!.alt}
          width="48"
          height="48"
        />

        <div>
          <h3
            className={clsx(
              isWide
                ? "card-wide-title-text max-xl:text-[120px]!"
                : "card-title-text"
            )}
          >
            {title}
          </h3>
          <p className="card-description-text">{description}</p>
        </div>
      </div>
      {image?.url && (
        <img
          src={getStrapiMedia(image.url)}
          className="-ml-21.5 max-xl:hidden"
        />
      )}
    </div>
  );
};

export default Card;
