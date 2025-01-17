"use client";

import React from 'react'
import Layout from '../components/layout'
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CountUp from 'react-countup';



export default function home (){
  return (
    <>
        <Layout>
            <>  <div className="text-center py-4">
                  <h1 className="flex justify-start text-xl font-bold text-pretty">
                    Welcome, User!
                  </h1>
                </div>
                <div className='pt-5'>
                <div className='grid grid-cols-4 gap-6'>
                  <div className='col-span-1'>
                    <div className='mx-auto bg-sky-50 rounded-xl shadow-lg'>
                      <div className='flex justify-between'>
                        <div className='ml-5 mt-5'>
                          <AccountBalanceIcon fontSize='large'/>
                        </div>
                      </div>
                      <div className='pl-7 pt-5 pb-5'>
                        <div className='text-blue-600 font-semibold'>
                            Total Applications
                        </div>
                        <div className='text-3xl font-semibold'>
                        <CountUp start={0} end={127} delay={1}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='mx-auto bg-sky-50 rounded-xl shadow-lg'>
                      <div className='flex justify-between'>
                        <div className='ml-5 mt-5'>
                          <RequestQuoteRoundedIcon fontSize='large'/>
                        </div>
                      </div>
                      <div className='pl-7 pt-5 pb-5'>
                        <div className='text-blue-600 font-semibold'>
                            Total Loans
                        </div>
                        <div className='text-3xl font-semibold'>
                        <CountUp start={0} end={127} delay={1}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='mx-auto bg-sky-50 rounded-xl shadow-lg'>
                      <div className='flex justify-between'>
                        <div className='ml-5 mt-5'>
                          <MonetizationOnIcon fontSize='large'/>
                        </div>
                      </div>
                      <div className='pl-7 pt-5 pb-5'>
                        <div className='text-blue-600 font-semibold'>
                            Disbursed Amount
                        </div>
                        <div className='text-3xl font-semibold'>
                          <CountUp start={0}prefix="$ "end={100000} delay={1}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                
            </>
        </Layout>
    </>
  )
}

