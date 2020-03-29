import React, {useState, useEffect} from "react";

//Função para fazer a requisicao
async function getDates(planet){
    let moon = await fetch("http://localhost:3000/api/"+planet+".json");
    let dados = await moon.json();
    return dados;
}

export default function Luas(props){
    //Criando os state
    const[luas, setLuas] = useState([]);
    //Criando o useEffect
    useEffect(()=>{
        getDates(props.planet).then((date)=>{
            setLuas(date.satellites);
        })
    }, [])
    return(
        <div>
            {luas.map((moons)=>{
                return(
                    <li>{moons.name}</li>
                )
            })}
        </div>
    )
}