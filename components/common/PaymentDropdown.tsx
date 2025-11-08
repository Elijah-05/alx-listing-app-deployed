"use client";
import { useState, useRef, useEffect } from "react";
import { BsCreditCard } from "react-icons/bs";
import { RxChevronDown } from "react-icons/rx";

export default function PaymentDropdown() {
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full relative border border-[#E7E6E6] rounded-lg p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <BsCreditCard className="text-xl md:text-2xl text-gray-400" />
          <span className="font-semibold text-sm md:text-lg text-[#747474]">
           {selected || "Credit or debit card"}
          </span>
        </div>
          <RxChevronDown className={`text-lg md:text-2xl text-[#1C274C] ${open ? "-rotate-180" : "rotate-0"} duration-300`} />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="text-sm md:text-base absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10">
          <button
            type="button"
            className="w-full text-left hover:bg-gray-100 px-4 pt-3 pb-1 md:py-3 font-semibold rounded-t-lg"
            onClick={() => {
              setOpen(false);
              setSelected("Credit card");
            }}
          >
            Credit card
          </button>
          <button
            type="button"
            className="w-full text-left hover:bg-gray-100 px-4 pb-3 pt-1 md:py-3 font-semibold rounded-b-lg"
            onClick={() => {
              setOpen(false);
              setSelected("Debit card");
            }}
          >
            Debit card
          </button>
        </div>
      )}
    </div>
  );
}
