import Image from "next/image";

function SellingPoint({data}){
    const {title, body, cta, src} = data;
    return (
        <div className="rounded-xl bg-white">
            <Image
                  src={src}
                  width={250}
                  height={250}
                  alt="Illustration"
                  className="rounded-t-xl mx-auto"/>
            <div className="px-2 py-4">
                <h2 className="text-lg text-center font-semibold">{title}</h2>
                <p className="my-4">{body}</p>
                <button className="border-2 border-orange text-orange rounded-md px-4 py-2 block text-sm w-full">{cta}</button>
            </div>
        </div>
    );
}

export default SellingPoint;