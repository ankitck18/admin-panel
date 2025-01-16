"use client";

import React from 'react'
import Layout from '../components/layout'
import BorrowerList from './borrowerList';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Borrower = () => {
  return (
    <>
     <Layout>
      <>
        <h2 className='font-bold mb-4'>
          Borrowers
        </h2>
          <BorrowerList />
      </>
     </Layout>
    </>
    
  )
}

export default Borrower