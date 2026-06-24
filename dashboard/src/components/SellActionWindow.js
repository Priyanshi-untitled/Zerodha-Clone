import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const SellActionWindow = ({ uid, price }) => {
    const { closeSellWindow } = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(price || 0.0);

    const handleSellClick = async () => {
        try {
            await axios.post(`${API_URL}/newOrder`, {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL",
            }, { withCredentials: true });
        } catch (err) {
            console.error("Order failed:", err);
        }
        closeSellWindow();
    };

    return (
        <div className="container" id="sell-window" draggable="true" style={{ borderTop: "4px solid #e05b5b" }}>
            <div className="header" style={{ background: "#e05b5b" }}>
                <h3>{uid} <span>NSE</span></h3>
                <p className="market-options">
                    <label><input type="radio" name="sell-type" defaultChecked /> Market</label>
                    <label><input type="radio" name="sell-type" /> Limit</label>
                    <label><input type="radio" name="sell-type" /> SL</label>
                </p>
            </div>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity} />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice} />
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required ₹{(stockPrice * stockQuantity).toFixed(2)}</span>
                <div>
                    <button className="btn" style={{ background: "#e05b5b", color: "#fff" }} onClick={handleSellClick}>Sell</button>
                    <button className="btn btn-grey" onClick={closeSellWindow}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;