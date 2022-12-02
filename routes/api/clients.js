//todo.routes.js

const express = require("express");

const router = express.Router();

const {
  listAllClient,
  createOneClient,
  updateOneClient,
  deleteClient,
} = require("../../controllers/client.js");

router.get("/", listAllClient)

router.post("/", createOneClient);

router.put("/:id", updateOneClient);

router.delete("/:id", deleteClient);

module.exports = router;