# Tuwaiq Automation - Siwar Website Testing Suite


##  Project Overview

This is an automated testing suite for the **Siwar Website** (https://siwar.ksaa.gov.sa/), developed using Cypress framework. The project aims to ensure quality and reliability of the Siwar platform through comprehensive end-to-end testing.

### Project Details
- **Framework:** Cypress v15.5.0
- **Language:** JavaScript
- **Target Website:** Siwar - Saudi Arabia Standards Authority
- **Reporting:** Mochawesome HTML Reports
- **Video Recording:** Enabled for all test runs

## 🔧 Prerequisites

Before setting up the project, ensure you have the following installed:

### Required Software
- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **Visual Studio Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Verify Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

```

## 📦 Installation & Setup

### Step 1: Clone the Repository
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd tuwaiq0Automation
```

### Step 2: Install Dependencies
```bash
# Install all project dependencies
npm install

# This will install:
# - Cypress (testing framework)
# - Mochawesome Reporter (HTML reports)
# - Cypress Axe (accessibility testing)
# - Cypress Audit (performance testing)
```

### Step 3: Verify Cypress Installation
```bash
# Open Cypress Test Runner to verify installation
npx cypress open

# Or verify Cypress version
npx cypress version
```


### Quick Start Commands

#### 1. Run All Tests (Headless)
```bash
npm test
# OR
npx cypress run
```

#### 2. Run Tests with Browser UI
```bash
npm run test:headed
# OR
npx cypress run --headed
```

#### 3. Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
# OR
npx cypress open
```

#### 4. Run Tests in Specific Browser
```bash
# Chrome
npm run test:chrome

# Firefox
npm run test:firefox

# Edge
npm run test:edge
```

## Project Structure

```
tuwaiq0Automation/
├── cypress/                      # Main Cypress directory
│   ├── downloads/                # Downloaded files during tests
│   ├── e2e/                     # Test specifications
│   │   ├─Test specifications.cy.js   
│   ├── fixtures/                # Test data files
│   │   └── example.json        # Sample test data
│   ├── reports/                 # Test execution reports
│   │   ├── index.html          # Latest HTML report
│   │   └── videos/             # Test execution videos
│   ├── screenshots/            # Test failure screenshots
│   ├── support/                # Support files and custom commands
│   │   ├── commands.js         # Custom Cypress commands
│   │   └── e2e.js             # Global configuration
│   └── videos/                # Test execution videos
├── node_modules/              # Installed npm packages
├── cypress.config.js          # Cypress configuration file
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
└── README.md                # Project documentation (this file)
```
