import React from "react";
import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  // Getting the element to change the price using Ref
  // Price Picker
  const pricePicker = React.useRef();

  // Amount
  const amount1 = React.useRef();
  const amount2 = React.useRef();
  const amount3 = React.useRef();

  // Date
  const date1 = React.useRef();
  const date2 = React.useRef();
  const date3 = React.useRef();

  useEffect(() => {
    pricePicker.current.addEventListener("click", () => {
      pricePicker.current.classList.toggle("active");

      if (pricePicker.current.classList.contains("active")) {
        // Amount
        amount1.current.innerText = `$190.00`;
        amount2.current.innerText = `$390.00`;
        amount3.current.innerText = `$990.00`;

        // Date
        date1.current.innerText = `per year`;
        date2.current.innerText = `per year`;
        date3.current.innerText = `per year`;
      } else {
        // Amount
        amount1.current.innerText = `$19.00`;
        amount2.current.innerText = `$39.00`;
        amount3.current.innerText = `$99.00`;

        // Date
        date1.current.innerText = `per month`;
        date2.current.innerText = `per month`;
        date3.current.innerText = `per month`;
      }
    });
  });

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
          Pricing - Select the best plan for you between our three plan package.
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
            </div>
          </nav>
        </div>
      </header>

      {/* Main Section *****************/}
      <main className="main">
        {/* Pricing *****************/}
        <section className="pricing">
          <div className="pricing__container">
            <div className="pricing__wrapper">
              <div className="pricing__colored-bar"></div>
              {/* pricing Info */}
              <div className="pricing__info">
                <div className="pricing__info-wrapper">
                  <h1 className="pricing__title">Pricing</h1>

                  <p className="pricing__p">
                    Create a your stories, Photosnap is a platform for
                    photographers and visual storytellers. It&apos;s the simple
                    way to create and share your photos.
                  </p>
                </div>
              </div>

              {/* Pricing Image */}
              <div className="pricing__img"></div>
            </div>
          </div>
        </section>

        {/* Features Section *****************/}
        <section className="pricing-plan">
          <div className="container">
            {/* Plan Picker */}
            <div className="pricing-plan__plan-picker" ref={pricePicker}>
              <div className="pricing-plan__monthly">Monthly</div>
              <div className="pricing-plan__switcher">
                <div className="pricing-plan__black-ball"></div>
              </div>
              <div className="pricing-plan__yearly">Yearly</div>
            </div>

            <div className="pricing-plan__wrapper">
              {/* Item 1 */}
              <div className="pricing-plan__item">
                <h3 className="pricing-plan__title">Basic</h3>

                <p className="pricing-plan__p">
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>

                <div className="pricing-plan__amount-per-date">
                  <div className="pricing-plan__amount" ref={amount1}>
                    $19.00
                  </div>
                  <div className="pricing-plan__date" ref={date1}>
                    per month
                  </div>
                </div>

                <a href="#" className="pricing-plan__button">
                  Pick plan
                </a>
              </div>

              {/* Item 2 */}
              <div className="pricing-plan__item pricing-plan__item--black">
                <div className="pricing-plan__colored-bar"></div>
                <h3 className="pricing-plan__title">Pro</h3>

                <p className="pricing-plan__p">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>

                <div className="pricing-plan__amount-per-date">
                  <div className="pricing-plan__amount" ref={amount2}>
                    $39.00
                  </div>
                  <div className="pricing-plan__date" ref={date2}>
                    per month
                  </div>
                </div>

                <a href="#" className="pricing-plan__button">
                  Pick plan
                </a>
              </div>

              {/* Item 3 */}
              <div className="pricing-plan__item">
                <h3 className="pricing-plan__title">Business</h3>

                <p className="pricing-plan__p">
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>

                <div className="pricing-plan__amount-per-date">
                  <div className="pricing-plan__amount" ref={amount3}>
                    $99.00
                  </div>
                  <div className="pricing-plan__date" ref={date3}>
                    per month
                  </div>
                </div>

                <a href="#" className="pricing-plan__button">
                  Pick plan
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* comparison Section *****************/}
        <section className="comparison">
          <div className="container">
            <h3 className="comparison__title">Compare</h3>

            <div className="comparison__wrapper">
              {/* Item 1 */}
              <div className="comparison__item">
                <div className="comparison__name">The Features</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text">Basic</div>
                  <div className="comparison__text">Pro</div>
                  <div className="comparison__text">Business</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="comparison__item">
                <div className="comparison__name">Unlimited Story Posting</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="comparison__item">
                <div className="comparison__name">Unlimited Photo Upload</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="comparison__item">
                <div className="comparison__name">Embedding Custom Content</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="comparison__item">
                <div className="comparison__name">Customize Metadata</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="comparison__item">
                <div className="comparison__name">Advanced Metrics</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="comparison__item">
                <div className="comparison__name">Photo Downloads</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className="comparison__item">
                <div className="comparison__name">Search Engine Indexing</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className="comparison__item">
                <div className="comparison__name">Custom Analytics</div>

                <div className="comparison__plan-wrapper">
                  <div className="comparison__text comparison__check-mark">
                    <img
                      src="assets/pricing/desktop/check.svg"
                      alt="Check mark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Section *****************/}
        <section className="beta">
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
