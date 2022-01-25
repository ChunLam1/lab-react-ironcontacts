import './App.css';
import contacts from './contacts.json'
import React, { useState } from 'react';

function App() {
  const FiveContacts= contacts.slice(0, 5)
  const ElseContact = contacts.slice(5)
  const [contact, setContact] = useState(FiveContacts);

  const random = () =>{
   const NewContacts = ElseContact[Math.floor(Math.random() * ElseContact.length)];
   console.log(NewContacts);
   return [...contact, NewContacts];
  }

  const SortPopularity = () => {
    return [...contact.sort(function(a,b){  
        return b.popularity - a.popularity
    })]
  }

  const SortName = () => {
    return [...contact.sort(function(a,b){  
      return a.name.localeCompare(b.name)
  })]
  }


  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={() => setContact(random())}>Add Random Contact</button>
    <button onClick={() => setContact(SortPopularity())}>Sort by popularity</button>
    <button onClick={() => setContact(SortName())}>Sort by name</button>
    <table>
    <thead>
    <tr>
      <th>picture</th>
      <th>name</th>
      <th>popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
      <th>Delete</th>
    </tr>
    </thead>
    {contact.map((info) => (
      <tbody>
    <tr>
      <td><img src={info.pictureUrl} alt={info.name}></img></td>
      <td>{info.name}</td>  
      <td>{info.popularity}</td>
      <td>{info.wonOscar === true ? "🏆" : ""}</td>
      <td>{info.wonEmmy === true ? "🏆" : ""}</td>
      {/* <td><button onClick={() => info.id.delete()}>Delete</button></td> */}
    </tr> 
    </tbody>
    ))}
    
    </table>
    </div>
  );
}

export default App;
