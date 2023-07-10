import {LoggedInUserNav} from '../page'

export default async function Dashboard() {

    return(
        <>
            <LoggedInUserNav />
            <h1 className="text-7xl font-bold">Congratualtions, you successsfully logged in!</h1>
        </>
    )
}