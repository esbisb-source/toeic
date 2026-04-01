const axios = require('axios');

const CLAUDE_API_URL = 'https://api.claude.ai/v1/questions'; // Replace with the actual Claude API URL
const SLACK_WEBHOOK_URL = 'YOUR_SLACK_WEBHOOK_URL'; // Replace with your Slack webhook URL

async function sendDailyToeicQuestions() {
    try {
        // Fetch daily TOEIC questions from the Claude API
        const response = await axios.get(CLAUDE_API_URL);
        const questions = response.data.questions; // Adjust according to actual API response structure

        // Prepare message for Slack
        const message = {
            text: 'Daily TOEIC Questions:',
            blocks: questions.map(q => ({
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `*Question:* ${q.question}\n*Answer:* ${q.answer}`
                }
            }))
        };

        // Send message to Slack
        await axios.post(SLACK_WEBHOOK_URL, message);
        console.log('Daily TOEIC questions sent to Slack successfully.');
    } catch (error) {
        console.error('Error sending daily TOEIC questions:', error);
    }
}

// Execute the function
sendDailyToeicQuestions();