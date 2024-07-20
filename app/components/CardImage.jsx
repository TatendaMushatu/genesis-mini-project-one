import cn from "classnames";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function CardImage({ data, detailed, isGrid}) {
  const { images } = data;
  const imageURLS = images.map((image) => image["filePath"]);

  if (detailed) {
    return (
        <div className={cn("relative", {
            "w-[100%]": isGrid,
            "h-[100%]": !isGrid,
          })}>
            <Swiper slidesPerView={1} style={{width: "100%", height: "100%"}}
            modules={[Navigation]}
                        navigation>
                {imageURLS.map((url) => (
                <SwiperSlide key={url} style={{height: "auto !important"}}>
                    <Image
                    src={url}
                    width={400}
                    height={300}
                    sizes="100%"
                    style={{
                        objectFit: "cover"
                    }}
                    alt="Image of the property"
                    className={cn("w-[100%] h-[100%]", {
                        "rounded-t-xl": isGrid,
                        "rounded-l-xl": !isGrid,
                    })}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute inset-0 z-10 grid grid-rows-3 gap-2 p-2 passthrough">
                <div className="flex flex-row gap-2">
                    <span className="bg-gray text-white self-center text-center text-sm rounded py-1 px-2">Featured</span>
                    <span className="text-white bg-orange self-center text-center text-sm rounded py-1 px-2">Sale</span>
                </div>
                <div className="flex flex-row justify-between gap-2 row-start-3 self-end">
                    <div>
                        <span className="text-white font-semibold text-lg">${data?.price}</span>
                    </div>
                    <div className="text-white flex flex-row gap-2">
                        <button className="semi-transparent rounded-lg icon-link">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} size="md"/>
                        </button>
                        <button className="semi-transparent rounded-lg icon-link">
                            <FontAwesomeIcon icon={faHeart} size="md"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  return (
    <Image
      src={imageURLS[0]}
      width={400}
      height={300}
      sizes="100%"
      style={{
        objectFit: "cover",
        
      }}
      alt="Image of the property"
      className={cn("h-[100%] w-[100%]", {
        "rounded-t-xl": isGrid,
        "rounded-l-xl": !isGrid
      })}
    />
  );
}

export default CardImage;
