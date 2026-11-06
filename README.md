# 🔐 Workintech Login Application

An interactive, responsive authentication form built with **React 19** and **Vite**, featuring real-time client-side form validation, stateful feedback, and automated end-to-end (E2E) testing powered by **Cypress**.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Validation Criteria](#-validation-criteria)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
- [Testing with Cypress](#-testing-with-cypress)
  - [Test Scenarios](#test-scenarios)
  - [Running the Tests](#running-the-tests)
- [Component Architecture](#-component-architecture)
- [License & Acknowledgments](#-license--acknowledgments)

---

## 🚀 Overview

The **Workintech Login Application** is a front-end authentication module designed to provide seamless user interactions with rigorous input validation. It guides users through creating valid credentials before enabling form submission, preventing common input errors and invalid states upfront.

Upon successful submission, the application dynamically displays a personalized confirmation dashboard (`Success` screen) with an option to log out and return to the login interface.

---

## ✨ Key Features

- **⚡ Real-time Validation**: Instant regex-based evaluation for email and password inputs as the user types.
- **🛡️ Smart Submit Control**: The submit button remains disabled until all validation requirements and terms agreement are satisfied.
- **💬 Contextual Error Alerts**: Informative error messages appear only when an entered value violates security or formatting criteria.
- **🔄 Stateful Navigation**: Conditional rendering of the Login view and Success view without unnecessary full-page reloads.
- **🎨 Clean & Responsive UI**: Centered card layouts, smooth keyframe animations (`fadeIn`), and accessible controls.
- **🧪 Automated E2E Testing**: Complete Cypress test suite covering valid submissions, edge cases, and disabled states.

---

## 📋 Validation Criteria

| Field | Rule / Pattern | Error Message |
| :--- | :--- | :--- |
| **Email** | Standard email format (`user@domain.com`) | `Please enter a valid e-mail address.` |
| **Password** | Min. 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special symbol (`@$!%*?&`) | `The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.` |
| **Terms Checkbox** | Mandatory agreement checkbox (`required`) | Submit button remains disabled until checked |

---

## 🛠️ Tech Stack

- **UI Framework**: [React 19](https://react.dev/)
- **Build Tool & Dev Server**: [Vite 8](https://vitejs.dev/)
- **E2E Testing**: [Cypress](https://www.cypress.io/)
- **Styling**: Vanilla CSS3 (Custom animations & responsive flexbox layouts)
- **Linting**: [ESLint](https://eslint.org/)

---

## 📂 Project Structure

```text
WorkintechLogin/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js        # E2E test scenarios for login & validation
│   ├── fixtures/
│   │   └── example.json       # Mock fixture data
│   └── support/
│       ├── commands.js        # Custom Cypress commands
│       └── e2e.js             # Support configurations
├── public/                    # Static assets
├── src/
│   ├── assets/                # Images and icons
│   ├── components/
│   │   ├── Login.jsx          # Login form component with validation logic
│   │   ├── Login.css          # Login component styles & animations
│   │   ├── Success.jsx        # Post-login welcome & status screen
│   │   └── Success.css        # Success card styling
│   ├── App.jsx                # Root component managing user authentication state
│   ├── App.css                # Global application styling
│   ├── index.css              # Baseline typography & CSS resets
│   └── main.jsx               # Application entry point
├── cypress.config.js          # Cypress test runner configuration
├── eslint.config.js           # ESLint configuration
├── index.html                 # Single page application HTML shell
├── package.json               # Dependencies and npm scripts
└── vite.config.js             # Vite configuration
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. Clone or download the repository to your local system:
   ```bash
   git clone <repository-url>
   cd WorkintechLogin
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Open your browser and navigate to:
```text
http://localhost:5173
```

### Building for Production

Compile and bundle the project for production deployment:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🧪 Testing with Cypress

End-to-End tests verify user workflows and input boundary conditions.

### Test Scenarios

The tests in [`cypress/e2e/login.cy.js`](cypress/e2e/login.cy.js) cover:

1. **Successful Submission**:
   - Fills out valid email and compliant strong password.
   - Checks the terms and conditions checkbox.
   - Verifies the submit button is enabled and clickable.
   - Verifies successful redirection to the welcome screen showing the user's email.

2. **Invalid Email Validation**:
   - Enters an invalid email address.
   - Checks that exactly one error message is displayed.
   - Asserts that the submit button remains disabled.

3. **Multiple Invalid Fields**:
   - Enters both an invalid email and a weak password.
   - Verifies that two error messages appear concurrently.
   - Confirms that the submit button remains disabled.

4. **Unchecked Terms & Conditions**:
   - Enters valid credentials without accepting the terms.
   - Verifies no error messages are triggered.
   - Asserts that the submit button stays disabled until consent is granted.

### Running the Tests

1. Ensure the development server is active:
   ```bash
   npm run dev
   ```

2. Open the Cypress Test Runner UI:
   ```bash
   npx cypress open
   ```
   *Select **E2E Testing** and choose your browser (Chrome/Electron/Firefox) to run `login.cy.js`.*

3. Or run tests headlessly via the terminal:
   ```bash
   npx cypress run
   ```

> **Tip**: You can add convenient Cypress commands to your `package.json` scripts:
> ```json
> "scripts": {
>   "cypress:open": "cypress open",
>   "cypress:run": "cypress run"
> }
> ```

---

## 🧩 Component Architecture

- **`App.jsx`**: Houses the root state `user`. If a user is logged in, it displays `<Success />`; otherwise, it renders `<Login />`.
- **`Login.jsx`**: Handles controlled form state for email, password, and the checkbox. Evaluates regex expressions dynamically on change, shows error hints, and bubbles authentication up via `onLoginSuccess`.
- **`Success.jsx`**: Displays a success card with the logged-in email and provides an `onLogout` button that resets the application state.

---

## 📄 License & Acknowledgments

- Developed as part of the **Workintech** curriculum/challenges.
- Open-source under the [MIT License](LICENSE).
