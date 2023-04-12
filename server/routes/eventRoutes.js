import express from 'express';
const router = express.Router();

import {
  createEvent,
  getAllEvents,
  deleteEvent,
  updateEvent,
} from '../controllers/eventsController.js';

// have to create an open endpoint for get all active event

// Authenticated route

router.route('/').get(getAllEvents).post(createEvent);

router.route('/:id').get().patch(updateEvent).delete(deleteEvent);

export default router;
