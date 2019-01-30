import React from 'react'

const Card = (props) => {
  return(
    <div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5' >
      <img src={`https://robohash.org/set_set4/${props.id}rand?size=200x200`} alt="cat"/>
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Card