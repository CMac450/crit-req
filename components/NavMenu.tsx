'use-client'
import LogoutButton from './LogoutButton'

//move these to own component file
export function LoggedInUserNav({ }) {
    return (
      <>
        <div className='navbar bg-gray-100'>
          <div className='flex-1'>
            <a href='/' className='btn btn-ghost normal-case text-xl'>Critique Request</a>
          </div>
          <div className='flex-none gap-2'>
            <a href='/dashboard'><button>Dashboard</button></a>
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