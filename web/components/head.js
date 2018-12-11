import NextHead from 'next/head';
import { string } from 'prop-types';
import { reset } from '../styles';

const defaultDescription = '';

const Head = props => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <style>{reset}</style>
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
