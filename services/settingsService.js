const Settings = require("@models/settingsModel");

const getSettings = async () => {
  const settings = await Settings.findOne();

  if (settings) {
    return settings;
  }

  return await Settings.create({});
};

const updateSettings = async (settingsData) => {
  const existingSettings = await Settings.findOne();

  if (!existingSettings) {
    const settings = await Settings.create(settingsData);

    return {
      settings,
      message: "Settings created successfully",
      status: 201,
    };
  }

  const settings = await Settings.findByIdAndUpdate(existingSettings._id, settingsData, {
    new: true,
    runValidators: true,
  });

  if (settings) {
    return {
      settings,
      message: "Settings updated successfully",
      status: 200,
    };
  } else {
    return {
      message: "Settings not found",
      status: 404,
    };
  }
};

module.exports = {
  getSettings,
  updateSettings,
};
