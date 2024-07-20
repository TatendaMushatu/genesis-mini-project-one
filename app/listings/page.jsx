"use client";

import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faList } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import cn from "classnames";

function Listings() {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  
  const searchParams = useSearchParams();

  let category = searchParams.get("category");
  category = category??"for-sale";


  const getListings = async(category)=>{
    // category can be "for-sale" or "to-rent"
    setIsLoading(true);
    if (category){
      const response = await fetch(
        `https://fsboafrica.com/api/properties/${category}?search=${category}`
      );
      const json = await response.json();
      setData(json.data);
    }
    setIsLoading(false);
  }
  
  
  useEffect(() => {
    console.log("fetching");
    getListings(category);
  }, [category]);

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-4 items-start gap-4">
        <div className="border-2 border-default p-2 bg-white rounded-md flex flex-col gap-2 col-span-4 md:col-span-2 lg:col-span-1">
          <select
            name=""
            id=""
            className="bg-white rounded-md p-2 border-2 border-default"
          >
            <option>Commercial</option>
            <option>Educational</option>
            <option>Leisure/Hospitality</option>
          </select>
          <input
            type="text"
            name="location"
            id="location"
            className="bg-white rounded-md p-2 border-2 border-default"
            placeholder="Surburb, City, Provice, Country"
          />

          <div className="flex gap-2">
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              className="bg-white rounded-md p-2 border-2 border-default w-1/2"
              placeholder="Min Price"
            />
            <input
              type="number"
              name="maxPrice"
              id="maxPrice"
              className="bg-white rounded-md p-2 border-2 border-default w-1/2"
              placeholder="Max Price"
            />
          </div>

          <div className="flex gap-2">
            <input
              type="number"
              name="minBeds"
              id="minBeds"
              className="bg-white rounded-md p-2 border-2 border-default w-1/2"
              placeholder="Min Beds"
            />
            <input
              type="number"
              name="maxBeds"
              id="maxBeds"
              className="bg-white rounded-md p-2 border-2 border-default w-1/2"
              placeholder="Max Beds"
            />
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-3">
          <div className="flex flex-row justify-between items-center gap-6 border-default border-2 rounded-lg p-4">
            <span className="font-semibold">Sort by:</span>
            <span className="text-gray">{data?.length} Search Results</span>
            <div className="flex flex-row gap-2">
              <button className="icon-link border-orange border-2 rounded-lg" onClick={()=>setIsGrid(false)}>
                <FontAwesomeIcon
                  icon={faList}
                  size="lg"
                  className="text-orange"
                />
              </button>
              <button className="icon-link border-orange border-2 rounded-lg" onClick={()=>setIsGrid(true)}>
                <FontAwesomeIcon
                  icon={faGripHorizontal}
                  size="lg"
                  className="text-orange"
                />
              </button>
            </div>
          </div>
        
          <div className={cn("grid gap-6 mt-8", {
            "card-grid": isGrid,
            "flex-col": !isGrid
          })}>
            {
              isLoading?
              <h2>Loading...</h2>
              :
              data?.map(d => {
                return <Card data={d} isOrange={false} isGrid={isGrid} key={d.id}/>
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Listings;
