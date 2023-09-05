import { type TypedResponse, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import type { JokeData } from '~/models/joke'
import { db } from '~/utils/db.server'

export const loader = async (): Promise<TypedResponse<JokeData>> => {
  const count = await db.joke.count()
  const randomRowNumber = Math.floor(Math.random() * count)
  const [randomJoke] = await db.joke.findMany({
    skip: randomRowNumber,
    take: 1
  })

  return json({ joke: randomJoke })
}

export default function JokesIndexRoute() {
  const { joke } = useLoaderData<JokeData>()

  return (
    <div>
      <p>Here's a random joke</p>
      <p>{joke.content}</p>
      <Link to={joke.id}>"{joke.name}" Permalink</Link>
    </div>
  )
}
