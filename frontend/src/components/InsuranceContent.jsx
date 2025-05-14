import React, { useState } from "react";
import Styles from "./InsuranceContent.module.css";
import ImageUploader from "./ImageUploadSection";

export default function InsuranceContent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`${Styles.ContentContainer} ${showModal ? Styles.Blurred : ""}`}>
        <div className={Styles.HeaderContent}>
          <h3>We make it easy.</h3>
          <h3>Finance & Insurance is now available online, In a few easy steps</h3>
          <p>
            Turners organises insurance through Autosure – a leading provider of
            automotive-owner protection policies in New Zealand for over 30 years.
            We’ll work with you to consider the best protection to suit your
            particular circumstances and affordability.
          </p>
        </div>

        <div className={Styles.QuoteSection}>
          <p>Get your free quote today!</p>
          <button onClick={() => setShowModal(true)}>Get Started</button>
        </div>

        <div className={Styles.AutoSureLogo}>
          <p>Insurance Powered by</p>
          <img src="autosure-logo.png" alt="AutoSure Logo" />
        </div>
      </div>

      {showModal && <ImageUploader onClose={() => setShowModal(false)} />}
    </>
  );
}
