import React, { useEffect, useState } from 'react'
import Display from './Display';
import { useDispatch, useSelector } from 'react-redux';
import { updateSize, updateStart } from '../utils/sizeSlice';

const Body = () => {
    const [data,setData]=useState([]);
    const [size,setSize]=useState(5);
    const dispatch = useDispatch();
    const start = useSelector(store=>store.size);
    console.log(start.start);
    console.log(start.initSize);
    
    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        const tempData=await fetch("https://randomuser.me/api/?results=100");
        const json=await tempData.json();
        //console.log(json.results);
        setData(json?.results);
    }

    const handleChange=(e)=>{
        //console.log(e.target.value);
        setSize(e.target.value);
        //console.log(size);
        dispatch(updateSize(e.target.value));
        dispatch(updateStart(0));
        
    }

    const handleClick=()=>{
        const temp= Number(start.start)+Number(start.initSize);
        dispatch(updateStart(temp));
    }

    const handleClickPrev=()=>{
        dispatch(updateStart(Number(start.start)-Number(start.initSize)));
    }
  return (
    <div>
        <div className="flex justify-end m-2 p-2">
            <h1 className='mx-2'>Select size for Pagination</h1>
            <select onChange={(e)=>handleChange(e)} className='w-20 border-2 border-black' name="" id="">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
      {
        data.slice(start.start,Math.min(data.length,Number(start.start)+Number(start.initSize))).map((item,index)=>{
            return <Display key={index} item={item} index={index}/>
        })
      }
      <div className='flex justify-end'>
        {start.start>0?
        <button onClick={handleClickPrev} className='border-2 border-black m-4'>
            Prev
        </button>:<div/>}
        <button onClick={handleClick} className='border-2 border-black m-4'>
            Next
        </button>
      </div>
    </div>
  )
}

export default Body
