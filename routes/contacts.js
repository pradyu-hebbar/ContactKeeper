const express = require("express");
const router = express.Router();

// @route  GET /api/contacts
// @desc   Get all users contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get All Contacts");
});
// @route  POST /api/contacts
// @desc   add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("ADD contact");
});
// @route  PUT /api/contacts/:id
// @desc   Update Contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});
// @route  DELETE /api/contacts/:id
// @desc   Delete Contact
// @access Private
router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;