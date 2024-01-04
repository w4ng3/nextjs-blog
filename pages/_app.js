import '../styles/global.css'
/** 
 * @description _app.js 是 Next.js 框架中的一个特殊文件，它允许你控制页面的初始化。你可以在这个文件中导入全局样式，或者添加一些全局的状态管理库，如 Redux 或 Mobx。在这个文件中，你可以看到一个名为 App 的函数，它接收一个 Component 和 pageProps 作为参数。Component 是当前被渲染的页面，pageProps 是这个页面的初始属性。这个函数必须返回一个 React 组件。
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}