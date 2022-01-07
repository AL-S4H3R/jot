import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import Editor from '../src/components/Editor'

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
		<section>
			<Editor initialDoc={doc} onChange={handleDocChange}/>
		</section>
	</div>
  )
}

export default Home
