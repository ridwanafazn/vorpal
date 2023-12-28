import { db, EventSchema } from "./db.js";

const checkEventDb = () => {
  if (!db.models["Event"]) {
    db.model("Event", EventSchema);
  }
};

export const getEvents = async (req, res) => {
  try {
    checkEventDb();

    const eventList = await db.model("Event").find();

    res.status(200).json({
      message: "success",
      data: eventList,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const getEventById = async (req, res) => {
  try {
    checkEventDb();

    const { id } = req.params;

    const event = await db.model("Event").findById(id);

    if (!event) {
      return res.status(404).json({
        message: "error",
        error: "Event not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const createEvent = async (req, res) => {
  try {
    checkEventDb();

    const newEvent = await db.model("Event").create(req.body);

    res.status(201).json({
      message: "success",
      data: newEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    checkEventDb();

    const updatedEvent = await db.model("Event").updateOne(
      {
        _id: id,
      },
      req.body
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "error",
        error: "Event not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    checkEventDb();

    const deletedEvent = await db.model("Event").findOne({ _id: id });

    if (!deletedEvent) {
      return res.status(404).json({
        message: "error",
        error: "Event not found",
      });
    }

    await db.model("Event").deleteOne({ _id: id });

    res.status(200).json({
      message: "success",
      data: deletedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};
