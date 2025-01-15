import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.alter_ego} alt='alter_ego' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
          你好，我是Alter Ego <Image src={assets.alter_ego} alt='alter_ego' className='w-6'/>
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
        一个因为太过无聊，而做点东西玩的国家一级保护废物
      </h1>
      <p className='max-w-2xl mx-auto'>
        初从文,三年不中;遂习武,校场发一矢,中鼓吏,逐之出。后学医,略有所成.自撰一良方,服之,卒。
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='' className='px-10 py-3 border border-white rounded-full bg-black flex text-white items-center gap-2'>联系我<Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4'/></a>
        <a href='' className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>分享网页<Image src={assets.right_arrow_bold} alt='right_arrow_bold' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header