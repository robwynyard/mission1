import React, { useState } from "react";
import Styles from "./ImageUploadSection.module.css";

const ImageUploader = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [result, setResult] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewURL(URL.createObjectURL(file));
    setResult([]);
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:4000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data?.predictions || []);
    } catch (err) {
      console.error("Error:", err);
      setResult([{ tagName: "Error occurred", probability: 0 }]);
    }
  };

  return (
    <div className={Styles.ModalOverlay}>
      <div className={Styles.ModalContent}>
        <button className={Styles.CloseButton} onClick={onClose}>
          X
        </button>

        <img src="turnerslogo.png" alt="" />
        
        <div className={Styles.UploadContainer}>
          <h2 className={Styles.Heading}>
            Upload an Image of Your Vehicle to Get Started
          </h2>

          <p>
            We use AI technology to identify your vehicle's model, making our
            quoting process FAST!
          </p>
          <div className={Styles.UploadBtnContainer}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={(ref) => (window.uploadInput = ref)}
              className={Styles.HiddenInput}
            />
            <button
              type="button"
              onClick={() => window.uploadInput?.click()}
              className={Styles.UploadBtn}
            >
              Upload Image
            </button>
          </div>
        </div>

        {previewURL && (
          <div className={Styles.PreviewImage}>
            <img src={previewURL} alt="Preview" width="395" />
          </div>
        )}

        <div className={Styles.BtnContainer}>
          <button
            onClick={handleSubmit}
            disabled={!image}
            className={Styles.NextBtn}
          >
            Next
          </button>
        </div>

        {result.length > 0 && (
          <div className={Styles.ResultContainer}>
            <strong className={Styles.ResultHeading}>
              We have detected your vehicle
            </strong>
            <div className={Styles.PredictionResult}>
              {result.slice(0, 2).map((prediction, index) => (
                <p key={index}>{prediction.tagName}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
