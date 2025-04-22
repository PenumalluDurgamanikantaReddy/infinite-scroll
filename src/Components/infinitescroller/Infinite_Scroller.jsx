

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useFetchPeoplesDataQuery } from '../../redux/dummyJsonDataQuery'


function Infinite_Scroller() {
  const [page,setPage]  = useState(1)
  const [shouldFetch,setShouldFetch] = useState(true)

  const loaderRef=  useRef()
  const {data:apiResponse, isLoading} = useFetchPeoplesDataQuery(page,{skip:!shouldFetch})
   
  const [data,setData]  = useState([])

  useEffect(()=>{


    const observer = new IntersectionObserver(
      (entries)=>{

      
        if(entries[0].isIntersecting){
          setPage((prev) => prev + 1)
        }
      },
      {threshold:1}
    )


    const currentLoader = loaderRef.current
    if(currentLoader){
      observer.observe(currentLoader)
    }

    return()=>{
        
      if(currentLoader){
         observer.unobserve(currentLoader)
      }
    }

  },[])


  useMemo(()=>{
    if( apiResponse?.products?.length > 0){
      setData((prev)=> {return [...prev,...apiResponse?.products]})
    }
  },[apiResponse])

  console.log(data)


  return (
    <div>
        
        Infinite_Scroller
        {
          data?.map((person)=>{
             return <div><p>title:{person?.title}</p> <p>hieght:{person?.title}cm</p></div>
          })
        }
        
        <div ref={loaderRef}>
          ...loadig
        </div>
        </div>
  )
}

export default Infinite_Scroller