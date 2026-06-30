import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import PracticeAreas from './pages/PracticeAreas'
import PracticeAreaDetail from './pages/PracticeAreaDetail'
import Publications from './pages/Publications'
import PublicationDetail from './pages/PublicationDetail'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Career from './pages/Career'
import Kvkk from './pages/Kvkk'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Disclaimer from './pages/Disclaimer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/ekibimiz" element={<Team />} />
        <Route path="/hizmet-alanlari" element={<PracticeAreas />} />
        <Route path="/hizmet-alanlari/:id" element={<PracticeAreaDetail />} />
        <Route path="/yayinlar" element={<Publications />} />
        <Route path="/yayinlar/:slug" element={<PublicationDetail />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/randevu" element={<Appointment />} />
        <Route path="/kariyer" element={<Career />} />
        <Route path="/kvkk-aydinlatma-metni" element={<Kvkk />} />
        <Route path="/gizlilik-politikasi" element={<Privacy />} />
        <Route path="/cerez-politikasi" element={<Cookies />} />
        <Route path="/sorumluluk-reddi" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
