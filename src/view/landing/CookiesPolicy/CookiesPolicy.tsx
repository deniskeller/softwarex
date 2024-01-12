import React, { useState } from 'react';
import s from './CookiesPolicy.module.scss';
import { BaseContainer } from '@base/index';
import { useRouter } from 'next/navigation';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const CookiesPolicy: React.FC = () => {
  const router = useRouter();

  const navbar_links = [
    'What Are Cookies',
    'How We Use Cookies',
    'Disabling Cookies',
    'Third Party Cookies',
    'More Information',
  ];
  const [isActive, setIsActive] = useState(0);

  const handleClickNavbar = (index: number) => {
    setIsActive(index);

    scroller.scrollTo(`section-${index + 1}`, {
      duration: 0,
      delay: 0,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <section className={s.CookiesPolicy}>
      <BaseContainer>
        <div className={s.CookiesPolicy_Container}>
          <div className={s.CookiesPolicy_Content}>
            <div className={s.Header} onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 26"
                fill="none"
                className={s.Icon}
              >
                <g opacity="0.7">
                  <path
                    d="M15.625 20.2891L8.33333 12.9974L15.625 5.70573"
                    stroke="#1F1E58"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>

              <h1>Cookies Policy June 19, 2023</h1>
            </div>

            <ul className={s.SectionList}>
              <li className={s.Section}>
                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      This website ("Website") is operated by West Midland
                      Consulting, a company duly organised and established under
                      the laws of UK, bearing company registration number
                      14359103, and having its registered address at 167-169
                      GREAT PORTLAND STREET 5TH FLOOR LONDON ENGLAND W1W 5PF
                      (together, “OMICRON “, "we" or "us" or "our"). We collect
                      certain information by automated means, such as cookies,
                      when you visit our websites. The information we collect in
                      this manner includes, browser type, operating system,
                      referring URLs, information on actions taken on a website,
                      and dates and times of website visits. We respect the
                      confidentiality and privacy of the consumers that visit
                      our site. This Cookie Policy tells you how we use cookies,
                      why and the choices you can make about our use of cookies.
                    </p>

                    <p className={s.Paragraph_Description}>
                      Please see our Privacy Policy for further information on
                      the personal data we process.
                    </p>
                  </li>
                </ul>
              </li>

              <li className={s.Section} id="section-1">
                <div className={s.Section_Title}>
                  <h2>1. What Are Cookies</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      For almost any modern website to work properly, it needs
                      to collect certain basic information on its users. To do
                      this, a site will create small text files that are placed
                      on a user’s computer, smartphone or other device. These
                      cookies are designed to allow a website to recognise its
                      users on subsequent visits, or to authorise other
                      designated websites to recognise these users for a
                      particular purpose.
                    </p>

                    <p className={s.Paragraph_Description}>
                      For almost any modern website to work properly, it needs
                      to collect certain basic information on its users. To do
                      this, a site will create small text files that are placed
                      on a user’s computer, smartphone or other device. These
                      cookies are designed to allow a website to recognise its
                      users on subsequent visits, or to authorise other
                      designated websites to recognise these users for a
                      particular purpose.
                    </p>
                  </li>
                </ul>
              </li>

              <li className={s.Section} id="section-2">
                <div className={s.Section_Title}>
                  <h2>2. How We Use Cookies</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      We use cookies for a variety of reasons detailed below.
                      Unfortunately, in most cases there are no industry
                      standard options for disabling cookies without completely
                      disabling the functionality and features they add to this
                      site. It is recommended that you leave on all cookies if
                      you are not sure whether you need them or not in case they
                      are used to provide a service that you use.
                    </p>
                  </li>
                </ul>
              </li>

              <li className={s.Section} id="section-3">
                <div className={s.Section_Title}>
                  <h2>3. Disabling Cookies</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Most browsers accept cookies automatically, but you can
                      alter the settings of your browser to erase cookies or
                      prevent automatic acceptance if you prefer. Generally, you
                      have the option to see what cookies you’ve got and delete
                      them individually, block third party cookies or cookies
                      from particular sites, accept all cookies, to be notified
                      when a cookie is issued or reject all cookies. Please see
                      below instructions on how to delete or disable cookies.
                    </p>
                  </li>

                  <li className={s.Paragraph}>
                    <div className={s.Paragraph_Title}>
                      <h2>For Google Chrome:</h2>
                    </div>

                    <ul className={s.Paragraph_List}>
                      <li>Select Settings.</li>
                      <li>Click Show advanced settings button.</li>
                      <li>
                        In the "Privacy" section, click the Content settings.
                      </li>
                      <li>
                        In the "Cookies" section, you can change to your
                        preferred setting.
                      </li>
                      <li>
                        The right to restrict (i.e. prevent) the processing of
                        your personal data.
                      </li>
                      <li>
                        The right to object to us using your personal data for a
                        particular purpose or purposes.
                      </li>
                      <li>
                        The right to data portability. This means that, if you
                        have provided personal data to us directly, we are using
                        it with your consent or for the performance of a
                        contract, and that data is processed using automated
                        means, you can ask us for a copy of that personal data
                        to re-use with another service or business in many
                        cases.
                      </li>
                      <li>
                        Rights relating to automated decision-making and
                        profiling. We do not use your personal data in this way.
                      </li>
                    </ul>
                  </li>

                  <li className={s.Paragraph}>
                    <div className={s.Paragraph_Title}>
                      <h2>For Mozilla firefox:</h2>
                    </div>

                    <ul className={s.Paragraph_List}>
                      <li>Choose the menu “tools” then “Options”</li>
                      <li>Click on the icon “privacy”</li>
                      <li>
                        Find the menu “cookie” and select the relevant options
                      </li>
                    </ul>
                  </li>

                  <li className={s.Paragraph}>
                    <div className={s.Paragraph_Title}>
                      <h2>For Opera 6.0 and further:</h2>
                    </div>

                    <ul className={s.Paragraph_List}>
                      <li>Choose the menu “Files” '&gt;' “Preferences”</li>
                      <li>Privacy</li>
                    </ul>
                  </li>

                  <li className={s.Paragraph}>
                    <div className={s.Paragraph_Title}>
                      <h2>The Cookies We Set</h2>
                    </div>

                    <ul className={s.Paragraph_List}>
                      <li>
                        Account related cookies
                        <br />
                        If you create an account with us through OMICRON or any
                        related services operated by OMICRON Solution s.r.o.,
                        then we will use cookies for the management of the
                        signup process and general administration. These cookies
                        will usually be deleted when you log out however in some
                        cases they may remain afterwards to remember your site
                        preferences when logged out.
                      </li>
                      <li>
                        Login related cookies
                        <br />
                        We use cookies when you are logged in so that we can
                        remember this fact. This prevents you from having to log
                        in every single time you visit a new page. These cookies
                        are typically removed or cleared when you log out to
                        ensure that you can only access restricted features and
                        areas when logged in.
                      </li>
                      <li>
                        Orders processing related cookies <br />
                        OMICRON offers e-commerce or payment facilities and some
                        cookies are essential to ensure that your order is
                        remembered between pages so that we can process it
                        properly.
                      </li>
                      <li>
                        Forms related cookies <br />
                        When you submit data through a form such as those found
                        on contact pages or comment forms cookies may be set to
                        remember your user details for future correspondence.
                      </li>
                      <li>
                        Site preferences cookies <br />
                        In order to provide you with a great experience on this
                        site we provide the functionality to set your
                        preferences for how this site runs when you use it. In
                        order to remember your preferences, we need to set
                        cookies so that this information can be called whenever
                        you interact with a page that is affected by your
                        preferences.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className={s.Section} id="section-4">
                <div className={s.Section_Title}>
                  <h2>4. Third Party Cookies</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      In some special cases we also use cookies provided by
                      trusted third parties. The usage of these cookies data is
                      based on our legitimate interests to optimise our web
                      presence and improve its reach, usability and content and
                      thereby ultimately promote our business. The following
                      section details which third party cookies you might
                      encounter through this site.
                    </p>
                  </li>

                  <li className={s.Paragraph}>
                    <ul className={s.Paragraph_List}>
                      <li>
                        This site uses Google Analytics which is one of the most
                        widespread analytics solutions on the web for helping us
                        to understand how you use the site and ways that we can
                        improve your experience. These cookies may track things
                        such as how long you spend on the site and the pages
                        that you visit so we can continue to produce engaging
                        content. We use these cookies to generate user
                        statistics on an anonymous basis to make our website
                        more user-friendly. Google Analytics is a web analysis
                        service offered by Google Inc. (Google). Google uses
                        aggregated statistical information to provide us with an
                        understanding of how visitors are using our websites. To
                        protect your privacy, we have configured Google
                        Analytics to only store part of the IP-address of
                        visitors and not share data with others. Google is only
                        allowed to provide this information to third parties if
                        Google has a statutory obligation to do so or to the
                        extent that these third parties are processing the
                        information on Google’s behalf. Google is certified with
                        EU-US Privacy Shield and we have also concluded a data
                        processor agreement with Google. We use the following
                        cookies for this purpose: _gat, _ga and _gid. These
                        cookies are stored for the maximum period of one year.
                        For more information please visit the official Google
                        Analytics page. For Google Analytics cookies, you can
                        opt-out by installing the Google Analytics opt-out
                        browser add-on.
                      </li>
                      <li>
                        Our website also uses Zopim’s cookies offered by Zendesk
                        Inc. (Zendesk) which allows us to chat in order to
                        provide support and directly solve our client’s requests
                        and problems. We use the cookies _cfduid to identify
                        Zopim users and know their preferences regarding Zopim’s
                        use. These cookies are stored for the maximum period of
                        one year. For more information please read Zendesk’s.
                        Privacy Policy.
                      </li>
                      <li>
                        From time to time we test new features and make subtle
                        changes to the way that the site is delivered. When we
                        are still testing new features, these cookies may be
                        used to ensure that you receive a consistent experience
                        whilst on the site whilst ensuring we understand which
                        optimisations our users appreciate the most.
                      </li>
                      <li>
                        We also use social media buttons and/or plugins on this
                        site that allow you to connect, upon your consent, with
                        your social network in various ways. For these to work
                        the following social media sites including; Facebook,
                        Instagram, Twitter, will set cookies through our site
                        which may be used to enhance your profile on their site
                        or contribute to the data they hold for various purposes
                        outlined in their respective privacy policies.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className={s.Section} id="section-5">
                <div className={s.Section_Title}>
                  <h2>5. More Information</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Hopefully that has clarified things for you and as was
                      previously mentioned if there is something that you aren't
                      sure whether you need or not it's usually safer to leave
                      cookies enabled in case it does interact with one of the
                      features you use on our site. For more information, please
                      contact: support@customsoftwaredev.uk
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={s.CookiesPolicy_Sidebar}>
            <div className={s.Sidebar}>
              <div className={s.Sidebar_Header}>
                <p>On this page:</p>
              </div>

              <ul className={s.Sidebar_Navbar}>
                {navbar_links?.map((link, index) => {
                  return (
                    <li
                      className={s.Sidebar_Navbar_Item}
                      key={index}
                      onClick={() => handleClickNavbar(index)}
                    >
                      <p>
                        {index + 1}.&nbsp;{link}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default CookiesPolicy;
