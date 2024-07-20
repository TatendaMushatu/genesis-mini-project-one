import cn from "classnames";

function PropertyCardDetail(props){
    const {title, address, bedrooms, bathrooms, propertySize} = props.data;
    const {isOrange=false} = props;
    
    return (
        <div>
            <small className={cn('', isOrange && "text-orange")}>Property Type</small>
            
            <p className="text-lg font-semibold">{title}</p>
            <small className="text-gray">{address}</small>
            <p>Beds: {bedrooms} Baths: {bathrooms} {propertySize}</p>
        </div>
    );
}

export default PropertyCardDetail;