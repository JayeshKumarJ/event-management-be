const express = require("express");
const {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getAllEvent,
} = require("../controllers/eventController");
const {
  protect,
  restrictTo,
} = require("../controllers/authorization/authController");
// const { getAllEvents } = require("../factory/eventRepository");
const eventRouter = express.Router();

eventRouter
  .route("/")
  .post(protect, restrictTo("admin"), createEvent)
  .get(getAllEvent)
  // .get(getAllEvents);
eventRouter
  .route("/:id")
  .get(getEvent)
  .patch(protect, restrictTo("admin"), updateEvent)
  .delete(protect, restrictTo("admin"), deleteEvent);

module.exports = eventRouter;
