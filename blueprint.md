# Lotto Number Recommendation Site

## Overview

This project is a simple web application that generates and displays recommended lottery numbers. The goal is to provide a clean, user-friendly interface for users to get their lucky numbers, with a focus on modern design and a great user experience.

## Design & Features

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Modern UI:** A visually appealing and responsive design that incorporates a vibrant color palette, modern typography, and a subtle background texture.
*   **Engaging Animations:** The numbers animate into view when generated, creating a dynamic user experience.
*   **Interactive Elements:** The "Generate" button has a "glow" effect on hover to provide clear visual feedback.
*   **Accessibility:** The application uses a semantic HTML structure, making it accessible to screen readers.
*   **Immediate Content:** Numbers are displayed on the initial page load.

## Project Structure

*   `index.html`: The main HTML file.
*   `style.css`: The stylesheet for the application.
*   `main.js`: The JavaScript file containing the application logic.
*   `blueprint.md`: This file, documenting the project.

## Current Plan: UI/UX Enhancement

*   **Update `index.html`:** Link the 'Poppins' Google Font and refine the page structure.
*   **Enhance `style.css`:**
    *   Define a new color palette using CSS variables.
    *   Apply a background texture to the body.
    *   Improve typography and spacing for a cleaner layout.
    *   Add `@keyframes` for number animations.
    *   Create a "glow" effect for the button using `box-shadow`.
*   **Refactor `main.js`:**
    *   Modify the script to dynamically create and append number elements to allow animations to re-trigger.
    *   Ensure numbers are generated and displayed on the initial page load.