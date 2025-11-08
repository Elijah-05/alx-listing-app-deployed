import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const lookup = String(id).trim();

  // Try exact name match first, then id match, then case-insensitive name
  let property = PROPERTYLISTINGSAMPLE.find((p) => p.name === lookup);

  if (!property) {
    property = PROPERTYLISTINGSAMPLE.find((p) => p.id === lookup);
  }

  if (!property) {
    property = PROPERTYLISTINGSAMPLE.find(
      (p) => p.name.toLowerCase() === lookup.toLowerCase()
    );
  }

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  return res.status(200).json(property.reviews);
}
