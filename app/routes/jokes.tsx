import { json, type LinksFunction, type TypedResponse } from '@remix-run/node'
import { useLoaderData, Link, Outlet } from '@remix-run/react'
import type { JokePartialData } from '~/models/joke'
import stylesUrl from '~/styles/jokes.css'
import { db } from '~/utils/db.server'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesUrl }
]

export const loader = async (): Promise<TypedResponse<JokePartialData>> => {
  return json({
    jokes: await db.joke.findMany({
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true },
      take: 5
    })
  })
}

export default function JokesRoute() {
  const { jokes } = useLoaderData<JokePartialData>()

  return (
    <div className='jokes-layout'>
      <header className='jokes-header'>
        <div className='container'>
          <h1 className='home-link'>
            <Link to='/' title='Remix Jokes' aria-label='Remix Jokes'>
              <span className='logo'>🤪</span>
              <span className='logo-medium'>J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className='jokes-main'>
        <div className='container'>
          <div className='jokes-list'>
            <Link to='.'>Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {jokes.map(({ id, name }) => (
                <li key={id}>
                  <Link to={id}>{name}</Link>
                </li>
              ))}
            </ul>
            <Link to='new' className='button'>
              Add your own
            </Link>
          </div>
          <div className='jokes-outlet'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
