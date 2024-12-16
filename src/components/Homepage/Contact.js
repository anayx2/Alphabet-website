"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Contact = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    aboutProject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay?.start();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // Replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="discuss" className="section mod--discuss">
        <div
          data-w-id="7092799e-d269-0bf1-02e2-a8316ce8ccd0"
          className="container"
        >
          <div className="columns mod--discuss">
            <div className="columns__col mod--discuss is-1">
              <div className="max-w-4xl mx-auto px-4 py-8">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to discuss <br /> your project with us?
                  </h2>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleInputChange}
                        placeholder=""
                        className="mt-1 block w-full shadow-sm p-2 border-b-2 focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        className="mt-1 block w-full shadow-sm p-2 border-b-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* About Project */}
                  <div className="mb-6">
                    <label
                      htmlFor="aboutProject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About Project
                    </label>
                    <textarea
                      id="aboutProject"
                      name="aboutProject"
                      rows="4"
                      value={formState.aboutProject}
                      onChange={handleInputChange}
                      placeholder=""
                      className="mt-1 block w-full shadow-sm p-2 border-b-2 focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Policy and Submit Button */}
                  <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <p className="text-sm text-gray-600 mb-4 md:mb-0">
                      By sending this form I confirm that I have read and accept
                      the{" "}
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none w-[auto]"
                    >
                      {isSubmitting ? "SENDING..." : "SEND A MESSAGE"}
                      <svg
                        className="ml-2 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z" />
                        <path d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Success and Error States */}
                {isSuccess && (
                  <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
                    Thank you! We will contact you ASAP.
                  </div>
                )}
                {isError && (
                  <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-md">
                    Hmm...something went wrong. Please try again.
                  </div>
                )}
              </div>
            </div>
            <div className="columns__col mod--discuss is-2">
              <div className="discuss__sidebar">
                <div className="discuss__sidebar-top">
                  <img
                    width="31"
                    height="31"
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64ba8960d94f86aae7e77933_icon-clutch.svg"
                    loading="lazy"
                    alt="clutch icon"
                    className="discuss__reviews-icon"
                  />
                  <h3 className="heading-6">Our clients say</h3>
                </div>
                <div className="discuss__sidebar-body">
                  <Swiper
                    ref={swiperRef}
                    className="swiper mod--discuss"
                    slidesPerView={0.93}
                    loop={true}
                    
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className="swiper-slide mod--discuss" style={{margin:"10px"}}>
                      <div className="text-size-20 text-weight-medium">
                        The site developed by Alphabet Technology projected a
                        very premium experience, successfully delivering the
                        client’s messaging to customers. Despite external
                        challenges, the team’s performance was exceptional.
                      </div>
                      <div className="author">
                        <img
                          width="56"
                          alt="Aaron Nwabuoku avatar"
                          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c384be46dfd24f8039d6c_form-review-ava-01.webp"
                          loading="lazy"
                          className="author__ava"
                        />
                        <div className="author__text-wrap">
                          <div className="text-weight-medium">
                            Aaron Nwabuoku
                          </div>
                          <div className="text-size-14 opacity-60">
                            Founder, ChatKitty
                          </div>
                        </div>
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide mod--discuss" style={{margin:"10px"}}>
                      <div className="text-size-20 text-weight-medium">
                        Thanks to Alphabet Technology&#x27;s work, the client
                        scored 95 points on the PageSpeed insights test and
                        increased their CR by 7.5%. They frequently communicated
                        via Slack and Google Meet, ensuring an effective
                        workflow.
                      </div>
                      <div className="author">
                        <img
                          width="56"
                          alt="Viktor Rovkach avatar"
                          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/650d626822cc3e81c79a8aab_form-review-ava-02.webp"
                          loading="lazy"
                          className="author__ava"
                        />
                        <div className="author__text-wrap">
                          <div className="text-weight-medium">
                            Viktor Rovkach
                          </div>
                          <div className="text-size-14 opacity-60">
                            Brand Manager at felyx
                          </div>
                        </div>
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide mod--discuss" style={{margin:"10px"}}>
                      <div className="text-size-20 text-weight-medium">
                        The client is thrilled with the new site and excited to
                        deploy it soon. Alphabet Technology manages tasks well
                        and communicates regularly to ensure both sides are
                        always on the same page and all of the client’s needs
                        are addressed promptly.
                      </div>
                      <div className="author">
                        <img
                          width="56"
                          alt="Rahil Sachak Patwa avatar"
                          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c3ce08742cc3c0200b362_form-review-ava-03.webp"
                          loading="lazy"
                          className="author__ava"
                        />
                        <div className="author__text-wrap">
                          <div className="text-weight-medium">
                            Rahil Sachak Patwa
                          </div>
                          <div className="text-size-14 opacity-60">
                            Founder, TutorChase
                          </div>
                        </div>
                      </div>{" "}
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="discuss__bg-wrap">
          <div className="discuss__bg w-embed">
            <video
              className="discuss__bg"
              autoPlay
              loop
              muted
              playsInline
              loading="lazy"
            >
              <source
                src="https://d3vlq52qrgdnc2.cloudfront.net/bg-discuss.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
