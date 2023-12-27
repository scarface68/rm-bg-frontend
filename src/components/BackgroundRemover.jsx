import axios from "axios";
import React, { useState, useEffect } from "react";

const BackgroundRemover = () => {
  const [originalImagePreview, setOriginalImagePreview] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (processedImage) {
      fetch(processedImage)
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setDownloadUrl(url);
        });
    }
  }, [processedImage]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setSelectedImage(file);
    reader.onload = (e) => {
      setOriginalImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image_file", selectedImage);
    axios
      .post("https://removebgapiscarface68.onrender.com/remove", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setProcessedImage(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
        color: "white", // BEGIN: Change text color to white
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "center", margin: '20px' }}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ margin: "50px" }}>
            <h2 style={{ color: "white" }}>Original Image</h2>

            {originalImagePreview && (
              <div>
                <img
                  src={originalImagePreview}
                  alt="Original"
                  style={{ maxHeight: "300px", maxWidth: "300px" }}
                />
              </div>
            )}
          </div>

          <div style={{ margin: "50px" }}>
            <h2 style={{ color: "white" }}>Processed Image</h2>
            {processedImage && (
              <div>
                <img
                  src={processedImage}
                  alt="Processed"
                  style={{ maxHeight: "300px", maxWidth: "300px" }}
                />
              </div>
            )}
            {downloadUrl && (
              <div style={{ padding: "20px" }}>
                <a
                  href={downloadUrl}
                  download="processed_image.png"
                  style={{ color: "white" }}
                >
                  Download Processed Image
                </a>
              </div>
            )}
          </div>
        </div>

        <button onClick={handleSubmit}>Remove bg</button>
      </div>
    </div>
  );
};

export default BackgroundRemover;
