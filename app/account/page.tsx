
import {LoggedInUserNav} from '../page'

export default async function UserAccount() {

    return(
        <>
            <LoggedInUserNav />
            <h1 className="text-7xl font-bold">Congratualtions, you are successsfully logged in! This is the user account page!</h1>
        </>
    )
}