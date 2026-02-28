import { Outlet } from 'react-router-dom'
import Header from '../widgets/header'
import Footer from '../widgets/footer'
import './App.css'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
