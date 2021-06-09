import Head from "next/head";
import styled, { css } from "styled-components";
import Models from "../components/Models";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ego-Toyota</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageContainer>
          <h1>Descubrí todos los modelos</h1>
        </PageContainer>
        <PageContent>
          <Filters />
          <Models />
        </PageContent>
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
          display: flex;
          height: auto;
          flex-direction: column;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

const FontEgo = css`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const PageContainer = styled.div`
  display: flex;
  ${FontEgo}
  h1 {
    margin-top: 100px;
    margin-left: 0px;
    margin-bottom: 62px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    font-size: 40px;
    line-height: 1.14;
    letter-spacing: 0.5px;
    width: 100%;
  }
`;

const PageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`;

Home.renderData = {
  currentView: "Modelos",
};
