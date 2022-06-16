import React, {useEffect, useState} from 'react'
import Navbar from '../../navbar/Navbar'
import "./getq.css"
import Cardc from "./component/Cardc"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios'


const GetQ = () => {

  const[getq, setGetq] = useState({});
  const[search, setSearch] = useState(" ");


  const url = "https://csiportal.herokuapp.com/question/seequestion";
  const getAllQuestions = () => {
    axios.get(url)
    .then((res)=> {
      setGetq(res);
    })
    .catch(error => console.log(error));
  }
  useEffect(()=>{
    getAllQuestions();
  },[])
  
  console.log(getq.data);

  // for(let i=0;i<7;i++){
  // console.log(getq.data[i].question);
  // console.log(getq.data[i].category);
  // }

  return (
    <>
    <Navbar/>
    <div className="get">
        <h1 className='get_text'>Questions</h1>
    </div>
    <div className="searchbar">
      <input className='search' type="text" placeholder='Search' onChange={e => {setSearch(e.target.value)}} />
      <SearchOutlinedIcon className='search-icon' style={{fontSize:"2.9rem", marginRight:"20px"}}/>
    </div>
    <div className="getq">
      {getq.data && getq.data.length ?
        getq.data.filter((p)=>{
          if(search === ""){
            return p
          }else if (p.question.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())){
            return p
          }
        }).map((p) => 
          (<Cardc className="getCard" key={p._id} ques={p} reload={getAllQuestions}/>)
        ) : null
      }
    </div>
    </>
  )
}

export default GetQ