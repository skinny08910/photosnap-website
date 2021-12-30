import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Stories() {
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
        <title>PhotoSnap - Post and get inspired from beautiful photos.</title>
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
            Stories
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

      {/* Main Section *****************/}
      <main className="main">
        {/* Top Section *****************/}
        <section className="top-section">
          <div className="top-section__container">
            <div className="top-section__wrapper">
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
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </a>
                </div>
              </div>

              {/* Top Image */}
              <div className="top-section__img"></div>
            </div>
          </div>
        </section>

        {/* Stories Template Section *****************/}
        <section className="story-template">
          <div className="story-template__wrapper">
            {/* Story Image */}
            <div className="story-template__img"></div>

            {/* Story Info */}
            <div className="story-template__info">
              <div className="story-template__info-wrapper">
                <h1 className="story-template__title">
                  Beautiful Stories Every time
                </h1>

                <p className="story-template__p">
                  We provide design templates to ensure your stories look
                  terrific. Easily add photos, text, embed maps and media from
                  other networks. Then share your story with everyone.
                </p>

                <a href="#">
                  <div className="story-template__button">View The Stories</div>
                  <img
                    className="story-template__right-arrow"
                    src="assets/shared/desktop/arrow.svg"
                    alt="Right Arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section *****************/}
        <section className="design-section">
          <div className="design-section__wrapper">
            {/* Design Info */}
            <div className="design-section__info">
              <div className="design-section__info-wrapper">
                <h1 className="design-section__title">Designed for everyone</h1>

                <p className="design-section__p">
                  Photosnap can help you create stories that resonate with your
                  audience. Our tool is designed for photographers of all
                  levels, brands, businesses you name it.
                </p>

                <a href="#">
                  <div className="design-section__button">View The Stories</div>
                  <img
                    className="design-section__right-arrow"
                    src="assets/shared/desktop/arrow.svg"
                    alt="Right Arrow"
                  />
                </a>
              </div>
            </div>

            {/* Design Image */}
            <div className="design-section__img"></div>
          </div>
        </section>

        {/* Story Section *****************/}
        <section className="story-section">
          <div className="story-section__wrapper">
            {/* First item */}
            <div className="story-section__item">
              <a href="#" className="story-section__item-1">
                <div className="story-section__item-wrapper">
                  <h3 className="story-section__title">The Mountains</h3>
                  <p className="story-section__name">by John Appleseed</p>
                  <hr />
                  <div className="story-section__button">
                    Read Story
                    <img
                      className="story-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
                <div className="story-section__border-bottom"></div>
              </a>
            </div>

            {/* Second item */}
            <div className="story-section__item">
              <a href="#" className="story-section__item-2">
                <div className="story-section__item-wrapper">
                  <h3 className="story-section__title">Sunset Cityscapes</h3>
                  <p className="story-section__name">by Benjamin Cruz</p>
                  <hr />
                  <div className="story-section__button">
                    Read Story
                    <img
                      className="story-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
                <div className="story-section__border-bottom"></div>
              </a>
            </div>

            {/* Third item */}
            <div className="story-section__item">
              <a href="#" className="story-section__item-3">
                <div className="story-section__item-wrapper">
                  <h3 className="story-section__title">18 Days Voyage</h3>
                  <p className="story-section__name">by Alexei Borodin</p>
                  <hr />
                  <div className="story-section__button">
                    Read Story
                    <img
                      className="story-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
                <div className="story-section__border-bottom"></div>
              </a>
            </div>

            {/* Fourth item */}
            <div className="story-section__item ">
              <a href="#" className="story-section__item-4">
                <div className="story-section__item-wrapper">
                  <h3 className="story-section__title">Architecturals</h3>
                  <p className="story-section__name">by Samantha Brooke</p>
                  <hr />
                  <div className="story-section__button">
                    Read Story
                    <img
                      className="story-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
                <div className="story-section__border-bottom"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section *****************/}
        <section className="features-section">
          <div className="container">
            <div className="features-section__wrapper">
              {/* First item */}
              <div className="features-section__item">
                <div className="features-section__img">
                  <img
                    src="assets/features/desktop/responsive.svg"
                    alt="Responsive icon"
                  />
                </div>

                <h3 className="features-section__title">100% Responsive</h3>

                <p className="features-section__p">
                  No matter which the device you’re on, our site is fully
                  responsive and stories look beautiful on any screen.
                </p>
              </div>

              {/* Second item */}
              <div className="features-section__item">
                <div className="features-section__img">
                  <img
                    src="assets/features/desktop/no-limit.svg"
                    alt="No limit icon"
                  />
                </div>

                <h3 className="features-section__title">
                  No Photo Upload Limit
                </h3>

                <p className="features-section__p">
                  Our tool has no limits on uploads or bandwidth. Freely upload
                  in bulk and share all of your stories in one go.
                </p>
              </div>

              {/* Third item */}
              <div className="features-section__item">
                <div className="features-section__img">
                  <img
                    src="assets/features/desktop/embed.svg"
                    alt="Embed icon"
                  />
                </div>

                <h3 className="features-section__title">Available to Embed</h3>

                <p className="features-section__p">
                  Embed Tweets, Facebook posts, Instagram media, Vimeo or
                  YouTube videos, Google Maps, and more.
                </p>
              </div>
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

                <Link href="Stories/Stories.js">
                  <a className="footer__middle-nav-link">Stories</a>
                </Link>

                <Link href="Features/Features.js">
                  <a className="footer__middle-nav-link">Features</a>
                </Link>

                <Link href="Price/Price.js">
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
