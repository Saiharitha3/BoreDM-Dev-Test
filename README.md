# BoreDM - React PDF Report Generator

A React application for generating PDF reports with dynamic data entry and professional formatting.

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## Installation & Setup

### 1. Clone or Download the Project

```bash
# If using git
git clone <repository-url>
cd BoreDM-Dev-Test

```
### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 19.0.0
- React PDF Renderer 4.3.0
- React Icons 5.5.0
- React Toastify 11.0.5

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`


## Project Structure

```
BoreDM-Dev-Test/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── App.jsx            # Main application component
│   ├── index.jsx          # Application entry point
│   ├── styles.css         # Global styles
│   ├── boredm-logo.png    # Company logo
│   └── triangleIcon.png   # Triangle icon asset
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Usage

1. **Open the Application**: Navigate to `http://localhost:3000` in your browser
2. **Download**: Use the download pdf button to save the PDF to your device


## Troubleshooting

### Common Issues:

1. **Port 3000 already in use**:
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Then run npm start again
   ```

2. **Dependencies not installed**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**: Make sure all image assets are in the `src/` folder


