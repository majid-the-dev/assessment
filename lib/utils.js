import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
};

export const userFormSchema = () => {
  return z.object({
    email: z.string().email(),
    fullName: z.string().min(5).max(25),
    password: z.string().min(8),
    role: z.string(),
  });
};
