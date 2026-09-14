import Link from 'next/link'
import { _Head } from '../components/head'
import { SITE_NAME } from '../lib/seo'

const Custom404 = (): JSX.Element => (
  <>
    <_Head
      title={`ページが見つかりません | ${SITE_NAME}`}
      description="お探しのページは見つかりませんでした。"
      noindex
    />
    <main>
      <h1>404 - ページが見つかりません</h1>
      <p>
        <Link href="/">トップページへ戻る</Link>
      </p>
    </main>
  </>
)

export default Custom404
