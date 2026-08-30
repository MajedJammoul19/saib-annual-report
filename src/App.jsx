import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview/Overview'
import AnnualReports from './pages/AnnualReports/AnnualReports'
import Sustainability from './pages/Sustainability/Sustainability'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/annualreports" element={<AnnualReports />} />
        <Route path="/sustanability-review" element={<Sustainability />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
