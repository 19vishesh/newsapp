import React from 'react'
import loading from "./Plant.gif";

function Spinner() {
  return (
      <div className='text-center'>
          <img src={loading} />
    </div>
  )
}

export default Spinner