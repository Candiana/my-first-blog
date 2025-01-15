import React, { useRef } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const NavBar = () => {
  const sideMenuRef=useRef();
  const openMenu=()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu=()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
          <Image src={assets.header_bg_color} alt='navBackground' className='w-full'/>
        </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-2.5 flex item-center justify-between z-50 '>
          {/* px is padding x-axis */}
            <a href=''>
                {/* <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo'/> */}
                <h2 className='w-28 cursor-pointer mr-14 text-xl py-2.5'>
                  Alter Ego
                </h2>
            </a>
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
              {/* gap针对的是grid-gap，指的是column和row之间的间隔的大小，分别针对上下间距和左右间距。
              padding指的是一个元素的内容到该元素边界的距离，特指上下左右边界的距离。
              */}
              <li><a className='font-Ovo' href='#top'>首页</a></li>
              <li><a className='font-Ovo' href='#about'>关于我</a></li>
              <li><a className='font-Ovo' href='#article'>博文</a></li>
              <li><a className='font-Ovo'>小功能</a></li>
              <li><a className='font-Ovo' href='#commentBoard'>留言版</a></li>
            </ul>
            <div className='flex gap-4'>
              <button>
                <Image src={assets.moon_icon} alt='moon' className='w-6'/>
              </button>
              <a href='#commentBoard' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                留言<Image src={assets.arrow_icon} className='w-3' alt='commentBoard'/>
                </a>
                {/* 手机端菜单按钮 */}
                <button className='block md:hidden ml-3' onClick={openMenu}>
                  {/* 再次强调，不要加括号，加括号会导致函数被立刻运行，想要输入参数，使用(x)=>function */}
                  <Image src={assets.menu_black} alt='menu_black' className='w-6'/>
                </button>
            </div>
            {/* 手机端菜单界面 */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
              <div className='absolute right-6 top-6' onClick={closeMenu}>
                {/* 确保关闭键在右上角 */}
                <Image src={assets.close_black} alt='close_black' className='w-5 cursor-pointer'/>
              </div>
              <li><a className='font-Ovo' href='#top'>首页</a></li>
              <li><a className='font-Ovo' href='#about'>关于我</a></li>
              <li><a className='font-Ovo' href='#article'>博文</a></li>
              <li><a className='font-Ovo'>占位符</a></li>
              <li><a className='font-Ovo' href='#commentBoard'>留言版</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar