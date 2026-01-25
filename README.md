# Chef Claude - AI Recipe Generator

A React web app that transforms your available ingredients into custom recipes using AI. Enter any ingredients you have on hand, and after adding four, Claude AI generates a complete recipe tailored to what's in your kitchen.

## Features

- **Ingredient Input**: Add ingredients one by one to build your recipe base
- **AI Recipe Generation**: Powered by Anthropic's Claude API to create custom recipes
- **Dynamic UI**: Real-time updates as you add ingredients
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

- **React** - Component-based UI framework
- **CSS** - Custom styling
- **Anthropic API** - AI-powered recipe generation

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Anthropic API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/DaniqueJ-R/chef-claude
cd chef-claude
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API key
```
REACT_APP_ANTHROPIC_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:5173](http://localhost:5173/) to view it in your browser

## Usage

1. Enter ingredients into the input field
2. Add at least 4 ingredients to unlock recipe generation
3. Click "Get a recipe" to generate your custom recipe
4. View your AI-generated recipe with instructions

## Live Demo

[View Live Site](https://chef-claude-proj.vercel.app/)

## License

This project is open source and available under the MIT License.