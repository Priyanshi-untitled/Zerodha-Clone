import React from "react";
import Menu from "./Menu";

const TopBar = () => {
    return (
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">NIFTY 50</p>
                    <p className="index-points">22,500.30</p>
                    <p className="percent" style={{ color: "#27ae60" }}>▲ +0.45%</p>
                </div>
                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-points">74,100.20</p>
                    <p className="percent" style={{ color: "#27ae60" }}>▲ +0.38%</p>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default TopBar;