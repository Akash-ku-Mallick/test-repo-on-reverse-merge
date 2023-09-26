import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Button } from '@mui/material';

export default function Context1() {

    return(
      <section id='Context' className='Context panel'>
        <Button className='leftBtn outlinedCircle' 
        onClick={() => console.log('click')}>
        <ArrowBackIosRoundedIcon />
        </Button>
        <div className='container'><Items /></div>
        <div className='rightBtn outlinedCircle' 
        onClick={() => console.log('click')}>
        <ArrowForwardIosRoundedIcon  />
        </div>
      </section>
    )
  }

  const Items = () => {
    return (
      <div className='item'>
      </div>
    )
  }
  
  // _______________ Context 1 _________________   ------End
  