import React from 'react';

interface Props {
updateGolani:(n:number)=>void
updateShirion:(n:number)=>void
updateTothanom:(n:number)=>void
updateHiluch:(n:number)=>void

}

export default function Land({ updateGolani,updateHiluch,updateShirion,updateTothanom }: Props) {
  return (
    <div className='land'>
      <div className='block'>
        <p>גולני</p>
        {[1,2,3,4].map((value) => (
          <button  onClick={() => updateGolani(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className='block'>
        <p>שריון</p>
        {[1,2,3,4].map((value) => (
          <button key={value} onClick={() => updateShirion(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className='block'>
        <p>תותחנים</p>
        {[1,2, 3,4].map((value) => (
          <button key={value} onClick={() => updateTothanom(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className='block'>
        <p>חילוץ והצלה</p>
        {[1,2, 3,4].map((value) => (
          <button key={value} onClick={() => updateHiluch(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
    );
}
