const logic = require("../crypter/crypter");
const CustomAPIError = require("../errors/custom-error");

const encrypt = async (req, res, next) => {
  const message = req.body.inputMessage;
  // console.log(req.body.inputMessage);
  if (!message) {
    throw new CustomAPIError("Message cannot be empty", 400);
  }
  try {
    const final = await logic(message);
    // console.log(final);
    res.status(200).json({ success: true, msg: final });
  } catch (error) {
    next(error);
  }
};

module.exports = { encrypt };
