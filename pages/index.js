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

      {/* Main Section */}
      <main className="main">
        {/* Top Section */}
        <section className="top-section">
          <div className="top-section__container">
            <div className="top-section__top-wrapper">
              <div className="top-section__colored-bar"></div>
              {/* Top Info */}
              <div className="top-section__info">
                <div className="top-section__info-wrapper">
                  <h1 className="top-section__title">
                    Create and Share Your Photo stories.
                  </h1>

                  <p className="top-section__p">
                    Photosnap is a platform for photographers and visual
                    storytellers. We make it easy to share photos, tell stories
                    and connect with others.
                  </p>

                  <a href="#">
                    <div className="top-section__button">Get an Invite</div>
                    <img
                      className="top-section__right-arrow"
                      src="assets/arrow-right.png"
                    />
                  </a>
                </div>
              </div>

              {/* Top Image */}
              <div className="top-section__img"></div>
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section className="story-section">
          <div className="story-section__container">
            <div className="story-section__top-wrapper">
              {/* Story Image */}
              <div className="story-section__img"></div>

              {/* Story Info */}
              <div className="story-section__info">
                <div className="story-section__info-wrapper">
                  <h1 className="story-section__title">
                    Beautiful Stories Everytime
                  </h1>

                  <p className="story-section__p">
                    We provide design templates to ensure your stories look
                    terrific. Easily add photos, text, embed maps and media from
                    other networks. Then share your story with everyone.
                  </p>

                  <a href="#">
                    <div className="story-section__button">
                      View The Stories
                    </div>
                    <img
                      className="story-section__right-arrow"
                      src="assets/arrow-right-black.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section className="design-section">
          <div className="design-section__container">
            <div className="design-section__top-wrapper">
              {/* Design Info */}
              <div className="design-section__info">
                <div className="design-section__info-wrapper">
                  <h1 className="design-section__title">
                    Designed for everyone
                  </h1>

                  <p className="design-section__p">
                    Photosnap can help you create stories that resonate with
                    your audience. Our tool is designed for photographers of all
                    levels, brands, businesses you name it.
                  </p>

                  <a href="#">
                    <div className="design-section__button">
                      View The Stories
                    </div>
                    <img
                      className="design-section__right-arrow"
                      src="assets/arrow-right-black.png"
                    />
                  </a>
                </div>
              </div>

              {/* Design Image */}
              <div className="design-section__img"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
