import React, { useState, useEffect } from 'react'
import axios from 'axios'
const PersonInfo = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}
const AllPeople = ({ persons }) => {

  return (

    <div>
      <h2>Numbers</h2>
      {persons.map(person => <PersonInfo person={person} />)}
    </div>
  )
}

const create = event => {
  const newName = document.getElementById("name").value
  const newNumber = document.getElementById("number").value
  const newPerson = {
    name: newName,
    number: newNumber
  }
  return axios.post('http://localhost:3002/persons', newPerson)

}





const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12322323' }
  ])
  const [countries, setCountries] = useState([])
  const [searchedCountries, setSearchedCountries] = useState([
  ])
  const [newName, setNewName] = useState('')

  const deleteIt = event => {
    const id = persons.filter(person => person.name === document.getElementById("name").value)[0].id
    return axios.delete(`http://localhost:3002/persons/${id}`)

  }
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newName = document.getElementById("name").value
    const newNumber = document.getElementById("number").value
    const allNames = persons.map(person => person.name)
    if (allNames.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(oldArray => [...persons, newPerson])
  }

  const SingleCountry = ({ country }) => {
    return (
      <>
        <h3>country: {country.name.common}</h3>
        <p>population: {country.population}</p>
      </>


    )
  }
  const filterCountries = (event) => {
    const word = event.target.value
    const filteredCountries = countries.filter(country => country.name.common.includes(word))
    if (filteredCountries.length > 10) {
      setSearchedCountries("too many bruh")
    } else if (filteredCountries.length == 1) {
      setSearchedCountries(<SingleCountry country={filteredCountries[0]}/>)
    } else {
      console.log(filteredCountries)
      setSearchedCountries(filteredCountries.map(country => <p>{country.name.common}</p>))
    }

  }
  const Form = () => {
    return (
      <form onSubmit={create}>
        <div>
          name: <input id="name" />
          number: <input id="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

  }

  return (
    <div>
      {/* <input id="country" onChange={filterCountries} />
      {searchedCountries} */}
      <h2>Phonebook</h2>
      <Form />
      <AllPeople persons={persons} />
    </div>
  )
}

export default App