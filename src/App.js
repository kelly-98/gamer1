import logo from "./assets/header-logo.png";
import logoText from "./assets/header-logo-text.png";
import twPost from "./assets/tw-post.png";
import x from "./assets/x.png";
import cloud1 from "./assets/cloud-1.png";
import cloud2 from "./assets/cloud-2.png";
import cloud3 from "./assets/cloud-3.png";
import ft1 from "./assets/ft-1.png";
import ft2 from "./assets/ft-2.png";
import ft3 from "./assets/ft-3.png";
import ft4 from "./assets/ft-4.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-logo">
            {/* <div className="header-logo-text">
              <img src={logoText} alt="" />
            </div> */}
          </div>
          <div className="header-menu">
            <a href="#" target="_blank" rel="noopener noreferrer">
              UNISWAP
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x723b80d85f25a548f01616bd787c33c4a53065dd"
              target="_blank"
              rel="noopener noreferrer">
              DEXTOOLS
            </a>
            <a
              href="https://t.me/HighlightsERC"
              target="_blank"
              rel="noopener noreferrer">
              TELEGRAM
            </a>
            <a
              href="https://twitter.com/elonmusk/status/1711072420923101302"
              target="_blank"
              rel="noopener noreferrer">
              TWITTER
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* <div className="main-logo-img">
          <img src={logo} alt="" />
        </div> */}
        <div className="main-header">
          <div className="cloud-1 cloud">
            <img src={cloud1} alt="" />
          </div>
          <div className="cloud-2 cloud">
            <img src={cloud2} alt="" />
          </div>
        </div>
        <div className="main-post">
          <div className="tw-post">
            <img src={twPost} alt="" />
          </div>
        </div>
        <div className="cloud-3 cloud">
          <img src={cloud3} alt="" />
        </div>

        <div className="main-footer">
          <div className="main-footer-left">
            <img src={x} alt="" />
          </div>
          <div className="main-footer-right">
            <div className="main-footer-right-cloud cloud">
              <img src={cloud2} alt="" />
            </div>
            <p>
              {/* $GAMER comes to the crypto space with a great launch! Our mission
              is to bring serious ENTERTAINMENT and innovation to the crypto
              world through X!! */}
              {/* We appreciate @X’s stated intent over the last few weeks to
              address antisemitism and hate on the platform. */}
              CA: 0xB953a92A736cd90659C298C035E7122E21220e2d
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <span>All Rights Reserved | 2023 | developer@highlightserc.com</span>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={ft1} alt="" />
              <span>UNISWAP</span>
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x723b80d85f25a548f01616bd787c33c4a53065dd"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ft2} alt="" />
              <span>DEXTOOLS</span>
            </a>
            <a
              href="https://t.me/HighlightsERC"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ft3} alt="" />
              <span>TELEGRAM</span>
            </a>
            <a
              href="https://twitter.com/elonmusk/status/1711072420923101302"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ft4} alt="" />
              <span>TWITTER</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
