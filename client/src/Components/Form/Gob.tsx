import React from 'react';

interface Props {
updateMamterot:(n:number)=>void
updateRsar:(n:number)=>void
updateTabach:(n:number)=>void
updateMekarer:(n:number)=>void

}

export default function Gob({ updateMamterot,updateRsar,updateTabach,updateMekarer}: Props) {
  return (
    <div className='land'>
      <div className='block'>
        <p>מש"ק ממטרות</p>
        <div className='button-selection'>
            {[1,2,3,4].map((value) => (
              <button  onClick={() => updateMamterot(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
      <div className='block'>
        <p>רס"ר בנימרודי</p>
        <div className='button-selection'>
            {[1,2,3,4].map((value) => (
              <button key={value} onClick={() => updateRsar(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
      <div className='block'>
        <p>טבח</p>
        <div className='button-selection'>
            {[1,2, 3,4].map((value) => (
              <button key={value} onClick={() => updateTabach(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
      <div className='block'>
        <p> ממלא מקרר בסנדויצ'ים</p>
        <div className='button-selection'>
            {[1,2, 3,4].map((value) => (
              <button key={value} onClick={() => updateMekarer(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
    </div>
    );
}
