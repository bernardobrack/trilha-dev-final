import Button from './components/Button/Button'
import SmallButton from './components/SmallButton/SmallButton'
import './App.css'
import PrevButton from './components/PrevButton/PrevButton'
import Input from './components/Input/Input'
import PasswordInput from './components/PasswordInput/PasswordInput'
import { Routes, Route } from "react-router-dom"
import LoginPage from './components/LoginPage/LoginPage.jsx'
import NotFound from './components/NotFound/NotFound'
import RecoverPassword from './components/RecoverPassword/RecoverPassword'
import Register from './components/Register/Register'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/recover-password" element={<RecoverPassword />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home"element={<ProtectedRoute>
          <Home></Home>
        </ProtectedRoute>}>

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
