# KOA TODO List App

## Structure

```

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
- Webpack
- Eslint

### What is Koa

Koa เป็นเว็บเฟรมเวิร์กใหม่ที่ออกแบบโดยทีมเดียวกับ Express ซึ่งมุ่งเน้นไปที่การเป็นพื้นฐานที่เล็กกว่า มีประสิทธิภาพในการแสดงออก และแข็งแกร่งยิ่งขึ้นสำหรับเว็บแอปพลิเคชันและ API โดยการใช้ฟังก์ชัน async Koa ช่วยให้คุณละทิ้งการใช้ callback และปรับปรุงการจัดการข้อผิดพลาดได้อย่างมาก Koa ไม่ได้รวบรวมมิดเดิลแวร์ไว้ภายในแกนหลัก แต่มีชุดเมธอดที่ยอดเยี่ยมที่ทำให้การเขียนเซิร์ฟเวอร์รวดเร็วและสนุกสนาน

### Installation Project

```

```

### Koa router

[use @koa/router library](https://github.com/koajs/router)

[docs @koa/router library](https://github.com/koajs/router/blob/master/API.md)

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
