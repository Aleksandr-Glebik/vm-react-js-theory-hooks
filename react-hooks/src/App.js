import React, { useEffect, useState } from 'react'

function useLogger(value) {
  useEffect( () => {
    console.log('Value changed: ', value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    // value, onChange
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {

  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const changeHandler = (event) => {
  //   setName(event.target.value)
  // }

  // const changeHandlerLastName = (event) => {
  //   setLastName(event.target.value)
  // }
  // useLogger(name)

  const input = useInput('')
  // const lastName = useInput('')

  useLogger(input.value)

  return (
      <div className={'container tt-3'}>
        {/* <input type='text' value={name} onChange={changeHandler}/> */}
        {/* <input type='text' value={input.value} onChange={input.onChange}/> */}
        {/* <input type='text' {...input}/> */}
        <input type='text' {...input.bind} />
        {/* <input type='text' {...lastName}/> */}
        {/* <input type='text' value={lastName} onChange={changeHandlerLastName}/> */}
        {/* <hr /> */}
        {/* <h2>{name}</h2> */}
        {/* <h2>{name} {lastName}</h2> */}
        <h2>{input.value}</h2>
        {/* <h2>{lastName.value}</h2> */}

        <button className={'btn btn-warning'} onClick={ () => input.clear()}>Очистить</button>
      </div>
  )
}

export default App
