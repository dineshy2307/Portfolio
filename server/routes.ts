import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint - now handled by frontend with EmailJS
  app.post("/api/contact", async (req, res) => {
    // This endpoint is kept for compatibility but EmailJS handles the actual sending
    res.json({ 
      success: true, 
      message: "Contact form configured to send emails directly via EmailJS" 
    });
  });

  // Resume download endpoint - direct download of attached PDF
  app.get("/api/resume", (req, res) => {
    // Redirect to the actual resume file
    res.redirect("/assets/Dinesh_Reddy_Resume_1751336453859.pdf");
  });

  const httpServer = createServer(app);
  return httpServer;
}
