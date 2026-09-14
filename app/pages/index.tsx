import { GetStaticProps, NextPage } from 'next'

import { _Head } from '../components/head'
import { Main } from '../components/main'
import { Menu } from '../domain/Menu'
import { loadMenus } from '../lib/loadMenus'
import { DEFAULT_DESCRIPTION, getSiteUrl, SITE_NAME } from '../lib/seo'

type Props = {
  menus: Menu[]
}

const Home: NextPage<Props> = ({ menus }) => {
  if (!menus) {
    return <></>
  }
  return (
    <>
      <_Head
        title={`${SITE_NAME} | 予算・カロリー内でメニューをランダム選択`}
        description={DEFAULT_DESCRIPTION}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: SITE_NAME,
            url: getSiteUrl(),
            description: DEFAULT_DESCRIPTION,
            applicationCategory: 'EntertainmentApplication',
            operatingSystem: 'Web',
            inLanguage: 'ja-JP',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'JPY',
            },
          }),
        }}
      />
      <Main menus={menus} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menus = await loadMenus()
  return {
    props: { menus: menus },
  }
}

export default Home
