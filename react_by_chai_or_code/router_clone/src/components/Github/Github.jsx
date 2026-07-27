import React from 'react'
import { useEffect,useState } from 'react'
function Github() {
    const [data, setData] =useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Muhammad-Talha236')
            .then(response => response.json())
            .then(data => {console.log(data);  setData(data)} )
            .catch(error => console.error('Error fetching data:', error));

    }, []);
  return (
    <div className='bg-gray-400 p-4 rounded-lg text-center text-lg font-semibold'>
      Talha Followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" className='mx-auto rounded-full w-32 h-32 mt-4' />
    </div>
  )
}

export default Github
