//controllers.js

const Client = require("../models/clients.js");

exports.createOneClient = (req, res) => {
  Client.create(req.body)
    .then((client) => {
      console.log({ client });
      res.json({
        message: "Cheers!! You have successfully added Client",
        client,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your client list cannot be added",
        error: err.message,
      });
    });
};

exports.listAllClient = (req, res) => {
  Client.find()
    .then((client) => {
      console.log({ client });
      res.json(client);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any client available", error: err.message });
    });
};

exports.updateOneClient = (req, res) => {
  Client.findByIdAndUpdate(req.params.id, req.body)
    .then((client) => {
      console.log({ client });
      return res.json({
        message: "Cheers!! You have successfully updated Client",
        client,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your client list cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteClient = (req, res) => {
  Client.findByIdAndRemove(req.params.id, req.body)
    .then((client) => {
      console.log({ client });
      res.json({
        message: "Cheers!! You have successfully deleted your Client",
        client,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your client is not there",
        error: err.message,
      });
    });
};