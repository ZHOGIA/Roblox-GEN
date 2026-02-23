# 🎮 Roblox Niche Content Generator

A dynamic, front-end web application that helps creators generate highly specific **AI Image Prompts** and **Video Content Plans** tailored explicitly for Roblox niches (e.g., Obby, Simulator, Horror Roleplay). 

Built to streamline the ideation process for Roblox YouTubers, TikTokers, and GFX artists.

## ✨ Features

- **3-Step Wizard Navigation:** A guided, intuitive flow to select the perfect parameters stringing together:
  - 🧍 **Step 1: Character & Action** (e.g., Bacon Hair, Slender, Fighting a Boss)
  - 🗺️ **Step 2: Environment & Props** (e.g., Neon Obby, Bloxy Cola, Dominus)
  - 🎥 **Step 3: Visual Style & Camera Options** (e.g., Roblox GFX Blender Render, POV, Action Shots)
- **Dual Output Generation:**
  - 🎨 **Ready-to-use Image Prompt:** Perfect for inputting into Midjourney, DALL-E 3, or Leonardo.AI to generate thumbnails.
  - 🎬 **Video Content Plan / Storyboard:** A structured plan for short-form content featuring a Hook, Visual Intro, Core Action, and Call-to-Action.
- **Premium Design:** Features a dark-mode aesthetic with vibrant "Roblox" neon accents, smooth micro-animations, and a highly responsive grid layout.
- **Copy to Clipboard:** One-click copy functionality for quick pasting into other tools.

## 🛠️ Tech Stack

This project is built purely with standard web technologies for maximum portability and zero setup time:

- **HTML5:** Semantic structure and layout.
- **Vanilla CSS3:** Custom design system without heavy frameworks, utilizing CSS Variables for theming and Keyframes for animations.
- **Vanilla JavaScript (ES6):** State management, DOM manipulation, and dynamic string interpolation for generating prompts.

## 🚀 How to Run

Because this app uses Vanilla HTML/CSS/JS with no build steps or server dependencies, running it is incredibly simple:

1. Clone or download this repository.
2. Navigate to the project folder (`Roblox`).
3. Double-click the `index.html` file to open it in your default web browser.
4. Start generating!

## 📂 File Structure

```text
📁 Roblox/
├── 📄 index.html  # Main application structure and wizard UI
├── 📄 styles.css  # Global styles, animations, and dark mode theming
├── 📄 script.js   # State management, step navigation, and prompt generation logic
└── 📄 README.md   # Project documentation
```

## 🤝 Customization

You can easily modify the prompt options by editing the `data-value` attributes inside the standard HTML buttons in `index.html`. You can also tweak the output templates directly inside the `generateImagePrompt()` and `generateVideoPlan()` functions located in `script.js`.
