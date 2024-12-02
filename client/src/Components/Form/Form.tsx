import React, { useState } from 'react'
import Guidance from './Guidance'
import Land from './Land'
import Gob from './Gob'
import Kodkod from './Kodkod'

export default function Form() {
    const [name,setName]= useState("")
    const [golani,setGolani]= useState(-1)
    const [shirion,setShirion]= useState(-1)
    const [tothanom,setTothanom]= useState(-1)
    const [hiluch,setHiluch]= useState(-1)
    const [mamterot,setMamterot]= useState(-1)
    const [rsar,setRasar]= useState(-1)
    const [tabach,setTabach]= useState(-1)
    const [mekarer,setMekarer]= useState(-1)
    const [fullstack,setFullstack]= useState(-1)
    const [Data,setData]= useState(-1)
    const [devops,setDevops]= useState(-1)
    const [toran,setToran]= useState(-1)
    const [text,setTest]= useState("")


    const fetchAddSelection = async()=>{
        try {
            const body = { 
                name: name,
                personalNote: text,
                combatPreferences: {
                  golani: golani,
                  armor: shirion,
                  artillery: tothanom,
                  searchAndRescue:hiluch,
                },
                supportPreferences: {
                  targetingNCO: mamterot,
                  nimrodiSergeant: rsar,
                  cook: tabach,
                  sandwichFiller: mekarer,
                },
                techPreferences: {
                  fullstack: fullstack,
                  data: Data,
                  devops: devops,
                  duty: toran
                },
            }
            const res: Response = await fetch(`http://localhost:8200/api/selection/add`, {
                method: 'POST',
                body: JSON.stringify(body)
            });
            if (!res.ok) {
              return "Can`t change status for product"
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);     
        }
    }
  return (  
    <div className='form'>
        <div className='name'>
            <h3>שם מלא</h3>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <Guidance/>
        <div className='block-form'>
            <h1>רצון לשרת כלוחם בזרוע היבשה</h1>
            <Land updateGolani={setGolani}updateShirion={setShirion} updateTothanom={setTothanom} updateHiluch={setHiluch}/>
        </div>
        <div className='block-form'>
            <h1>רצון לשרת כג'ובניק</h1>
            <Gob updateMamterot={setMamterot} updateRsar={setRasar} updateTabach={setTabach}updateMekarer={setMekarer}/>
        </div>
        <div className='block-form'>
            <h1>רצון לשרת בתכנית קודקוד</h1>
            <Kodkod updateFullstack={setFullstack} updateData={setData} updateDevops={setDevops} updatetoran={setToran}/>
        </div>
            <h1>הערות אישיות</h1>
            <input className='input-text'></input>
        
        
        <button onClick={()=>{fetchAddSelection()}}>שלח טופס</button>
    </div>
  )
}


