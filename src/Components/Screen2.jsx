import React, { useState } from 'react'

const Screen2 = ({ res, setRes }) => {
    
    const[newData,setNewData]= useState([])
    const[values,setValues]=useState({
        code:"",
        dept:"",
        name:"",
        pan:"",
        mobile:"",
        pincode:"",
        email:""
    })

    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const addValues=()=>{
        setNewData([...newData,values])
        console.log(newData)
    }
    return (
        <div style={{ padding: "25px", width: "50%" }}>
            <div style={{ border: "1px solid black", padding: "5px" }}>
                <p>Dealer Master</p>
                <div style={{ width: "100%",display:"flex",flexDirection:"column",gap:"5px" }} className="data">
                    <div style={{ padding:"5px",display: "flex",border: "1px solid black", gap: "15px", justifyContent: "space-between" }}>
                        <div>Dealer Code:<input type='text' name='code' onChange={handleChange}/></div>
                        <div>Dept:
                            <select  name="dept" id="dept" onChange={handleChange}>
                                {
                                    res.map((e, key) => {
                                        return <option value={e}>{e}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div style={{padding:"5px",border:"1px solid black"}}>Name:<input  type='text' name='name' onChange={handleChange}/></div>
                    <div style={{padding:"5px",border:"1px solid black"}}>PAN N:<input type='text' name='pan' onChange={handleChange}/></div>
                    <div style={{padding:"5px",border:"1px solid black"}}>Mobile:<input type='number' name='mobile' onChange={handleChange}/></div>
                    <div style={{padding:"5px",border:"1px solid black"}}>Pincode:<input type='number' name='pincode' onChange={handleChange}/></div>
                    <div style={{padding:"5px",border:"1px solid black"}}>Email:<input type='text' name='email' onChange={handleChange}/> </div>
                </div>

                <div>
                    <button onClick={addValues}> save</button>
                </div>
            </div>

            <div>
            <table >
                <tr >
                    <th style={{border:"1px solid black"}}>Code</th>
                    <th style={{border:"1px solid black"}}>Dept</th>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>email</th>
                    <th style={{border:"1px solid black"}}>pan</th>
                    
                </tr>
                {
                    newData.map((e,key)=>{
                        return(
                            <tr style={{border:"1px solid black"}} >
                                <td style={{border:"1px solid black"}}>{e.code}</td>
                                <td style={{border:"1px solid black"}}>{e.dept}</td>
                                <td style={{border:"1px solid black"}}>{e.name}</td>
                                <td style={{border:"1px solid black"}}> <button>{e.email}</button></td>
                                <td style={{border:"1px solid black"}}><button>{e.pan}</button></td>
                            </tr>
                        )
                    })
                }
                
            </table>
            </div>
        </div>
    )
}

export default Screen2