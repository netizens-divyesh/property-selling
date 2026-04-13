const settingsService = require("@services/settingsService");

const getSettings = async (req, res) => {
  try {
    const settings = await settingsService.getSettings();
    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSettings = async (req, res) => {
  try {
    const settings = await settingsService.updateSettings(req.body);
    res.status(settings.status).json({
      success: settings.status >= 200 && settings.status < 300,
      message: settings.message,
      data: settings.settings || null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getSettings,
  updateSettings,
};
