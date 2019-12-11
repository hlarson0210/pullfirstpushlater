const path = require("path");
const router = require("express").Router();
const bgaAPI = require("./bgaAPI");
const apiRoutes = require("./API");

// API Routes
router.use("/api", apiRoutes);

// BGA API Route
router.use("/bga-api", bgaAPI);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;