import MiApi from "./components/MiApi";
import './App.css';
import ModalInfo from "./components/ModalInfo";
import { useState } from "react";
import NavbarPrin from "./components/NavbarPrin";

  

function App() {
  /* const element = <FontAwesomeIcon icon={faCoffee} /> */
  const [superHeroFilter, setSuperHeroFilter] = useState('');
  const [ modalShow, setModalShow ] = useState({estado:false, title:'', message:'', objSuperHero:{}});

  const handleDetalles = (superhero) => {
    setModalShow({estado:true, title:'Información', message:'Hola Mundo', objSuperHero:superhero})
  }
  

  return (
    <div className="App bg-granite">
      <NavbarPrin OnClickFilterSuperHero={(superhero) => setSuperHeroFilter(superhero)}/>

      <MiApi SuperHeroFilter={superHeroFilter} OnClickDetalles={handleDetalles}/>

      <ModalInfo
          show={modalShow.estado}
          onAccept={() => setModalShow({estado:false, title:'', message:'', objSuperHero:{}})}
          title={modalShow.title}
          message={modalShow.message}
          objSH={modalShow.objSuperHero}
      />
      
    </div>
  );
}

export default App;
