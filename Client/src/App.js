import logo from "./public/success.jpg";
import "./App.css";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import React, { useEffect , useState } from 'react'


function App() {
  let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search goalMates!')
	let [data, setData] = useState([])
  const PG_URI = 'postgres://postgres:password@localhost:4000/goalMates' 

  
	useEffect(() => {
		if(search) {
			const fetchData = async () => {
				document.title = `${search} Search goalMates`
				const response = await fetch(PG_URI + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}
	console.log({data})
  return (
    <div className="App">
      <header className="App-header">
        {message}
        {/* <Routes/>  */}
        <SearchBar handleSearch = {handleSearch}/>
        <Register />
        <br />
        <hr />
        <img src={logo} size="100x100" className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.meetup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Our Model Site 'Meetup.com'
        </a>
      </header>
    </div>
  );
}

export default App;
