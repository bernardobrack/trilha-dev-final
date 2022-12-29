import Button from './components/Button/Button'
import SmallButton from './components/SmallButton/SmallButton'
import './App.css'
import PrevButton from './components/PrevButton/PrevButton'
import Input from './components/Input/Input'
import PasswordInput from './components/PasswordInput/PasswordInput'

function App() {

  return (
    <div className="App">
      <Input placeholder="Type anything"></Input>
      <PasswordInput />
    </div>
  )
}

export default App
