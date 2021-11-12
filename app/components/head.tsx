import * as React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  keyword: string;
  url: string;
}

export const _Head: React.FC<Props> = (props) => {
  const title = props.title;
  const description = props.description;
  const keyword = props.keyword;
  const url = props.url;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=750" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/apple-touch-icon.png`} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/apple-touch-icon.png`} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={`${url}/favicon.ico`} />
      <link rel="apple-touch-icon" href={`${url}/apple-touch-icon.png`} />
    </Head>
  );
};
