import { useState, useEffect } from "react"
import { useParams } from "react-router"


function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    
    const username = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/users/${username}`)
			const resData = await response.json()
			setSearchTerm(resData)
		}
		fetchData()
	}, [ username ])
    
    async function handleSubmit(e){
        e.preventDefault()
        await fetch(`http:..localhost:5000/users/${searchTerm.username}`, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(username) 
            })
        }

    return (
        <div display="inline-block">
            
        {/* <form onSubmit={(e) => props.handleSearch(e, searchTerm)}> */}
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Search for a user here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
        <div><a href="/register">Sign Up!</a></div>
            </div>
    )
}

export default SearchBar
