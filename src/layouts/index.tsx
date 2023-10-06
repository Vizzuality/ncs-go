import { useRouter } from 'next/router';

import MetaTags from 'containers/meta-tags';
import Navbar from 'containers/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  const { asPath } = useRouter();

  return (
    <>
      <MetaTags
        name="Nature4Climate"
        title="Naturebase"
        description="Nature climate solutions in action."
        url={`${process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_URL}${asPath}`}
        type="article"
        twitterCard="summary"
        twitterSite="@Nature4Climate"
      />
      <main className="flex w-full flex-col items-center">
        <Navbar />

        {children}
      </main>
    </>
  );
};

export default Layout;
