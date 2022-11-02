import React, { useEffect, useState } from 'react'
import Navbar from '../../navbar/Navbar'
import "./getq.css"
import Cardc from "./component/Cardc"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios'


const GetQ = () => {

  const [getq, setGetq] = useState([]);
  const [search, setSearch] = useState(" ");


  const url = `${process.env.REACT_APP_URL}/question/seequestion`;
  const getAllQuestions = () => {
    axios.get(url)
      .then((res) => {
        setGetq(res.data.result);
        // console.log(res.data.result);
        // console.log(res.data.result._id);
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {

    getAllQuestions();
    // eslint-disable-next-line
  }, [])





  return (
    <>
      <div className="admin-main getc">
        <Navbar />
        <div className="get">
          <h1 className='get_text'>Questions</h1>
        </div>
        <div className="searchWrap">
          <div className="searchbar">
            <input className='search' type="text" placeholder='Search' onChange={e => { setSearch(e.target.value) }} />
            <SearchOutlinedIcon style={{ fontSize: "38px", opacity: "45%" }} />
          </div>
        </div>
        <div className="getq">
          {getq && getq.length ?
            getq.filter((p) => {
              if (search === " ") {
                return p
              } else if (p.question.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())) {
                return p
              }
              return false
            }).map((p) =>
              (<Cardc className="getCard" key={p._id} ques={p} reload={getAllQuestions} />)
            ) : null 
          }
        </div>
      </div>
    </>
  )
}

export default GetQ