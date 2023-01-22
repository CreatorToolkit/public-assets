const express = require("express");
const router = express.Router();

router.use(
  "/prev",
  express.static(__dirname + "/res/preview", {
    fallthrough: false,
    extensions: ["png", "jpeg", "jpg", "webp", "mov", "mp4", "webm"],
  })
);

module.exports = router;
