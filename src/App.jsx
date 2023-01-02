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
import { useContext } from 'react'
import { AppContext } from './components/AppProvider/AppProvider'
import HistoryPage from './components/HistoryPage/HistoryPage'
import QuizDetailPage from './components/QuizDetails/QuizDetailPage'
import QuizPage from './components/QuizPage/QuizPage'
import QuestionPage from './components/QuestionPage/QuestionPage'

function App() {
  const {user} = useContext(AppContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/recover-password" element={<RecoverPassword />}/>
        <Route path="/register" element={<Register />}/>
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/history" element={<HistoryPage />}/>
          <Route path="/details/:id" element={<QuizDetailPage />}/>
          <Route path="/quiz/:id" element={<QuizPage />}>
            <Route path="question/:n" element={<QuestionPage />}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
