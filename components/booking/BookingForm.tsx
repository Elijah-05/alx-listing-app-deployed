import { HiLockClosed } from "react-icons/hi2";
import CancellationPolicy from "./CancellationPolicy";
import PaymentDropdown from "../common/PaymentDropdown";
import { RxChevronDown } from "react-icons/rx";
import { FormEvent, useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grow bg-white px-4 py-6">
      <hr className="mb-8 max-sm:-mx-4 text-[#E6E6E6]" />
      <h2 className="text-xl md:text-[1.8125rem] font-bold">Contact Detail</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold" htmlFor="fname">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstName"
              className="border border-[#E7E6E6] rounded-lg px-3 py-2 md:p-3.5 w-full mt-2 outline-none focus:border-[#34967C]"
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="lname">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lastName"
              className="border border-[#E7E6E6] rounded-lg px-3 py-2 md:p-3.5 w-full mt-2 outline-none focus:border-[#34967C]"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-[#E7E6E6] rounded-lg px-3 py-2 md:p-3.5 w-full mt-2 outline-none focus:border-[#34967C]"
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border border-[#E7E6E6] rounded-lg px-3 py-2 md:p-3.5 w-full mt-2 outline-none focus:border-[#34967C]"
            />
          </div>
        </div>

        <label className="mt-6 grid grid-cols-[20px_1fr] gap-2">
          {/* <input type="checkbox" name="sms" id="sms" /> */}
          <div className="relative shrink-0 size-5">
            <input type="checkbox" className="peer hidden" />
            <div className="size-5 grid place-content-center rounded border sm:border-2 border-gray-400 peer-checked:border-[#34967C] peer-checked:bg-[#34967C] transition-colors duration-200"></div>
            <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 hidden peer-checked:block text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <p className="-mt-p text-sm md:text-base">
            Receive text message update about your booking. Messages rate may
            apply.
          </p>
        </label>

        <hr className="my-8 max-sm:-mx-4 text-[#E6E6E6]" />

        {/* Payment Information */}
        <h2 className="text-xl md:text-[1.8125rem] font-bold mt-6">Pay with</h2>
        <div className="mt-4">
          <PaymentDropdown />
        </div>
        <div className="text-sm md:text-base mt-4 border border-[#E6E6E6] rounded-lg overflow-hidden">
          <div className="p-4 flex items-center gap-10">
            <h4 className="text-[#747474]">Card numbber</h4>{" "}
            <HiLockClosed className="" />
          </div>
          <div className=" grid grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Expiration date"
                className="border-t border-r border-[#E7E6E6] font-semibold outline-none py-3.5 px-4 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="CVV"
                className="border-t border-[#E7E6E6] font-semibold outline-none py-3.5 px-4 w-full"
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="font-bold mt-6">Billing Address</h2>
        <div className="text-sm md:text-base mt-2 border border-[#E7E6E6] rounded-lg">
          <div className="border-b border-[#E7E6E6]">
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              className="p-4 w-full outline-none"
            />
          </div>
          <div className="border-b border-[#E7E6E6]">
            <input
              type="text"
              name="aptSuitNumber"
              placeholder="Apt or suit number"
              className="p-4 w-full outline-none"
            />
          </div>
          <div className="border-b border-[#E7E6E6]">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="p-4 w-full outline-none"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="border-r border-[#E7E6E6]">
              <input
                type="text"
                name="state"
                placeholder="State"
                className="p-4 w-full outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                className="p-4 w-full outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center border border-[#E7E6E6] rounded-lg py-1 px-4 cursor-pointer">
          <div className="leading-none">
            <p className="text-sm text-[#747474]">Country</p>
            <p className="text-sm md:text-lg font-medium text-[#161117]">
              Ghana
            </p>
          </div>
          <RxChevronDown className={`text-2xl text-[#1C274C] duration-300`} />
        </div>

        <hr className="my-8 max-sm:-mx-4 text-[#E6E6E6]" />

        <CancellationPolicy />

        {/* Submit Button */}
        <button className="mt-6 bg-[#34967C] text-white font-semibold text-sm sm:text-lg py-2.5 px-4 w-full sm:max-w-[246px] rounded-xl">
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="mt-2 ml-6 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
