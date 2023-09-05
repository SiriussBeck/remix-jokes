import { z } from 'zod'

export const Joke = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  content: z.string()
})

export type Joke = z.infer<typeof Joke>

export interface JokeData {
  joke: Joke
}

export interface JokePartialData {
  jokes: Pick<Joke, 'id' | 'name'>[]
}
