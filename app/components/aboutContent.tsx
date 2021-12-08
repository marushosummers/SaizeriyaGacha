import { NextPage } from 'next'

export const AboutContent: NextPage = () => {
  return (
    <div className="page">
      <h2>このサイトについて</h2>
      <p>当サイトは有志によって開発された非公式ファンサイトです</p>
      <p>サイゼリヤメニューを美味しく頂ける範囲で、用法用量を守って正しくお使いください</p>

      <p><a href="https://www.saizeriya.co.jp/menu/index.html" target="_blank" rel="noopener noreferrer">公式サイトのグランドメニュー</a>を参照していますが、一部メニューは実際の取扱と異なることがあります</p>
      <p>ご注文の際は、実際の店舗や注文サイトに掲載されている情報をご確認ください</p>

      <p>メニューの訂正やバグ報告・要望などありましたら、お気軽に<a href="https://twitter.com/marusho_summers" target="_blank" rel="noopener noreferrer">開発者Twitter</a>までご連絡ください</p>

      <h3>免責事項</h3>
      <p>当サイトにご利用されたことで直接・間接的に生じた損失に関し一切責任を負うものではありません</p>

      <h3>Cookieについて</h3>
      <p>当サイトでは、Googleによるアクセス解析および広告配信のためCookieを使用しています</p>
      <p>トラフィックデータは匿名で収集されており、個人を特定するものではありません</p>
      <p>Cookieの利用については、Webブラウザのユーザー設定により拒否をすることができます</p>

    </div>
  );
}

export default AboutContent;
