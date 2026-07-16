import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import DeleteAccount from './pages/DeleteAccount'

function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
