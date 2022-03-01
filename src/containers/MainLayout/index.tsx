import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

//style
import styles from './style.module.scss';

interface Props {
  title: string;
  children: ReactNode;
}

const MainLayout = (props: Props) => {
  const { title, children } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Ricky Morty Wiki</title>
        <meta name="description" content="Test project for Housing Anywhere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="uk-text-bolder">
          <Link href="/">
            <a className="uk-link-heading">Ricky Morty Wiki</a>
          </Link>
        </h1>
      </header>
      <h2>{title}</h2>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
