
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SideBar from './Components/SideBar/SideBar'
import AppRoutes from './Components/Routes/Routes'

function App() {

  return (
    <>
      <div className='App'>
       <Header/>
       <div className='container'>
        <SideBar/>
        <AppRoutes/>
       </div>
       <Footer/>
      </div>
      <div>Hello2</div>
    </>
  )
}

export default App
