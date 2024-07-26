import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { makeAuthPostReq } from "../utils/serverHelper";
import uploadImgToCloudinary from "../utils/Cloudinary_Upload";
import HashLoader from 'react-spinners/HashLoader';

const SignUpForm = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageCaptured, setImageCaptured] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    email: "",
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    photo: "",
    Class: "",
    ID: ""
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (studentData.password !== studentData.confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match!");
    }

    try {
      // Upload the captured image to Cloudinary if available
      if (capturedImage) {
        const cloudinaryResponse = await uploadImgToCloudinary(capturedImage);
        studentData.photo = cloudinaryResponse.url;
      }

      const response = await makeAuthPostReq("/auth/register", studentData);
      if (response && !response.error) {
        toast.success("Congratulations! You are successfully registered.");
        setLoading(false);
        navigate("/Admin");
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(`An unexpected error occurred: ${error.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-10 px-[60px]">
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-5xl font-bold text-green-600">AstraNex</h1>
          </Link>
          <p className="text-xl text-gray-600 mt-2">Online Registration</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="id">
              Student ID
            </label>
            <input
              className="form-input"
              type="text"
              id="id"
              name="ID"
              value={studentData.ID}
              onChange={handleChange}
              placeholder="Enter your student ID"
            />
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-1/2">
              <label className="form-label" htmlFor="class">
                Class
              </label>
              <input
                className="form-input"
                type="text"
                id="class"
                name="Class"
                value={studentData.Class}
                onChange={handleChange}
                placeholder="Enter your Class"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label htmlFor="gender" className="form-label">
                Gender*
              </label>
              <select
                name="gender"
                className="form-input"
                value={studentData.gender}
                onChange={handleChange}
              >
                <option value="Select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={studentData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-1/2">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                value={studentData.password}
                onChange={handleChange}
                placeholder="Enter the password"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={studentData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter the password again."
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="phone">
              Mobile Number
            </label>
            <input
              className="form-input"
              type="tel"
              id="phone"
              name="phone"
              value={studentData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
            />
          </div>

          <div className="mb-6">
            <label className="form-label">Capture Face</label>
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
                className="mt-4 p-2 px-3 rounded bg-blue-600 text-white hover:bg-blue-700"
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
            </div>
          </div>

          <button
            className="w-full p-3 rounded-lg text-lg mt-5 font-semibold bg-green-600 text-white hover:bg-green-700"
            type="submit"
            disabled={loading}
          >
            {loading ? <HashLoader size={35} color='white' /> : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
