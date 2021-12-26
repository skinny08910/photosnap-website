import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        {/* FavIcon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon//apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon//favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon//favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />

        {/* Meta Data */}
        <meta
          name="description"
          content="Get the most out of PhotoSnap by submitting your beautiful photos, searching, and getting inspired by thousands of photos in our database."
        />
        <meta
          name="keywords"
          content="PhotoSnap, photo, pictures, beautifull photo"
        />
        <meta name="author" content="Nicksonder Examar" />
        <title>PhotoSnap - Post and get inspired from beautifull photos.</title>
      </Head>

      {/* Header Section */}
      <header className="header">
        <div className="container">
          <nav className="header__nav-bar">
            <div className="header__left-nav">
              <div className="header__logo">
                <a href="#">
                  <img className="header__logo-img" src="/assets/logo.svg" />
                </a>
              </div>
            </div>

            <div className="header__middle-right">
              <div className="header__middle-nav">
                <a href="#" className="header__middle-nav-link">
                  Stories
                </a>
                <a href="#" className="header__middle-nav-link">
                  Features
                </a>
                <a href="#" className="header__middle-nav-link">
                  Pricing
                </a>
              </div>

              <div className="header__right-nav">
                <a href="#" className="header__button">
                  Get An Invite
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
