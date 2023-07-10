////select all the rows from the cuntries table in supabase and render them
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
    const supabase = createServerComponentClient({ cookies });

    const { data: countries } = await supabase.from("countries").select();
    // if (countries.length =< 0) {
    //     console.log('table does NOT exist')
    // } else {
    //     console.log(`table exists`)
    // }

    console.log(`test`)
    console.log(`countries: ${countries}`)
    return (
        <>
            <h1>dfgdHR5</h1>
            <ul className="my-auto">
                {countries?.map((country) => (
                    <li key={country.id}>{country.name}</li>
                ))}
                {/* {!countries ? (
                    <li>No countries</li>
                ) : (
                    <li>Countries exist</li>
                )} */}
            </ul>
        </>
    );
}