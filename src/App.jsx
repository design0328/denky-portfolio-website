import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Background  from './components/Background'
import Cursor      from './components/Cursor'
import Nav         from './components/Nav'
import Footer      from './components/Footer'
import Home        from './pages/Home'
import Work        from './pages/Work'
import CaseStudy   from './pages/CaseStudy'
import About       from './pages/About'
import Process             from './pages/Process'
import Contact             from './pages/Contact'
import Gallery             from './pages/Gallery'

export default function App() {
  return (
    <ThemeProvider>
    <HashRouter>
      <Cursor />
      <Background />
      <Nav />

      <Routes>
        <Route path="/"              element={<Home />}       />
        <Route path="/work"          element={<Work />}       />
        <Route path="/work/:slug"    element={<CaseStudy />}  />
        <Route path="/about"         element={<About />}      />
        <Route path="/process"       element={<Process />}    />
        <Route path="/contact"       element={<Contact />}    />
        <Route path="/gallery"       element={<Gallery />}    />
      </Routes>

      <Footer />
    </HashRouter>
    </ThemeProvider>
  )
}
