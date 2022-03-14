import React from 'react'
import Sidebar from './Sidebar';
import CardOutput from './CardOutput';

const Main = () => {
  return (
    <div className='mt-100'>
        <div className='main'>
            <div className='row'>
                <Sidebar/>
                <div className='vline'></div>
                <div className='card'>
                    <div className="group">
                        <button className="btn btn-default"><i class="far fa-plus"></i> Add a Row</button>
                    </div>
                    <CardOutput/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;