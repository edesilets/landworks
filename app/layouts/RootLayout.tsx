import {
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "react-router";

import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Desilets Landworks - Professional Landscaping Services" />
                <meta name="keywords" content="landscaping,landworks,outdoor" />
                <Meta />
                <Links />
                <title>Desilets Landworks</title>
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default RootLayout