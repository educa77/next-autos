import Head from "next/head";
import { ResetStyle } from "../styles/Reset";
import { GlobalStyle } from "../styles/Global";
import Layout from "../layout";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  const currentView = Component?.renderData?.currentView
    ? Component.renderData.currentView
    : "";

  return (
    <>
      <Head>
        <title>Ego-Toyota</title>
      </Head>
      <GlobalStyle />
      <ResetStyle />
      <Layout currentView={currentView}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
}

export default MyApp;
