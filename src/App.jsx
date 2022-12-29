import Button from './components/Button/Button'
import SmallButton from './components/SmallButton/SmallButton'
import './App.css'
import PrevButton from './components/PrevButton/PrevButton'
import Input from './components/Input/Input'
import PasswordInput from './components/PasswordInput/PasswordInput'
import { Routes, Route } from "react-router-dom"
import LoginPage from './components/LoginPage/LoginPage.jsx'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
