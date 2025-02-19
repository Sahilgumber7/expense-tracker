import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Debugging line


export default defineConfig({
  dialect: "postgresql",
  schema: "./src/utils/schema.js", 
  out: "./drizzle",
  provider: "pg",  
  dbCredentials: {
    url: process.env.DATABASE_URL, 
  },
});

