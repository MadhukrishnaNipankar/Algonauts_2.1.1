import React, { useState, useEffect } from "react";
import "../styles/PricingCard.css";
import "../styles/PricingApp.css";

const PricingCard = ({ title, price }) => {
  // State variables for dynamic data
  const [storage, setStorage] = useState("");
  const [users, setUsers] = useState("");
  const [sendUp, setSendUp] = useState("");

  useEffect(() => {
    // Fetch data from backend API
    fetchPricingData(); // Define this function to fetch pricing data
  }, []); // Run once on component mount

  // Function to fetch pricing data from backend API
  const fetchPricingData = async () => {
    try {
      // Make API call to fetch pricing data
      const response = await fetch("backend/pricingDataEndpoint");
      const data = await response.json();

      // Update state variables with fetched data
      setStorage(data.storage);
      setUsers(data.users);
      setSendUp(data.sendUp);
    } catch (error) {
      console.error("Error fetching pricing data:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-users-allowed">{users} users in total</div>
        <div className="card-send-up">Send up to {sendUp}</div>
      </div>
      <button className="card-btn">READ MORE</button>
    </div>
  );
};

const App = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Plans You Would Like to Buy</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMonthly ? "20.99" : "188.9"}
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "34.99" : "349.9"}
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "79.99" : "499.9"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
