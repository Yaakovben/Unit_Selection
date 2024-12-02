import React from 'react'

export default function Guidance() {
  return (
    <div className='guidance'>
        <h1 className='title'>⚠️הנחיות למילוי המנילה  </h1>
        
        <div className='guidance2'>
            <input type='range' max={5} min={1} className='range'></input>
            <div className='guidance-nums'>
                <p>5-רוצה מאוד </p>
                <p>1- לא רוצה בכלל</p>
            </div>
        </div>
        <div className='guidance3'>
           
            <p>צה"ל אינו מתחייב לשבץ אתכם על פי העדפותיכם, אך אנו עושים מאמץ להתחשב בהן</p>
            
            <p>מילוי הערות אישיות מגדיל את הסיכוי שנוכל להתאים את השיבוץ להעדפותיכם</p>
        </div>
    </div>
  )
}
