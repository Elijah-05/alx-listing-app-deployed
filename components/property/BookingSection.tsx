import Link from "next/link";
import React from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const nights = 7;
  const subtotal = 50 * nights;
  const discount = 88;
  const serviceFee = 33;
  const total = subtotal - discount + serviceFee;

  return (
    <div className="bg-white px-8 py-4 shadow-md border border-[#EAEAEA] rounded-xl">
      {/* Price per night */}
      <h3 className="text-2xl font-semibold">
        ${price}
        <span className="text-gray-400 text-lg font-normal"> /night</span>
      </h3>

      <hr className="my-4 text-[#E6E6E6]" />

      {/* Check-in and Check-out */}
      <div className="mt-8">
        <label className="block text-gray-700 text-sm font-medium">
          Check in
        </label>
        <input
          type="date"
          className="border border-[#E6E6E6] rounded-md p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-medium">
          Check out
        </label>
        <input
          type="date"
          className="border border-[#E6E6E6] rounded-md p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Cost breakdown */}
      <div className="mt-6 space-y-2 text-black">
        <div className="flex justify-between">
          <span className="text-[#8F8F8F]">
            ${50} × {nights} nights
          </span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8F8F8F]">Weekly discounts</span>
          <span className="">-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8F8F8F]">Service fee</span>
          <span>${serviceFee}</span>
        </div>
        <hr className="mt-6 mb-2 text-[#E6E6E6]" />
        <div className="flex justify-between font-semibold text-gray-900">
          <span className="text-[#8F8F8F]">Total payment</span>
          <span className="text-[#34967C]">${total}</span>
        </div>
      </div>

      {/* Reserve Button */}
      <Link href={`/booking`}>
        <button
          type="button"
          className="mt-6 w-full bg-[#34967C] hover:bg-[#2c7a5a] text-white font-medium py-3 rounded-[15px] transition-colors"
        >
          Reserve now
        </button>
      </Link>
    </div>
  );
};

export default BookingSection;
