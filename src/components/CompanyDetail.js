import { Link } from "react-router-dom";
import "./CompanyDetail.css";
import { LoadingBar } from "../api/loadingbar/loadingbar.js";
import { ContentTag, ContentsTag } from "../api/contentTag/contentTag.js";


const CompanyDetail = ({ error, company, loading }) => {

    const FilmosTag = ({ filmos }) => {
        return (
            <div className="company_detail_filmos">
                {filmos.map((filmo) => {
                    return (
                        <div key={`${filmo.movieCd}`} className="company_detail_filmo">
                            <Link
                                className="movie_link"
                                to={`/movie/detail/${filmo.movieCd}`}
                            >
                                <div className="company_detail_filmo_poster">
                                    <span>
                                        <img alt={`영화 ${filmo.movieNm}의 포스터`} />
                                    </span>
                                </div>
                            </Link>
                            <div className="company_detail_filmo_name"><h5>{filmo.movieNm}</h5></div>
                            <div className="company_detail_filmo_cast"><h5>{filmo.companyPartNm}</h5></div>
                        </div>
                    )
                })}
            </div>
        )
    }

    switch (true) {
        case loading:
            return (
                <LoadingBar />
            )
        case !company:
            return (
                <div className="text-align-center">정보 없음</div>
            )
        case error:
            return (
                <div className="text-align-center">에러</div>
            )
        default:
            return (
                <div className="company_detail">
                    <div className="company_detail_box">
                        <div className="company_detail_box_inner">
                            <div className="company_detail_box_inner_top">
                                <div className="company_detail_box_inner_top--left">
                                    <div className="company_detail_poster">
                                        <span>
                                            <img alt={`${company.companyNm}의 사진`}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="company_detail_box_inner_top--right">
                                    <ContentTag content={company} propertyName="companyNm" classNm="company_detail_name_ko" />
                                    <ContentTag content={company} propertyName="companyNmEn" classNm="company_detail_name_en" />
                                    <ContentTag content={company} propertyName="ceoNm" classNm="company_detail_ceo_name" />
                                    <ContentsTag contents={company.parts} propertyName="companyPartNm" childClassNm="company_part" classNm="company_detail_parts" childClassNm="company_part" />
                                </div>
                            </div>
                            <div className="company_detail_box_inner_bottom">
                                <div className="company_detail_box_inner_botom--all">
                                    <div className="company_detail_box_filmo_perpace"><h3>필모리스트</h3></div>
                                    <FilmosTag filmos={company.filmos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default CompanyDetail;