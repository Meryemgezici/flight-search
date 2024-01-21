import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listpage" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
