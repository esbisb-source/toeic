// Contains the prompts related to TOEIC

const TOEIC_PROMPT = "This is an example prompt for TOEIC.";

function getTodayDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10);
}

module.exports = { TOEIC_PROMPT, getTodayDate };