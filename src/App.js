import React from 'react'
import styles from './App.styles'
import JokesList from './components/Jokes/JokesList';

const App = () => {
  return (
    <>
    <div style={styles.app}>
      <JokesList />
    </div>
    
    </>
  )
}

export default App;