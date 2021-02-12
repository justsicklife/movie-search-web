영화 검색 사이트
=============

영화 진흥위원회의 Rest API를 사용하여 제작함
-------------

  리액트,리덕스,리덕스 thunk,리액트 라우터 룰 사용하였다.

[사이트 보러가기](https://justsicklife.github.io/movie-search-web/)

### 폴더 구조 
* components
  * BoxOffice.js
  * BoxOffice.css
  * Company.js
  * Company.css
  * CompanyDetail.js
  * CompanyDetail.css
  * MovieDetail.js
  * MovieDetail.css
  * MovieList.js
  * MovieList.css
  * Navbar.js
  * Navbar.css
  * People.js
  * People.css
  * PeopleDetail.js
  * PeopleDetail.css
* container
  * BoxOfficeContainer.js
  * CompanyContainer.js
  * CompanyDetailContainer.js
  * MovieDetailContainer.js
  * MovieListContainer.js
  * NavbarContainer.js
  * PeopleContainer.js
  * PeopleDetailContainer.js
* modules
  * boxOffice.js
  * company.js
  * companyDetail.js
  * index.js
  * movieDetail.js
  * movieList.js
  * people.js
  * peopleDetail.js
* api
    * boxOffice.js
    * company.js
    * companyDetail.js
    * key.js
    * movieDetail.js
    * movieList.js
    * people.js
    * peopleDetail.js
 * lib 
    * asyncUtils.js
 * pages
    * BoxOfficePage.js
    * CompanyDetailPage.js
    * CompanyPage.js
    * MovieDetailPage.js
    * MovieListPage.js
    * PeopleDetailPage.js
    * PeoplePage.js
 * tag
    * bookmarkTag
      * BookmarkTag.js
      * BookmarkTag.css
    * contentTag
      * contentTag.js
    * loadingbar
      * loadingbar.js
      * loadingbar.css
### components 폴더 설명
      프리젠테이션널 컴포넌트로서 리덕스 스토어에 직접적으로 접근하지 않고 props만 받아와서 사용하는 컴포넌트
### container 폴더 설명
      리덕스 스토어의 state 를 가져오거나 action을 dispatch 하는 컴포넌트 입니다.
      HTML은 사용 하지 않고 다른 프레젠테이셔널 컴포넌트를 불러옵니다.
### modules 폴더 설명 
      action name,action 생성자,reducer 가 들어있다.
#### index.js 파일 설명
      여러개의 reducer 를 하나로 묶은 변수 입니다.
### api 폴더 설명
      fetch 함수를 이용하여 영화 진흥위원회에 Rest 방식으로 통신 하는 파일들에 집합입니다.
#### key.js 섦명
      자원을 요청하기 위해 필요한 key Id 에 변수를 export 하는 파일입니다.
### lib 폴더 설명
#### createPromiseThunk 함수 설명
      Promise에 기반한 Thunk를 만들어주는 함수입니다.
      이 함수의 반환값은 Promise를 요청하여 성공하면 SUCCESS Type의 dispatch를 실행하고 실패하면 ERROR Type dispatch 를 싱행합니다.
#### reducerUtils 객체 설명
      객체안에 함수가 있는데 이함수는 객체를 반환해줍니다.
      함수의 종료는 (initial,loading,success,error) 입니다.
      initial은 요청하지않은 클라이언트의 자원에 이 객체를 반환하고
      loading은 서버에 자원을 요청하였을때 이 객체를 반환하고
      succuess는 서버에 자원 요청을 성공적으로 받았을때 이 객체를 반환합니다.
      error는 서버에 자원 요청을 실패했을때 이 객체를 반환합니다.
#### handleAsyncActions 함수 설명
      비동기 관련 액션들을 처리합니다.
      만약 매게변수 renewal이 true 라면 자원을 받을때 전에 받았던 자원을 지우지 않고 전에받은 자원과 현재받은 자원에 대이터를 합칩니다.
### pages 폴더 설명
      페이지들을 모아놓은 폴더입니다.
### tag 폴더
      반복되어서 쓰이는 태그들을 모아놓은 폴더입니다.
#### bookmarkTag 폴더 설명
      페이지의 최상단 과 최하단으로 이동시켜주는 버튼 태그입니다.
#### contentTag 폴더 설명
      하나의 contents Box 와 여러개의 content Box 를 반환하는 함수가 들어있다.
#### loadingbar 폴더 설명
      자원을 요청해였을때 나탈날 loadingbar 를 반환하는 함수이다.
     
