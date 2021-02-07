var express = require('express');

import * as Config from '../../config';

const adminRouter = express.Router();

adminRouter.get(/^\/.*/, (req:any, res:any) => {
  res.render("admin-panel", { initialPage: req.url.slice(1), locationPath: Config.env().server.location_path + "admin" });
});

export default adminRouter;