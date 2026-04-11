# AI Salary Negotiation Coach 

A smart, targeted AI assistant designed to help professionals confidently navigate job offers and salary negotiations. Built using **Node.js**, **Express**, and the **Google Gemini 2.5 API**, this application acts as a specialized career coach.

##  Features
* **Personalized Strategies:** Generates custom salary negotiation advice based on your specific role, experience, current salary, location, and the offer on the table.
* **Strict Guardrails:** The AI is heavily protected against prompt injection and off-topic questions. It is strictly constrained to *only* answer questions related to compensation, career coaching, and job offers. Anything else is politely declined.
* **Modern Premium UI:** Features a highly aesthetic, responsive frontend utilizing glassmorphism, fluid animations, and custom CSS styling.

##  Tech Stack
* **Frontend:** Vanilla HTML, CSS (Custom Animations & Glassmorphism), JavaScript
* **Backend:** Node.js, Express.js
* **AI Integration:** Google Gemini (`@google/genai` API)

##  How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harshraj979/AI_Salary_Negotiator_Coach.git
   ```
2. **Navigate to the server directory and install dependencies:**
   ```bash
   cd server
   npm install
   ```
3. **Set up your environment variables:**
   Create a `.env` file inside the `/server` directory:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   PORT=3000
   ```
4. **Start the backend server:**
   ```bash
   node index.js
   ```
5. **Access the frontend:**
   Open the browser and navigate to `http://localhost:3000` to start interacting with the coach!
