import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import CategoryIcons from "@/components/layout/CategoryIcons";
import { CATEGORYICONS } from "@/constants";
import { PropertyProps } from "@/interfaces";
import axios from "axios";
import { Geist, Geist_Mono } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const filterOptions = [
  { label: "All" },
  { label: "Top Villa" },
  { label: "Free Reschedule" },
  { label: "Book Now, Pay Later" },
  { label: "Self CheckIn" },
  { label: "Instant Book" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  const filterList = useCallback(() => {
    return properties.filter((property) => {
      if (activeFilter === "All") {
        return true;
      } else return property.category.includes(activeFilter);
    });
  }, [activeFilter, properties]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        );
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="h-[70vh] grid place-content-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={`${geistSans.className} ${geistMono.className} `}>
      <div className="max-sm:hidden sticky -top-10 max-w-[1500px] mx-auto flex items-center justify-between lg:px-0 overflow-x-auto gap-8 py-4 px-4">
        {CATEGORYICONS.map((item, index) => (
          <CategoryIcons
            key={index}
            icon={item.icon}
            label={item.label}
            active={index === 3}
          />
        ))}
      </div>
      <div className="max-w-[1500px] mx-auto px-0">
        {/* Hero Banner */}
        <div
          style={{
            backgroundImage: "url(/assets/image/hero-banner-image.jpg)",
          }}
          className="h-[min(calc(100vh-350px),550px)] w-full rounded-3xl bg-cover bg-center flex flex-col items-center justify-center text-white gap-4"
        >
          <h1 className="font-semibold max-w-[min(867px,80%)] xl:leading-28 text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-center drop-shadow-2xl">
            Find your favorite place here!
          </h1>
          <p className="max-w-[min(700px,70%)] sm:text-lg md:text-xl lg:text-2xl text-center">
            The best prices for over 2 million properties worldwide
          </p>
        </div>

        <div className="px-4">
          <div className="flex items-center overflow-x-scroll mt-10 mb-6 gap-4 pb-3">
            {filterOptions.map((option) => (
              <Pill
                key={option.label}
                {...option}
                active={activeFilter === option.label}
                onClick={setActiveFilter}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6">
            {filterList().map((property, index) => {
              return <Card {...property} key={index} />;
            })}
          </div>
          {filterList().length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No properties found for &quot;{activeFilter}&quot;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
