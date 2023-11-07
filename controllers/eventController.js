const {
  createOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
  // getAllEvents
  
} = require("../factory/eventRepository");
const EventModel = require("../models/eventModel");

const createEvent = createOne(EventModel);
const getEvent = getOne(EventModel);
const getAllEvent = getAll(EventModel);
// const getAllEvent = getAllEvents(EventModel);
const updateEvent = updateOne(EventModel);
const deleteEvent = deleteOne(EventModel);

module.exports = {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getAllEvent
};
