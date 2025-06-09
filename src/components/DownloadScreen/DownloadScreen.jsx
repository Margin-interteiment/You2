import React from "react";
import "./DownloadScreen.css";
import photoForDownloadScreen from "../../assets/photoForDownloadScreen.png";

export default function DownloadScreen() {
  return (
    <div className="download-screen">
      <div className="download-screen-media">
        <img
          className="download-screen-img"
          src={photoForDownloadScreen}
          alt="image for page"
        />
      </div>
      <div className="download-screen-content">
        <p className="download-screen-text">
          Начни сейчас делать то что можешь, чтобы вскоре жить так, как хочешь.
        </p>
        <div className="download-screen-buttons">
          <button className="download-screen-btn btn-apple" type="button">
            <span className="download-span"> СКАЧАТЬ ДЛЯ</span>
          </button>
          <button className="download-screen-btn btn-android" type="button">
            <span className="download-span"> СКАЧАТЬ ДЛЯ</span>
          </button>
        </div>
      </div>
    </div>
  );
}
