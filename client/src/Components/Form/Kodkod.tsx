import React from 'react';

interface Props {
updateFullstack:(n:number)=>void
updateData:(n:number)=>void
updateDevops:(n:number)=>void
updatetoran:(n:number)=>void

}

export default function Kodkod({updateFullstack,updateData,updateDevops,updatetoran}: Props) {
  return (
    <div className='land'>
      <div className='block'>
        <p>מפתח פולסטאק</p>
        <div className='button-selection'>
            {[1,2,3,4].map((value) => (
              <button  onClick={() => updateFullstack(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
      <div className='block'>
        <p>מפתח דאטא</p>
        <div className='button-selection'>
            {[1,2,3,4].map((value) => (
              <button key={value} onClick={() => updateData(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
      <div className='block'>
        <p>מפתח דבאופס</p>
        <div className='button-selection'>
            {[1,2, 3,4].map((value) => (
              <button key={value} onClick={() => updateDevops(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
      <div className='block'>
        <p>תורן</p>
        <div className='button-selection'>
            {[1,2, 3,4].map((value) => (
              <button key={value} onClick={() => updatetoran(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
    </div>
    );
}
