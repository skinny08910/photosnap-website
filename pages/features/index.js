import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
          content="Get the most out of PhotoSnap by submitting your story, search, and get inspired by thousands of photos with stories behing them in our database."
        />
        <meta
          name="keywords"
          content="PhotoSnap, photo, pictures, beautifull photo"
        />
        <meta name="author" content="Nicksonder Examar" />
        <title>
          Features - We have features you need to make your stories easy to post
          and reach as many hearts as you want.
        </title>
      </Head>

      {/************* Header Section *****************/}
      <header className="header">
        <div className="container">
          <nav className="header__nav-bar">
            <div className="header__left-nav">
              <div className="header__logo">
                <Link href="/">
                  <a>
                    <img
                      className="header__logo-img"
                      src="/assets/logo.svg"
                      alt="Header Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="header__middle-right">
              <div className="header__middle-nav">
                <Link href="/stories">
                  <a className="header__middle-nav-link">Stories</a>
                </Link>

                <Link href="/features">
                  <a className="header__middle-nav-link">Features</a>
                </Link>

                <Link href="/pricing">
                  <a className="header__middle-nav-link">Pricing</a>
                </Link>
              </div>

              <div className="header__right-nav">
                <a href="#" className="header__button">
                  Get An Invite
                </a>
              </div>

              <div className="header__hamburder">
                <div className="header__line"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu *****************/}
      <div className="mobile-menu">
        <Link href="/stories">
          <a className="mobile-menu__link">Stories</a>
        </Link>

        <Link href="/features">
          <a className="mobile-menu__link">Features</a>
        </Link>

        <Link href="/pricing">
          <a className="mobile-menu__link">Pricing</a>
        </Link>

        <hr className="mobile-menu__mobile-hr" />

        <div className="mobile-menu__mobile-button">
          <a href="#" className="mobile-menu__button">
            Get An Invite
          </a>
        </div>
      </div>

      {/* Main Section *****************/}
      <main className="main">
        {/* Features *****************/}
        <section className="features">
          <div className="features__container">
            <div className="features__wrapper">
              <div className="features__colored-bar"></div>
              {/* Features Info */}
              <div className="features__info">
                <div className="features__info-wrapper">
                  <h1 className="features__title">Features</h1>

                  <p className="features__p">
                    We make sure all of our features are designed to be loved by
                    every aspiring and even professional photograpers who wanted
                    to share their stories.
                  </p>
                </div>
              </div>

              {/* Features Image */}
              <div className="features__img">
                <picture>
                  <source
                    media="(max-width:700px)"
                    srcSet="assets/features/mobile/hero.jpg"
                  />

                  <source
                    media="(max-width:900px)"
                    srcSet="assets/features/tablet/hero.jpg"
                  />

                  <img
                    src="assets/features/desktop/hero.jpg"
                    alt="Man holding a camera by its side."
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section *****************/}
        <section className="features-page-section">
          <div className="container">
            <div className="features-page-section__wrapper">
              {/* Item 1 */}
              <div className="features-page-section__item">
                <div className="features-page-section__img">
                  <img
                    src="assets/features/desktop/responsive.svg"
                    alt="Responsive icon"
                  />
                </div>

                <h3 className="features-page-section__title">
                  100% Responsive
                </h3>

                <p className="features-page-section__p">
                  No matter which the device you’re on, our site is fully
                  responsive and stories look beautiful on any screen.
                </p>
              </div>

              {/* Item 2 */}
              <div className="features-page-section__item">
                <div className="features-page-section__img">
                  <img
                    src="assets/features/desktop/no-limit.svg"
                    alt="No limit icon"
                  />
                </div>

                <h3 className="features-page-section__title">
                  No Photo Upload Limit
                </h3>

                <p className="features-page-section__p">
                  Our tool has no limits on uploads or bandwidth. Freely upload
                  in bulk and share all of your stories in one go.
                </p>
              </div>

              {/* Item 3 */}
              <div className="features-page-section__item">
                <div className="features-page-section__img">
                  <img
                    src="assets/features/desktop/embed.svg"
                    alt="Embed icon"
                  />
                </div>

                <h3 className="features-page-section__title">
                  Available to Embed
                </h3>

                <p className="features-page-section__p">
                  Embed Tweets, Facebook posts, Instagram media, Vimeo or
                  YouTube videos, Google Maps, and more.
                </p>
              </div>

              {/* Item 4 */}
              <div className="features-page-section__item">
                <div className="features-page-section__img">
                  <img
                    src="assets/features/desktop/custom-domain.svg"
                    alt="Custom domain icon"
                  />
                </div>

                <h3 className="features-page-section__title">Custom Domain</h3>

                <p className="features-page-section__p">
                  With Photosnap subscriptions you can host your stories on your
                  own domain. You can also remove our branding!
                </p>
              </div>

              {/* Item 5 */}
              <div className="features-page-section__item">
                <div className="features-page-section__img">
                  <img
                    src="assets/features/desktop/boost-exposure.svg"
                    alt="Boost exposure icon"
                  />
                </div>

                <h3 className="features-page-section__title">
                  Boost Your Exposure
                </h3>

                <p className="features-page-section__p">
                  Users that viewed your story or gallery can easily get notifed
                  of new and featured stories with our built in mailing list.
                </p>
              </div>

              {/* Item 6 */}
              <div className="features-page-section__item">
                <div className="features-page-section__img">
                  <img
                    src="assets/features/desktop/drag-drop.svg"
                    alt="Drag and drop icon"
                  />
                </div>

                <h3 className="features-page-section__title">
                  Drag and Drop Image
                </h3>

                <p className="features-page-section__p">
                  Easily drag and drop your image and get beautiful shots
                  everytime. No over the top tooling to add friction to creating
                  stories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Section *****************/}
        <section className="beta">
          <picture>
            <source
              media="(max-width:700px)"
              srcSet="assets/shared/desktop/bg-beta.jpg"
            />

            <source
              media="(max-width:900px)"
              srcSet="assets/shared/desktop/bg-beta.jpg"
            />

            <img
              src="assets/shared/desktop/bg-beta.jpg"
              alt="Image of brown cloud."
            />
          </picture>

          <div className="beta__colored-bar"></div>
          <div className="container">
            <div className="beta__beta-button-wrapper">
              <h3 className="beta__text">
                We&apos;re in Beta. Get Your Invite Today!
              </h3>

              <a href="#">
                <div className="beta__button">Get An Invite</div>

                <img
                  className="beta__right-arrow"
                  src="assets/shared/desktop/arrow.svg"
                  alt="Right Arrow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/************* Footer *****************/}
      <footer className="footer">
        <div className="container">
          <div className="footer__content-wrapper">
            <div className="footer__left-side">
              <div className="footer__logo">
                <Link href="/">
                  <a>
                    <img
                      className="footer__logo-img"
                      src="assets/logo-white.svg"
                      alt="Footer logo"
                    />
                  </a>
                </Link>
              </div>

              <div className="footer__social">
                {/* First Link */}
                <a href="#" className="footer__social-link">
                  <svg className="footer__social-icon footer__social-icon-1">
                    <use xlinkHref="assets/shared/desktop/facebook.svg#facebook"></use>
                  </svg>

                  <svg
                    style={{
                      width: "0",
                      height: "0",
                      position: "absolute",
                    }}
                  >
                    <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#63AFDB" />
                      <stop offset="100%" stopColor="#6028F1" />
                    </linearGradient>
                  </svg>
                </a>

                {/* Second Link */}
                <a href="#" className="footer__social-link">
                  <svg className="footer__social-icon footer__social-icon-2">
                    <use xlinkHref="assets/shared/desktop/youtube.svg#youtube"></use>
                  </svg>

                  <svg
                    style={{
                      width: "0",
                      height: "0",
                      position: "absolute",
                    }}
                  >
                    <linearGradient id="b" x1="0%" x2="100%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#D3205A" />
                      <stop offset="100%" stopColor="#FF5A5A" />
                    </linearGradient>
                  </svg>
                </a>

                {/* Third Link */}
                <a href="#" className="footer__social-link">
                  <svg className="footer__social-icon footer__social-icon-3">
                    <use xlinkHref="assets/shared/desktop/twitter.svg#twitter"></use>
                  </svg>

                  <svg
                    style={{
                      width: "0",
                      height: "0",
                      position: "absolute",
                    }}
                  >
                    <linearGradient
                      id="c"
                      x1="100%"
                      x2="0%"
                      y1="16.979%"
                      y2="83.021%"
                    >
                      <stop offset="0%" stopColor="#65FFEB" />
                      <stop offset="100%" stopColor="#27718A" />
                    </linearGradient>
                  </svg>
                </a>

                {/* Fourth Link */}
                <a href="#" className="footer__social-link">
                  <svg className="footer__social-icon footer__social-icon-4">
                    <use xlinkHref="assets/shared/desktop/pinterest.svg#pinterest"></use>
                  </svg>

                  <svg
                    style={{
                      width: "0",
                      height: "0",
                      position: "absolute",
                    }}
                  >
                    <linearGradient id="d" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#F6C683" />
                      <stop offset="100%" stopColor="#DE3838" />
                    </linearGradient>
                  </svg>
                </a>

                {/* Fith Link */}
                <a href="#" className="footer__social-link">
                  <svg className="footer__social-icon footer__social-icon-5">
                    <use xlinkHref="assets/shared/desktop/instagram.svg#instagram"></use>
                  </svg>

                  <svg
                    style={{
                      width: "0",
                      height: "0",
                      position: "absolute",
                    }}
                  >
                    <linearGradient id="e" x1="0%" x2="50%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFC593" />
                      <stop offset="51.945%" stopColor="#BC7198" />
                      <stop offset="100%" stopColor="#5A77FF" />
                    </linearGradient>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer__middle-right">
              <div className="footer__middle-nav">
                <Link href="/">
                  <a className="footer__middle-nav-link">Home</a>
                </Link>

                <Link href="/stories">
                  <a className="footer__middle-nav-link">Stories</a>
                </Link>

                <Link href="/features">
                  <a className="footer__middle-nav-link">Features</a>
                </Link>

                <Link href="/pricing">
                  <a className="footer__middle-nav-link">Pricing</a>
                </Link>
              </div>

              <div className="footer__right-nav">
                <a href="#">
                  <div className="footer__button">Get An Invite</div>
                  <img
                    className="footer__right-arrow"
                    src="assets/shared/desktop/arrow.svg"
                    alt="Right Arrow"
                  />
                </a>

                <p className="footer__copyright">
                  Copyright 2022. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
