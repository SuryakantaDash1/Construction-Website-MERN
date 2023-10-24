import React from 'react'
import { useQueries } from 'react-query'

const useProperties = () => {
    const {data, isLoading, isError, refetch} = useQueries({
         "allProperties", getAllProperties, {refetchOnWindowFocus: false}
    })
  return {
   
        data, isError, isLoading, refetch
    
  }
}

export default useProperties