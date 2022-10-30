const notFound = async (req, res) => {
  res.staus(400).send("Route does not exit");
};
module.exports = notFound;
