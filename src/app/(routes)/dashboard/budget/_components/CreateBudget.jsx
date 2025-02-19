"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function CreateBudget() {

  const [emoji, setEmoji] = React.useState('😊');
  const [openEmoji, setOpenEmoji] = React.useState(false);

  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const onCreateBudget = () => {}

  return (
    <div>
      <Dialog>
  <DialogTrigger asChild>
    <div className='bg-gray-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
      <h2 className='text-3xl'>+</h2>
      <h3>Create New Budget</h3>
      </div>
      </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Budget</DialogTitle>
      <DialogDescription>
        <div className='mt-5'>
        <h2 className="text-black font-semibold my-1">Pick an Icon</h2>
          <Button variant='outline' size='lg' className='text-lg ' onClick={()=> setOpenEmoji(!openEmoji)} >{emoji}</Button>  
          <div className='absolute'>
            <EmojiPicker open={openEmoji} onEmojiClick={(e)=> {
              setEmoji(e.emoji)
              setOpenEmoji(false)}}/>
          </div>
          <div className="mt-2">
            <h2 className="text-black font-semibold my-1">Budget Name</h2>
            <Input placeholder='e.g. Car' onChange={(e)=> setName(e.target.value)} />
          </div>
          <div className="mt-2">
            <h2 className="text-black font-semibold my-1">Budget amount</h2>
          <Input type='number' placeholder='e.g. ₹5000' onChange={(e)=> setAmount(e.target.value)} />
          </div>
          <div className="items-center justify-center flex mt-3">
            <Button disabled={!(name&&amount)} onClick={()=> onCreateBudget()} className='mt-5 w-full' size='lg'>Create Budget</Button>
          </div>
        </div> 
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      
    </div>
  )
}

export default CreateBudget
