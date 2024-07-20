import React from "react";
import PropertyInfo from "./PropertyCardDetail";
import DetailFooter from "./PropertyDetailFooter";
import CardImage from "./CardImage";
import cn from "classnames";

function Card({data, insertRuler=true, isOrange, isGrid=true, detailed=true}){
    return (
        <div className={cn("grid grid-cols-4 rounded-xl bg-white flex gap-6 shadow-lg border-2 border-default", {
        })}>
            <div className={cn("", {
                "col-span-4": isGrid,
                "col-span-4 lg:col-span-2 min-h-100": !isGrid
            })}>
                <CardImage data={data} isGrid={isGrid} detailed={detailed}/>
            </div>

            <div className={cn("", {
                "col-span-4": isGrid,
                "col-span-4 lg:col-span-2": !isGrid,
        })}>
                <div className="px-2 py-4">
                <PropertyInfo data={data} isOrange={isOrange}/>
                </div>
                {
                    insertRuler?
                    (
                        <hr className="border-default my-2" />
                    )
                    :
                    <></>
                }
                <DetailFooter id={data.id}/>
            </div>
        </div>
    );
}

export default Card;