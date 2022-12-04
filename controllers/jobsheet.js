//controllers.js

const Jobsheet = require("../models/jobsheets.js");

exports.createOneJobsheet = (req, res) => {
  Jobsheet.create(req.body)
    .then((jobsheet) => {
      console.log({ jobsheet });
      res.json({
        message: "Cheers!! You have successfully added Jobsheet",
        jobsheet,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your jobsheet list cannot be added",
        error: err.message,
      });
    });
};

exports.findOneJobsheet = (req, res) => {
  Jobsheet.findById(req.params.id)
    .then(jobsheet => res.json(jobsheet))
    .catch(err => res.status(404).json({ nojobsheetfound: 'No jobsheet found' }));
};


exports.listAllJobsheet = (req, res) => {
  Jobsheet.find()
    .then((jobsheet) => {
      console.log({ jobsheet });
      res.json(jobsheet);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any jobsheet available", error: err.message });
    });
};

exports.updateOneJobsheet = (req, res) => {
  Jobsheet.findByIdAndUpdate(req.params.id, req.body)
    .then((jobsheet) => {
      console.log({ jobsheet });
      return res.json({
        message: "Cheers!! You have successfully updated Jobsheet",
        jobsheet,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your jobsheet list cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteJobsheet = (req, res) => {
  Jobsheet.findByIdAndRemove(req.params.id, req.body)
    .then((jobsheet) => {
      console.log({ jobsheet });
      res.json({
        message: "Cheers!! You have successfully deleted your Jobsheet",
        jobsheet,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your jobsheet is not there",
        error: err.message,
      });
    });
};