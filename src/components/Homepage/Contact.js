import React, { useState } from "react";
import ContactForm from "../ContactForm";

const MeetingScheduler = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const SendMessageIcon = () => (
    <svg
      aria-hidden="true"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="100%"
      height="100%"
    >
      <path
        fillRule="evenodd"
        d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true); // Open the ContactForm modal
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false); // Close the ContactForm modal
  };

  return (
    <>
      <section id="discuss" className="section mod--discuss">
        <div
          data-w-id="7092799e-d269-0bf1-02e2-a8316ce8ccd0"
          className="container"
        >
          <div
            className="columns mod--discuss"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="bg-white rounded-[32px] max-w-4xl w-full p-12 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ready to discuss
                <br />
                your project with us?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Let's talk about how we can craft a user experience that not
                only looks great but drives real growth for your product.
              </p>
              <div className="form-submit-wrap flex justify-center">
                <button
                  className="button w-inline-block"
                  aria-label="Send a message"
                  type="button"
                  onClick={handleOpenContactForm} // Trigger ContactForm on click
                >
                  <div className="button__overflow">
                    <div className="button__texts active">
                      <span className="button__text is-absolute">
                        SEND A MESSAGE
                      </span>
                      <span className="button__text">SEND A MESSAGE</span>
                    </div>
                  </div>
                  <div className="button__icons is-white active">
                    <div className="button__icon-anim">
                      <div className="icon-small w-embed">
                        <SendMessageIcon />
                      </div>
                      <div className="icon-small is-absolute w-embed">
                        <SendMessageIcon />
                      </div>
                    </div>
                    <div className="button__bg active"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render the ContactForm if open */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ContactForm onClose={handleCloseContactForm} />
        </div>
      )}
    </>
  );
};

export default MeetingScheduler;
