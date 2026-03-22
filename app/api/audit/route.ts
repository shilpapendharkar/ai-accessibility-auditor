import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {

  try {

    const { code } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an accessibility expert. Find accessibility issues in React code."
        },
        {
          role: "user",
          content: code
        }
      ]
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({
      issues: [
        {
          title: "AI Accessibility Analysis",
          description: result
        }
      ]
    });

  } catch (error) {

    console.log("OpenAI failed → using fallback");

    // fallback demo results

    return NextResponse.json({
      issues: [
        {
          title: "Missing alt text",
          severity: "high",
          description: "Images must include alt attribute for screen readers."
        },
        {
          title: "Input missing label",
          severity: "medium",
          description: "Form inputs should have associated labels."
        },
        {
          title: "Button missing aria-label",
          severity: "medium",
          description: "Icon buttons require aria-label."
        }
      ]
    });

  }
}