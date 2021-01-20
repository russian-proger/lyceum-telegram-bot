const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const adminRouter = express.Router();

adminRouter.name = "admin-router";

adminRouter.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = adminRouter;