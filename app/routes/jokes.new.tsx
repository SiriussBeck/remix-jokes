export default function JokesNewRoute() {
  return (
    <div>
      <p>Add your own hilarios joke</p>
      <form action='post'>
        <div>
          <label>
            Name: <input type='text' name='name' />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name='content'></textarea>
          </label>
        </div>
      </form>
    </div>
  )
}
