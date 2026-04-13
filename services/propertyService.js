const Property = require("@models/propertyModal");

const getAllProperties = async () => {
  return await Property.find();
};

const createProperty = async (propertyData) => {
  const property = new Property(propertyData);
  await property.save();
  return property;
};

const getPropertyById = async (id) => {
  return await Property.findById(id);
}

const updateProperty = async (id, propertyData) => {
  const property = await Property.findByIdAndUpdate(id, propertyData, {
    new: true,
    runValidators: true,
  });

  if (property) {
    return {
      property,
      message: "Property updated successfully",
      status: 200,
    };
  } else {
    return {
      message: "Property not found",
      status: 404,
    };
  }
};

const deleteProperty = async (id) => {
  const property = await Property.deleteOne({ _id: id });

  if (property.deletedCount > 0) {
    return {
      message: "Property deleted successfully",
      status: 200,
    };
  } else {
    return {
      message: "User not found",
      status: 404,
    };
  }
};

module.exports = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
