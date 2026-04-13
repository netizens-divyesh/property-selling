const propertyService = require("@services/propertyService");

const getAllProperties = async (req, res) => {
  try {
    const properties = await propertyService.getAllProperties();
    res.status(200).json({
      success: true,
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const property = await propertyService.getPropertyById(req.params.id);
    if (property) {
      res.status(200).json({
        success: true,
        data: property,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const createProperty = async (req, res) => {
  try {
    const property = await propertyService.createProperty(req.body);
    res.status(201).json({
      success: true,
      data: property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProperty = async (req, res) => {
  try {
    const property = await propertyService.updateProperty(req.params.id, req.body);
    res.status(201).json({
      success: true,
      data: property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const property = await propertyService.deleteProperty(req.params.id);
    res.status(201).json({
      success: true,
      data: property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getAllProperties, getPropertyById, createProperty, updateProperty, deleteProperty };
