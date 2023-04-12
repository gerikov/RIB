import Event from '../models/Event.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import mongoose from 'mongoose';
import moment from 'moment';

const createEvent = async (req, res) => {
  const { name, description, imageUrl, date, remaining, soldOut, isActive } =
    req.body;
  // console.log('enter');

  if (!name || !description || !date || !remaining) {
    throw new BadRequestError('Add meg a szükséges adatokat');
  }
  const event = await Event.create({
    name,
    description,
    imageUrl,
    date,
    remaining,
    soldOut,
    isActive,
  });
  res.status(StatusCodes.CREATED).json({ event });
};

const getAllEvents = async (req, res) => {
  const { isActive } = req.query;
  const queryObject = {};

  if (isActive) {
    queryObject.isActive = isActive;
  }
  let result = Event.find(queryObject);
  result = result.sort('-date');

  const events = await result;
  const numOfEvents = events.length;
  res.status(StatusCodes.OK).json({ numOfEvents, events });
};

const deleteEvent = async (req, res) => {
  const { id: eventId } = req.params;
  console.log(eventId);
  const event = await Event.findById(eventId);

  if (!event) {
    throw new BadRequestError(`Ez az esemény nem létezik: ${eventId}`);
  }
  await event.deleteOne();
  res.status(StatusCodes.OK).json({ msg: 'successful ' });
};

const updateEvent = async (req, res) => {
  const { name, description, imageUrl, date, remaining, soldOut, isActive } =
    req.body;

  const { id: eventId } = req.params;

  // TODO: ERROR HANDLING Bad request
  if (!name || !description || !date || !remaining) {
    throw new BadRequestError('Add meg a szükséges adatokat');
  }
  const event = await Event.findById(eventId);

  if (!event) {
    throw new NotFoundError(`Ez az esemény nem létezik: ${eventId}`);
  }

  const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updatedEvent });
};

export { createEvent, getAllEvents, deleteEvent, updateEvent };
