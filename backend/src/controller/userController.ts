import { Request, Response } from "express";
import Business from "../model/business";

export const getNearbyBusinesses = async (req: Request, res: Response) => {
  try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude are required",
      });
    }

    const businesses = await Business.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [Number(lng), Number(lat)],
          },

          distanceField: "distance",

          spherical: true,

          maxDistance: 10000,

          query: {
            isActive: true,
          },
        },
      },

      {
        $addFields: {
          distance: {
            $round: [
              {
                $divide: ["$distance", 1000],
              },
              1,
            ],
          },
        },
      },

      {
        $project: {
          __v: 0,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      count: businesses.length,
      businesses,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch nearby businesses",
    });
  }
};
