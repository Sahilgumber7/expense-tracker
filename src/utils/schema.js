import { serial, varchar, pgTable } from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  amount: varchar("amount", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 255 })
}); 