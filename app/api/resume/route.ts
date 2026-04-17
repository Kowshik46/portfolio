import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "Kowshik_resume.docx");
    const fileBuffer = await readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": 'attachment; filename="Kowshik-Kesavarapu-Resume.docx"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Resume not found.", { status: 404 });
  }
}
