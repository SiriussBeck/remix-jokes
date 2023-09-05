import { json, type TypedResponse, type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import type { JokeData } from '~/models/joke'
import { db } from '~/utils/db.server'

export const loader = async ({
  params
}: LoaderArgs): Promise<TypedResponse<JokeData>> => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  })

  if (!joke) {
    throw new Error('Joke not found!')
  }

  return json({ joke })
}

export default function JokeRoute() {
  const { joke } = useLoaderData<JokeData>()

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{joke.content}</p>
      <Link to='.'>"{joke.name}" Permalink</Link>
    </div>
  )
}
