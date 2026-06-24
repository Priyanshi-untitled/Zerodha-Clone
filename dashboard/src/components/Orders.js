import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/allOrders`, { withCredentials: true })
            .then((res) => { setAllOrders(res.data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="orders"><p style={{ padding: "20px" }}>Loading orders...</p></div>;

    if (allOrders.length === 0) {
        return (
            <div className="orders">
                <div className="no-orders">
                    <p>You haven't placed any orders today</p>
                    <Link to="/" className="btn">Get started</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="orders">
            <h3 className="title">Orders ({allOrders.length})</h3>
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Price</th>
                            <th>Mode</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>₹{Number(order.price).toFixed(2)}</td>
                                <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.mode}</td>
                                <td>{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;