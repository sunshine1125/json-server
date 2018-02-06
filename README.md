##json-serve 模拟API数据接口
###安装
npm install json-server --save
###使用
1.创建一个json文件，格式类似
`{
  "user": [
    { "id": 1, "userName": "tt", "password": "1125" }
  ],
  "content": [
    { "id": 1, "des": "a girl", "liking": "singing reading and coding" }
  ],
  "friends": [
    {"id": 1, "name": "tom", "age": "18" },
    {"id": 2, "name": "tina", "age": "20" },
    { "id": 3, "name": "hell", "age": "16" }
  ]
}`
2.在package.json文件的启动项中添加
`"server": "json-server data.json"`
3.在终端输入npm server，生成以下3个api接口
 * http://localhost:3000/user
 * http:localhost:3000/content
 * http:localhost:3000/friends

 