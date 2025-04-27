
# YUCCA-INFO 🌿

**YUCCA-INFO** is a web application that allows users to submit project proposals with detailed information like project name, description, resources, category, budget, and deadline. The application utilizes **React** with **Vite** for frontend development and **Flask** for the backend. **NextUI** is used for stylish and responsive UI components, and **React-Toastify** is integrated for notifications.

## Features ✨

- **User-friendly project submission form** 📋
- **Responsive design** that adapts to various screen sizes 📱💻
- **Toast notifications** with `react-toastify` 🔔
- **Dynamic Navbar** for easy navigation 🧭

## Tech Stack 🛠️

- **Frontend**:
  - React ⚛️
  - Vite (for fast development build) ⚡
  - NextUI (for UI components) 🎨
  - React-Toastify (for notifications) 🔔
  - Framer Motion (for animations) 🎞️

- **Backend**:
  - Flask (Python web framework) 🐍
  

## Installation ⚙️

### 1. Clone the repository

```bash
git clone https://github.com/youssefkhalifa04/YUCCA-INFO.git
cd YUCCA-INFO
```

### 2. Setup Backend (Flask)

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Create a virtual environment (recommended):

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```

3. Install the required dependencies:

```bash
pip install -r requirements.txt
```

4. Run the Flask backend server:

```bash
python app.py
```

The backend server will be running on `http://localhost:5000`.

### 3. Setup Frontend (React + Vite)

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install the frontend dependencies:

```bash
npm install
```

3. Run the Vite development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

### 4. Testing the Form Submission

Once the frontend and backend servers are running, visit the homepage at `http://localhost:3000`. You can fill out the project form and submit it. The form data will be sent to the Flask backend for processing.

## Folder Structure 📂

```
YUCCA-INFO/
│
├── backend/              # Flask backend-related files
│   ├── app.py            # Flask app entry point
│   └── requirements.txt  # Python dependencies
│
└── frontend/             # React + Vite frontend-related files
    ├── src/
    │   ├── components/   # React components like ProjectForm, Navbar, etc.
    │   ├── App.js        # Main entry point for React app
    │   ├── index.js      # React rendering logic
    │   └── ...           # Other necessary files
```

## Usage 🚀

### Submitting a Project 📝

1. Fill out the required fields:
   - **Project Name**: Enter the name of your project.
   - **Description**: Provide a detailed description of your project.
   - **Category**: Choose the project category.
   - **Budget**: Enter the estimated budget for the project.
   - **Deadline**: Select the project deadline.

2. Click the **Envoyer le projet** button to submit your project. After submission, you will see a toast notification indicating whether the submission was successful or failed.

## License 📜

This project is open-source and available under the [MIT License](LICENSE).
