import { GetStaticProps, NextPage } from 'next'

import { _Head } from '../components/head'
import { Main } from '../components/main'
import { Menu } from '../domain/Menu'

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
        title={'サイゼリヤ1000円ガチャ'}
        description={'サイゼリヤのメニューでガチャしよう！'}
        keyword={'サイゼリヤ,1000円,ガチャ'}
        url={process.env.NEXT_PUBLIC_BASE_URL}
      />
      <Main menus={menus} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}`, {
    headers: {
      Authorization: `token ${process.env.API_TOKEN}`,
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
  const menus = await res.json()
  return {
    props: { menus: menus },
  }
}

export default Home
