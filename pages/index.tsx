import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
	<div className='h-screen w-screen bg-gray-900'>
		<Head>
			<title>Jot - Get paid for writing.</title>
			<meta name="description" content="Jot is a platform allowing users to get paid in crypto for their articles. A decentralized substack." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	</div>
  )
}

export default Home
