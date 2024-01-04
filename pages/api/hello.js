/** 
 * @description API 路由的一个很好的用例是处理表单输入。例如，您可以在页面上创建一个表单，并让它向您的 API 路由发送请求。然后，您可以编写代码以将其直接保存到数据库中。API 路由代码不会成为客户端捆绑包的一部分，因此您可以安全地编写服务器端代码。POST
 */

export default (req, res) => {
  // const email = req.body.email
  res.status(200).json({ text: 'Hello' })
}