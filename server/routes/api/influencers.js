const express = require("express");
const router = express.Router();
const influencersController = require("../../controllers/influencersController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");

router
  .route("/")
  .get(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    influencersController.getAllInfluencers
  )
  .post(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    influencersController.createNewInfluencer
  )
  .put(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    influencersController.updateInfluencer
  )
  // .put(influencersController.addNewUserId)
  .delete(
    verifyRoles(ROLES_LIST.Admin),
    influencersController.deleteInfluencer
  );

router
  .route("/:id")
  .get(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    influencersController.getInfluencer
  );

module.exports = router;
