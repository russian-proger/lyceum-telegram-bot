const express = require('express');
const config = require('../../config/index');

const adminRouter = express.Router();

adminRouter.name = "admin-router";

adminRouter.get(/^\/.*/, (req, res) => {
  res.render("admin-panel", { initialPage: req.url.slice(1), locationPath: config.env().server.location_path + "admin" });
});

module.exports = adminRouter;