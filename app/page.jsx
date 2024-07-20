"use client"

import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import { useState, useEffect } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import heroBackground from "../public/images/hero-background.jpg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import Card from "./components/Card";
import SellingPoint from "./components/SellingPoint";

const sellingBody = "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.";
  
  const sellingPointsData = [
    {
      title: "Buy a Property",
      body: sellingBody,
      src: "/images/buy-illustration.png",
      cta: "Browse Properties for Sale"
    },
    {
      title: "Sell a Property",
      body: sellingBody,
      src: "/images/sell-illustration.png",
      cta: "See Your Options"
    },
    {
      title: "Rent a Property",
      body: sellingBody,
      src: "/images/rent-illustration.png",
      cta: "Find Rentals"
    },
  ];

function Home(){
  const [data, setData] = useState([]);
  
  const  getListings = async()=>{
    const response = await fetch("https://fsboafrica.com/api/properties/latest");
    const json = await response.json();
    setData(json.data);
  }
  useEffect(()=>{
    getListings();
  }, []);

  const sellingPoints = sellingPointsData.map(
    sp => (<SellingPoint data={sp} key={sp.title}/>)
  );

  const [selectedCategory, setSelectedCategory] = useState("for-sale");

  return (
    <main>

      <div className="flex flex-col justify-center items-center py-[100px] relative hero">
        <div className="absolute w-full h-full -z-10">
          <Image
            src={heroBackground}
            alt="Interior of a house"
            className="w-full"
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
          />
        </div>
        <div>
          <div className="flex flex-row mb-4 bg-white rounded-full self-start p-2 w-max">
            <button className={cn("rounded-full py-2 px-4", {
              "bg-red": selectedCategory === "for-sale",
              "text-white": selectedCategory === "for-sale",
            })} onClick={()=> setSelectedCategory("for-sale")}>For Sale</button>
            <button className={cn("rounded-full py-2 px-4", {
              "bg-red": selectedCategory === "to-rent",
              "text-white": selectedCategory === "to-rent",
            })} onClick={()=> setSelectedCategory("to-rent")}>To Rent</button>
          </div>
          <div className="flex flex-row py-8 px-6 bg-white gap-4 rounded-xl">
            <select name="propTypes" id="propTypes" className="p-2 rounded-md">
              <option value="commercial">Commercial</option>
              <option value="educational">Educationals</option>
              <option value="leisure">Leisure/Hospitality</option>
            </select>

            <input type="search" name="search" id="search" placeholder="Surburb, City, Province, Country" className="px-2 py-2 rounded border-2 border-default"/>
            <Link className="bg-red px-4 py-2 rounded-md text-white" href={`/listings?category=${selectedCategory}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
              <span className="text-sm ml-2">
                SEARCH
              </span>
            </Link>
          </div>
        </div>
      </div>

      

        <section id="forSale" className="container mx-auto py-8">
          <div className="mb-6">
            <h2 className="font-regular text-2xl">Properties For Sale</h2>
          </div>

          
            <Swiper pagination={true} modules={[Pagination]} slidesPerView={3} spaceBetween={50} className="py-8">
              {
                data?
                  data.latestPropertiesForSale?.map(property =>{
                    return  (
                      <SwiperSlide className="flex justify-center items-center" key={property.id}>
                        <Card data={property} key={property.id} detailed={false}/>
                      </SwiperSlide>
                    );
                  }): <></>
              }
            </Swiper>
          
        </section>
      
      
      <div className="bg-white">
        <section id="forRent" className="container mx-auto py-8">
          <div className="mb-6">
            <h2 className="font-regular text-2xl">Properties For Rent</h2>
          </div>

          <div className="flex flex-row flex-wrap gap-8">
            <Swiper pagination={true} modules={[Pagination]} slidesPerView={3} spaceBetween={50} className="py-8">
              {
                data?
                  data.latestPropertiesToRent?.map(property =>{
                    return  (
                      <SwiperSlide className="flex justify-center items-center" key={property.id}>
                        <Card data={property} key={property.id} detailed={false}/>
                      </SwiperSlide>
                    );
                  }): <></>
              }
            </Swiper>
          </div>
        </section>
      </div>

      <section className="container mx-auto">
        <div className="flex flex-row gap-4">
          {sellingPoints}
        </div>

      </section>
    </main>
  );
}

export default Home;