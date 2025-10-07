import React, { useState } from "react";

const ImageUpload = ({ onAnalyze }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    // Simulated AI result
    const randomResult =
      Math.random() < 0.5 ? "✅ Safe Image" : "🚫 Offensive Content Detected";
    onAnalyze(randomResult);
  };

  return (
    <section className="py-12 bg-blue-900 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Upload Image for Analysis
      </h2>

      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border-2 border-blue-600 rounded-lg p-2 w-64 text-white cursor-pointer"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-64 h-64 object-cover rounded-lg shadow-md"
          />
        )}

        <button
          onClick={handleUpload}
          className="mt-5 px-6 py-2 bg-white text-black rounded-md hover:bg-yellow-300 transition-all"
        >
          Analyze
        </button>
      </div>
    </section>
  );
};

export default ImageUpload;
