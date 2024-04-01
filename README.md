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

### What is Koa

Koa เป็นเว็บเฟรมเวิร์กใหม่ที่ออกแบบโดยทีมเดียวกับ Express ซึ่งมุ่งเน้นไปที่การเป็นพื้นฐานที่เล็กกว่า มีประสิทธิภาพในการแสดงออก และแข็งแกร่งยิ่งขึ้นสำหรับเว็บแอปพลิเคชันและ API โดยการใช้ฟังก์ชัน async Koa ช่วยให้คุณละทิ้งการใช้ callback และปรับปรุงการจัดการข้อผิดพลาดได้อย่างมาก Koa ไม่ได้รวบรวมมิดเดิลแวร์ไว้ภายในแกนหลัก แต่มีชุดเมธอดที่ยอดเยี่ยมที่ทำให้การเขียนเซิร์ฟเวอร์รวดเร็วและสนุกสนาน

### Installation Project

```

```

### Koa router

[use @koa/router library](https://github.com/koajs/router)

[docs @koa/router library](https://github.com/koajs/router/blob/master/API.md)
