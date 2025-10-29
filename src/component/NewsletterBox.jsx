import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler=(event)=>{
    event.preventDefault();

  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now</p>
      <p className='text-gray-400 mt-3 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio possimus laborum aut adipisci facere reprehenderit veniam error magnam qui neque minima doloremque alias totam aspernatur culpa placeat, ab officiis quam suscipit at, sapiente quas!</p>
      <form className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
        <input className='w-full 
        sm-flex-1
        outline-none' type="email" placeholder='Enter your email' required />
        <button className='py-4 
        bg-black
        text-white
        text-xs
        px-10 
        cursor-pointer' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
