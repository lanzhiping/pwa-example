import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const resetStyle = {
    width: '100%',
    padding: 0,
    margin: 0
};

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
                    <style>{` html, body { width: 100%; overflow-x: hidden; }/* custom! */`}</style>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, user-scalable=no" key="viewport" />
                </Head>
                <body style={resetStyle}>
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
