import express from 'express';
import { getActivities, createActivity, deleteActivity } from '../controllers/activityController.js';

const router = express.Router();

router.route('/')
  .get(getActivities)
  .post(createActivity);

router.route('/:id')
  .delete(deleteActivity);

export default router;
