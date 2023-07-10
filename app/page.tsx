import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import imgsrc from './images/placeholder-image.jpg'
import Image from 'next/image';
import AuthForm from './auth-form'

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
          <div className='max-w-md'>
            <h1 className='text-7xl font-bold'>Get constructive feedback on your writing.</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <a href="/login">
              <button className="py-2 px-4 rounded-md btn btn-neutral">
                Log In
              </button>
            </a>
          </div>
          <Image src="/images/placeholder-image.jpg" className='max-w-sm rounded-lg shadow-2xl' width={500} height={500} alt="placeholder image" />
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
          <div className='max-w-md'>
            <h1 className='text-7xl font-bold'>Join Our discord</h1>
            <p className='py-6'>
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

export function LoggedInUserNav({ }) {
  return (
    <>
      <div className='navbar bg-gray-100'>
        <div className='flex-1'>
          <a href='/' className='btn btn-ghost normal-case text-xl'>Critique Request</a>
        </div>
        <div className='flex-none gap-2'>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/placeholder-image.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              {/* <li><a>Logout</a></li> */}
              <LogoutButton />
            </ul>
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export function NotLoggedInUserNav({ }) {
  return (
    <>
      <div className='navbar bg-gray-100'>
        <div className='flex-1'>
          <a href='/' className='btn btn-ghost normal-case text-xl'>Critique Request</a>
        </div>
        <div className='flex-none gap-2'>
          {/* <button className="btn btn-neutral">Log In</button> */}
          <a href="/login">
            <button className="py-2 px-4 rounded-md btn btn-neutral">
              Log In
            </button>
          </a>
        </div>
      </div>
    </>
  )
}