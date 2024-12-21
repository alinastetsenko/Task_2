import block from "./img/block.svg";
import ti1a from "./img/ti1a.avif";
import ti1w from "./img/ti1w.webp";
import ti1p from "./img/ti1p.png";
import ti2a from "./img/ti2a.avif";
import ti2w from "./img/ti2w.webp";
import ti2p from "./img/ti2p.png";
import ti3a from "./img/ti3a.avif";
import ti3p from "./img/ti3p.png";
import ti3w from "./img/ti3w.webp";
import people from "./img/people.svg";
import mark from "./img/mark.svg";
import pensil from "./img/pensil.svg";
import message from "./img/message.svg";
import timer from "./img/timer.svg";
import note from "./img/note.svg";
import facea from "./img/facea.avif";
import facew from "./img/facew.webp";
import facep from "./img/facep.png";
import plus from "./img/plus.svg";
import mana from "./img/mana.avif";
import manw from "./img/manw.webp";
import manp from "./img/manp.png";
import womana from "./img/womana.avif";
import womanw from "./img/womanw.webp";
import womanp from "./img/womanp.png";
import pca from "./img/pca.avif";
import pcw from "./img/pcw.webp";
import pcp from "./img/pcp.png";
import React from "react";

function Main() {
    return (
        <main className="main">
            <section className="hero-home">
                <div className="hero-home__container container">
                    <div className="hero-home__content">
                        <h1 className="hero-home__title title-main title-main_white">Building stellar websites for early
                            startups</h1>
                        <p className="hero-home__subtitle text text_white">Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod tempor incididunt.</p>
                        <div className="hero-home__wrapper">
                            <a className="hero-home__btn btn btn-fill btn-fill_yellow" href="#">View our work</a> <a
                            className="link link_white" href="#">View Pricing</a>
                        </div>
                    </div>
                    <img alt="illustration" className="hero-home__img" src={block}/></div>
            </section>
            <section className="how-we-work">
                <div className="how-we-work__container container">
                    <div className="how-we-work__wrapper">
                        <h2 className="how-we-work__title title title_2 title_dark-blue" data-aos="fade-right"
                            data-aos-duration="100">How we work</h2>
                        <p className="how-we-work__subtitle text text_dark-blue" data-aos="fade-right"
                           data-aos-duration="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                            tempor.</p><a className="link link_royal-blue" data-aos="fade-right" data-aos-duration="500"
                                          href="#">Get in touch with us</a>
                    </div>
                    <ul className="how-we-work__list">
                        <li className="how-we-work__item" data-aos="fade-up" data-aos-duration="200">
                            <span className="how-we-work__item-icon">01</span>
                            <h3 className="how-we-work__item-title title title_dark-blue title_3">Strategy</h3>
                            <p className="how-we-work__item-text text text_dark-blue">Euismod faucibus turpis eu gravida
                                mi.
                                Pellentesque et velit aliquam.</p>
                        </li>
                        <li className="how-we-work__item" data-aos="fade-up" data-aos-duration="200">
                            <span className="how-we-work__item-icon">02</span>
                            <h3 className="how-we-work__item-title title title_dark-blue title_3">Wireframing</h3>
                            <p className="how-we-work__item-text text text_dark-blue">Euismod faucibus turpis eu gravida
                                mi.
                                Pellentesque et velit aliquam.</p>
                        </li>
                        <li className="how-we-work__item" data-aos="fade-up" data-aos-duration="500">
                            <span className="how-we-work__item-icon">03</span>
                            <h3 className="how-we-work__item-title title title_dark-blue title_3">Design</h3>
                            <p className="how-we-work__item-text text text_dark-blue">Euismod faucibus turpis eu gravida
                                mi.
                                Pellentesque et velit aliquam.</p>
                        </li>
                        <li className="how-we-work__item" data-aos="fade-up" data-aos-duration="500">
                            <span className="how-we-work__item-icon">04</span>
                            <h3 className="how-we-work__item-title title title_dark-blue title_3">Development</h3>
                            <p className="how-we-work__item-text text text_dark-blue">Euismod faucibus turpis eu gravida
                                mi.
                                Pellentesque et velit aliquam.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="our-projects-section">
                <div className="our-projects-section__container container">
                    <div className="our-projects-section__wrapper">
                        <h2 className="our-projects-section__title title title_2 title_dark-blue" data-aos="fade-up"
                            data-aos-duration="100">View our projects</h2><a
                        className="our-projects-section__link link link_dark-blue" data-aos="fade-up"
                        data-aos-duration="300" href="#">View More</a>
                    </div>
                    <ul className="our-projects-section__list">
                        <li className="our-projects-section__item" data-aos="fade-right" data-aos-duration="500">
                            <a className="our-projects-section__item-link" href="#">
                                <div className="our-projects-section__item-link__wrapper">
                                    <span className="our-projects-section__item-link__title title title_6 title_white">Workhub office Webflow Webflow Design</span>
                                    <span className="our-projects-section__item-link__text text text_white">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</span>
                                    <span className="our-projects-section__item-link__link link link_yellow">View project</span>
                                </div>
                                <picture>
                                    <source srcSet={ti1a} type="image/avif"/>
                                    <source srcSet={ti1w} type="image/webp"/>
                                    <img alt="template" className="our-projects-section__item-link__img"
                                         src={ti1p}/></picture>
                            </a>
                        </li>
                        <li className="our-projects-section__item" data-aos="fade-left" data-aos-duration="800">
                            <a className="our-projects-section__item-link" href="#">
                                <div className="our-projects-section__item-link__wrapper">
                                    <span className="our-projects-section__item-link__title title title_6 title_white">Unisaas Website Design</span>
                                    <span className="our-projects-section__item-link__link link link_yellow">View project</span>
                                </div>
                                <picture>
                                    <source srcSet={ti2a} type="image/avif"/>
                                    <source srcSet={ti2w} type="image/webp"/>
                                    <img alt="template" className="our-projects-section__item-link__img"
                                         src={ti2p}/></picture>
                            </a>
                        </li>
                        <li className="our-projects-section__item" data-aos="fade-left" data-aos-duration="1100">
                            <a className="our-projects-section__item-link" href="#">
                                <div className="our-projects-section__item-link__wrapper">
                                    <span className="our-projects-section__item-link__title title title_6 title_white">Workhub office Webflow Design</span>
                                    <span className="our-projects-section__item-link__link link link_yellow">View project</span>
                                </div>
                                <picture>
                                    <source srcSet={ti3a} type="image/avif"/>
                                    <source srcSet={ti3p} type="image/webp"/>
                                    <img alt="template" className="our-projects-section__item-link__img"
                                         src={ti3w}/></picture>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="features-section">
                <div className="features-section__container container">
                    <span className="features-section__subtitle" data-aos="fade-up"
                          data-aos-duration="500">Features</span>
                    <h2 className="features-section__title title title_2 title_dark-blue" data-aos="fade-up"
                        data-aos-duration="900">Design that solves problems, one product at a time</h2>
                    <ul className="features-section__list">
                        <li className="features-section__item" data-aos="zoom-out" data-aos-duration="500">
                            <img alt="img" className="features-section__item-img" src={people}/>
                            <h3 className="features-section__item-title title title_6 title_dark-blue">Uses Client
                                First</h3>
                            <p className="features-section__item-text text text_dark-blue">Euismod faucibus turpis eu
                                gravida
                                mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                                aliquam
                                sed mi.</p>
                        </li>
                        <li className="features-section__item" data-aos="zoom-out" data-aos-duration="800">
                            <img alt="img" className="features-section__item-img" src={mark}/>
                            <h3 className="features-section__item-title title title_6 title_dark-blue">Two Free Revision
                                Round</h3>
                            <p className="features-section__item-text text text_dark-blue">Euismod faucibus turpis eu
                                gravida
                                mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                                aliquam
                                sed mi.</p>
                        </li>
                        <li className="features-section__item" data-aos="zoom-out" data-aos-duration="1100">
                            <img alt="img" className="features-section__item-img" src={pensil}/>
                            <h3 className="features-section__item-title title title_6 title_dark-blue">Template
                                Customization</h3>
                            <p className="features-section__item-text text text_dark-blue">Euismod faucibus turpis eu
                                gravida
                                mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                                aliquam
                                sed mi.</p>
                        </li>
                        <li className="features-section__item" data-aos="zoom-out" data-aos-duration="500">
                            <img alt="img" className="features-section__item-img" src={message}/>
                            <h3 className="features-section__item-title title title_6 title_dark-blue">24/7 Support</h3>
                            <p className="features-section__item-text text text_dark-blue">Euismod faucibus turpis eu
                                gravida
                                mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                                aliquam
                                sed mi.</p>
                        </li>
                        <li className="features-section__item" data-aos="zoom-out" data-aos-duration="800">
                            <img alt="img" className="features-section__item-img" src={timer}/>
                            <h3 className="features-section__item-title title title_6 title_dark-blue">Quick
                                Delivery</h3>
                            <p className="features-section__item-text text text_dark-blue">Euismod faucibus turpis eu
                                gravida
                                mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                                aliquam
                                sed mi.</p>
                        </li>
                        <li className="features-section__item" data-aos="zoom-out" data-aos-duration="1100">
                            <img alt="img" className="features-section__item-img" src={note}/>
                            <h3 className="features-section__item-title title title_6 title_dark-blue">Hands-on
                                approach</h3>
                            <p className="features-section__item-text text text_dark-blue">Euismod faucibus turpis eu
                                gravida
                                mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                                aliquam
                                sed mi.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="reviews">
                <div className="reviews__container container">
                    <div className="reviews__wrapper">
                        <h2 className="reviews__title title title_2 title_dark-blue" data-aos="fade-right"
                            data-aos-duration="1000">What our clients say about us</h2>
                        <p className="reviews__subtitle text text_dark-blue" data-aos="fade-right"
                           data-aos-duration="1500">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="reviews__swiper swiper">
                        <div className="reviews__swiper-wrapper swiper-wrapper">
                            <div className="reviews__slide swiper-slide">
                                <p className="reviews__slide-text" data-aos="fade-right" data-aos-duration="500">"The
                                    best agency
                                    we ve worked with so far. They understand our product and are able to add new
                                    features with a
                                    great focus."</p>
                                <div className="reviews__slide__profile" data-aos="fade-right" data-aos-duration="800">
                                    <picture className="reviews__slide__profile-img">
                                        <source srcSet={facea} type="image/avif"/>
                                        <source srcSet={facew} type="image/webp"/>
                                        <img alt="profile" className="reviews__slide__profile-img" src={facep}/>
                                    </picture>
                                    <span className="reviews__slide__profile-name">Jenny Wilson</span> <span
                                    className="reviews__slide__profile-text">Vice President</span>
                                </div>
                            </div>
                            <div className="reviews__slide swiper-slide">
                                <p className="reviews__slide-text" data-aos="fade-right" data-aos-duration="500">"The
                                    best agency
                                    we ve worked with so far. They understand our product and are able to add new
                                    features with a
                                    great focus."</p>
                                <div className="reviews__slide__profile" data-aos="fade-right" data-aos-duration="800">
                                    <picture className="reviews__slide__profile-img">
                                        <source srcSet={facea} type="image/avif"/>
                                        <source srcSet={facew} type="image/webp"/>
                                        <img alt="profile" className="reviews__slide__profile-img" src={facep}/>
                                    </picture>
                                    <span className="reviews__slide__profile-name">Jenny Wilson</span> <span
                                    className="reviews__slide__profile-text">Vice President</span>
                                </div>
                            </div>
                            <div className="reviews__slide swiper-slide">
                                <p className="reviews__slide-text" data-aos="fade-right" data-aos-duration="500">"The
                                    best agency
                                    we ve worked with so far. They understand our product and are able to add new
                                    features with a
                                    great focus."</p>
                                <div className="reviews__slide__profile" data-aos="fade-right" data-aos-duration="800">
                                    <picture className="reviews__slide__profile-img">
                                        <source srcSet={facea} type="image/avif"/>
                                        <source srcSet={facew} type="image/webp"/>
                                        <img alt="profile" className="reviews__slide__profile-img" src={facep}/>
                                    </picture>
                                    <span className="reviews__slide__profile-name">Jenny Wilson</span> <span
                                    className="reviews__slide__profile-text">Vice President</span>
                                </div>
                            </div>
                        </div>
                        <div className="reviews__swiper-pagination swiper-pagination"></div>
                        <div className="reviews__swiper-bottom">
                            <div className="reviews__swiper-button-prev swiper-button-prev"></div>
                            <div className="reviews__swiper-button-next swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="faq__container container">
                    <div className="faq__wrapper">
                        <h2 className="faq__title title title_2 title_dark-blue" data-aos="fade-right"
                            data-aos-duration="300">Frequently asked questions</h2><a
                        className="faq__link link link_royal-blue" data-aos="fade-right" data-aos-duration="500"
                        href="#">Contact
                        us for more info</a>
                    </div>
                    <div className="faq__accordion">
                        <div className="faq__accordion-content" data-aos="flip-down" data-aos-duration="800">
                            <div className="faq__accordion__header"><span
                                className="faq__accordion-number title title_6 title_royal-blue">01</span>
                                <h3 className="faq__accordion-title title title_5 title_dark-blue">How much time does it
                                    take?</h3><img alt="plus" className="faq__accordion-img" src={plus}/></div>
                            <p className="faq__accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="faq__accordion-content" data-aos="flip-down" data-aos-duration="1000">
                            <div className="faq__accordion__header title title_5 title_dark-blue"><span
                                className="faq__accordion-number title title_6 title_royal-blue">02</span>
                                <h3 className="faq__accordion-title">What is your class naming convention?</h3><img
                                    alt="plus"
                                    className="faq__accordion-img"
                                    src={plus}/>
                            </div>
                            <p className="faq__accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                                ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore
                                magna aliqua.</p>
                        </div>
                        <div className="faq__accordion-content" data-aos="flip-down" data-aos-duration="1200">
                            <div className="faq__accordion__header"><span
                                className="faq__accordion-number title title_6 title_royal-blue">03</span>
                                <h3 className="faq__accordion-title title title_5 title_dark-blue">How do you
                                    communicate?</h3>
                                <img alt="plus" className="faq__accordion-img" src={plus}/></div>
                            <p className="faq__accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="faq__accordion-content" data-aos="flip-down" data-aos-duration="1400">
                            <div className="faq__accordion__header"><span
                                className="faq__accordion-number title title_6 title_royal-blue">04</span>
                                <h3 className="faq__accordion-title title title_5 title_dark-blue">I have a bigger
                                    project. Can
                                    you handle it?</h3><img alt="plus" className="faq__accordion-img" src={plus}/></div>
                            <p className="faq__accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="faq__accordion-content" data-aos="flip-down" data-aos-duration="1600">
                            <div className="faq__accordion__header"><span
                                className="faq__accordion-number title title_6 title_royal-blue">05</span>
                                <h3 className="faq__accordion-title title title_5 title_dark-blue">What is your class
                                    naming
                                    convention?</h3><img alt="plus" className="faq__accordion-img" src={plus}/></div>
                            <p className="faq__accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                                ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore
                                magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form">
                <div className="contact-form__container container">
                    <div className="contact-form__text" data-aos="fade-up" data-aos-duration="200">
                        <h2 className="contact-form__text-title title title_2 title_white">Building stellar websites for
                            early
                            startups</h2>
                        <p className="contact-form__text-text text text_white">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                            enim.</p>
                    </div>
                    <div className="contact-form__send-inquiry" data-aos="fade-up" data-aos-duration="1400">
                        <h2 className="contact-form__send-inquiry-title title title_2 title_white">Send inquiry</h2>
                        <p className="contact-form__send-inquiry-text text text_white">Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form action="#" className="contact-form__send-inquiry__form">
                            <input className="contact-form__send-inquiry__form-input" placeholder="Your Name"
                                   type="text"/>
                            <input className="contact-form__send-inquiry__form-input" placeholder="Email" type="text"/>
                            <input
                                className="contact-form__send-inquiry__form-input"
                                placeholder="Paste your Figma design URL"
                                type="text"/>
                        </form>
                        <button className="contact-form__send-inquiry__btn btn btn-fill btn-fill_yellow">Send an Inquiry
                        </button>
                        <a className="contact-form__send-inquiry__link link link_white" href="#">Get in touch with
                            us</a>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                <div className="container">
                    <h2 className="blog-section__title title title_2 title_dark-blue" data-aos="fade-right"
                        data-aos-duration="500">Our blog</h2>
                    <ul className="blog-section__list">
                        <li className="blog-section__item" data-aos="flip-up" data-aos-duration="1000">
                            <a className="blog-section__link" href="#">
                                <picture>
                                    <source srcSet={mana} type="image/avif"/>
                                    <source srcSet={manw} type="image/webp"/>
                                    <img alt="" className="blog-section__item-img" src={manp}/>
                                </picture>
                                <span className="blog-section__item-date">19 Jan 2022</span>
                                <h3 className="blog-section__item-title title title_6 title_dark-blue">How one Webflow
                                    user grew
                                    his single person consultancy from $0-100K in 14 months</h3>
                                <p className="blog-section__item-text text text_dark-blue">See how pivoting to Webflow
                                    changed one
                                    person’s sales strategy and allowed him to attract</p></a><a
                            className="blog-section__item-link link link_dark-blue" href="#">Read More</a>
                        </li>
                        <li className="blog-section__item" data-aos="flip-down" data-aos-duration="2000">
                            <a className="blog-section__link" href="#">
                                <picture>
                                    <source srcSet={womana} type="image/avif"/>
                                    <source srcSet={womanw} type="image/webp"/>
                                    <img alt="" className="blog-section__item-img" src={womanp}/>
                                </picture>
                                <span className="blog-section__item-date">19 Jan 2022</span>
                                <h3 className="blog-section__item-title title title_6 title_dark-blue">How one Webflow
                                    user grew
                                    his single person consultancy from $0-100K in 14 months</h3>
                                <p className="blog-section__item-text text text_dark-blue">See how pivoting to Webflow
                                    changed one
                                    person’s sales strategy and allowed him to attract</p></a><a
                            className="blog-section__item-link link link_dark-blue" href="#">Read More</a>
                        </li>
                        <li className="blog-section__item" data-aos="flip-up" data-aos-duration="1000">
                            <a className="blog-section__link" href="#">
                                <picture>
                                    <source srcSet={pca} type="image/avif"/>
                                    <source srcSet={pcw} type="image/webp"/>
                                    <img alt="" className="blog-section__item-img" src={pcp}/>
                                </picture>
                                <span className="blog-section__item-date">19 Jan 2022</span>
                                <h3 className="blog-section__item-title title title_6 title_dark-blue">How one Webflow
                                    user grew
                                    his single person consultancy from $0-100K in 14 months</h3>
                                <p className="blog-section__item-text text text_dark-blue">See how pivoting to Webflow
                                    changed one
                                    person’s sales strategy and allowed him to attract</p></a><a
                            className="blog-section__item-link link link_dark-blue" href="#">Read More</a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

    );
}

export default Main;