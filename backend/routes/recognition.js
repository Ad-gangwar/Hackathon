const { execFile } = require("child_process");
const express = require("express");
const router = express.Router();

router.post("/recognize", async (req, res) => {
  // Assuming you receive an image URL or some other identifier in req.body.photo
  const imagePath = req.body.photo; // This should be the URL to the image
  const name = req.body.name; // Name of the person, if required for logging or additional purposes

  execFile(
    "python",
    [
      "C:/Users/Jagji/OneDrive/Desktop/Face-Recognition-Attendance-Projects-main/main.py",
      imagePath, // Pass the image path or URL as an argument
      name, // Pass the name as an argument, if needed
    ],
    (error, stdout, stderr) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Recognition failed" });
        return;
      }
      console.log("Output:", stdout);
      res.status(200).json({ recognized: stdout.trim() }); // Sending the output back to the client
    }
  );
});

module.exports = router;
