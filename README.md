## SIDIZ (https://kr.sidiz.com/?pc) 홈페이지 제작
### 바로가기 : https://a1waysbemine.github.io/PROJECTS/dist
<hr/>

## 활용 스킬

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## 팀원

|                    **이지연**                      |                      **신준혁**                    |
| :----------------------------------------------: |  :----------------------------------------------: |
| [@a1waysbemine](https://github.com/a1waysbemine) |  [@ShinJunhyeok](https://github.com/ShinJunhyeok) |

## 역할 분담 및 주요기능 설명

### 공통 
- styled Components를 활용한 각 컴포넌트별 스타일링
- 페이지별 데이터 파일 생성
- redux-toolkit을 활용한 slice 생성
- 각 컴포넌트에서 store에 저장된 state에 접근


### 이지연 : 메인페이지, ABOUT, SUPPORT, MYPAGE
- useEffect를 활용하여 메인페이지 비주얼 배너 타이머 적용, 버튼 클릭 시 타이머 초기화 및 재실행
- 아코디언 형식의 FAQ페이지 구현, 각 기준별 정렬
- 장바구니에 1개 이상의 제품을 추가했을 경우, MYPAGE의 주문상태 변화
- 상담신청, a/s신청 폼 제출 시 slice에 해당 내용을 전달하고, 다시 그 내용을 MYPAGE에 전달하여 신청내역 조회할 수 있도록 함.
- 위의 목록을 LocalStorage에 저장하여 새로고침 시에도 유지되도록 함.


### 신준혁 : PRODUCT, CART, JOIN/LOGIN/LOGOUT, EVENT
- PRODUCT : 제품 데이터 API파일 생성하여 카테고리 메뉴에서 해당 카테고리를 클릭시, 해당 카테고리별 제품이 표시되도록 구현.  
각 카테고리별 제품을 클릭하면 장바구니에 담기 또는 상세 페이지로 이동하도록 구현.
상세페이지에서 해당 제품을 미리보기 할 수 있는 기능과 색상 및 수량을 선택하여 장바구니에 담을 수 있도록 구현함.
- CART : redux toolkit을 활용하여 PRODUCT 페이지에서 클릭한 해당 배열 데이터를 slice를 통해 가져와 장바구니 페이지로 전달.
상세페이지에서 해당 제품을 미리보기 할 수 있는 기능과 색상 및 수량을 선택하여 장바구니에 담을 수 있도록 구현함.  
- CART : redux toolkit을 활용하여 PRODUCT 페이지에서 클릭한 해당 배열 데이터를 slice를 통해 가져와 장바구니 페이지로 전달.  
장바구니에 담긴 후 수량 변경 및 삭제가 가능하도록 구현.
- JOIN/LOGIN/LOGOUT : localStorage를 활용하여 회원가입과 로그인 데이터를 저장, 새로고침 시에도 로그인이 풀리지 않도록 구현.  
- EVENT : 이벤트 API 파일을 생성하여 이벤트 페이지를 구현.
