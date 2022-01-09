import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <CircularProgress />
    </div>
  )
}
