import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {Phone} from "@carbon/icons-react";

function PropertyDetailFooter({id}){
    const link = `/listings/${id}`;
    
    return(
        <div>
            <div className="flex flex-row flex-wrap justify-between gap-6 items-center px-2 py-4 text-orange">
                <div className="flex flex-row gap-2">
                <div className="border-2 border-orange rounded-xl icon-link">
                    <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
                </div>
                <div className="border-2 border-orange rounded-xl icon-link">
                    <Phone size={20} className="fill-orange"/>
                </div>
                <div className="border-2 border-orange rounded-xl icon-link">
                    <span className="font-black text-lg">@</span>
                </div>
            </div>
            
            <div>
                <Link className="border-2 border-orange rounded-xl text-orange px-3 py-2" href={link}>Details</Link>
            </div>
            </div>
        </div>
    );
}

export default PropertyDetailFooter;