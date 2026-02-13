import {
    Links,
    Scripts,
    ScrollRestoration
} from "react-router";

import { UnderConstructionPage } from '../pages/UnderConstructionPage'

export function UnderConstructionLayout() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Desilets Landworks - Coming Soon" />
                <Links />
            </head>
            <body>
                <main>
                    <UnderConstructionPage />
                </main>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default UnderConstructionLayout;