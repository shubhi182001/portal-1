import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./leaderboard.css"
import axios from 'axios'
import { Card } from '@mui/material';
import Cardl from './Cardl'

const Leaderboard = () => {

  const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'StartTime', 'EndTime'];
    const showDetails = studentDetail.map((info => <li>{info}</li>))
  const [getq, setGetq] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(" ");
  const url = "https://csiportal.herokuapp.com/leaderboard";
  const getAllCandidates = () => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {

    getAllCandidates();
  }, [])


  return (

    <>
      <div className="admin-main getc">
        <Navbar />
        <div className="get">
          <h1 className='get_text'>Leaderboard</h1>
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
            }).map((p) =>
            (<Cardl className="getCard" key={p._id} ckc ={p} reload= {getAllCandidates}/>)):null
          }
       
        
             
        </div>
      </div>
    </>
  )
}

export default Leaderboard
