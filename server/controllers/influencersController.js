const Influencer = require("../model/Influencer");

const getAllInfluencers = async (req, res) => {
  const influencers = await Influencer.find();
  if (!influencers)
    return res.status(204).json({ message: "No influencers found" });
  res.json(influencers);
};

const deleteInfluencer = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "influencers ID required" });
  const influencer = await Influencer.findOne({ _id: req.body.id }).exec();
  if (!user) {
    return res
      .status(204)
      .json({ message: `Influencer ID ${req.body.id} not found` });
  }
  const result = await Influencer.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getInfluencer = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Influencers ID required" });
  const influencer = await Influencer.findOne({ _id: req.params.id }).exec();
  if (!influencer) {
    return res
      .status(204)
      .json({ message: `influencers ID ${req.params.id} not found` });
  }
  res.json(influencer);
};

const updateInfluencer = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  const influencer = await Influencer.findOne({ _id: req.body.id }).exec();
  if (!influencer) {
    return res
      .status(204)
      .json({ message: `No influencer matches ID ${req.body.id}.` });
  }
  if (req.body?.username) influencer.username = req.body.username;
  const result = await influencer.save();
  res.json(result);
};

const addNewUserId = async (req, res) => {
  const influencer = await Influencer.find().exec();
  if (!influencer) {
    return res.status(204).json({ message: `No influencer Found.` });
  }
  if (influencer?.username) influencer.userID = req.body.username;
  const result = await influencer.save();
  res.json(result);
};
const createNewInfluencer = async (req, res) => {
  if (!req?.body?.username || !req?.body?.category || !req?.body?.full_name) {
    return res.status(400).json({ message: "All Fields are required" });
  }

  try {
    const result = await Influencer.create({
      username: req.body.username,
      full_name: req.body.full_name,
      category: req.body.category,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllInfluencers,
  deleteInfluencer,
  getInfluencer,
  updateInfluencer,
  createNewInfluencer,
};
