import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'


const Property = () => {
    const {pathname} = useLocation()
    const id = pathname.split("/").slice(-1)[0]

    const {data, isError, isLoading} = useQuery(["resd", id], ()=> getProperty(id))
    
    if(isLoading){
        return(
            <div className="wrapper">
                <div className="flexCenter paddings">
                    
                </div>
            </div>
        )
    }
  return (
    <div className="wrapper">

    </div>
  )
}

export default Property