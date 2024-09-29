import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactStyles.css";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Contact() {
  const [formState, setFormState] = useState({});
  const form = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
    setModalMessage("");
    setIsError(false);
  };

  const YOUR_LATITUDE = 17.36749009755797;
  const YOUR_LONGITUDE = 78.55203976348051;

  useEffect(() => {
    if (!document.getElementById("map")._leaflet_id) {
      // Initialize map
      const map = L.map("map", {
        scrollWheelZoom: false,
        dragging: false, // Disable dragging
        zoomControl: false, // Disable zoom control
      }).setView([YOUR_LATITUDE, YOUR_LONGITUDE], 13);

      // const map = L.map("map").setView([YOUR_LATITUDE, YOUR_LONGITUDE], 13);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker for the office location
      const marker = L.marker([YOUR_LATITUDE, YOUR_LONGITUDE])
        .addTo(map)
        .bindPopup("Your Office Location")
        .openPopup();

      // Add click event listener to the marker
      marker.on("click", () => {
        // Redirect to Google Maps
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${YOUR_LATITUDE},${YOUR_LONGITUDE}`,
          "_blank"
        );
      });
    }
  }, []); // Empty dependency array to run effect only once

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_urfnpa8", "template_8bywttq", form.current, {
        publicKey: "W_tnbvN7buJU0V13l",
      })
      .then(
        () => {
          setIsError(false);
          setModalMessage("Email sent successfully!");
          setIsModalVisible(true); // Show success modal
        },
        (error) => {
          setIsError(true);
          setModalMessage("Failed to send email. Please try again.");
          setIsModalVisible(true); // Show error modal
          console.log("FAILED...", error.text);
        }
      );
      // .then(
      //   () => {
      //     alert("SUCCESS!");
      //   },
      //   (error) => {
      //     console.log("FAILED...", error.text);
      //   }
      // );
  };

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      // SecureToken: '70d9e60a-af6c-4c44-a9f3-c23553ac26de',
      // // SecureToken:'0e61bd6d-152f-4651-9b42-c0499c29e58f',
      // To : 'kotaaneeshreddy@gmail.com',
      // From : formState.email,
      // Subject : "Regarding GMR Automation",
      // Body : `Name:${formState.name} Email:${formState.email} PhoneNumber:${formState.number} Message:${formState.message}`

      Host: "smtp.elasticemail.com",
      Username: "prarambhitsolutions@gmail.com",
      Password: "9A9F3EDB6AAB3B54897B7A4C10F1BC3B8DAB",
      To: "prarambhitsolutions@gmail.com",
      From: "prarambhitsolutions@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    };
    if (window.Email) {
      window.Email.send(config).then(() => {
        alert("Email Sent Succesfully");
      });
    }
  };

  return (
    <section className="contact-component container" id="contact-section">
        <h1 className="heading">Contact</h1>
        <div className="location-contact-container">
          {/* <div className="container location-container">
            <iframe
              title="Office Location"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?q=YOUR_LATITUDE,YOUR_LONGITUDE&key=YOUR_GOOGLE_MAPS_API_KEY`}
              allowFullScreen
            ></iframe>
          </div> */}

          <div
            id="map"
            className="location-container"
          ></div>
          <div className="contact_container">
            {/* <form action="" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                value={formState.name || ""}
                placeholder="Your Full Name"
                required
                onChange={changeHandler}
              />
              <input
                type="email"
                name="email"
                value={formState.email || ""}
                placeholder="Your Email"
                required
                onChange={changeHandler}
              />
              <input
                type="number"
                name="number"
                value={formState.number || ""}
                placeholder="Enter your number"
                required
                onChange={changeHandler}
              />
              <textarea
                name="message"
                value={formState.message || ""}
                rows="7"
                placeholder="Your Message"
                required
                onChange={changeHandler}
              ></textarea>
              <input
                id="form_btn"
                type="submit"
                value="Send Message"
                className="btn btn-primary"
              />
            </form> */}
            <form className='contact-form' action="" ref={form} onSubmit={sendEmail}>
                  <div className='label-input'>
                      <label htmlFor='full-name'>Name</label>
                      <input
                        id='full-name'
                        type="text"
                        name="name"
                        value={formState.name || ""}
                        placeholder='Eg: John Doe'
                        required
                        onChange={changeHandler}
                      />
                  </div>
                  <div className='label-input'>
                      <label htmlFor='email'>Email</label>
                      <input
                        id='email'
                        type="email"
                        name="email"
                        value={formState.email || ""}
                        placeholder='Eg: johndoe@gmail.com'
                        required
                        onChange={changeHandler}
                      />
                  </div>
                  <div className='label-input'>
                      <label htmlFor='number'>Phone Number</label>
                      <input
                        id="number"
                        type="number"
                        name="number"
                        value={formState.number || ""}
                        placeholder="Eg: 9876543210"
                        required
                        onChange={changeHandler}
                      />
                  </div>
                  <div className='label-input'>
                      <label htmlFor='message'>Message</label>
                      <textarea
                        id='message'
                        name="message"
                        value={formState.message || ""}
                        rows="3"
                        placeholder='Eg: I want a quote for Web development service'
                        required
                        onChange={changeHandler}
                      ></textarea>
                  </div>
                  <div>
                      <button className='primary-button'>Submit</button>
                  </div>
              </form>
          </div>
        </div>
         {/* Modal for Success/Error */}
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isError ? "Error" : "Success"}</h2>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <style jsx>{`
        /* Modal overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        /* Modal content */
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 300px;
        }

        .modal-content h2 {
          color: ${isError ? "red" : "green"};
          margin-bottom: 15px;
        }

        .modal-content p {
          margin-bottom: 20px;
        }

        /* Modal button */
        .modal-content button {
          padding: 10px 20px;
          background-color: ${isError ? "red" : "green"};
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .modal-content button:hover {
          background-color: ${isError ? "#cc0000" : "#28a745"};
        }
      `}</style>
    </section>
  );
}

export default Contact;
