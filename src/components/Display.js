import React, { useState } from 'react'

const Display = (props) => {
    const [color,setColor]=useState("white");
    const item=props.item;
    // const index=props.index;
    //console.log(item);
    const handleClick=()=>{
        setColor(color==="white"?"gray-500":"white");
    }
  return (
    <div className={'mx-4 border-2 border-black bg-'+color}>
        <table className='text-center'>
            <tr>
                {/* <th className='mx-2 px-2'>Sr</th> */}
                <th className='mx-2 px-2'>select</th>
                <th className='mx-2 px-2'>Profile Pic</th>
                <th className='mx-2 px-2'>Name</th>
                <th className='mx-2 px-2'>Phone no.</th>
                <th className='mx-2 px-2'>email no.</th>
                <th className='mx-2 px-2'>Gender</th>
                <th className='mx-2 px-2'>DOB</th>
            </tr>
            <tr>
                <td className='mx-2 px-2'><input onChange={()=>handleClick()} type="checkbox"/></td>
                {/* <td>{index}</td> */}
                <td className='mx-2 px-2'><img src={item.picture.large} alt="pro pic" /></td>
                <td className='mx-2 px-2'>{item.name.first} {item.name.second}</td>
                <td className='mx-2 px-2'>{item.phone}</td>
                <td className='mx-2 px-2'>{item.email}</td>
                <td className='mx-2 px-2'>{item.gender}</td>
                <td className='mx-2 px-2'>{item.dob.date}</td>
            </tr>
        </table>
    </div>
  )
}

export default Display
