영화 검색 사이트
=============

영화 진흥위원회 API를 사용하여 제작함
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
