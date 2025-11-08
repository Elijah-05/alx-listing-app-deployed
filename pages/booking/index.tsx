import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { IoIosArrowRoundBack } from "react-icons/io";


export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  const handleBack = () => {
    window.history.back();
  }

  return (
    <div className="">
      <div className="sticky top-0 bg-[#EBEBEB] px-4 max-sm:border-b border-[#EBEBEB] z-50">
          <div className="max-w-[1500px] mx-auto text-[#34967C]">
            <button onClick={handleBack} type="button" className="border-b-2 border-[#34967C] w-fit flex items-center gap-1 sm:gap-2 py-2 sm:py-3 md:py-4">
              <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
              <span className="text-sm sm:text-base lg:text-lg font-medium">Booking</span>
            </button>
          </div>
      </div>
     <div className="w-full">
       <div className="mt-4 sm:mt-8 max-w-[1500px] mx-auto flex flex-col-reverse sm:flex-row gap-6 lg:gap-12">
          <BookingForm />
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
     </div>
    </div>
  );
}