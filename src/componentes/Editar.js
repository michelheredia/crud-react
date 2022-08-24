//import React, { Component } from 'react';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import api from '../servicios/api';

function Editar () {
    
    const { id } = useParams();
    //console.log(id);

    const enviarDatos = (e) =>{
      //const navigate = useNavigate()
      e.preventDefault();
      console.log("formulario enviado...");

      fetch(api+"?actualizar=1", {
            method:"POST",
            body:JSON.stringify(data[0])
        })
    } 
    const [data, setData] = useState([0]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const useFetch = (url) => {
        //const [data, setData] = useState([0]);
        //const [error, setError] = useState(null);
        //const [loading, setLoading] = useState(false);
      
        useEffect(() => {
          const abortController = new AbortController();
          const signal = abortController.signal;
      
          const fetchData = async () => {
            setLoading(true);
      
            try {
              const res = await fetch(url, { signal });
      
              if (!res.ok) {
                let err = new Error("Error en la petición Fetch");
                err.status = res.status || "00";
                err.statusText = res.statusText || "Ocurrió un error";
                throw err;
              }
      
              const json = await res.json();
      
              if (!signal.aborted) {
                setData(json);
                setError(null);
              }
            } catch (error) {
              if (!signal.aborted) {
                setData(null);
                setError(error);
              }
            } finally {
              if (!signal.aborted) {
                setLoading(false);
              }
            }
          };
      
          fetchData();
      
          return () => abortController.abort();
        }, [url]);
        //console.log(data, error, loading);
        //console.log(data[0]);
        //console.log(data[0].correo);
        //return { data, error, loading };
      };

      useFetch(api+"?consultar="+id);

      const handleInputChange = (event) => {
        setData([{
            ...data[0],
            [event.target.name] : event.target.value}]
        )
    }
      
        return ( <div className="card">
            <div className="card-header">
                Editar
            </div>
            <div className="card-body">
                <form onSubmit={enviarDatos}>
                        <div className="form-group">
                          <label htmlFor="nombre">Nombre:</label>
                          <input 
                            required
                            type="text" 
                            name="nombre" 
                            onChange={handleInputChange} 
                            value={data[0].nombre || ''} 
                          
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
                            onChange={handleInputChange} 
                            value={data[0].correo || ''} 
                           
                            className="form-control" 
                            placeholder="" 
                            aria-describedby="helpId"
                          ></input>
                          <small id="helpId" className="text-muted">Ingresar Correo del empleado</small>
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">actualizar</button>
                            <Link to={"/"} className="btn btn-danger">Cancelar</Link>     
                        </div>
                    </form>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
   // }
}
 
export default Editar;