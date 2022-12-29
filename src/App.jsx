import Button from './components/Button/Button'
import SmallButton from './components/SmallButton/SmallButton'
import './App.css'
import PrevButton from './components/PrevButton/PrevButton'

function App() {

  return (
    <div className="App">
      <Button>Botao</Button>
      <SmallButton>Skip</SmallButton>
      <SmallButton className="center">Skip</SmallButton>
      <SmallButton className="right">Skip</SmallButton>
      <PrevButton />
    </div>
  )
}

export default App
