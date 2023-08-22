import React,{useState} from 'react'

const Screen1 = ({res,setRes}) => {
    
    const [data,setData] = useState();
    


    const addToList=()=>{
        setRes([...res,data])

    }
<option value="IT">IT depatment </option>
  return (
    <div style={{width:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className="inputs" style={{width:"100%",display:"flex",flexDirection:"row",gap:"3px",justifyContent:"space-between"}}> 
            <div>
                <select name="Name" id='name'
                //  onChange={(e)=>{setData({...data,name:e.target.value})}}
                  >
                    {
                        res.map((e,key)=>{return <option value={e}>{e}</option>})
                    }
                </select>
            </div>
            <div>
                <input onChange={(e)=>{setData(e.target.value)}} type="text" maxLength="3" />
            </div>
            <div>
                <button onClick={addToList}>ADD</button>
                <button>Report</button>
            </div>

        </div>
        <div >
            <table >
                <tr >
                    <th style={{border:"1px solid black"}}>Code</th>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>status</th>
                    <th style={{border:"1px solid black"}}>Action 1</th>
                    <th style={{border:"1px solid black"}}>Action 2</th>
                </tr>
                {
                    res.map((e,key)=>{
                        return(
                            <tr style={{border:"1px solid black"}} >
                                <td style={{border:"1px solid black"}}>{e}</td>
                                <td style={{border:"1px solid black"}}>{e}</td>
                                <td style={{border:"1px solid black"}}>Active</td>
                                <td style={{border:"1px solid black"}}> <button>EDIT</button></td>
                                <td style={{border:"1px solid black"}}><button>VIEW</button></td>
                            </tr>
                        )
                    })
                }
                
            </table>
        </div>

    </div>
  )
}

export default Screen1