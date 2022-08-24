import './App.css';
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
//import { Route, BrowserRouter as Router } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import{Link} from "react-router-dom";
function App() {
  return (

    <div className="container">
       <Router>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only"></span></Link>
                <Link className="nav-item nav-link" to={"/crear"}>Crear Empleado</Link>
            </div>
        </nav>

    
          <Routes>
            <Route exact path='/' element={<Listar></Listar>}> </Route>
            <Route path='/crear' element={<Crear></Crear>}> </Route>
            <Route path='/editar/:id' element={<Editar></Editar>}> </Route>

        </Routes>
        </Router>

    </div>
  );
}

export default App;
