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
          content="Get the most out of PhotoSnap by submitting your story, search, and get inspired by thousands of photos with stories behing them in our database."
        />
        <meta
          name="keywords"
          content="PhotoSnap, photo, pictures, beautifull photo"
        />
        <meta name="author" content="Nicksonder Examar" />
        <title>
          Stories - Search through our libraries of stories, read their stories
          while you look at the beautiful scenery.
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
        {/* Top Story *****************/}
        <section className="top-story">
          <div className="top-story__wrapper">
            {/* Top Info */}
            <div className="top-story__info">
              <div className="top-story__info-wrapper">
                <p className="top-story__featured">
                  Last Month&apos;s Featured Story
                </p>

                <h1 className="top-story__title">
                  Hazy Full Moon Of Appalachia
                </h1>

                <p className="top-story__author">
                  <span className="top-story__date">March 2nd 2020</span>

                  <span className="top-story__name">by John Appleseed</span>
                </p>

                <p className="top-story__p">
                  The dissected plateau area, while not actually made up of
                  geological mountains, is popularly called
                  &ldquo;mountains,&ldquo; especially in eastern Kentucky and
                  West Virginia, and while the ridges are not high, the terrain
                  is extremely rugged.
                </p>

                <a href="#">
                  <div className="top-story__button">Read The Story</div>
                  <img
                    className="top-story__right-arrow"
                    src="assets/shared/desktop/arrow.svg"
                    alt="Right Arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section *****************/}
        <section className="stories-section">
          <div className="stories-section__wrapper">
            {/* Item 1 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-1">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">April 16th 2020</p>
                  <h3 className="stories-section__title">The Mountains</h3>
                  <p className="stories-section__name">by John Appleseed</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 2 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-2">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">April 14th 2020</p>
                  <h3 className="stories-section__title">Sunset Cityscapes</h3>
                  <p className="stories-section__name">by Benjamin Cruz</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 3 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-3">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">April 11th 2020</p>
                  <h3 className="stories-section__title">18 Days Voyage</h3>
                  <p className="stories-section__name">by Alexei Borodin</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* item 4 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-4">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">April 9th 2020</p>
                  <h3 className="stories-section__title">Architecturals</h3>
                  <p className="stories-section__name">by Samantha Brooke</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* item 5 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-5">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">April 7th 2020</p>
                  <h3 className="stories-section__title">World Tour 2019</h3>
                  <p className="stories-section__name">by Timothy Wagner</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* item 6 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-6">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">April 3rd 2020</p>
                  <h3 className="stories-section__title">Unforeseen Corners</h3>
                  <p className="stories-section__name">by William Malcolm</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 7 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-7">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 29th 2020</p>
                  <h3 className="stories-section__title">
                    King Of Africa: Part II
                  </h3>
                  <p className="stories-section__name">by Tim Hillenburg</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 8 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-8">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 21st 2020</p>
                  <h3 className="stories-section__title">
                    The Trip to Nowhere
                  </h3>
                  <p className="stories-section__name">by Felicia Rourke</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 9 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-9">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 19th 2020</p>
                  <h3 className="stories-section__title">Rage of The Sea</h3>
                  <p className="stories-section__name">by Mohammed Abdul</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 10 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-10">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 16th 2020</p>
                  <h3 className="stories-section__title">Running Free</h3>
                  <p className="stories-section__name">by Michelle</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 11 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-11">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 11th 2020</p>
                  <h3 className="stories-section__title">Behind the Waves</h3>
                  <p className="stories-section__name">by Lamarr Wilson</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 12 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-12">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 9th 2020</p>
                  <h3 className="stories-section__title">Calm Waters</h3>
                  <p className="stories-section__name">by Samantha Brooke</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 13 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-13">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 5th 2020</p>
                  <h3 className="stories-section__title">The Milky Way</h3>
                  <p className="stories-section__name">by Benjamin Cruz</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 14 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-14">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 4th 2020</p>
                  <h3 className="stories-section__title">
                    Night at The Dark Forest
                  </h3>
                  <p className="stories-section__name">by Mohammed Abdul</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 15 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-15">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">March 1st 2020</p>
                  <h3 className="stories-section__title">
                    Somwarpet&apos;s Beauty
                  </h3>
                  <p className="stories-section__name">by Michelle</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Item 16 */}
            <div className="stories-section__item">
              <a href="#" className="stories-section__item-16">
                <div className="stories-section__item-wrapper">
                  <p className="stories-section__date">February 25th 2020</p>
                  <h3 className="stories-section__title">Land of Dreams</h3>
                  <p className="stories-section__name">by William Malcolm</p>
                  <hr />
                  <div className="stories-section__button">
                    Read Story
                    <img
                      className="stories-section__right-arrow"
                      src="assets/shared/desktop/arrow.svg"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
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
