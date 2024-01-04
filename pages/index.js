import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/Alert';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Alert type='error'>[我想要找出一些响亮的句子，像月光一样干净...]</Alert>
        <Alert type='success'>
          "Literature's highest goal should be that of putting some order in the chaos of existence, thus providing us with some tentative understanding of the world we live in. In order to achieve that kind of understanding, though, the author needs to observe life from a distance, reaching a state of absolute withdrawal and quasi-inexistence. If the world is chaos, then the only way to understand it is by avoiding any direct involvement in it. "
        </Alert>

        {/* <div className='w-[400px] h-[30px] bg-purple-300 flex'>
          <div className='bg-pink-300 flex-1 self-end'>789</div>
          <div>123</div>
          <div className='bg-green-200'>456</div>
        </div> */}
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`} className={utilStyles.listTitle}>
                  {title}
                </Link>
                <small className={utilStyles.lightText} style={{ float: 'right' }}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  );
}

/** 
 *  getStaticProps 仅在服务器端运行。它永远不会在客户端运行。
 *  它甚至不会包含在浏览器的 JS 包中。
 *  这意味着您可以编写直接数据库查询等代码，而无需将它们发送到浏览器。
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}