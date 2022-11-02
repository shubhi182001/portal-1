import React, {useEffect, useState} from 'react'
import Navbar from '../../navbar/Navbar'
import Cardc from "./components/Cardf"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios'

function Getfeedback() {
  const[getq, setGetq] = useState({});
  const[search, setSearch] = useState(" ");


  const url = `${process.env.REACT_APP_URL}/feed/seefeedbackques`;
  const getAllQuestions = () => {
    axios.get(url)
    .then((res)=> {
      setGetq(res);
      // console.log(res);
    })
    .catch(error => console.log(error));
  }
  useEffect(()=>{
    getAllQuestions();
    // eslint-disable-next-line
  },[])


  return (
    <div className='admin-main getc'>
        <Navbar/>
        <div className="get" style={{marginBottom:"15px"}}>
        <h1 className='get_text' >Feedback Questions</h1>
    </div>
    <div className="searchWrap">
    <div className="searchbar">
      <input className='search' type="text" placeholder='Search' onChange={e => {setSearch(e.target.value)}} />
      <SearchOutlinedIcon style={{fontSize:"38px", opacity:"45%"}}/>
    </div>
    </div>
    <div className="getq">
      {getq.data && getq.data.length ?
        getq.data.filter((p)=>{
          if(search === " "){
            return p
          }else if (p.question.toLowerCase().includes(search.toLowerCase())){
            return p
          }
          return false
        }).map((p) => 
          (<Cardc className="getCard" key={p._id} ques={p} reload={getAllQuestions}/>)
        ) : null
      }
    </div>
    </div>
  )
}

export default Getfeedback;