import React, { useState, useEffect } from "react";
import HeaderV2 from "../HeaderV2";
import FooterV2 from "../FooterV2";
import backIcon from "../../img/back-icon.png";
import backgroundLogo from "../../img/background-logo.png";
import freeflexLogo from "../../img/freeflex-logo.png";

const Step2 = ({ onNext, onBack }) => {
  const [inputData, setInputData] = useState({ industry: "", country: "" });
  const [progress, setProgress] = useState(0); // Initialize progress state

  // Use an effect to trigger the progress bar animation
  useEffect(() => {
    setProgress(25); // Set progress to 25% for Step 2
  }, []);

  const handleNext = () => {
    if (inputData.industry && inputData.country) {
      onNext(inputData); // Pass the inputData (industry and country) to GetStarted.js
    } else {
      alert("Please select an industry and a country.");
    }
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (fmr. Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <div
      className="step2-container"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "#111",
        backgroundImage: `url(${backgroundLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#fff",
      }}
    >
      <HeaderV2 />

      <div style={{ margin: "2rem 0" }}>
        <img
          src={freeflexLogo}
          alt="Freeflex Logo"
          style={{
            width: "300px",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          {/* Industry Dropdown */}
          <div style={{ flex: 1, marginRight: "1rem" }}>
            <label
              htmlFor="industry"
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: "normal",
              }}
            >
              What industry does your project fall under?
            </label>
            <select
              id="industry"
              value={inputData.industry}
              onChange={(e) =>
                setInputData({ ...inputData, industry: e.target.value })
              }
              style={{
                padding: "0.8rem",
                borderRadius: "5px",
                width: "100%",
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #555",
              }}
            >
              <option value="">Select an industry</option>
              <option value="3D">3D</option>
              <option value="Marketing">Marketing</option>
              <option value="Developer">Developer</option>
              <option value="Data Analyst">Data Analyst</option>
            </select>
          </div>

          {/* Country Dropdown */}
          <div style={{ flex: 1, marginLeft: "1rem" }}>
            <label
              htmlFor="country"
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: "normal",
              }}
            >
              What country are you based in?
            </label>
            <input
              id="country"
              list="country-list"
              placeholder="Start typing..."
              value={inputData.country}
              onChange={(e) =>
                setInputData({ ...inputData, country: e.target.value })
              }
              style={{
                padding: "0.8rem",
                borderRadius: "5px",
                width: "100%",
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #555",
              }}
            />
            <datalist id="country-list">
              {countries.map((country, index) => (
                <option key={index} value={country} />
              ))}
            </datalist>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
            width: "100%",
            maxWidth: "800px",
            margin: "2rem auto 0",
          }}
        >
          <button
            onClick={onBack}
            style={{
              background: "none",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              boxShadow: "none",
            }}
          >
            <img
              src={backIcon}
              alt="Back"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </button>

          <button
            onClick={handleNext}
            style={{
              padding: "0 2rem",
              height: "50px",
              fontSize: "1rem",
              borderRadius: "50px",
              backgroundColor: "#fff",
              color: "#111",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Continue
          </button>
        </div>
      </div>

      <div
        style={{
          width: "55%",
          height: "5px",
          borderRadius: "6px",
          backgroundColor: "#333",
          margin: "0 auto -8px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            borderRadius: "6px",
            backgroundColor: "#DEFE7F",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>

      <FooterV2 />
    </div>
  );
};

export default Step2;
