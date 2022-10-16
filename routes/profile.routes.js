const router = require("express").Router();
const authRoutes = require("./auth.routes");
const fileUploader = require("../config/cloudinary.config");
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post(
  "/upload-profileImg",
  fileUploader.single("profileImg"),
  (req, res, next) => {
    console.log("file is: ", req.file);

    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }

    res.json({ fileUrl: req.file.path });
  }
);

router.post("/edit", (req, res, next) => {
  const { profileInfo, userId } = req.body;
  const { name, bio, location, profileImg, backgroundImg } = profileInfo;

  User.findByIdAndUpdate(userId, {
    name,
    bio,
    location,
    profileImg,
    backgroundImg,
  })
    .then((user) => {
      console.log("success");
    })
    .catch((err) => console.log("err in profile edit"));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => console.log("err in profile edit"));
});

router.use("/auth", authRoutes);

module.exports = router;
