require("dotenv").config()
const cloudinary = require("cloudinary").v2


cloudinary.uploader
  .text("Instructor", {
    public_id: "instructor-logo",
    font_family: "Roboto",
    font_weight: "bold",
    font_size: 18,
    font_color: "green",
    fetch_format: "svg",
    format: "svg",
    height: 43,
    width: 157,
    opacity: 90,
    flags: "sanitize",
  })
  .then(result => {console.log(result)})
  .catch(error => {console.log(error)})
