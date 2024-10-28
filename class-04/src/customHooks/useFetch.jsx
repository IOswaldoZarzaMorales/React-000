import React from 'react'
import { useState,useEffect } from 'react'

function useFetch(url) {

    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        
    },[url])

    return (
        <div>useFetch</div>
    )
}

export default useFetch