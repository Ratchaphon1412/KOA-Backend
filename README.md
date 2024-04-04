# KOA TODO List App

## Structure

```
|- koa-backend
  |- api
    |- users
      user.controller.js
      user.model.js
      user.routers.js
    |- todo
      todo.controller.js
      todo.model.js
      todo.routers.js
  |- config
    |- components
      database.config.js
      server.config.js
    index.js
  |- dist
    bundle.js
  |- docs
    |- api
  |- middleware
    error.middleware.js
  |- mongo (persist database)
  .env
  .env.example
  .eslintignore
  .eslintrc.cjs
  .gitignore
  index.js
  package.json
  yarn.lock
  docker-compose.yml
  dockerfile
  README.md
```

[reference structure](https://marcoghiani.com/blog/advanced-koa-js-boilerplate)

- API Folder : รวม folder api ทั้งหมด และ index.js เช่นถ้าต้องการสร้าง เส้น api ของ user ก็จะใช้ user.routers.js file ในการสร้าง endpoint ของ user และ เอา user endpoint ที่ได่้ export function router module มา create sub router ที่รวม controller และ return เป็น instance ของ router ที่เราสร้างขึ้น ใน index.js function จะ automate import และ add sub router ที่เราสร้างขึ้นไปยัง main router ของ api ใน index.js

index.js ไฟล์ ใน folder ของ api จะรวม sub-router ของ user.routers.js

- Config Folder : folder นี้จะรวม configuration files ของทั้ง application

- Middleware Folder : รวม middleware สำหรับ validate error handle

- Utils Folder : รวม utility ของ application

## DOCS

[reference docs Koa](https://koajs.com/)

- What is Koa
- Installation Project
- Koa router
- Kong Body
- Validate Request with indicative
- Webpack
- Eslint
- Facade Design Pattern
- MongoDB

### What is Koa

Koa เป็นเว็บเฟรมเวิร์กใหม่ที่ออกแบบโดยทีมเดียวกับ Express ซึ่งมุ่งเน้นไปที่การเป็นพื้นฐานที่เล็กกว่า มีประสิทธิภาพในการแสดงออก และแข็งแกร่งยิ่งขึ้นสำหรับเว็บแอปพลิเคชันและ API โดยการใช้ฟังก์ชัน async Koa ช่วยให้คุณละทิ้งการใช้ callback และปรับปรุงการจัดการข้อผิดพลาดได้อย่างมาก Koa ไม่ได้รวบรวมมิดเดิลแวร์ไว้ภายในแกนหลัก แต่มีชุดเมธอดที่ยอดเยี่ยมที่ทำให้การเขียนเซิร์ฟเวอร์รวดเร็วและสนุกสนาน

### Installation Project

```sh
git clone repo
cd koa-backend
yarn install
docker-compose up -d
```

### Koa router

[use @koa/router library](https://github.com/koajs/router)

[docs @koa/router library](https://github.com/koajs/router/blob/master/API.md)

### Koa Body

[use koa-body library](http)

#### Koa Body Problem

- method Delete ใช้ body ไม่ได้

  [issue 1](https://github.com/koajs/koa-body/issues/133)
  [issue 2](https://github.com/koajs/koa-body/issues/163)

### Validate Request with indicative

[docs indicative](https://indicative-v5.adonisjs.com/docs/installation)

### HTTP Error Handling

[http-errors](https://github.com/jshttp/http-errors#readme)

### Webpack

Webpack

ถ้าเราจะพูดถึง Webpack แล้วก็เปรียบเสมือนเครื่องมือที่เอาไว้แปลงโมดูลของ JavaScript ให้อยู่ในรูปแบบที่เว็บสามารถนำไปใช้ได้ครับ เช่นแปลงจาก CommonJS, AMD หรือ ES6 Module ให้กลายเป็นโค้ด JavaScript ธรรมดาๆ ที่สามารถรันบน web browser ทั่วไปได้นั้นเองครับ

จุดเด่นของ webpack

เร็ว webpack นั้นใช้ async I/O บวกกับการทำ cache หลายชั้นทำให้ขั้นตอนการ complie นั้นเร็วสุดๆเลยครับ

ครบถ้วน webpack ได้เตรียมฟีเจอร์ที่ควรมีอยู่ใน workflow นั้นๆ มาให้ เพียงแต่เราต้องทำการ config นิดหน่อย เท่านั้นเองครับ

แล้ว Webpack จะช่วยเราได้ยังไงกันน่ะ?
มาทำความเข้า Dependencies กันครับ

จากโค๊ดข้างบนเราจะเห็นว่า ทั้งไฟล์ multiply.js และไฟล์ index.js ต่างก็มี dependencies กับไฟล์ sum.js เราลองมาดูภาพด้านล่างเพื่อความเข้าใจมากขึ้นกันครับ

![Web Pack](https://miro.medium.com/v2/resize:fit:640/format:webp/1*iyPiSe_uQJBFQ3oXcgiOmg.png)

จากภาพถ้าเราเรียงลำดับของการ import ไฟล์ใน ไฟล์ index.html ผิดไป โปรแกรมของเราก็จะไม่สามารถทำงานได้ครับ

ทีนี้ลองคิดดูถ้าเรามี dependencies จำนวนมากๆ เป็น 30 หรือ 40 ไฟล์ แน่นอนว่าการจัดการกับลำดับไฟล์ว่าไฟล์ไหนอยู่ก่อนไฟล์ไหนอยู่หลัง จะเปรียบเสมือนกับฝันร้ายเลยครับ

เรามาดูกันว่า Webpack จะสามารถช่วยเราได้อย่างไร
ถ้าเราลองสังเกตดูที่ไฟล์ index.html เราจะพบว่ามีไฟล์ที่เราทำการแยกไว้ 3 ไฟล์ด้วยกัน จริงๆแล้วแค่ 3 ไฟล์ก็ยังไม่เป็นไร แต่อย่างที่ได้บอกไปครับ ถ้าเรามี dependencies จำนวนมาก ผู้ใช้งานจะต้องรอจนกว่า dependencies ทั้งหมดจะถูก download หมด ก่อนที่ main application จะรันได้ แต่ Webpack สามารถเปลี่ยน Dependencies เหล่านี้ให้เป็น module ย่อยๆ ได้ครับ และยังบริหารจัดการ modules เหล่านี้ให้เราอีกด้วย หมายความว่า Webpack จะเรียกใช้งาน Dependencies ตามลำดับอย่างถูกต้องเลยครับ โดยที่เ้ราไม่ต้องจัดการอะไรเลย เรามาลองดูรูปภาพเพื่อความเข้าใจที่มากขึ้นกันครับ

![Web pack Dependency](https://miro.medium.com/v2/resize:fit:720/format:webp/1*iBcWIJ0614dZC8y9nY8pPw.png)

[reference](https://medium.com/@generous_mortuum_turtle_389/webpack-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%99%E0%B9%88%E0%B8%B0-e478afce905d)
[webpack docs](https://webpack.js.org/concepts/)

### Eslint

ESlint คือ Linter ที่จะแนะนำให้เราเขียนโค้ดตามกฎมาตรฐานต่าง (ที่คนส่วนมากเขียนกันนั่นเองง) เช่น ESlint จะเตือนถ้าเราประกาศตัวแปรแล้วไม่ใช้ หรือถ้าเราประกาศตัวแปร const แต่มีการ Assign ค่าให้ ESlint ก็จะเตือนให้เราเปลี่ยนไปใช้ประกาศ let แทน เป็นต้นซึ่งจะช่วยเปลี่ยนโค้ดที่เราเขียนให้มีมาตรฐานมากขึ้น อ่านง่ายมากขึ้น ช่วยลดข้อผิดพลาด(Bugs) และดูมีระดับมากขึ้น
[reference](https://medium.com/@boomauakim/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%84%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-koa-node-js-framework-eslint-and-prettier-b3ed866e826)

### Facade Config

[reference](https://dev.to/tomekbuszewski/facade-pattern-in-javascript-3on4)

### MongoDB

MongoDB ก็คือ open source database ตัวหนึ่ง ซึ่งมี structure เป็นแบบ document database นั่นเอง

document database นั้นเป็น NoSQL database แบบหนึ่ง ซึ่งมีการเก็บข้อมูลเป็นของ JSON Object

ส่วนประกอบของ MongoDB
mongodb นั้นจะเก็บข้อมูลเป็น JSON Object และมีส่วนประกอบหลักๆดังนี้

![RDBMS and MongoDB](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DuWhBVBQ2St_lMNMpyoRmw.png)

#### Document

document เป็นชื่อที่ใช้เรียกข้อมูลแต่ละชิ้นที่เก็บอยู่ใน database ของเรา มีลักษณะเป็น field : value object เช่น ตัวอย่างด้านล่าง เป็น document ของผู้ใช้ 1 คน ประกอบด้วยข้อมูลคือ ชื่อ,อายุ และที่อยู่ของผู้ใช้คนนั้น

![Document Example](https://miro.medium.com/v2/resize:fit:640/format:webp/1*p3_xOd2mi_bcl2fLMgBw9g.png)

    ใน MongoDB ข้อมูล document ที่เก็บใน collection จะมีคีย์ _id ทำหน้าที่เปรียบเสมือน primary key อยู่ด้วย

#### Collection

ถ้าเปรียบเทียบกับ relational database(RDBMS) แบบเดิม collection ก็เปรียบได้กับ table หรือที่เก็บรวบรวมข้อมูล document ประเภทเดียวกันเอาไว้ด้วยกัน เช่น users ก็เป็น collection ที่เก็บข้อมูลของผู้ใช้แต่ละคน

![Collection Example](https://miro.medium.com/v2/resize:fit:636/format:webp/1*kyKOh1GGsHwjl67gGGObPw.png)

    MongoDB ไม่รองรับการ join หรือ SQL

#### Database

เป็นที่เก็บรวบรวม collection ต่างๆ ที่มีความเกี่ยวข้องกันเอาไว้

### MongoDB Relationship

- [Data Model Design MongoDB](https://medium.com/skilllane/mongo-db-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%9B%E0%B8%A3-%E0%B8%95%E0%B8%AD%E0%B8%99-data-model-design-458b2478c1e9)

- [Basic MongoDB](https://mikelopster.dev/posts/mongo-basic)

#### Relation และ aggregation

ใน mongoDB นั้นจะมี \_id เป็น field unique key ที่เป็นเหมือน key ที่เป็นตัวแทนของแต่ละข้อมูล
เราสามารถนำ key นั้นไปทำ relation ระหว่าง database และใช้คำสั่ง aggregate ในการค้นหาแทนได้

#### Mongoose ORM

ทีนี้เพื่อให้จัดการง่ายผ่าน ภาษาหรือ Framework Backend ต่างๆ โลกเราได้พัฒนาสิ่งหนึ่งขึ้นมาคือ Object-Document Mapping (ODM)

ODM คืออะไร ?

ODM (Object-Document Mapping) คือ programming technique อย่างหนึ่งที่อำนวยความสะดวกในการจัดการระหว่างภาษาที่เป็น document-oriented databases (อย่าง MongoDB) และ object-oriented programming languages (OOP) โดยการปรับมุมมองของ collection, document ออกมาเป็น Object ออกมาแทน

ซึ่งปัจจุบันได้มี ODM libraries ที่สามารถสื่อสารกับ NoSQL ได้ผ่าน object ไว้หลากหลายตัว ซึ่งในแต่ละ database นั้นก็จะมีตัวที่เหมาะสมแตกต่างกันไป โดยในเคสของ MongoDB จะขอยกตัวอย่างกับ Mongoose

Mongoose คืออะไร ?

Mongoose คือ popular ODM library ของฝั่ง MongoDB และ Node.js ซึ่งจะทำการเตรียมคำสั่งที่ใช้สำหรับจัดการกับ MongoDB ผ่านการจัดการด้วย schema-based เป็นหลัก (มอง collection เป็นเหมือน Schema object ที่ต้องทำการ defined เอาไว้ผ่าน code และทุกอย่างก็จัดการผ่าน Schema object แทน)

ซึ่ง Mongoose นั้นได้ทำการเตรียมไว้ทุกอย่างตั้งแต่การ casting (แปลงค่าข้อมูล), validation, query building, business logic hooks และของต่างๆอีกมากมาย

key feature ใหญ่ๆของ Mongoose

- Schemas Mongoose จะสามารถ define schema ของ document ได้ โดย schema คือการประกาศโครงสร้างที่จะเป็นการบอกว่า document ที่อยู่ใน collection นี้จะมีหน้าตาออกมาประมาณไหน โดยสามารถกำหนด type, default value, validators เอาไว้ได้เลย

- Models หลังจากที่ define schema เราจะสามารถ compile มาได้อยู่ในรูปแบบของ Model และ Model นั้นจะเป็นตัวแทนในการคุยกับ schema (ที่ไปจัดการกับ collection ใน MongoDB) ได้

- Validation Mongoose ได้เตรียม built-in validation เอาไว้ เพื่อใช้สำหรับการ validate ข้อมูลที่ถูกต้องก่อนเข้า schema ได้ เพื่อให้แน่ใจว่าเรามีการบันทึกข้อมูลที่ถูกต้องเข้าไป

- Queries Mongoose มี function ในการ query ท่าต่างๆเตรียมไว้ให้เเล้ว

- Population Mongoose ได้เตรียม feature กระจายข้อมูล (populate) เอาไว้ ในกรณีที่มีการ insert ข้อมูลต่าง collection เข้าไป

### Seeder MongoDB

[Mongoose Random Document](<https://stackoverflow.com/questions/39277670/how-to-find-random-record-in-mongoose#:~:text=To%20get%20random%20document(s,%3A%20String%20%7D)%3B%20User%20%3D%20mongoose.>)

[Faker Seeder](https://fakerjs.dev/)

### Embed document MongoDB

[Document Embed](https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html)

### CLI

[command.js](https://github.com/tj/commander.js)

### Cronjob

[cron.js](https://github.com/kelektiv/node-cron#readme)

[cron format from unix cronjob](https://www.nncron.ru/help/EN/working/cron-format.htm)
