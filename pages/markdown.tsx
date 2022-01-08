import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import Editor from '../src/components/Editor'
import Preview from '../src/components/Preview'

const Home: NextPage = () => {
	
	const [doc, setDoc] = useState<string>('# Hello, World!\n')
  	const handleDocChange = useCallback(newDoc => {
    	setDoc(newDoc)
  	}, [])
	  
	return (
	<div className='h-screen w-screen bg-gray-900'>
		<Head>
			<title>Jot - Get paid for writing.</title>
			<meta name="description" content="Jot is a platform allowing users to get paid in crypto for their articles. A decentralized substack." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className='flex w-full'>
			<div className='w-1/2'>
				<textarea className='h-full w-full' value={doc} onChange={(e) => handleDocChange(e.target.value)}/>
				{/* <Editor initialDoc={doc} onChange={handleDocChange} /> */}
			</div>
			<div className='w-1/2'>
				<Preview doc={doc}/>
			</div>
		</div>
	</div>
  )
}

export default Home
