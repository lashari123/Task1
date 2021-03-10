import React, { Component } from 'react';
import NavBar from './NavBar';

import './table.css';

export default class Table extends Component {
    //since we are extending class Table so we have to use super in order to override Component class constructor
        state = { //state is by default an object
            students: [
                { id: <input  className="field"  type="checkbox" />, name: 'Arbetsmijlöplan', Task: "Upprätta",Status:'Klart',Assigned: 'Johan Kvick' },
                { id: <input  className="field" type="checkbox"  />, name: 'Produktionsplan', Task: "Upprätta", Status:'',Assigned: 'Henric Börgeson' },
                { id: <input className="field" type="checkbox"  />, name: 'ADP-plan', Task: "Upprätta",Status:'',Assigned: 'Rickard Nilsson' },
                { id: <input className="field" type="checkbox" />, name: 'Skyddsrondsprotokoll', Task: "Upprätta", Status:'',Assigned: 'Johan Kvick' },
                { id: <input className="field" type="checkbox"  />, name: 'Riskanalyser', Task: "Upprätta",Status:'Inskickad',Assigned: 'Johan Thylin' },
                { id: <input className="field" type="checkbox"  />, name: 'KM-plan', Task: "Upprätta",Status:'Klar',Assigned: 'Henric Börgeson' },
                { id: <input className="field" type="checkbox"  />, name: 'Kontrollplan', Task: "Upprätta", Status:'',Assigned: 'Johan Kvick' }
            ]
        }
     


     renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, Status, Task ,Assigned} = student //destructuring
           return (
              <tr key={id}>
                
                 <td className="done">{id}</td>
                 <td className="tdata">{name}</td>
                 <td className="tdata">{Task}</td>
                 <td className="tdata">{Status}</td>
                 <td className="tdata">        </td>
                  <td className="tdata">{Assigned}</td>
              </tr>
           )
        })
     }

     
     renderTableData2() {
        return this.state.students.map((student, index) => {
           const { id, name, Status, Task ,Assigned} = student //destructuring
           return (
              <tr key={id}>
                
                 <td className="done">{id}</td>
                 <td className="tdata">{name}</td>
                 <td className="tdata">{Task}</td>
                 <td className="tdata">{Status}</td>
                <td className="tdata">{Assigned}</td>
              </tr>
           )
        })
     }

     render() {
        return (
           <div >
           <h1>Mileway, Stockholm</h1>
           <NavBar/>
           <p className="para">Samtliga delar måste vara uppfyllda innan du kan gå vidare till nästa steg. </p>
           <h1 className='heading'>Mandatory-</h1>
           <div className="content-center">
              <table className='students'>
                 <tbody >
                 <th className="done"> Done</th>
                 <th className="thead"> Name</th>
                 <th className="thead"> Task</th>
                 <th className="thead"> status</th>
                 <th className="thead"> Dedline</th>
                 <th className="thead"> Assigned to</th>
              {this.renderTableData()}
                    
                    
                    
                
                 </tbody>
              </table>
              </div>
              <h1 className='heading'>Ej obligatoriska –</h1>
              <div className="content-center">
                 <table className='students'>
                    <tbody >
                    <th className="done"> Done</th>
                    <th className="thead"> Name</th>
                    <th className="thead"> Task</th>
                    <th className="thead"> status</th>
                    <th className="thead"> Assigned to</th>
                 {this.renderTableData2()}
                       
                    </tbody>
                 </table>
              </div>
           </div>
        )
     }
    }

