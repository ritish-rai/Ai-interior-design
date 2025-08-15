import React from 'react'
import { Button } from '@/components/ui/button'

function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
        <h2 className='font-medium text-lg text-gray-500'>Create New Ai Interior Design for your room</h2>
        <Button className='mt-5'>+ Redesign Room</Button>
    </div>
  )
}

export default EmptyState