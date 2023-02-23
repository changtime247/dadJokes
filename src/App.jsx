import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [joke, setJoke] = useState('')

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'User-Agent': 'https://github.com/changtime247/dadJokes',
        },
      })
      const { joke } = await res.json()
      setIsLoading(false)
      setJoke(joke)
    } catch (error) {
      setIsLoading(false)
      console.log('Something went wrong')
    }
  }

  return (
    <>
      <div>
        <p>{joke}</p>
        <button onClick={handleClick} disabled={isLoading}>
          <div className='original'>JOKE BUTTON</div>
          <div className='letters'>
            <span>J</span>
            <span>O</span>
            <span>K</span>
            <span>E&nbsp;</span>
            <span>B</span>
            <span>U</span>
            <span>T</span>
            <span>T</span>
            <span>O</span>
            <span>N</span>
          </div>
        </button>
      </div>
    </>
  )
}

export default App
