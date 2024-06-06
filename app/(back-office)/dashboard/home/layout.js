import React from 'react'
import HomeNav from '../../components/HomeNav'

export default function layout({children}) {
  return (
    <div className=''>
        <HomeNav/>
      {children}
    </div>
  )
}
