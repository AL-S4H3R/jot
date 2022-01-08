import type { NextPage } from 'next'
import { useState } from 'react'
import {  BiSearch, BiMenuAltLeft, BiX } from 'react-icons/bi'

const Home: NextPage = () => {

    const [isMenu, setIsMenu] = useState(false)

    return(
        <div className='h-screen w-screen' style={{ fontFamily: 'Ubuntu Mono' }} >
            <nav className='px-4 py-4 flex items-center justify-between'>
                <h1 className='text-4xl font-bold'>
                    jot.
                </h1>
                <button onClick={() => setIsMenu(!isMenu)}>
                    { 
                        isMenu 
                        ? <BiMenuAltLeft className='text-4xl transition-all duration-200'/> 
                        : <BiX className='text-4xl transition-all duration-200'/>
                    }
                </button>
                {/* <div className='flex items-center border px-4 py-2'>
                    <input className='active:border-blue-500' placeholder='Search...'/>
                    <BsSearch/>
                </div>
                <button className='p-2 border-2 border-black font-semibold tracking-wider'>
                    Login
                </button> */}
            </nav>
        </div>
    )
}

export default Home