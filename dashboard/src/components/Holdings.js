import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/allHoldings`, { withCredentials: true })
            .then((res) => setAllHoldings(res.data))
            .catch((err) => console.error(err));
    }, []);

    const totalInvestment = allHoldings.reduce((sum, s) => sum + s.avg * s.qty, 0);
    const currentValue = allHoldings.reduce((sum, s) => sum + s.price * s.qty, 0);
    const pnl = currentValue - totalInvestment;
    const pnlPercent = totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : "0.00";
    const pnlClass = pnl >= 0 ? "profit" : "loss";

    const data = {
        labels: allHoldings.map((s) => s.name),
        datasets: [{
            label: 'Stock Price',
            data: allHoldings.map((s) => s.price),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }],
    };

    return (
        <>
            <h3 className="title">Holdings ({allHoldings.length})</h3>
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allHoldings.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit";
                            return (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td>{curValue.toFixed(2)}</td>
                                    <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                                    <td className={profClass}>{stock.net}</td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col">
                    <h5>₹{totalInvestment.toFixed(2)}</h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>₹{currentValue.toFixed(2)}</h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5 className={pnlClass}>₹{pnl.toFixed(2)} ({pnlPercent}%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data} />
        </>
    );
};

export default Holdings;