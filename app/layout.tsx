import { _Head } from '@/components/head';
import { GoogleAdsHeader } from '@/lib/gadsense';
import { GoogleAnalytics } from '@/lib/gtag';
import StyledComponentsRegistry from '@/lib/registry';
import { ReactNode } from 'react';

export const metadata = {
  title: 'サイゼリヤ1000円ガチャ',
  description: 'サイゼリヤのメニューでガチャしよう！',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <GoogleAnalytics />
      <GoogleAdsHeader />
      <_Head
        title={'サイゼリヤ1000円ガチャ'}
        description={'サイゼリヤのメニューでガチャしよう！'}
        keyword={'サイゼリヤ,1000円,ガチャ'}
        url={process.env.NEXT_PUBLIC_BASE_URL}
      />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
