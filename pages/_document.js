import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html lang="pt">
                <Head>
                    <meta name="description" content="Hot news Portugal recolhe e filtra as melhores notícias da imprensa nacional." />
                    <meta property="og:title" content="Hot news Portugal" />
                    <meta property="og:description" content="Hot news Portugal recolhe e filtra as melhores notícias da imprensa nacional." />
                    <meta property="og:type" content="website"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument