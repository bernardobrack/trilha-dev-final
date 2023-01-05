import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginPage from './components/LoginPage/LoginPage.jsx'
import RecoverPassword from './components/RecoverPassword/RecoverPassword'
import Register from './components/Register/Register'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { useContext, lazy, Suspense } from 'react'
import { AppContext } from './components/AppProvider/AppProvider'
import HistoryPage from './components/HistoryPage/HistoryPage'
import QuizDetailPage from './components/QuizDetails/QuizDetailPage'
import QuizPage from './components/QuizPage/QuizPage'
import QuestionPage from './components/QuestionPage/QuestionPage'
import ResultPage from './components/ResultPage/ResultPage'
import UserAuth from './components/UserAuth/UserAuth'

const NotFound = lazy(() => import('./components/NotFound/NotFound'))
const Home = lazy(() => import('./components/Home/Home'))

function App() {
  const {user} = useContext(AppContext);
  return (
    <div className="App">
      <Suspense>  
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/recover-password" element={<RecoverPassword />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/auth" element={<UserAuth />}/>
          <Route element={<ProtectedRoute user={user}/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/history" element={<HistoryPage />}/>
            <Route path="/details/:id" element={<QuizDetailPage />}/>
            <Route path="/quiz/:id" element={<QuizPage />}>
              <Route path="question/:n" element={<QuestionPage />}/>
              <Route path="results" element={<ResultPage />}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
