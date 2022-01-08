import type { NextPage } from 'next'
import { useState } from 'react'
import {  BiSearch, BiMenuAltLeft, BiX, BiLogIn } from 'react-icons/bi'

const Home: NextPage = () => {

    const [isMenu, setIsMenu] = useState(false)

    return(
        <div className='h-screen w-screen' style={{ fontFamily: 'Ubuntu Mono' }} >
            <nav className='px-4 py-4 md:flex md:items-center md:justify-between md:px-16'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl font-bold'>
                            jot.
                        </h1>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setIsMenu(!isMenu)}>
                            {!isMenu ? <BiMenuAltLeft className='text-4xl'/> : <BiX className='text-4xl'/>}
                        </button>
                    </div>
                </div>
                <div className={`${isMenu ? 'block' : 'hidden'} py-4 md:block`}>
                    <ul className='space-y-4 md:flex md:items-center md:space-y-0 md:space-x-16'>
                        <li className='justify-center flex'>
                            <button>Community</button>
                        </li>
                        <li className='justify-center flex'>
                            <button className='px-2 py-1 bg-black text-white'>Connect</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Home