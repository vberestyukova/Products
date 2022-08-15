import React from "react";

interface ErrorMessage {
    error: string
}

export function Error({error} : ErrorMessage) {
    return(
        <div className='text-center text-red-900'>{ error }</div>
    )
}
