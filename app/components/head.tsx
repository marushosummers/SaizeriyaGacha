import * as React from 'react'
import Head from 'next/head'
import { getSiteUrl, SITE_NAME } from '../lib/seo'

interface Props {
  title: string
  description: string
  path?: string
  noindex?: boolean
}

export const _Head: React.FC<Props> = ({
  title,
  description,
  path = '/',
  noindex = false,
}: Props) => {
  const url = getSiteUrl(path)
  const imageUrl = getSiteUrl('/og-image-v3.png')

  return (
    <Head>
      <title>{title}</title>
      {/* safari */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      {/* 一般 */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:locale" content="ja_JP" key="og:locale" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={imageUrl} key="og:image" />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />
      <meta
        property="og:image:alt"
        content={`${SITE_NAME}`}
        key="og:image:alt"
      />
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${SITE_NAME}`} />
      {!noindex && <link rel="canonical" href={url} />}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* noindex */}
      <meta
        key="robots"
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
    </Head>
  )
}
