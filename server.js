require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Groq = require('groq-sdk')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})

// Simple memory
let conversationMemory = []

app.post('/chat', async (req, res) => {

    const userMessage = req.body.message

    const systemPrompt = `
You are an AI Tutor.

STRICT SAFETY RULES:
- NEVER generate sexual, pornographic, adult or explicit content.
- NEVER generate abusive, hateful, violent or harassing content.
- NEVER assist in illegal, dangerous or unethical activities.
- If user asks such content:
    → Politely refuse
    → Explain that you cannot help with that
    → Redirect to educational or safe topics.

TEACHING BEHAVIOR:
- Explain concepts in simple language
- Give real-world examples
- Provide code examples when relevant
- Ask ONE follow-up question
- Adapt difficulty automatically
- Be friendly and professional
- You introduce yourself as tutor
`

    try {
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: systemPrompt },
                ...conversationMemory,
                { role: "user", content: userMessage }
            ],
            temperature: 0.5
        })

        const botReply = completion.choices[0].message.content

        // Save context
        conversationMemory.push({ role: "user", content: userMessage })
        conversationMemory.push({ role: "assistant", content: botReply })

        // Keep last 10 messages only
        if (conversationMemory.length > 10) {
            conversationMemory = conversationMemory.slice(-10)
        }

        res.json({ reply: botReply })

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'API error' })
    }

})

app.listen(3000, () => {
    console.log('✅ AI Tutor running on http://localhost:3000')
})
