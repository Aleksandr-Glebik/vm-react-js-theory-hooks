import React, {useState, useEffect, useRef} from 'react'

// let renderCount = 1

function App() {

  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  // useEffect( () => {
  //   setRenderCount( prev => prev + 1)
  // })
/*   useEffect( () => {
    renderCount++
  }) */
  useEffect( () => {
    renderCount.current++
    console.log(inputRef.current.value);
  })

  useEffect( () => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current} </h1>
      <h3>Предыдущее состояние: {prevValue.current} </h3>
      <input ref={inputRef} type={'text'} onChange={e => setValue(e.target.value)} value={value} />
      <button className='btn btn-success' onClick={focus}>Фокус</button>
    </div>
  )
}

export default App;
