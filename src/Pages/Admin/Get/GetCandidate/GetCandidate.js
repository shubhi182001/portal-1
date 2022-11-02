import React, {useEffect, useState} from 'react'
import Navbar from '../../navbar/Navbar'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Cardl from "./component/Cardl"
import axios from 'axios'
const GetCandidate = () => {
  const [data,setData]=useState([]);
 
  const[search, setSearch] = useState(" ");
const url = `${process.env.REACT_APP_URL}/candidate`;
const getAllCandidates = () => {
  axios.get(url)
  .then((res)=> {
    setData(res.data);
    // console.log(res.data);
  })
  .catch(error => console.log(error));
}
useEffect(()=>{
  
  getAllCandidates();
  // eslint-disable-next-line
},[])


  return (
    <div className='admin-main getc'>
      <Navbar/>
      <div className="get">
        <h1 className='get_text'>Candidates</h1>
    </div>

    <div className="searchWrap">
          <div className="searchbar">
            <input className='search' type="text" placeholder='Search' onChange={e => { setSearch(e.target.value) }} />
            <SearchOutlinedIcon style={{ fontSize: "38px", opacity: "45%" }} />
          </div>
        </div>
        <div className="getq">
          {data[0] ?
            data.filter((p) => {
              if (search === " ") {
                return p
              } else if (p.name?.toLowerCase().includes(search.toLowerCase())) {
                return p
              }else if(p.studentNum?.toString().includes(search)){
                return p
            }
            return false
            }).map((p) =>
            (<Cardl className="getCard" key={p._id} ckc ={p} />)):null
          }
       
        
             
        </div>















{/* 
    <div className="getq">
    <table className='table table-hover'>

<thead className='table-dark'>
    <tr>
        <th>
            Name
        </th>
        <td>
            Email
        </td>
        <td>
            StudentNumber
        </td>
        <td>
            rollNumber
        </td>
        <td>
            mobileNumber
        </td>

        <td>
            branch
        </td>
        <td>
            gender
        </td>
        <td>
            LoginAt
        </td>
        <td>
           Lang
        </td>
    </tr>
</thead>
    <tbody>
                {
                    data.map((curElement, ind)=>{

                        return (
                            <tr key={ind} >
                            <th>
                                {curElement.name}
                            </th>
                            <td>
                            {curElement.email}
                            </td>
                            <td>
                           {curElement.studentNum}
                            </td>
                            <td>
                                {curElement.rollNum}
                            </td>
                            <td>
                            {curElement.mobileNum}
                            </td>
                            <td>
                            {curElement.branch}
                            </td>
                            <td>
                            {curElement.gender}
                            </td>
                            <td>
                            {curElement.loginAt}
                            </td>
                            <td>
                            {curElement.lang}
                            </td>
                        </tr>

                        )
                    })
                }


           
            </tbody>
            </table>
    </div> */}



    </div>
  )
}

export default GetCandidate