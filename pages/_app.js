import '../styles/global.scss'
import NavBarComponent from "../components/NavBarComponent"

export default function MyApp({ Component, pageProps }) {
    return(
        <>
        <nav>
            <NavBarComponent />
        </nav>
        <main>
            <div className="content">
                <Component {...pageProps} />
            </div>
        </main>
        </>
    )
}