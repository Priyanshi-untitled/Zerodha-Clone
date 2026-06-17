import React, { useState } from "react";

function ChargesTable() {
  const [tab, setTab] = useState("equity");

  return (
    <div className="container mt-5">
      <div className="d-flex gap-4 border-bottom pb-2">
        <span onClick={() => setTab("equity")} style={{cursor:"pointer", color: tab==="equity" ? "#387ed1" : "#333", fontWeight: tab==="equity" ? "bold":"normal"}}>Equity</span>
        <span onClick={() => setTab("currency")} style={{cursor:"pointer", color: tab==="currency" ? "#387ed1" : "#333", fontWeight: tab==="currency" ? "bold":"normal"}}>Currency</span>
        <span onClick={() => setTab("commodity")} style={{cursor:"pointer", color: tab==="commodity" ? "#387ed1" : "#333", fontWeight: tab==="commodity" ? "bold":"normal"}}>Commodity</span>
      </div>

      {tab === "equity" && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
              <td>0.05% on the sell side</td>
              <td>0.15% of intrinsic value on options bought & exercised; 0.15% on sell side (on premium)</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>NSE: 0.00307%, BSE: 0.00375%</td>
              <td>NSE: 0.00307%, BSE: 0.00375%</td>
              <td>NSE: 0.00183%, BSE: 0</td>
              <td>NSE: 0.03553% (on premium), BSE: 0.0325% (on premium)</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      )}

      {tab === "currency" && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Currency futures</th>
              <th>Currency options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>₹20/executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>No STT</td>
              <td>No STT</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>NSE: 0.00035%, BSE: 0.00045%</td>
              <td>NSE: 0.0311%, BSE: 0.001%</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      )}

      {tab === "commodity" && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Commodity futures</th>
              <th>Commodity options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>₹20/executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>MCX: 0.0021%, NSE: 0.0001%</td>
              <td>MCX: 0.0418%, NSE: 0.001%</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td>Agri: ₹1/crore, Non-agri: ₹10/crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      )}

      <p className="mt-3">
        <a href="">Calculate your costs upfront</a> using our brokerage calculator
      </p>
    </div>
  );
}

export default ChargesTable;