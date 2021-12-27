import { NextPage } from 'next'
import Link from 'next/link';
import { Divider } from './divider'

export const AboutContent: NextPage = () => {
  return (
    <div className="page">
      <div className="about">
        <h2>サイゼリヤガチャについて</h2>
        <Divider />
        <p>このサイトは、<br />有志により開発された非公式ファンサイトです</p>
        <p>サイゼリヤメニューを美味しく頂ける範囲で、<br />用法用量を守って正しくお使いください</p>
        <Divider />
        <p>メニューは実際の取扱と異なることがあります</p>
        <p>ご注文の際は、店舗や注文サイトに掲載されている情報をご確認ください</p>
        <Divider />
        <p>メニューの訂正やご報告・ご要望などありましたら、お気軽に<a href="https://twitter.com/saizeriyagacha" target="_blank" rel="noopener noreferrer">Twitter</a>までご連絡ください</p>
        <Divider />
        <h3>メニューについて</h3>
        <p><a href="https://www.saizeriya.co.jp/menu/index.html" target="_blank" rel="noopener noreferrer">グランドメニュー</a>を参照しています</p>
        <p>カロリー・塩分の記載が無い商品については、0kcal・塩分0gとしています</p>

        (2021.12.09 更新)
        <Divider />
        <h3>免責事項</h3>
        <p>当サイトにご利用されたことで直接・間接的に生じた損失に関し一切責任を負いかねます</p>
        <Divider />
        <h3>Cookieについて</h3>
        <p>当サイトでは、Googleによるアクセス解析および広告配信のためCookieを使用しています</p>
        <p>トラフィックデータは匿名で収集されており、個人を特定するものではありません</p>
        <p>Cookieの利用については、Webブラウザのユーザー設定により拒否をすることができます</p>
        <Divider />
        <div className="center">
          <Link href="/">トップへ</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
