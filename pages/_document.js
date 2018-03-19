import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const resetStyle = {
    border: '1px red solid',
    width: '100%',
    padding: 0,
    margin: 0
}

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
                    <style>{`body { margin: 0 } /* custom! */`}</style>
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
