# 📈 Zerodha Clone

A full-stack fintech trading platform clone built with the **MERN stack** — replicating the core experience of Zerodha, one of India's largest stock brokers, with a marketing site, REST API backend, and a live trading dashboard.

🔗 **Live Demo:** [zerodha-clone-five-vert.vercel.app](https://zerodha-clone-five-vert.vercel.app/)

---

## 🧐 About the Project

This project was built from scratch as a hands-on deep dive into full-stack development — going beyond just writing code, to actually designing the database, building secure authentication, and deploying three separate services that talk to each other in production.

It's split into three independent parts:

| Folder | Purpose |
|---|---|
| `frontend` | Public marketing website — landing page, signup/login, pricing, support |
| `backend` | REST API — handles authentication, database operations, and business logic |
| `dashboard` | Trading dashboard — holdings, positions, funds, and order management |

> ⚠️ **Note:** Live market data API keys are not connected in this version since they require a paid subscription. The dashboard currently runs on data stored in the connected MongoDB database.

---

## ✨ Features

- 🔐 **Secure Authentication** — JWT-based auth with HTTP-only cookies for signup & login
- 🗄️ **Real Database Integration** — MongoDB Atlas cloud database, not mock data
- 📊 **Trading Dashboard** — view holdings, positions, and fund details
- 🌐 **Three Independently Deployed Services** — frontend, backend, and dashboard each deployed and connected via environment variables
- 🔄 **Cross-Origin Communication** — properly configured CORS across all three services
- 📱 **Responsive UI** — built with React for a smooth user experience

---

## 🛠️ Tech Stack

**Frontend & Dashboard**
- React.js
- React Router
- Axios
- CSS / Styled Components

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt (password hashing)
- cookie-parser
- CORS

**Database**
- MongoDB Atlas (cloud-hosted)

**Deployment**
- Vercel — Frontend & Dashboard
- Render — Backend API
- MongoDB Atlas — Database

---

## 📂 Project Structure

```
zerodha-clone/
├── frontend/        # Marketing website (React)
├── backend/         # REST API (Node.js + Express)
└── dashboard/       # Trading dashboard (React)
```

---

## ⚙️ Environment Variables

Each service requires its own environment variables to run.

**backend/.env**
```env
MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=your_frontend_deployed_url
DASHBOARD_URL=your_dashboard_deployed_url
```

**frontend/.env**
```env
REACT_APP_API_URL=your_backend_deployed_url
REACT_APP_DASHBOARD_URL=your_dashboard_deployed_url
```

**dashboard/.env**
```env
REACT_APP_API_URL=your_backend_deployed_url
```

---

## 🚀 Getting Started Locally

Clone the repo and install dependencies for each service separately:

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone

# Backend
cd backend
npm install
npm start

# Frontend
cd ../frontend
npm install
npm start

# Dashboard
cd ../dashboard
npm install
npm start
```

Make sure to set up the `.env` files in each folder as shown above before running.

---

## 🌱 What's Next

This is a working v1 — there's still room to grow:
- [ ] Connect live market data via paid stock API
- [ ] Add order placement and order history
- [ ] Improve charting and analytics on the dashboard
- [ ] Add unit and integration tests

---

## 🙋‍♀️ Author

Built with patience, persistence, and a lot of debugging by **Priyanshi**.

---

## 📄 License

This project is for educational purposes only and is not affiliated with Zerodha Broking Ltd.
