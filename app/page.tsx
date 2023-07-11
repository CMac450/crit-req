import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import imgsrc from './images/placeholder-image.jpg'
import Image from 'next/image';
import AuthForm from './auth-form'
import {LoggedInUserNav, NotLoggedInUserNav} from '../components/NavMenu'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()


  let isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? <LoggedInUserNav /> : <NotLoggedInUserNav />}
      {/* <div className="row">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p className="">
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div> */}
      <div className='hero min-h-screen bg-base 200'>
        <div className='hero-content flex-col lg:flex-row'>
          {/* <Image src="/images/placeholder-image.jpg" className='max-w-sm rounded-lg shadow-2xl' width={500} height={500} alt="placeholder image"/> */}
          <div className='max-w-xl'>
            <h1 className='text-8xl font-bold'>Get constructive feedback on your writing.</h1>
            <p className="py-6 text-2xl">
              Are you tired of throwing your work to the void (aka: random writing internet threads) and hoping some kind soul will review your writing?
              Enter Critique Request, a platform dedicated to connecting writers and allowing them to give and recieve feedback on their writing.
            </p>
            <a href="/login">
              <button className="py-2 px-4 rounded-md btn btn-neutral">
                Log In
              </button>
            </a>
          </div>
          <Image src="/images/placeholder-image.jpg" className='max-w-md rounded-lg shadow-2xl m-40' width={500} height={500} alt="placeholder image" />
        </div>
      </div>
      {/* <div className='divider'></div> */}
      <div className='max-h-screen'>
        <h1 className='text-3xl font-bold text-center m-10'>How it Works</h1>
        <div className='flex flex-row flex-col-sm space-x-8 m-20'>
          <div className='card w-96 bg-gray-100 shadow-md '>
            <div className='card-body'>
              <h2 className='text-center text-xl font-semibold'>1. Make an account</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className='card w-96 bg-gray-100 shadow-md'>
            <div className='card-body'>
              <h2 className='text-center text-xl font-semibold'>2. Upload your writing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className='card w-96 bg-gray-100 shadow-md'>
            <div className='card-body'>
              <h2 className='text-center text-xl font-semibold'>3. Add tags, labels, and warnings</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className='card w-96 bg-gray-100 shadow-md'>
            <div className='card-body'>
              <h2 className='text-center text-xl font-semibold'>4. Make your post public</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* <div className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>Give others feedback</h2>
              <p>This is a paragraph</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className='hero min-h-screen bg-base 200 bg-base-100'>
        {/* <div className='divider'></div> */}
        <div className='hero-content flex-col lg:flex-row'>
          <div className='max-w-xl'>
            <h1 className='text-7xl font-bold'>Join Our Discord</h1>
            <p className='py-6 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            <button className="btn btn-neutral">Join</button>
          </div>
        </div>
      </div>
    </>
  )
}

