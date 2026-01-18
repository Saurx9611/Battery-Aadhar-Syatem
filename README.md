# Battery Aadhaar System

![Project Status](https://img.shields.io/badge/Status-Active_Development-success)
![Tech Stack](https://img.shields.io/badge/Stack-HTML_|_CSS_|_GSAP-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

> **Digital Passports for Energy Storage:** creating an immutable ledger of chemistry, origin, and health from mine to wheel.

## 📖 Overview

The **Battery Aadhaar System** is a conceptual web platform designed to assign a unique 12-digit digital identity (similar to the Indian Aadhaar ID) to every battery pack. This project serves as a frontend visualization of that system, demonstrating how digital passports can track a battery's lifecycle—from manufacturing and usage to second-life applications and recycling.

This repository contains the source code for the landing page, featuring high-fidelity UI design, smooth GSAP animations, and a modern "Eco-Tech" aesthetic.

## ✨ Key Features

* **Unique Digital Identity:** Visualization of the unique 12-digit code generation (e.g., `BAT-8922-X7`).
* **Live Digital Twin:** An animated central dashboard element simulating real-time monitoring of battery health (SOH), temperature, and voltage.
* **Interactive Lifecycle:** A vertical timeline tracking the battery journey: Manufacturing → Usage → Second Life → Recycling.
* **Sustainability Metrics:** Dynamic data visualization for recycling targets (95% recovery) and carbon footprint tracking.
* **High-End Motion Design:**
    * **GSAP Animations:** Smooth parallax scrolling, staggered entrances, and split-text reveals.
    * **Micro-interactions:** Magnetic hover effects and glassmorphism card lifts.
    * **Responsive:** Fully adaptive layout for desktop, tablet, and mobile.

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic)
* **Styling:** CSS3 (CSS Variables, Flexbox/Grid, Glassmorphism)
* **Animation:** [GSAP (GreenSock Animation Platform)](https://gsap.com/)
    * `gsap.core`
    * `ScrollTrigger` plugin
* **Typography:** Google Fonts ('Space Grotesk' & 'Inter')

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

You need a modern web browser (Chrome, Firefox, Safari, Edge). No backend or Node.js installation is required as this is currently a static frontend build.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Saurx9611/Battery-Aadhar-Syatem.git](https://github.com/Saurx9611/Battery-Aadhar-Syatem.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Battery-Aadhar-Syatem
    ```

3.  **Run the project:**
    * Simply open `index.html` in your browser.
    * **Recommended:** Use the "Live Server" extension in VS Code for the best development experience (hot reloading).

## 🎨 Color Palette & Design

The project uses a strict global color scheme defined in CSS variables to ensure brand consistency:

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Main Background** | `#F4F6F9` | Page background (Light Grey) |
| **Text Primary** | `#1F2937` | Headings and body text |
| **Energy Green** | `#2ECC71` | Primary accents, "Energy Storage" highlight |
| **Tech Teal** | `#16A085` | CTAs, Recycling metrics |
| **Deep Panel** | `#0B1120` | Digital Twin tablet background |
| **Card White** | `#FFFFFF` | UI Cards |

## 📂 Project Structure

```text
Battery-Aadhar-Syatem/
├── index.html       # Main HTML structure and inline JS/CSS (if applicable)
├── style.css        # Global styles (if separated)
├── script.js        # GSAP animation logic (if separated)
├── assets/          # Images and icons
└── README.md        # Documentation
