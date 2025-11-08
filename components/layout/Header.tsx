import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="max-sm:hidden sticky top-0 z-[99] w-full bg-[#FFFFFF]">
      <nav className=" top- bg-[#FFFFFF] z-[999] border-b border-[#EBEBEB] py-3 px-3 max-sm:pl-2">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="max-sm:hidden shrink-0 w-[46px] md:w-[58px]">
            <Image
              src={"/assets/icon/alx-logo.png"}
              alt="ALX Logo"
              width={58}
              height={40}
              className="w-full h-full"
            />
          </Link>

          <div className="max-sm:hidden min-w-0 w-fit flex justify-between h-full border border-[#F6F6F6] rounded-full py-2 pl-4 lg:pl-8 lg:pr-[.6875rem]">
            <div className="min-w-0 sm:w-full max-w-36 md:max-w-38 lg:max-w-64 xl:max-w-72">
              <h6 className="text-sm">Location</h6>
              <input
                type="text"
                placeholder="Search for destination"
                className="outline-none min-w-0 text-[.8125rem]"
              />
            </div>

            {/* Right side search input field */}
            <div className="min-w-0 flex items-center">
              <div className="min-w-0 flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="min-w-0 flex flex-col">
                  <label className="text-sm w-fit">Check in</label>
                  <input
                    type="text"
                    className="min-w-0 outline-none text-[.8125rem]"
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div className="min-w-0 flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="min-w-0 ">
                  <h6 className="text-sm">Check out</h6>
                  <input
                    type="text"
                    className="outline-none min-w-0 text-[.8125rem]"
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div className="min-w-0 flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="min-w-0 w-fit">
                  <h6 className="text-sm">People</h6>
                  <input
                    type="text"
                    className="outline-none min-w-0 text-[.8125rem]"
                    placeholder="Add guest"
                  />
                </div>
              </div>
              <div className="shrink-0 rounded-full size-10.5 bg-[#FFA800] p-2 ml-4 flex items-center justify-center cursor-pointer">
                <CiSearch className="text-white size-full" />
              </div>
            </div>
          </div>
          <div className="min-w-0 sm:hidden flex items-center border border-[#F6F6F6] rounded-full py-2 pl-6 pr-2">
             <div className="min-w-0 flex flex-col">
                <p className="text-sm text-black w-fit">Where to</p>
                <div className="flex items-center justify-evenly min-w-0">
                  <input
                  type="text"
                  className="flex-1 min-w-0 outline-none text-[.8125rem]"
                  placeholder="Location"
                  />
                  <div className="size-1 shrink-0 bg-black rounded-full" />
                  <input
                  type="text"
                  className="flex-1 text-center min-w-0 outline-none text-[.8125rem]"
                  placeholder="Location"
                  />
                  <div className="size-1 shrink-0 bg-black rounded-full" />
                  <input
                  type="text"
                  className="flex-1 text-center min-w-0 outline-none text-[.8125rem]"
                  placeholder="Location"
                  />
                </div>
              </div>
              <div className="shrink-0 rounded-full size-8 sm:size-9 md:size-10.5 bg-[#FFA800] p-2 ml-4 flex items-center justify-center cursor-pointer">
                <CiSearch className="text-white size-full" />
              </div>
          </div>
          <div className="shrink-0 flex gap-2 max-lg:hidden">
            <button
              type="button"
              className="bg-[#34967C] py-3 px-7 rounded-full text-white"
            >
              Sign in
            </button>
            <button
              type="button"
              className="py-3 px-7 rounded-full border border-[#ECECEC]"
            >
              Sign up
            </button>
          </div>
          <div className="lg:hidden shrink-0 size-8 sm:size-9 md:size-11 rounded-full bg-[#34967C] p-0.5">
            <div className="w-full h-full rounded-full ring ring-white grid place-content-center">
              <FaUser className="text-white text-xl md:text-2xl" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
