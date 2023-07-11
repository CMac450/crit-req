import { LoggedInUserNav, NotLoggedInUserNav } from '../../components/NavMenu'

///get uploaded file data per each user and pass it here, mapping it to compnent
////going to pass in fie name, text, and warnings, genres, and labels

export default async function Dashboard() {

    return (
        <>
            <LoggedInUserNav />
            <h1 className="text-7xl font-bold">Congratualtions, you successsfully logged in! This is the dashboard.</h1>

            <div className='flex flex-row'>
                <div className='flex flex-col max-w-2xl mr-10'>
                    <div className='card  bg-base text-base-content max-h-screen  border-gray shadow-2xl mb-20'>
                        <div className='card-body'>
                            <h2 className='card-title'>Name of Work</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className='divider'></div>
                            <div className='card-actions flex flex-col mt-10'>
                                <div>
                                    Genre: <span className="badge-neutral badge-lg rounded">Genre1</span>, <span className="badge-neutral badge-lg rounded">Genre2</span>
                                </div>
                                <div>
                                    Warnings: <span className="badge-neutral badge-lg rounded">Warning1</span>, <span className="badge-neutral badge-lg rounded">Warning2</span>
                                </div>
                                <div>
                                    Labels: <span className="badge-neutral badge-lg rounded">Label1</span>, <span className="badge-neutral badge-lg rounded">Label2</span>
                                </div>
                                <div>
                                    QPQ (Quid Pro Quo)
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-neutral mt-20'>Request </button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-base text-base-content max-h-screen  border-gray shadow-2xl'>
                        <div className='card-body'>
                            <h2 className='card-title'>Name of Work</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className='divider'></div>
                            <div className='card-actions flex flex-col mt-10'>
                                <div>
                                    Genre: <span className="badge-neutral badge-lg rounded">Genre1</span>, <span className="badge-neutral badge-lg rounded">Genre2</span>
                                </div>
                                <div>
                                    Warnings: <span className="badge-neutral badge-lg rounded">Warning1</span>, <span className="badge-neutral badge-lg rounded">Warning2</span>
                                </div>
                                <div>
                                    Labels: <span className="badge-neutral badge-lg rounded">Label1</span>, <span className="badge-neutral badge-lg rounded">Label2</span>
                                </div>
                                <div>
                                    QPQ (Quid Pro Quo)
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-neutral mt-20'>Request </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col drawer lg:drawer-open'>
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {/* <li><a>Filter content</a></li>
                            <li><a>Sidebar Item 2</a></li> */}
                            <p>Filter content</p>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}