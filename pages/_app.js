import StoreProvider from "../provider";
import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    );
}

export default MyApp;
