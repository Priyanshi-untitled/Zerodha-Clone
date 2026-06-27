require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { UserModel } = require('./model/UserModel');
const verifyUser = require('./middleware/authMiddleware');
const bodyParser = require("body-parser");
const cors = require("cors");
const dns = require('dns');

const {HoldingsModel} = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

dns.setServers(['8.8.8.8', '8.8.4.4']);

const allowedOrigins = [
  "https://zerodha-frontend.onrender.com",
  "https://zerodha-dashboard.onrender.com",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());

app.get('/addHoldings', verifyUser, async (req, res) => {
    const tempHoldings = [
        { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
        { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
        { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
        { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
        { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
        { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
        { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%" },
        { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
        { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%" },
        { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%" },
        { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
    ];
    for (const item of tempHoldings) {
        const holding = new HoldingsModel({ ...item, userId: req.user._id });
        await holding.save();
    }
    res.send("Holdings seeded!");
});

app.get('/addPositions', verifyUser, async (req, res) => {
    const tempPositions = [
        { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
    ];
    for (const item of tempPositions) {
        const position = new PositionsModel({ ...item, userId: req.user._id });
        await position.save();
    }
    res.send("Positions seeded!");
});

app.get('/allHoldings', verifyUser, async (req, res) => {
    const allHoldings = await HoldingsModel.find({ userId: req.user._id });
    res.json(allHoldings);
});

app.get('/allPositions', verifyUser, async (req, res) => {
    const allPositions = await PositionsModel.find({ userId: req.user._id });
    res.json(allPositions);
});

app.get('/allOrders', verifyUser, async (req, res) => {
    const allOrders = await OrdersModel.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(allOrders);
});

app.post('/newOrder', verifyUser, async (req, res) => {
    const newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        userId: req.user._id,
    });
    await newOrder.save();
    res.send("Order saved!");
});

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) return res.json({ success: false, message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ username, email, password: hashedPassword });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("token", token, cookieOptions);
        res.status(201).json({ success: true, message: "Signed up successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.json({ success: false, message: "All fields required" });
        const user = await UserModel.findOne({ email });
        if (!user) return res.json({ success: false, message: "Incorrect email or password" });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ success: false, message: "Incorrect email or password" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("token", token, cookieOptions);
        res.json({ success: true, message: "Logged in successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.get('/verify', verifyUser, (req, res) => {
    res.json({ status: true, user: req.user.username });
});

app.post('/logout', (req, res) => {
    res.clearCookie("token", cookieOptions);
    res.json({ success: true, message: "Logged out" });
});

mongoose.connect(url, {
    serverSelectionTimeoutMS: 5000,
    family: 4,
    dbName: "zerodha"
})
.then(() => console.log("MongoDB Connected!"))
.catch((err) => console.log("DB Error:", err));

app.listen(PORT, () => {
    console.log("App Started on port", PORT);
});