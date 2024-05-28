import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const{searchText, setSearchText} = useState("")
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.github.com/users');
      const dataRes = await res.json();
      setData(dataRes);
    }
    fetchData();
  })

  return (
    <>
      <div>
        <input type="text" 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <ul>
          <li><strong>Nom : </strong>John Doe</li>
          <li><strong>Bio : </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
          <li><strong>Image de profil : </strong> lorem ipsum dolor sit</li>
        </ul>
      </div>
    </>
  )
}

export default App
