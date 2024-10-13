import { z } from "zod";

const createMovieSchema = z.object({
  body: z.object({
    title: z.string().min(6, "Min length should be 6 characters"),
    description: z.string(),
    releaseDate: z
      .string()
      .date("Please provide a valid date in this format YYYY-MM-DD"),
    genre: z.string(),
  }),
});

export const MovieValidation = { createMovieSchema };
