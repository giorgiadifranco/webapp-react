//importare react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './layout/AppLayout'


function App() {
  

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route element={AppLayout}>
          
        </Route>
        
      </Routes>
    
    
    </BrowserRouter>

    
    </>
  )
}

export default App
