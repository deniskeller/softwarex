import React from 'react';
import s from './Elasticsearch.module.scss';
import { BaseContainer, BaseText } from '@base/index';

const Elasticsearch: React.FC = () => {
  return (
    <section className={s.Elasticsearch}>
      <BaseContainer className={s.Elasticsearch_Container}>
        <div className={s.Elasticsearch_Percent}>
          <div className={s.Percent}>
            <span>85%</span>
          </div>

          <p className={s.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className={s.Elasticsearch_Schema}>
          <BaseText as="h2" className={s.Title}>
            Elasticsearch is ideal for this
          </BaseText>

          <div className={s.Subtitle}>
            <p>Schematically it works like this:</p>
          </div>

          <ul className={s.SchemaList}>
            <li>Product offers are stored in the site database.</li>
            <li>They are also stored in Elasticsearch</li>
            <li>
              When we need to find product offerings with certain properties, we
              pass them to Elasticsearch and instantly get a list of matching
              product IDs from there. We send a list of these IDs to the
              database, which are immediately displayed to the user.
            </li>
          </ul>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Elasticsearch;
