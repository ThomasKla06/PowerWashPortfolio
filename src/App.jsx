import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Projects from '../pages/Projects'
import ResumeGame from '../pages/ResumeGame'

function HomePage() {
  return (
    <Home/> 
  )
}
function ProjectPage() {
  return (
    <Projects />
  )
}
function GamePage() {
  return (
    <ResumeGame />
  )
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/projects">Projects</Link> | {" "}
          <Link to="/game">Resume Game</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
