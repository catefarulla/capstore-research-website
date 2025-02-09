import { BASE_SYSTEM_PROMPT } from "./base-prompt";

export const withoutFrictionSystemPrompt = `${BASE_SYSTEM_PROMPT}

INSTRUCTIONS FOR YOUR RESPONSES:
1. Be thorough but conversational
2. Feel free to provide detailed explanations
3. You can cover multiple aspects in one response
4. Focus on the features that match their current selection
`;
