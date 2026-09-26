const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const app = require("../app");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

// POST /api/food/ [Protected]

router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood,
);

// GET /api/food/ [Protected]

router.get("/", 
  authMiddleware.authUserMiddleware, 
  foodController.getFoodItems);

router.post(
  "/like",
  authMiddleware.authUserMiddleware,
  foodController.likeFood,
);

router.post('/save', 
  authMiddleware.authUserMiddleware, 
  foodController.saveFood);

  router.get('/save',
  authMiddleware.authUserMiddleware,
  foodController.getSavedFood
);

module.exports = router;
