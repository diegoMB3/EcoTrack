import Activity from '../models/Activity.js';

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createActivity = async (req, res) => {
  const { description, category, carbonKg } = req.body;
  try {
    const newActivity = new Activity({ description, category, carbonKg });
    const saved = await newActivity.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    res.json({ message: 'Actividad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
