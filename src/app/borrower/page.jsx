"use client";

import React from 'react'
import Layout from '../components/layout'
import BorrowerList from './borrowerList';
import {searchQuery} from './borrowerList';
import {setSearchQuery} from './borrowerList';
import {useState,useEffect} from 'react'


const Borrower = () => {
  const [searchQuery,setSearchQuery] = useState("");

  return (
    <>
    <div className='bg-slate-100'>
    <Layout>
      <>
      <h2 className='font-bold mb-4'>
          Borrowers
        </h2>
        <div>
          <input type="text"
          placeholder = "Search User"
          value ={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-2 px-2 py-2 rounded border-rounded bg-white"
          />
        </div>
          <BorrowerList searchQuery={searchQuery}/>
      </>
     </Layout>
    </div>
     
    </>
    
  )
}

export default Borrower