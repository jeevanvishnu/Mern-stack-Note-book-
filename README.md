# 📝 MERN Stack Note Book

A **Full-Stack Note-Taking Application** built using the **MERN Stack** (MongoDB, Express, React, Node.js).  
This app allows users to create, update, and delete notes with a title and description, and includes a fully functional REST API, real-world features like rate limiting using Upstash Redis, and a completely responsive UI.

🔗 **Live Demo:** [Visit the App](https://mern-stack-note-book-1.onrender.com)

---

## 🚀 Features

- ✨ **Create, Read, Update, and Delete Notes**  
  Simple and intuitive UI to manage your notes.
  
- 🛠️ **Fully Functional REST API**  
  Built with Express.js and tested for robustness.
  
- ⚙️ **Rate Limiting with Upstash Redis**  
  Implemented real-world rate limiting to prevent abuse of the API.

- 📱 **Responsive Design**  
  Optimized for all screen sizes using modern CSS techniques.

---

## 🧰 Tech Stack

- **Frontend:** React.js, Tailwind CSS (or Bootstrap/CSS3)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Rate Limiting:** Upstash Redis
- **Hosting:** Render

---

## 📦 Getting Started (Local Development)

### 1. Clone the repo
```bash
https://github.com/jeevanvishnu/Mern-stack-Note-book-.git
cd mern-stack-note-book

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

MONGO_URI=your_mongodb_connection_string
PORT=5000
REDIS_URL=your_upstash_redis_url

# In backend directory
npm run dev

# In frontend directory
npm start

