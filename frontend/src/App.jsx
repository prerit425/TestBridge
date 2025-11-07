import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'
import Exam from './component/Exam.jsx'
import Result from './component/Result.jsx'
import Admin from './component/Admin.jsx'
import Profile from './component/Profile.jsx'
import Navbar from './component/Navigations.jsx'
import StudyRes from './component/StudyRes.jsx'
import OnGoing from './component/OnGoing.jsx'

const App = () => {
  return <><BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/exams" element={<Exam/>}/>
          <Route path="/settings" element={<Profile/>}/>
          <Route path="/results" element={<Result/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/resource" element={<StudyRes/>}/>
          <Route path="/ongoing" element={<OnGoing/>}/>
          </Routes>
    </BrowserRouter>
  </>
}

export default App
