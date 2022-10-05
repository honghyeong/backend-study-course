# backend-study-course

- Made by honghyeong

- 수업 자료는 pdf-resource에 있습니다.

- 각 수업 회차 내용은 PR에서 다루겠습니다.

# Reference

- [Nest 공식문서 : EN](https://nestjs.com/)
- [Nest Wikidocs : KOR](https://wikidocs.net/147248)

<br>
<br>
<br>

# 😎 Dev Info 😎

## User API

| METHOD |     URI     | Params |        Body         |                                 Description                                 |
| :----: | :---------: | :----: | :-----------------: | :-------------------------------------------------------------------------: |
|  GET   |   /users    |        |                     |                              전체 사용자 조회                               |
|  POST  |   /users    |        | id, name, age, role |                                 사용자 추가                                 |
|  GET   | /users/{id} |   id   |                     |                   사용자의 ID를 이용해서 특정 사용자 조회                   |
|  PUT   | /users/{id} |   id   |      age, role      | 특정한 ID를 가진 사용자의 정보를 body에 전달한 age와 role에 따라서 업데이트 |
| DELETE | /users/{id} |   id   |                     |                     특정한 ID를 가진 사용자의 회원 탈퇴                     |
