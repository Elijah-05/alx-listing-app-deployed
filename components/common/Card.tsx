import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Card({
  id,
  images,
  name,
  discount,
  category = [],
  rating,
  address: { state, city, country },
  offers: { bed, shower, occupants },
  price,
}: PropertyProps) {
  return (
    <Link href={`/property/${id}`} className="bg-white rounded-3xl shadow-lg">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={images[0]}
            alt={name}
            width={350}
            height={200}
            className="w-full h-[255px] object-cover"
          />
        </div>
        {discount && (
          <div className="absolute flex items-center gap-2 -left-3 top-5 bg-[#34967C] text-white p-3 rounded-full rounded-bl">
            <Image
              src={"/assets/icon/discount.svg"}
              alt="bed"
              width={20}
              height={20}
              className="object-contain"
            />{" "}
            <span className="-mb-1 font-medium text-sm">{discount} % Off</span>
            <div className="absolute inset-0">
              <div
                className="absolute -bottom-4 left-[2px] -z-10 w-0 h-0 
            border-l-[12px] border-l-transparent
            border-r-[12px] border-r-transparent
            border-t-[20px] border-t-[#1e6b56] rotate-[-15deg]"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-4 px-4">
        {category.map((tag, i) => (
          <span
            key={i}
            className="bg-[#F9F9F9] text-[#161117] text-xs px-3.5 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="my-8">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-[22px] font-semibold">{name}</h2>
          <span className="flex items-center text-yellow-500 font-medium text-base">
            <FaStar className="mr-1" /> {rating}
          </span>
        </div>
        <div className="text-[#161117] font-medium mt-1 px-4">
          {state}, {city}, {country}
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-3 border rounded-full py-2 px-3.5 border-[#E9E9E9]">
          <div className="flex items-center gap-1">
            <Image
              src={"/assets/icon/bed.svg"}
              alt="bed"
              width={20}
              height={20}
              className=""
            />{" "}
            {bed}
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={"/assets/icon/shower.svg"}
              alt="bed"
              width={20}
              height={20}
              className=""
            />{" "}
            {shower}
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={"/assets/icon/occupants.svg"}
              alt="bed"
              width={20}
              height={20}
              className=""
            />{" "}
            {occupants}
          </div>
        </div>
        <div className="flex gap-1 px-4">
          <span className="text-[22px] font-bold text-gray-900">
            ${price.toLocaleString()}
          </span>
          <span className="text-gray-400 text-base mb-1">/n</span>
        </div>
      </div>
    </Link>
  );
}
