# Smart AI Tutor

An intelligent tutoring application powered by AI that provides interactive, personalized learning experiences. The tutor adapts to your learning style and provides real-world examples, code snippets, and follow-up guidance.

## Features

- **AI-Powered Teaching**: Uses Groq's Llama model for intelligent, conversational tutoring
- **Safety-First Design**: Built-in safeguards to ensure appropriate, educational content
- **Conversation Memory**: Maintains context across multiple interactions for coherent learning sessions
- **Real-World Examples**: Provides practical examples and code snippets when relevant
- **Adaptive Difficulty**: Automatically adjusts explanations based on your learning needs
- **User-Friendly Interface**: Clean, modern chat interface for seamless interaction

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML/CSS/JavaScript
- **AI Model**: Groq API (Llama 3.3 70B)
- **Dependencies**:
  - Express.js - Web framework
  - Cors - Cross-origin resource sharing
  - Groq SDK - AI model integration
  - Axios - HTTP client
  - Dotenv - Environment configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Groq API Key ([Get one here](https://console.groq.com))

### Installation

1. Clone or navigate to the project directory:
```bash
cd smart-ai-tutor
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Groq API key:
```
GROQ_API_KEY=your_api_key_here
```

### Running the Application

Start the server:
```bash
node server.js
```

The application will be available at `http://localhost:3000` (or your configured port).

## How It Works

1. User sends a message through the chat interface
2. The message is sent to the backend `/chat` endpoint
3. The AI tutor processes the message with context from conversation history
4. The tutor applies safety guidelines and provides an educational response
5. The response is displayed in the chat interface

## Safety & Ethical Guidelines

The tutor follows strict safety rules:
- No generation of sexual, pornographic, or explicit content
- No abusive, hateful, or harassing content
- No assistance with illegal or unethical activities
- Polite refusal with redirection to safe, educational topics

## Project Structure

```
smart-ai-tutor/
├── server.js           # Backend server and API endpoints
├── package.json        # Project dependencies and metadata
├── .env               # Environment variables (create this file)
└── public/
    └── index.html     # Frontend chat interface
```

## Future Enhancements

- Database integration for persistent conversation history
- User authentication and profiles
- Multiple conversation sessions
- Content filtering and moderation
- Performance analytics and learning progress tracking

## License

ISC

## Support

For issues or questions, please check the project repository or documentation.
