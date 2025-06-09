import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h2 className="footer-contact-title">Мы в соц.сетях</h2>
        <ul className="footer-contact-list">
          <li className="footer-contact-item">
            <a
              className="footer-contact-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="#9C9C9C"
              >
                <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
              </svg>
            </a>
          </li>
          <li className="footer-contact-item">
            <a
              className="footer-contact-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                fill="#9C9C9C"
              >
                <path d="M 16 3 C 8.832 3 3 8.832 3 16 L 3 34 C 3 41.168 8.832 47 16 47 L 34 47 C 41.168 47 47 41.168 47 34 L 47 16 C 47 8.832 41.168 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086 5 45 9.914 45 16 L 45 34 C 45 40.086 40.086 45 34 45 L 16 45 C 9.914 45 5 40.086 5 34 L 5 16 C 5 9.914 9.914 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.937 14 14 18.937 14 25 C 14 31.063 18.937 36 25 36 C 31.063 36 36 31.063 36 25 C 36 18.937 31.063 14 25 14 z M 25 16 C 29.982 16 34 20.018 34 25 C 34 29.982 29.982 34 25 34 C 20.018 34 16 29.982 16 25 C 16 20.018 20.018 16 25 16 z"></path>
              </svg>
            </a>
          </li>
          <li className="footer-contact-item">
            <a
              className="footer-contact-link"
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="#9C9C9C"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </a>
          </li>
          <li className="footer-contact-item">
            <a
              className="footer-contact-link vk-link"
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#9C9C9C"
              >
                <path d="M12.46 17.5c-4.89 0-7.72-3.27-7.84-8.75H7.7c.09 3.9 1.8 5.56 3.15 5.9V8.75h2.06v3.34c1.32-.14 2.7-1.61 3.16-3.34h2.06c-.36 2.09-1.81 3.56-2.88 4.21 1.07.51 2.7 1.76 3.46 4.54h-2.19c-.46-1.61-1.61-2.8-3.17-2.94v2.94h-.89z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-adress">
        <p className="footer-adress-text">
          Украина г.Киев
          <span className="footer-adress-subtext"> вул. Николая Мазура, 4</span>
        </p>
      </div>
    </footer>
  );
}
