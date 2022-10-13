import React from 'react'
import photol from './nike.png'

const Foto = () => {
  return (
    <div className='photo'>
            <img src={photol} alt="Shoep" />
            <h2> Choose size</h2>
        <div className='List'>
            <div className="list-div">5</div>
            <div className="list-div">6</div>
            <div className="list-div">7</div>
            <div className="list-div">8</div>
            <div className="list-div">9</div>
            <div className="list-div">10</div>
            <div className="list-div">11</div>
            <div className="list-div">12</div>
        </div>
    </div>

  )
}

export default Foto