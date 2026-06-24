# Google Sheet AI Analyzer (Frontend)

A lightweight, minimalist React and TypeScript interface built as a functional proof-of-concept.

It provides an intuitive UI for users to input a public Google Sheet link and submit natural language queries to interact with their data seamlessly.

### 🔗 Links

- **Live Demo:** [Google Sheet Analyzer Frontend](https://google-sheet-analyzer-frontend.vercel.app/)
- **Backend Repository:** [github.com/alexandercsierra/google-sheet-analyzer-backend](https://github.com/alexandercsierra/google-sheet-analyzer-backend)

---

### 🛠️ Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Styling/UI:** Minimalist, functional proof-of-concept layout
- **Build Tool:** Vite

---

### 🚀 Getting Started

To run the frontend interface locally, follow these steps:

#### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. You will also need the backend service running locally or have access to a hosted instance.

#### 2. Environment Setup

Create a `.env` file in the root directory to point the frontend to your backend API:

```env
VITE_BASE_URL=url_to_your_local_backend
VITE_DEFAULT_SHEET_URL=url_to_your_example_sheet
VITE_DEFAULT_SHEET_NAME=Sheet1
VITE_DEFAULT_CELL_RANGE=A1:C31
```
