import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import FirstPage from './components/FirstPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<FirstPage/>} />
      </Routes>
    </Router>
  )
}

export default App