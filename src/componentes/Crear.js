import React from 'react';
import {Link} from 'react-router-dom';
import api from '../servicios/api';
//import { useNavigate } from "react-router-dom";


class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre:"",
            correo:""
        };
    }
    
    cambioValor = (e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }
  
    enviarDatos = (e) =>{
        //const navigate = useNavigate()
        e.preventDefault();
        console.log("formulario enviado...");
        const{nombre, correo}=this.state;

        var datosEnviar={nombre:nombre, correo:correo}
        
        fetch(api+"?insertar=1", {
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
        
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            //navigate("/")
            }
        )
        .catch(console.log)
        
    }
    render() { 

        const{nombre, correo}=this.state;

        return ( 
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                          <label htmlFor="nombre">Nombre:</label>
                          <input 
                                required 
                                type="text" 
                                name="nombre" 
                                onChange={this.cambioValor} 
                                value={nombre} 
                                id="nombre" 
                                className="form-control" 
                                placeholder="" 
                                aria-describedby="helpId"
                          ></input>
                          <small id="helpId" className="text-muted">Ingresar Nombre del empleado</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="correo">Correo:</label>
                          <input 
                                required 
                                type="email" 
                                name="correo" 
                                onChange={this.cambioValor} 
                                value={correo} 
                                id="correo" 
                                className="form-control" 
                                placeholder="" 
                                aria-describedby="helpId"
                          ></input>
                          <small id="helpId" className="text-muted">Ingresar Correo del empleado</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar</button>
                            <Link to={"/"} className="btn btn-danger">Cancelar</Link>
                            
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                  
                </div>
            </div>
         );
    }
}
 
export default Crear;