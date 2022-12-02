//todo.routes.js

const express = require("express");

const router = express.Router();

const {
  listAllJobsheet,
  createOneJobsheet,
  updateOneJobsheet,
  deleteJobsheet,
} = require("../../controllers/jobsheet.js");

router.get("/", listAllJobsheet)

router.post("/", createOneJobsheet);

router.put("/:id", updateOneJobsheet);

router.delete("/:id", deleteJobsheet);

router.get('/hello_world', (req, res)=>{
  res.send('Hello World');
  })
  
  
module.exports = router;