//todo.routes.js

const express = require("express");

const router = express.Router();

const {
  listAllJobsheet,
  findOneJobsheet,
  createOneJobsheet,
  updateOneJobsheet,
  deleteJobsheet,
} = require("../../controllers/jobsheet.js");
const Jobsheet = require("../../models/jobsheets.js");

router.get("/", listAllJobsheet);
router.get("/:id", findOneJobsheet);

router.post("/", createOneJobsheet);

router.put("/:id", updateOneJobsheet);

router.delete("/:id", deleteJobsheet);

router.get('/hello_world', (req, res)=>{
  res.send('Hello World');
  })
  
  
module.exports = router;