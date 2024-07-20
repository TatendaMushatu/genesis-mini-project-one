"use client"
import {useForm} from "react-hook-form";
import {useState} from "react";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import {isValidPhoneNumber, formatPhoneNumberIntl} from "react-phone-number-input";
                                                                                                                                                                                                                                                                                                                                                    
function EnquiryForm({id}){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState("");
    const [submissionMessage, setMessage] = useState(null);

    const  handleData = (data)=>{
        const url = "https://fsboafrica.com/api/enquiries/create";
        setIsLoading(true);
        let {phoneNumber, listingId} = data;
        listingId = Number(listingId);
        phoneNumber = formatPhoneNumberIntl(phoneNumber);
        
        const dialingCode = phoneNumber.split(" ")[0];
        phoneNumber = phoneNumber.replace(dialingCode, "").replaceAll(" ", "");
        const ownedBy = "tatendamushatu98@gmail.com";
        
        const payload  = JSON.stringify({...data, listingId, dialingCode, phoneNumber, ownedBy});
        
         
        fetch(url, {
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        })
        .then(()=>{
            setMessage("We have received your enquiry and will contact you about it.");
        })
        .catch(()=>{
            setMessage("Oops. We failed to get your message. Please try again.");
        });   
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(handleData)} className="flex flex-col gap-8">
            {submissionMessage && <p className="bg-blue text-white p-4 font-sm rounded-md">{submissionMessage}</p>}
            <input type="hidden" defaultValue={id} {...register("listingId", {required: true})}/>
            
            <div className="w-full">
                <input type="text" {...register("firstName", {required: "Please provide your name"})} className="py-2 px-4 rounded-md border-2 border-default w-full" placeholder="First Name" />
                {errors.firstName && <p className="text-gray font-sm">{errors.firstName.message}</p>}
            </div>
            
            <div className="w-full">
                <input type="text" {...register("lastName", {required: "Please provide your surname"})} className="py-2 px-4 rounded-md border-2 border-default w-full" placeholder="Last Name" />
                {errors.lastName && <p className="text-gray font-sm">{errors.lastName.message}</p>}
            </div>
            
            <div className="w-full">
                <input type="email" {...register("email", {required: "We require a contact email"})} className="py-2 px-4 rounded-md border-2 border-default w-full" placeholder="Email" />
                {errors.email && <p className="text-gray font-sm">{errors.email.message}</p>}
            </div>

            <div className="w-full">
                {/* <PhoneInput 
                    placeholder="Phone Number"
                    value={phone}
                    defaultCountry="ZW"
                    withCountryCallingCode={true}
                    onChange={setPhone}/>                 */}
                <input type="tel" {...register("phoneNumber", {validate: value=>isValidPhoneNumber(value.replaceAll(' ', '')) || "Please provide a correct phone number e.g. +263 000 000"})} className="py-2 px-4 rounded-md border-2 border-default w-full" placeholder="Phone Number" />
                {errors.phoneNumber && <p className="text-gray font-sm">{errors.phoneNumber.message}</p>}
            </div>
            
            <div className="w-full">
                <textarea {...register("message", {required: "What do you need to know?"})} rows="10" className="py-2 px-4 rounded-md border-2 border-default w-full" placeholder="Message"></textarea>
                {errors.message && <p className="text-gray font-sm">{errors.message.message}</p>}
            </div>
            
            <button type="submit" className="rounded-full py-4 px-4 text-white bg-red">
                { isLoading?
                    "Sending Message..."
                    : "Send Messsage"
                }
            </button>
            <p className="text-gray-light">By sending enquiry messages, you agree to Sold.co.zw&apos;s <p className="text-red">Terms &amp; Conditions</p> </p>
        </form>
    );
};

export default EnquiryForm;