import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageCaptured, setImageCaptured] = useState(false);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
      });
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL("image/png");
    setCapturedImage(imageDataUrl);
    setImageCaptured(true);

    // Stop the video stream
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    video.srcObject = null;
  };

  const downloadImage = () => {
    setImageCaptured(false);
    setCapturedImage(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-4xl font-bold text-green-600">AstraNex</h1>
          </Link>
          <p className="text-xl text-gray-600 mt-2">Online Registration</p>
        </div>
        <form>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-600 mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full p-2 rounded border border-gray-300"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-600 mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full p-2 rounded border border-gray-300"
                type="text"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="Mobile Number">
              Mobile Number
            </label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="tel"
              id="Mobile Number"
              placeholder="Mobile Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="address">
              Physical Address
            </label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="text"
              id="address"
              placeholder="Physical Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">State</label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="text"
              placeholder="State"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1" htmlFor="dob">
              Date of Birth
            </label>
            <div className="flex space-x-4">
              <select
                className="w-1/3 p-2 rounded border border-gray-300"
                id="dobMonth"
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                {/* Add other months */}
              </select>
              <select
                className="w-1/3 p-2 rounded border border-gray-300"
                id="dobDay"
              >
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                {/* Add other days */}
              </select>
              <select
                className="w-1/3 p-2 rounded border border-gray-300"
                id="dobYear"
              >
                <option>Year</option>
                <option>2023</option>
                <option>2022</option>
                {/* Add other years */}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Capture Face</label>
            <div className="flex flex-col items-center">
              <video
                ref={videoRef}
                className="w-full rounded border border-gray-300"
                autoPlay
                width="320"
                height="240"
              ></video>
              <button
                type="button"
                className="mt-4 p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                onClick={startVideo}
              >
                Start Camera
              </button>
              <button
                type="button"
                className="mt-4 p-2 rounded bg-green-600 text-white hover:bg-green-700"
                onClick={captureImage}
              >
                Capture Image
              </button>
              <canvas
                ref={canvasRef}
                width="320"
                height="240"
                className="hidden"
              ></canvas>
              {imageCaptured && (
                <div className="mt-4">
                  <img
                    src={capturedImage}
                    alt="Captured"
                    className="w-full rounded border border-gray-300"
                  />
                  <a
                    href={capturedImage}
                    download="captured-image.png"
                    className="mt-4 p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    onClick={downloadImage}
                  >
                    Download Image
                  </a>
                </div>
              )}
            </div>
          </div>

          <button
            className="w-full p-3 rounded bg-green-600 text-white hover:bg-green-700"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
