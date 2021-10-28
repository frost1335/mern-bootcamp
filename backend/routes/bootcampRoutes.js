const { Router } = require("express");
const bootcampControllers = require("../controllers/bootcampsControllers");
const router = Router();

// @route - /api/v1/bootcapms
router
  .route("/")
  .get(bootcampControllers.getAllBootcamps)
  .post(bootcampControllers.createNewBootcamp);

// @route - /api/v1/bootcamps/someid
router
  .route("/:id")
  .put(bootcampControllers.updateBootcampById)
  .delete(bootcampControllers.deleteBootcampById);

module.exports = router;
