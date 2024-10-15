import React, { useEffect, useState } from "react";
import "./PersonalDetails.scss";
import { Country, State, City, } from "country-state-city";
import AppLogo from "../../../assets/app_logo.jpeg";

const PersonalDetails = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [inputType, setInputType] = useState("text");
  useEffect(() => {
    // Fetch all countries when the component loads
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setStates(State.getStatesOfCountry(countryCode)); // Fetch states when country changes
    setCities([]); // Reset cities
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setCities(City.getCitiesOfState(selectedCountry, stateCode)); // Fetch cities when state changes
  };
  return (
    <div className="container">
      <div className="logincard">
        <div className="applogo">
          <img src={AppLogo} alt="AppLogo" />
        </div>
        <div className="basic-info">
          <p className="title">Basic Info</p>
          <div className="details">
            <input type="tel" placeholder="Please enter your phone number"  maxLength={10} />

            <input type="text" placeholder="Please enter your name" />

            <input type="email" placeholder="Please enter your email" />
            <input
              type="text"
              placeholder="Please enter your school/college name"
            />
            <input
              type={inputType}
              placeholder="dd-mm-yy"
              onFocus={() => setInputType("date")}
              onBlur={() => setInputType("text")}
            />
            <div className="gender-cont">
              <p>Please select your gender</p>
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">female</label>
            </div>
          </div>
        </div>

        <div className="basic-info">
          <p className="title">Personal Info</p>
          <div className="details">
            <input type="text" placeholder="Please enter your address" />

            <input type="tel" placeholder="Please enter your pincode" maxLength={5}/>

            <select onChange={handleCountryChange} value={selectedCountry}>
              <option value="">Select your Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
            <select onChange={handleStateChange} value={selectedState}>
              <option value="">Select your State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>

            <select>
              <option value="">Select your District</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Refer code" />
            <div className="terms-cont">
              <input type="checkbox" id="term&condition" />
              <label htmlFor="term&condition">
                By continuing, you agree our terms & condition
              </label>
            </div>

            <button className="btn-register">Register</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PersonalDetails;
