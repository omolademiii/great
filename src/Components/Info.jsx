import React from 'react'

const Info = (props) => {
    const {userData} = props
  return (
    <div className='collation'>
      <h1> {userData.title} </h1>
    </div>
  )
}

export default Info
