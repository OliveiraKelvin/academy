import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Statements } from "./components/Statements";
import { Footer } from "./components/Footer";

import * as C from "./App.style"


export const App = () => {
  return (
    <C.Container>
      <Header />
      <Section/>
      <Statements/>
      <Footer/>
    </C.Container>  
  ) 
}

export default App;
