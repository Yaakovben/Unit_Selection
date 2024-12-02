import React from 'react'

export default function Guidance() {
  return (
    <div className='guidance'>     
        <h1 className='title-guidance'>⚠️הנחיות למילוי המנילה  </h1>
            <input type='range' max={5} min={1} className='range-guidance'></input>
            <div className='guidance-nums'>
                <p>5-רוצה מאוד </p>
                <p>1- לא רוצה בכלל</p>
            </div>
            <div className='p-guidance'>
                <p>צה"ל אינו מתחייב לשבץ אתכם על פי העדפותיכם, אך אנו עושים מאמץ להתחשב בהן</p>
            </div>
            <div className='p-2-guidance'>
                <p>מילוי הערות אישיות מגדיל את הסיכוי שנוכל להתאים את השיבוץ להעדפותיכם</p>
            </div>
    </div>
  )
}
