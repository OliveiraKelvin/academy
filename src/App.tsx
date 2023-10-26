import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './contexts/Context'

import { Header } from "./components/Header";
import { Section } from "./components/Section"
import { Statements } from "./components/Statements";
import { Footer } from "./components/Footer";
import { Form } from "./Pages/Form"



import * as C from "./App.style"


export const App = () => {
  return (
    <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Form />}/> 
          </Routes>
          <C.Container>
            <Header/>
            <Section/>
            <Statements/>
            <Footer/>
          </C.Container> 
        </BrowserRouter>
    </ContextProvider>   
  ) 
}

export default App;
