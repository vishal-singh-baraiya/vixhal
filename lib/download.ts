import { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";

export default function handler(req: VercelRequest, res: VercelResponse) {
    const filePath = path.resolve("./public/sample.zip"); // Place your ZIP file in 'public/'
    
    res.setHeader("Content-Disposition", 'attachment; filename="downloaded.zip"');
    res.setHeader("Content-Type", "application/zip");

    res.sendFile(filePath);
}
