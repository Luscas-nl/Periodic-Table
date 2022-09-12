import { useState } from 'react'
import './App.css'
import Element from './components/element/element'
import Menu from './components/menu/menu'
import Nav from './components/nav/nav'
import ElementModal from './components/modal/modal'

function App() {

  let [data, setData] = useState([""])
  let nullElementsRow
  let nullElementsColumn 
  const btnMenu = document.getElementById("menuBtn")
  

  async function requestElement(){
    const reponse = await fetch(`https://periodic-table-elements-info.herokuapp.com/elements`)
    setData(await reponse.json())
  }

  requestElement()

  return (
    <div>
      <Menu nav="nav"/>
      <Nav />
      <div className="tableElement">
        {data.map(element => {

          if((element.atomicNumber >= 57) && (element.atomicNumber <= 71)){
            nullElementsRow = 8
            if(element.atomicNumber == 57){
              nullElementsColumn = 3
            }
            else{
              nullElementsColumn += 1
            }

            return <Element eletro={element.electronicConfiguration} mass={element.atomicMass} name={element.name} number={element.atomicNumber} init={element.symbol} type={element.groupBlock} row={nullElementsRow} column={nullElementsColumn} />
          }

          if((element.atomicNumber >= 89) && (element.atomicNumber <= 103)){
            nullElementsRow = 9
            if(element.atomicNumber == 89){
              nullElementsColumn = 3
            }
            else{
              nullElementsColumn += 1
            }
            if(element.atomicNumber == 103){
              return <Element eletro={element.electronicConfiguration} mass={element.atomicMass} name={element.name} number={element.atomicNumber} init={element.symbol} type="actinoid" row={nullElementsRow} column={nullElementsColumn} />
            }

            return <Element eletro={element.electronicConfiguration} mass={element.atomicMass} name={element.name} number={element.atomicNumber} init={element.symbol} type={element.groupBlock} row={nullElementsRow} column={nullElementsColumn} />
          }

          if(element.atomicNumber == 5){
            return <Element eletro={element.electronicConfiguration} mass={element.atomicMass} name={element.name} number={element.atomicNumber} init={element.symbol} type={element.groupBlock} row={element.period + 1} column={element.group} />
          }
          
          return <Element eletro={element.electronicConfiguration} mass={element.atomicMass} name={element.name} number={element.atomicNumber} init={element.symbol} type={element.groupBlock} row={element.period} column={element.group} />
        })}
      </div>

      <ElementModal />
    </div>
  )
}

export default App
