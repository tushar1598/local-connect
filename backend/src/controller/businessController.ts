import Business from "../model/business";

export const createBusiness = async (req: any, res: any) => {
  try {
    const {
      businessName,
      serviceType,
      address,
      city,
      state,
      phone,
      description,
      location,
    } = req.body;

    if (
      !businessName ||
      !serviceType ||
      !address ||
      !city ||
      !state ||
      !phone ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory",
      });
    }

    const business = await Business.create({
      businessName,
      serviceType,
      address,
      city,
      state,
      phone,
      description,
      location,

      owner: req.user?.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Business created successfully",
      business,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create business",
    });
  }
};

export const getMyBusinesses = async (req: any, res: any) => {
  try {
    const businesses = await Business.find({
      owner: req.user?.userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: businesses.length,
      businesses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch businesses",
    });
  }
};

export const getBusinessById = async (req: any, res: any) => {
  try {
    const business = await Business.findOne({
      _id: req.params.id,
      owner: req.user?.userId,
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    return res.status(200).json({
      success: true,
      business,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch business",
    });
  }
};

export const updateBusiness = async (req: any, res: any) => {
  try {
    const business = await Business.findOne({
      _id: req.params.id,
      owner: req.user?.userId,
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    const updatedBusiness = await Business.findByIdAndUpdate(
      business._id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    return res.status(200).json({
      success: true,
      message: "Business updated successfully",
      business: updatedBusiness,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update business",
    });
  }
};

export const deleteBusiness = async (req: any, res: any) => {
  try {
    const business = await Business.findOne({
      _id: req.params.id,
      owner: req.user?.userId,
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    await business.deleteOne();

    return res.status(200).json({
      success: true,
      id: business._id,
      message: "Business deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete business",
    });
  }
};

export const toggleBusinessStatus = async (req: any, res: any) => {
  try {
    const business = await Business.findOne({
      _id: req.params.id,
      owner: req.user?.userId,
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    business.isActive = !business.isActive;

    await business.save();

    return res.status(200).json({
      success: true,
      message: `Business ${
        business.isActive ? "activated" : "deactivated"
      } successfully`,
      business,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update business status",
    });
  }
};
