import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const resetStyle = `
    a {
        text-decoration: none;
        color: inherit;
    }

    html,
    body {
        width: 100%;
        overflow-x: hidden;
    }

    body {
        width: 100%;
        padding: 0;
        margin: 0;
    }
    /* custom! */
`;

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()

        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{resetStyle}</style>
                    <link rel="manifest" href="/manifest.json" />
                    {/* Add to home screen for Safari on iOS */}
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
                    <meta name="apple-mobile-web-app-title" content="PWA" />
                    <link rel="apple-touch-icon" href="/launcher-icon-4x.png" />
                    {/* Add Tile Icon for Windows */}
                    <meta name="msapplication-TileImage" content="/launcher-icon-4x.png" />
                    <meta name="msapplication-TileColor" content="#2F3BA2" />

                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, user-scalable=no" key="viewport" />
                </Head>
                <body>
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
