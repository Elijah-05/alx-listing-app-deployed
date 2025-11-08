import Image from "next/image";
import { FaStar } from "react-icons/fa";


const OrderSummary: React.FC<{ bookingDetails: {
    propertyName: string;
    startDate: string;
    totalNights: number;
    bookingFee: number;
    price: number;
} }> = ({ bookingDetails }) => (
  <div className="bg-white h-fit px-4 sm:p-6 md:p-8 lg:p-9.5 sm:border border-[#EAEAEA] sm:shadow-md sm:rounded-[15px]">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="mt-2 md:mt-4">
        <div className="w-full rounded-lg overflow-hidden">
            <Image src="/assets/image/living-room.png" alt="Property" width={539} height={342} className="w-full h-full object-cover  aspect-[21/9] sm:aspect-[16/9] md:aspect-[4/3]" />
        </div>
      <div className="mt-3 md:mt-5 space-y-2">
        <h3 className="text-lg md:text-[1.875rem] font-bold">{bookingDetails.propertyName}</h3>
        <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
            <FaStar className="text-[#FAC02B] text-xs md:text-lg" /> <span className="text-black">4.76</span> ( 345 reviews )
        </p>
        <div className="flex gap-1 items-center">
            <div className="bg-[#F7F7F7] py-1 px-2 w-fit rounded-sm border border-[#EEEEEE]">
               <p className="text-xs md:text-sm text-[#585858]">{bookingDetails.startDate}</p> 
            </div>
            <div className="bg-[#F7F7F7] py-1 px-2 w-fit rounded-sm border border-[#EEEEEE]">
                <p className="text-xs md:text-sm text-[#585858]">{bookingDetails.totalNights} Nights</p>
            </div>
        </div>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6 flex flex-col gap-2 md:gap-4">
      <div className="flex justify-between text-[#8F8F8F] font-semibold text-sm md:text-xl">
        <p className="">Booking Fee</p>
        <p className="text-black">${(bookingDetails.bookingFee).toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-[#8F8F8F] font-semibold text-sm md:text-xl">
        <p className="">Subtotal</p>
        <p className="text-black">${(bookingDetails.price).toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-3 md:mt-6 font-semibold">
        <p className="text-sm md:text-xl">Grand Total</p>
        <p className="text-xl md:text-[1.6875rem] font-bold text-black">${(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;