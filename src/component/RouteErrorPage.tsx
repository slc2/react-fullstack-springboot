import { useRouteError } from "react-router-dom";

export function RouteErrorPage () {
    const error = useRouteError();
    console.error(error);
     
    return (
        <div id="error-page">
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{JSON.stringify(error)}</i>
            </p>
        </div>
    )
}