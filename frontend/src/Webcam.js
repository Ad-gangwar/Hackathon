import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  // Function to handle image capture and download
  const captureAndDownload = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot(); // Get screenshot from webcam

    if (imageSrc) {
      const link = document.createElement("a"); // Create an anchor element
      link.href = imageSrc; // Set href to the image data URL
      link.download = "captured-image.jpg"; // Set the download file name
      link.click(); // Trigger the download
    }
  }, [webcamRef]);

  // Function to handle key press events
  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      // Check if the space bar is pressed
      event.preventDefault(); // Prevent default space bar action
      captureAndDownload(); // Capture and download the image
    }
  };

  useEffect(() => {
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Capture and Download Image</h1>
      <div className="mb-4">
        <Webcam
          audio={false} // Disable audio capture
          ref={webcamRef} // Attach the reference
          screenshotFormat="image/jpeg" // Set format of captured image
          width="100%" // Set width to full
          height="auto" // Adjust height automatically
          className="border-2 border-gray-300" // Optional styling
        />
      </div>
      <p className="mb-4">
        Press the space bar to capture and download the image.
      </p>
    </div>
  );
};

export default WebcamCapture;
