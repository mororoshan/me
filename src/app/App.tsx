import { Outlet } from 'react-router-dom'
import Header from '../widgets/header'
import Footer from '../widgets/footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, minHeight: '60vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
