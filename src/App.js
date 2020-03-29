/*
import React, {useState, useEffect} from 'react';

//Usando componente funcional com hooks
export default function App(){
  //State
  const [nome, setNome] = useState("");

  //Utilizando o userEffect, semelhante ao componentDidMount
  useEffect(()=>{
    let nome = "Alex";
    setNome(nome);
  }, [])
  //O array vazio significa que não quero ficar chamando o useEffect cada vez que um state é atualizado. Se passar o nome 
  //de um state dentro do array, só aquele será atualizado. Se não passar nada, todos serão atualizados.
  return(
    <div>
      <h4>Meu nome: {nome}</h4>
    </div>
  )
}
*/

import React, {useState, useEffect} from "react";
import Luas from "./components/shared/luas";

//Função para pegar dados da api
async function getDates(){
  let planets = await fetch("http://localhost:3000/api/planets.json");
  let dados = await planets.json();
  return dados;
}

export default function Planets(){
  //Criando o state
  const[planets, setPlanets] = useState([]);
  //Criando o userEffect
  useEffect(()=>{
    //Chamo a função
    getDates().then((date)=>{
      setPlanets(date.planets);
    })
  }, [])
  return(
    <div>
      {planets.map((planet)=>{
        return(
          <div key={planet.id}>
            <h2>{planet.name}</h2>
            <img src={planet.img_url} />
            <p>{planet.description}</p>
            <h4>Luas</h4>
            <ul>
              <Luas planet={planet.id} />
            </ul>
          </div>
        )
      })}
    </div>
  )
}