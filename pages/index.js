import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/Alert';
export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Alert type='error'>[Your Self Introduction]</Alert>
        <Alert type='success'>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn" className={'bg-pink-400'}>our Next.js tutorial</a>.)
        </Alert>

        <div className='w-[400px] h-[300px] bg-purple-300 flex'>
          <div className='bg-pink-300 flex-1 self-end'>789</div>
          <div>123</div>
          <div className='bg-green-200'>456</div>

        </div>
      </section>
    </Layout>
  );
}
