import FTHH from 'isomorphic-fetch'

import { useState, useEffect } from 'react'


async function fth(){
  const _route= [ "user" ,"account" ]
  const account={
      name:"flynth-dev",
      password:"flynth-dev"
  }
  const body={account}
  
  const response = await fetch('http://localhost:8080/', {
      method: 'LOGIN', 
      headers: {
        'accept': 'application/json',
        'route' : JSON.stringify(_route),
        'user':"user",
        'Content-Type': 'application/json', 
      },
      body:JSON.stringify(body)
    } )


  const data = await response.json()
  return data
}


export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fth()
    .then((data) =>{
        setData(data)
        setLoading(false)
        })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      JWT is : {data.body}
    </div>
  )
}

