## Usage

```bash
npm install @nestjs/swagger node-knife4j swagger-ui-express express
```

```js
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { knife4jSetup } from 'node-knife4j'


async function bootstrap(){
  ...
    
  const options = new DocumentBuilder()
    .setTitle('knife4j example')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('knife4j')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  knife4jSetup(app, [
    {
      name: '1.x版本',
      url: `/docs-json`,
      swaggerVersion: '1.0',
      location: `/docs-json`,
    },
  ])
  await app.listen(3000)
  ...
}
```

此版本采用`knife4j`最新版:`4.0.0`, 解决全局设置参数默认不携带问题等。
