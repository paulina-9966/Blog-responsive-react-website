import React, { useState, useEffect } from 'react'
import './App.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter} from 'react-icons/fa';

import data from './data'

const Single = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <section>
{data.map((singleItem)=> {
       const {id, dataD, info} = singleItem;
       return (
        <div className="blog-t" key={id}>
        <div className="blog-social text-center">
          <h6>{dataD}</h6>
          <div className="social-icons">
          <div class="social text-center">
              <FaFacebook/>
             <FaInstagram/>
              <FaYoutube/>
              <FaTwitter/>
          </div>
          </div>
        </div>
         <h4> {readMore ? info: `${info.substring(0,150)}...`}
          </h4>
          <button className="btn btn-readmore" onClick={() => setReadMore(!readMore)}>
    {readMore?'show less' : 'read more'}
  </button>
      </div>
       )
})}
        </section>
    );
}


export default Single;