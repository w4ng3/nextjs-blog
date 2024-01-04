import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../components/layout';
import useSWR from 'swr' // swr文档：用于数据请求的 React Hooks 库 https://swr.vercel.app/zh-CN
// 使用 SWR，组件将会不断地、自动获得最新数据流。UI 也会一直保持快速响应。
function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

export default function FirstPost() {

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className='pink'>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}