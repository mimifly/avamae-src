import React, { useState } from "react";

function Contact() {
  const [formInput, setFormInput] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: {
      phone1: "",
      phone2: "",
    },
    Message: "",
    bIncludeAddressDetails: false,
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
    },
  });
  const [formError, setFormError] = useState({
    FullName: "",
    EmailAddress: "",
    "PhoneNumbers[0]": "",
    "PhoneNumbers[1]": "",
    Message: "",
    "AddressDetails.AddressLine1": "",
    "AddressDetails.AddressLine2": "",
    "AddressDetails.CityTown": "",
    "AddressDetails.StateCounty": "",
    "AddressDetails.Postcode": "",
    "AddressDetails.Country": "",
  });

  const [showPhoneOptional, setShowPhoneOptional] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  function sanitiseForm(input) {
    return Object.keys(input).reduce((output, element) => {
      if (element === "PhoneNumbers") {
        return {
          ...output,
          [element]: Object.values(sanitiseForm(input[element])),
        };
      } else if (typeof input[element] === "object") {
        return { ...output, [element]: sanitiseForm(input[element]) };
      } else if (typeof input[element] === "boolean") {
        return { ...output, [element]: input[element] };
      } else if (input[element].trim().length < 1) {
        return output;
      } else {
        return { ...output, [element]: input[element].trim() };
      }
    }, {});
  }

  function clearErrors(errors) {
    setFormError(
      Object.keys(errors).reduce((output, element) => {
        return { ...output, [element]: "" };
      }, {})
    );
  }

  function handleShowPhoneOptional(e) {
    e.preventDefault();
    setShowPhoneOptional(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisableSubmit(true);
    clearErrors(formError);
    const sanitisedForm = sanitiseForm(formInput);
    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitisedForm),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setDisableSubmit(false);
        if (res.Status === "1") {
          setFormSuccess(true);
        } else
          res.Errors.forEach((e) => {
            setFormError((prevFormError) => ({
              ...prevFormError,
              [e.FieldName]: e.MessageCode.replace(/\_/g, " "),
            }));
          });
      })
      .catch((e) => {
        setDisableSubmit(false);
        console.log(e);
      });
  }

  function handleChange(e, type) {
    if (type !== undefined) {
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        ...{
          [type]: {
            ...prevFormInput[type],
            ...{ [e.target.name]: e.target.value },
          },
        },
      }));
    } else
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        ...{
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value,
        },
      }));
  }
  return (
    <div className="helper-container helper-container-contact">
      <div class="form-container">
        <h1 className="heading-body heading-section">Contact us</h1>
        <p className="contact-intro">
          Proin eget enim sapien. Duis sit amet velit semper, iaculis magna eu,
          facilisis lorem. Nulla vestibulum sapien eget tincidunt placerat. Ut
          massa erat.
        </p>
        <form
          className={formSuccess ? "formHidden" : ""}
          onSubmit={handleSubmit}
        >
          <div class="name-email-wrapper">
            <label>
              <p>Full name</p>
              <input
                type="text"
                name="FullName"
                onChange={handleChange}
                value={formInput.FullName}
              />
              <span className="error-message">{formError.FullName}</span>
            </label>
            <label>
              <p>Email address</p>
              <input
                type="email"
                name="EmailAddress"
                onChange={handleChange}
                value={formInput.EmailAddress}
              />
              <span>{formError.EmailAddress}</span>
            </label>
          </div>
          <label>
            <p>
              Phone number 01 <span className="optional-text">- optional</span>
            </p>
            <input
              type="string"
              name="phone1"
              onChange={(e) => handleChange(e, "PhoneNumbers")}
              value={formInput.PhoneNumbers.phone1}
            />
            <span>{formError["PhoneNumbers[0]"]}</span>
          </label>
          <label className={showPhoneOptional ? "" : "formHidden"}>
            <p>
              Phone number 02 <span className="optional-text">- optional</span>
            </p>
            <input
              type="text"
              name="phone2"
              onChange={(e) => handleChange(e, "PhoneNumbers")}
              value={formInput.PhoneNumbers.phone2}
            />
            <span>{formError["PhoneNumbers[1]"]}</span>
          </label>
          <button
            className="button-add-phone"
            onClick={handleShowPhoneOptional}
          >
            Add new phone number
          </button>
          <label className="message">
            <p>
              Message{" "}
              <span className="optional-text message-length-text">
                Maximum text length is 500 characters
              </span>
            </p>
            <textarea
              rows="5"
              name="Message"
              onChange={handleChange}
              value={formInput.Message}
            />
            <span>{formError.Message}</span>
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="bIncludeAddressDetails"
              onChange={handleChange}
              value={formInput.bIncludeAddressDetails}
            />
            <p>Add address details</p>
          </label>
          <div className={formInput.bIncludeAddressDetails ? "" : "formHidden"}>
            {" "}
            {/* Wrap the optional address fields */}
            <label>
              <p>Address line 1</p>
              <input
                type="text"
                name="AddressLine1"
                onChange={(e) => handleChange(e, "AddressDetails")}
                value={formInput.AddressDetails.AddressLine1}
              />
              <span>{formError["AddressDetails.AddressLine1"]}</span>
            </label>
            <label>
              <p>
                Address line 2 <span className="optional-text">- optional</span>
              </p>
              <input
                type="text"
                name="AddressLine2"
                onChange={(e) => handleChange(e, "AddressDetails")}
                value={formInput.AddressDetails.AddressLine2}
              />
              <span>{formError["AddressDetails.AddressLine2"]}</span>
            </label>
            <div className="address-details">
              <label>
                <p>City/Town</p>
                <input
                  type="text"
                  name="CityTown"
                  onChange={(e) => handleChange(e, "AddressDetails")}
                  value={formInput.AddressDetails.CityTown}
                />
                <span className="error-message">
                  {formError["AddressDetails.CityTown"]}
                </span>
              </label>
              <label>
                <p>State/County</p>
                <input
                  type="text"
                  name="StateCounty"
                  onChange={(e) => handleChange(e, "AddressDetails")}
                  value={formInput.AddressDetails.StateCounty}
                />
                <span className="error-message">
                  {formError["AddressDetails.StateCounty"]}
                </span>
              </label>
              <label>
                <p>Postcode</p>
                <input
                  type="text"
                  name="Postcode"
                  onChange={(e) => handleChange(e, "AddressDetails")}
                  value={formInput.AddressDetails.Postcode}
                />
                <span className="error-message">
                  {formError["AddressDetails.Postcode"]}
                </span>
              </label>
              <label>
                <p>Country</p>
                <input
                  type="text"
                  name="Country"
                  onChange={(e) => handleChange(e, "AddressDetails")}
                  value={formInput.AddressDetails.Country}
                />
                <span className="error-message">
                  {formError["AddressDetails.Country"]}
                </span>
              </label>
            </div>
          </div>
          {/* Disable sumbit form on submit until load */}
          <button className="button-submit" disabled={disableSubmit}>
            Submit
          </button>
        </form>
        <div className={formSuccess ? "submissionMessage" : "formHidden"}>
          <div className="submissionTick">
            <img src="./resources/Icon_Valid.svg" />
          </div>
          <p className="submissionSent">Your message has been sent</p>
          <p className="submissionContact">
            We will be in contact with you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
