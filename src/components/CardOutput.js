import React from 'react'
 
//apply map method on this js file after click on button
const CardOutput = () => {
  return (
    <div className='output'>
        <div className='inner-div'>
            <div style={{display:'flex',justifyContent:'space-between',padding:'2px 10px'}}>
                <h3 style={{color:'blue'}}>Covid Case Confirmed</h3>
                <i class="fas fa-trash" style={{color:'black'}}></i>
            </div>
            <h4 style={{color:'blue',padding:'5px 10px'}}>Bar Chart</h4>
        </div>
        <div className='icon-div'>
            <i class="far fa-plus" style={{marginBottom:'5px',background:'green'}}></i>
            <i class="fas fa-trash" style={{background:'red'}}></i>
        </div>
    </div>
  )
}

export default CardOutput;