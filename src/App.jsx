
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import GetInvolved from './pages/GetInvolved'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/get_involved' element={<GetInvolved/>} />
      </Routes>
    </div>
  )
}

export default App
