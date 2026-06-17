import React from "react";

function AccountCharges() {
  return (
    <div className="container mt-5">
      <h3>Charges for account opening</h3>
      <table className="table mt-3">
        <thead>
          <tr><th>Type of account</th><th>Charges</th></tr>
        </thead>
        <tbody>
          <tr><td>Individual account</td><td><span className="badge bg-success">FREE</span></td></tr>
          <tr><td>Minor account</td><td><span className="badge bg-success">FREE</span></td></tr>
          <tr><td>NRI account</td><td>₹500</td></tr>
          <tr><td>HUF account</td><td><span className="badge bg-success">FREE</span> (online) / ₹500 (offline)</td></tr>
          <tr><td>Partnership, LLP, and Corporate accounts (offline only)</td><td>₹500</td></tr>
        </tbody>
      </table>

      <h3 className="mt-5">Demat AMC (Annual Maintenance Charge)</h3>
      <p className="border-start border-primary ps-3 py-2">Free for first year*</p>
      <p>From second year onwards, for BSDA accounts:</p>
      <table className="table">
        <thead>
          <tr><th>Value of holdings</th><th>AMC</th></tr>
        </thead>
        <tbody>
          <tr><td>Up to ₹4 lakh</td><td><span className="badge bg-success">FREE</span></td></tr>
          <tr><td>₹4 lakh – ₹10 lakh</td><td>₹100 per year + 18% GST, charged quarterly</td></tr>
          <tr><td>Above ₹10 lakh</td><td>₹300 per year + 18% GST, charged quarterly</td></tr>
        </tbody>
      </table>
      <p>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
      <p><small>*Resident individual accounts only.</small></p>

      <h3 className="mt-5">Charges for optional value added services</h3>
      <table className="table">
        <thead>
          <tr><th>Service</th><th>Billing Frequency</th><th>Charges</th></tr>
        </thead>
        <tbody>
          <tr><td>Tickertape</td><td>Monthly / Quarterly / Annual</td><td>Free: 0 | Pro: 249/699/2399</td></tr>
          <tr><td>Smallcase</td><td>Per transaction</td><td>Buy & Invest More: 100 | SIP: 10</td></tr>
          <tr><td>Kite Connect</td><td>Monthly</td><td>Connect: 500 | Personal: Free</td></tr>
        </tbody>
      </table>

      <h3 className="mt-5">Charges explained</h3>
      <div className="row">
        <div className="col-6">
          <h6>Securities/Commodities transaction tax</h6>
          <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

          <h6 className="mt-4">Transaction/Turnover Charges</h6>
          <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

          <h6 className="mt-4">Stamp charges</h6>
          <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
        </div>
        <div className="col-6">
          <h6>GST</h6>
          <p>Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)</p>

          <h6 className="mt-4">SEBI Charges</h6>
          <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

          <h6 className="mt-4">DP (Depository participant) charges</h6>
          <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged when stocks are sold, irrespective of quantity.</p>

          <h6 className="mt-4">AMC (Account maintenance charges)</h6>
          <p>Free for the first year on all new resident individual accounts. For BSDA: zero if holding value is less than ₹4,00,000. For non-BSDA: ₹300/year + 18% GST charged quarterly.</p>
        </div>
      </div>
    </div>
  );
}

export default AccountCharges;