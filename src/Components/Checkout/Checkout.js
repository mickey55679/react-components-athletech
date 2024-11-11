import "./Checkout.css";
import React, { useState } from "react";
import creditCardChip from "../Assets/chip.png";
import visa from "../Assets/visa.png";

function Checkout() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("mm");
  const [expYear, setExpYear] = useState("yy");
  const [cvv, setCvv] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div className="container">
        <div className="card-container">
          {/* Front of the card */}
          <div
            className={`front ${isFlipped ? "flipped" : ""}`}
            style={{
              transform: isFlipped
                ? "perspective(1000px) rotateY(-180deg)"
                : "perspective(1000px) rotateY(0deg)",
            }}
          >
            <div className="image">
              <img src={creditCardChip} alt="Credit Card Chip" />
              <img src={visa} alt="Visa Logo" />
            </div>
            <div className="card-number-box">
              {cardNumber || "################"}
            </div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">
                  {cardHolder || "full name"}
                </div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">{expMonth}</span> /{" "}
                  <span className="exp-year">{expYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back of the card */}
          <div
            className="back"
            style={{
              transform: isFlipped
                ? "perspective(1000px) rotateY(0deg)"
                : "perspective(1000px) rotateY(180deg)",
            }}
          >
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box">{cvv}</div>
              <img src={visa} alt="Visa Logo" />
            </div>
          </div>
        </div>

        {/* Form for card inputs */}
        <form action="">
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength="16"
              className="card-number-input"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              className="card-holder-input"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                className="month-input"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
              >
                <option value="mm" disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                className="year-input"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
              >
                <option value="yy" disabled>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="text"
                maxLength="4"
                className="cvv-input"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
              />
            </div>
          </div>
          <input type="submit" value="submit" className="submit-btn" />
        </form>
      </div>
    </>
  );
}

export default Checkout;
