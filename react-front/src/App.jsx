//importare react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './layout/AppLayout'
import MoviesHome from './pages/MoviesHome'
import MoviePage from './pages/MoviePage'



function App() {
  

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path='/' element={<MoviesHome/>}/>
          <Route path='movie/:id' element={<MoviePage/>}/>
          
        </Route>
        
      </Routes>
    
    
    </BrowserRouter>

    
    </>
  )
}

export default App
