import * as React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  keyword: string;
  url: string;
  noindex?: boolean;
}

export const _Head: React.FC<Props> = ({
  title,
  description,
  keyword,
  url,
  noindex = false,
}: Props) => {

  return (
    <Head>
      <title>{title}</title>
      {/* safari */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
      <meta name="apple-mobile-web-app-title" content="saizeriya1000" />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      {/* 一般 */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
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

      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@800&display=swap"
        rel="stylesheet"
      />

      {/* noindex */}
      {noindex && <meta key="robots" name="robots" content="noindex" />}
    </Head>
  );
};
