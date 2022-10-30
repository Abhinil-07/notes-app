import React from 'react'

export default function Header(props) {
  return (
    <div className='header'>
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>Notes</h1>
        <button className='save' onClick={props.toggleMode}>Toggle Mode</button>

    </div>
  )
}
