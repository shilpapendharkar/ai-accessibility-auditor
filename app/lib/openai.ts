import OpenAI from "openai";

/**
 * Lightweight wrapper for calling OpenAI from server-side code.
 * Keeps the prompt and response handling centralized and typed.
 */
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function auditCode(code: string): Promise<{ result?: string; error?: string }> {
  try {
    const prompt = `
You are a senior frontend accessibility expert.
Review this React JSX code for accessibility issues based on WCAG guidelines.
Return:
1. Accessibility issues
2. Why they are a problem
3. Improved accessible code

Code:
${code}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const content = completion?.choices?.[0]?.message?.content ?? "";
    return { result: content };
  } catch (err: any) {
    return { error: err?.message ?? String(err) };
  }
}
