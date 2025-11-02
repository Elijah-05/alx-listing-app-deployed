import { PropertyProps } from "@/interfaces/index";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { FaRegHeart, FaShareAlt, FaStar } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";
import PropertyDescription from "./PropertyDescription";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">{property.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-yellow-500">
            <FaStar className="mr-1 inline mb-1.5" /> 
            {property.rating} stars</span>
            <span> <IoMdPin className="inline mb-1" /> {property.address.city}, {property.address.country}</span>
          </div>
        </div>
       <div className="flex items-start space-x-4">
          {/* Save Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-all">
            <FaRegHeart className="text-gray-600" />
            <span className="text-gray-600">Save</span>
          </button>

          {/* Share Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-all">
            <FaShareAlt className="text-gray-600" />
            <span className="text-gray-600">Share</span>
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="relative grid grid-cols-4 grid-rows-[350px_350px] gap-4 mt-4 rounded-[22px] overflow-hidden">
        {
          property.images.slice(0,4).map((img, index) => (
            <Image key={index} src={img} alt={property.name} width={300} height={350} className={cn("w-full h-full object-cover ", {
              "col-span-full row-span-full": property.images.length === 1,
              "col-span-2 row-span-2": (index === 0 && property.images.length > 1) || property.images.length === 2,
              "col-span-2": index === 1 || (index === 2 && property.images.length === 3),
              "col-span-1": index > 1 && property.images.length > 3,
              
            })} />
          ))
        }
        <div>
          <button type="button" className="absolute bottom-10 right-14 bg-white/20 text-white backdrop-blur-sm px-5 font-bold py-2 border-2 border-white rounded-full hover:bg-white-30 transition-all">
            Show all photo
          </button>
        </div>
      </div>

      <div className="flex items-center mt-6 gap-3">
        <div className="flex items-center gap-1 border border-gray-300 rounded-full px-5 py-2">
          <Image
            src={"/assets/icon/bed.svg"}
            alt="bed"
            width={20}
            height={20}
            className=""
          />{" "}
          {property.offers.bed} <span className="text-gray-500">bedrooms</span>
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-full px-5 py-2">
          <Image
            src={"/assets/icon/shower.svg"}
            alt="bed"
            width={20}
            height={20}
            className=""
          />{" "}
          {property.offers.shower} <span className="text-gray-500">bathrooms</span>
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-full px-5 py-2">
          <Image
            src={"/assets/icon/occupants.svg"}
            alt="bed"
            width={20}
            height={20}
            className=""
          />{" "}
          {property.offers.occupants} <span className="text-gray-500">guests</span>
        </div>
      </div>

      {/* Description */}
      {/* <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div> */}

      {/* Amenities */}
     

      {/* Reviews and Booking */}
      <div className="mt-8 flex items-start justify-between gap-8">
        <div className="grow">
          <div className="border border-[#E6E6E6] grow " />
          <PropertyDescription property={property} />
          <div className="mb-4 border border-[#E6E6E6] grow " />
          <ReviewSection propertyId={property.id} />
        </div>
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;