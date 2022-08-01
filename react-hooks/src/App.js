import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num) {
  console.log('render ');
  let i = 0
  while (i < 1000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(3)
  const [colored, setColored] = useState(false)

  const styles = useMemo( () => ({
      color: colored ? 'darkred' : 'black'
  }), [colored])
 /*  const styles = useMemo( () => {
    return {
      color: colored ? 'darkred' : 'black'
    }
  }, [colored]) */

  const computed = useMemo( () => {
    return complexCompute(number)
  }, [number])

  useEffect( () => {
    console.log('styles changed');
  }, [styles])


  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className='btn btn-success' onClick={ () => setNumber( prev => prev + 1)}>Добавить</button>
      <button className='btn btn-danger' onClick={ () => setNumber( prev => prev - 1)}>Убрать</button>
      <button className='btn btn-warning' onClick={ () => setColored( prev => !prev)}>Изменить</button>
    </div>
  )
}

export default App;
