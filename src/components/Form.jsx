import pic5 from "../../public/pic5.jpg";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    howdidyoufindme: "",
    phone: "",
    fiancesname: "",
    weddingdate: "",
    lovestory: "",
    questions: "",
    weddinglocation: "",
    email: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <div className="relative bg-white">
      <div className="lg:absolute pt-1 lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 pb-2 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={pic5}
            alt="picture"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold font-abc  tracking-tight sm:text-4xl">{`Let's work together`}</h2>
            <p className="mt-4 text-lg font-abc  text-gray-500 sm:mt-3">
              I'd love to hear more about your wedding! Please complete the form
              below with your details OR shoot me an email at{" "}
              <Link
                href="mailto: bookings@mariamphotography.co.uk"
                className="font-abc text-brown "
              >
                bookings@mariamphotography.co.uk
              </Link>
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input
                type="hidden"
                name="access_key"
                value="a797b459-99ed-4004-b2ce-48f1814c8aa6"
              />
              <input
                type="hidden"
                name="redirect"
                value="http://mariamphotography.co.uk/success"
              ></input>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium font-abc  text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full shadow-sm sm:text-sm bg-white bg-transparent	 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium font-abc  text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-white focus:border-white border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-abc  text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium  font-abc text-gray-700"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium font-abc  text-gray-700"
                >
                  Fiance's Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="FiancesFullname"
                    id="FiancesFullname"
                    autoComplete="FiancesFullname"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium font-abc  text-gray-700"
                >
                  When is your wedding ?
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="weddingdate"
                    id="weddingdate"
                    autoComplete="weddingdate"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium font-abc  text-gray-700"
                >
                  Where is your wedding location ?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="weddinglocation"
                    id="weddinglocation"
                    autoComplete="weddinglocation"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="love-story"
                    className="block text-sm font-abc  font-medium text-gray-700"
                  >
                    Tell me your love story
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm font-abc  text-gray-500"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="love-story"
                    name="love-story"
                    aria-describedby="love-story"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block  font-abc text-sm font-medium text-gray-700"
                >
                  Do you have any questions ?
                </label>
                <div className="mt-1">
                  <input
                    id="questions"
                    name="questions"
                    type="text"
                    autoComplete="questions"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="how-did-you-find-me"
                  className="block text-sm  font-abc font-medium text-gray-700"
                >
                  How did you find me ?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="how-did-you-find-me"
                    id="how-did-you-find-me"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-1">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 font-abc border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brown "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
