import PropertyDetail from "@/components/property/PropertyDetail";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("Property ID from URL:", id);

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        );
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="h-[70vh] grid place-content-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  // const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="">
      <PropertyDetail property={property} />
    </div>
  );
}
