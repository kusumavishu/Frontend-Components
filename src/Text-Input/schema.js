import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  secondName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  thirdName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  fourName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  fiveName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  sixName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  userName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  maniName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  rohithName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
});
