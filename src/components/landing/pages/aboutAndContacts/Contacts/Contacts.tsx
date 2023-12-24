import React from 'react';
import s from './Contacts.module.scss';
import { BaseContainer } from '@base/index';
import { MapContacts } from '@content/landing/index';

const Contacts: React.FC = () => {
  //КООРДИНАТЫ МАРКЕРА КАРТЫ
  const london = {
    lat: 51.52180689989878,
    lng: -0.14365794232918563,
  };
  return (
    <section className={s.Contacts}>
      <BaseContainer className={s.Contacts_Container}>
        <div className={s.Contacts_Info}>
          <div className={s.Text}>
            <p>English & Indian Software Exs is a company registered.</p>
            <p>
              Our company is based in Hong Kong, one of the world's top
              financial markets capitals with the leading economy and
              innovations. Our company is based in Hong Kong, one of the world's
              top financial markets capitals with the leading economy and
              innovations.
            </p>
            <p className={s.Bold}>
              We are more than happy to help you with anything you need, so feel
              free to contact us right now!
            </p>
          </div>

          <div className={s.Info}>
            <div className={s.Item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 46"
                fill="none"
                className={s.Item_Icon}
              >
                <path
                  d="M28.125 13.5703C29.1196 13.5703 30.0734 13.9654 30.7766 14.6687C31.4799 15.3719 31.875 16.3258 31.875 17.3203M28.125 6.07031C31.1087 6.07031 33.9702 7.25558 36.08 9.36536C38.1897 11.4751 39.375 14.3366 39.375 17.3203M9.375 7.94531H16.875L20.625 17.3203L15.9375 20.1328C17.9455 24.2044 21.2409 27.4998 25.3125 29.5078L28.125 24.8203L37.5 28.5703V36.0703C37.5 37.0649 37.1049 38.0187 36.4016 38.722C35.6984 39.4252 34.7446 39.8203 33.75 39.8203C26.4361 39.3758 19.5378 36.27 14.3566 31.0888C9.17532 25.9075 6.06947 19.0092 5.625 11.6953C5.625 10.7008 6.02009 9.74692 6.72335 9.04366C7.42661 8.3404 8.38044 7.94531 9.375 7.94531Z"
                  stroke="#1F1E58"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={s.Item_Value}>+44 204 577 37 12 (London)</p>
            </div>

            <div className={s.Item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 46"
                fill="none"
                className={s.Item_Icon}
              >
                <path
                  d="M5.625 13.5703C5.625 12.5758 6.02009 11.6219 6.72335 10.9187C7.42661 10.2154 8.38044 9.82031 9.375 9.82031H35.625C36.6196 9.82031 37.5734 10.2154 38.2766 10.9187C38.9799 11.6219 39.375 12.5758 39.375 13.5703V32.3203C39.375 33.3149 38.9799 34.2687 38.2766 34.972C37.5734 35.6752 36.6196 36.0703 35.625 36.0703H9.375C8.38044 36.0703 7.42661 35.6752 6.72335 34.972C6.02009 34.2687 5.625 33.3149 5.625 32.3203V13.5703Z"
                  stroke="#1F1E58"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.625 13.5703L22.5 24.8203L39.375 13.5703"
                  stroke="#1F1E58"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={s.Item_Value}>support@customsoftwaredev.uk</p>
            </div>

            <div className={s.Item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 46"
                fill="none"
                className={s.Item_Icon}
              >
                <path
                  d="M16.875 23.4453C16.875 24.9372 17.4676 26.3679 18.5225 27.4228C19.5774 28.4777 21.0082 29.0703 22.5 29.0703C23.9918 29.0703 25.4226 28.4777 26.4775 27.4228C27.5324 26.3679 28.125 24.9372 28.125 23.4453C28.125 21.9535 27.5324 20.5227 26.4775 19.4678C25.4226 18.4129 23.9918 17.8203 22.5 17.8203C21.0082 17.8203 19.5774 18.4129 18.5225 19.4678C17.4676 20.5227 16.875 21.9535 16.875 23.4453Z"
                  stroke="#1F1E58"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 23.4453C7.5 27.4236 9.08035 31.2389 11.8934 34.0519C14.7064 36.865 18.5218 38.4453 22.5 38.4453M7.5 23.4453C7.5 19.4671 9.08035 15.6518 11.8934 12.8387C14.7064 10.0257 18.5218 8.44531 22.5 8.44531M7.5 23.4453H3.75M22.5 38.4453C26.4782 38.4453 30.2936 36.865 33.1066 34.0519C35.9196 31.2389 37.5 27.4236 37.5 23.4453M22.5 38.4453V42.1953M37.5 23.4453C37.5 19.4671 35.9196 15.6518 33.1066 12.8387C30.2936 10.0257 26.4782 8.44531 22.5 8.44531M37.5 23.4453H41.25M22.5 8.44531V4.69531"
                  stroke="#1F1E58"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={s.Item_Value}>
                167-169 Great Portland Street, 5th Floor, London, England, W1W
                5PF
              </p>
            </div>
          </div>
        </div>

        <div className={s.Contacts_Map}>
          <MapContacts
            center={london}
            marker_title="167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF"
          />
        </div>
      </BaseContainer>
    </section>
  );
};

export default Contacts;
