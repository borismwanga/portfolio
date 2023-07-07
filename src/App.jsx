import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'; // Changed this line
import './App.css'
import Line from './components/Line'
import Footer from './components/Footer'
import Content from './components/Content'
import Right from './components/Right'
import Apps from './components/Apps' // Make sure the path is correct

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<><Content /><Right /><Line /><Footer /></>} />
        <Route path="/app" element={<Apps />} />
      </Routes>
    </Fragment>
    )
}

export default App;