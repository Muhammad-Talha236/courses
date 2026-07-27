import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams();
  return (
    <div className='bg-gray-400 p-4 rounded-lg text-center text-lg font-semibold'>
      user: {userid}
    </div>
  )
}

export default User
