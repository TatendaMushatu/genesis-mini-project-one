"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedinIn,
  faWhatsapp,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Phone } from "@carbon/icons-react";

import { useParams } from "next/navigation";

import EnquiryForm from "../../components/EnquiryForm";

import Image from "next/image";
import { useEffect, useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function ListingDetail() {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  const getListing = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://fsboafrica.com/api/properties/details/${id}`
      );
      const json = await response.json();
      const { data } = json;
      setData(data);
      setImages(data.images);
      setCurrentImage(data.images[0].filePath);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListing(id);
  }, [id]);

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-4 gap-6 py-6">
        <div className="flex flex-row flex-wrap justify-between items-center col-span-4 gap-6 py-6">
          <div>
            <h1 className="font-bold text-xl">{data?.title}</h1>
            <small>{data?.address}</small>
          </div>
          <div className="flex flex-row items-center gap-6">
            <span>${data?.price}/mo</span>
            <div className="flex flex-row gap-2 text-white">
              <div className="icon-link bg-fbBlue">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </div>
              <div className="icon-link bg-waGreen">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </div>
              <div className="icon-link bg-inBlue">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </div>
              <div className="icon-link bg-black">
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </div>
              <div className="icon-link bg-mailGray">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-2 xl:col-span-3">
          <Image
            src={currentImage}
            width={400}
            height={300}
            sizes="100%"
            style={
              {width: "100%",
              objectFit: "cover"
              }
            }
            alt="Image of the property"
            className="rounded-t-md"
          />

          <div className="bg-gray-dark py-8 px-4">
            <Swiper
              spaceBetween={0}
              className="mx-auto"
              slidesPerView={4}
            >
              {images?.map((image) => (
                <SwiperSlide key={image}>
                  <Image
                    src={image.filePath}
                    width={200}
                    height={110}
                    alt="Image of the property"
                    onClick={() => setCurrentImage(image.filePath)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="bg-white py-6 px-4 border-2 border-default mt-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Description</h2>
            <p>{data?.description}</p>
            <hr className="border-default" />
            <h2 className="text-lg font-semibold mb-4 mt-4">
              Property Details
            </h2>
            <div className="flex flex-wrap flex-row gap-12">
              <ul>
                <li>
                  <span className="font-semibold">Property ID:</span> HZ27
                </li>
                <li>
                  <span className="font-semibold">Property Size:</span>{" "}
                  {data?.propertySize}
                </li>
                <li>
                  <span className="font-semibold">Property ID:</span> HZ27
                </li>
                <li>
                  <span className="font-semibold">Property Size:</span>{" "}
                  {data?.propertySize}
                </li>
              </ul>

              <ul>
                <li>
                  <span className="font-semibold">Property Type:</span>{" "}
                  {data?.type}
                </li>
                <li>
                  <span className="font-semibold">Year Built:</span>{" "}
                  {data?.yearBuilt}
                </li>
                <li>
                  <span className="font-semibold">Property Type:</span>{" "}
                  {data?.type}
                </li>
                <li>
                  <span className="font-semibold">Year Built:</span>{" "}
                  {data?.yearBuilt}
                </li>
              </ul>

              <ul>
                <li>
                  <span className="font-semibold">Property Status:</span> For{" "}
                  {data?.status}
                </li>
                <li>
                  <span className="font-semibold">Property Price:</span> $
                  {data?.price}
                </li>
                <li>
                  <span className="font-semibold">Property Status:</span> For{" "}
                  {data?.status}
                </li>
                <li>
                  <span className="font-semibold">Property Price:</span> $
                  {data?.price}
                </li>
              </ul>
            </div>

            <hr className="border-default mt-4" />
            <h2 className="text-lg font-semibold mb-4 mt-4">
              Property Features
            </h2>
          </div>
        </div>

        <div className="bg-white border-2 border-default rounded-xl p-4 flex flex-col gap-4 col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-1">
          <Image
            src="/images/housing-investment.png"
            width={250}
            height={166}
            alt="Picture of the author"
            className="mx-auto"
          />

          <h2 className="text-lg font-semibold text-center">
            Housing Investment
          </h2>
          <button className="border-2 border-orange rounded-xl text-orange py-2 px-4 w-full block">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Whatsapp Agent
          </button>
          <button className="border-2 border-orange rounded-xl text-orange py-2 px-4 w-full block">
            <Phone size={20} className="inline-block mr-2" />
            Call Agent
          </button>
          <EnquiryForm id={data?.id} />
        </div>
      </div>
    </main>
  );
}

export default ListingDetail;
