import {
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
    integer,
} from "drizzle-orm/pg-core";

export const user = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    role: varchar("role", { length: 50 }).default("STUDENT").notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
        .notNull()
        .defaultNow(),
});

export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content"),
    date: timestamp("date").notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
        .notNull()
        .defaultNow(),
});
