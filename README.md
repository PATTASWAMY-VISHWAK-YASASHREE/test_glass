# Liquid Glass React Component

This repository contains an exact recreation of the `liquid-glass-react` component adapted for a Vite + React + TypeScript setup, allowing you to easily view and interact with the effect locally.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## How to Run It

Follow these steps to run the application and view the liquid glass effect preview:

1. **Install Dependencies:**
   Run the following command in the root of the project to install all required packages:
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   Launch the local Vite server:
   ```bash
   npx vite
   ```

3. **View the Preview:**
   Once the server starts, it will output a local URL (typically `http://localhost:5173/`).
   Open that URL in your web browser. You should see the exact demo page from the original repository, complete with the interactive glass container, background elements, and the control panel to tweak the refraction mode, displacement scale, and more.

## Notes

- The component requires WebGL to render properly. Ensure hardware acceleration is enabled in your browser.
- There is a known limitation with the original shader where edge refraction effects might not render properly on Safari and Firefox. Chromium-based browsers (Chrome, Edge) are recommended for the best experience.
