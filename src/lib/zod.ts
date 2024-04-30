import z from "zod";

export const questionSchema = z.object({
  question: z.string().min(1).max(200),
});

export const contactSchema = z
  .object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    message: z.string().min(1).max(500),
  })
  .refine((data) => {
    return data.name && data.email && data.message;
  });
