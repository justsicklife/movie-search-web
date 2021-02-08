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
  * bookmarkTag
    * BookmarkTag.js
    * BookmarkTag.css
  * contentTag
    * contentTag.js
  * loadingbar
    * loadingbar.js
    * loadingbar.css
  * rest
    * rest.js
    
### components
      프리젠테이션널 컴포넌트로서 리덕스 스토어에 직접적으로 접근하지 않고 props만 받아와서 사용하는 컴포넌트
