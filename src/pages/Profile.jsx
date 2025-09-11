import { Link } from 'react-router'

import selfie from '../assets/images/photo-1.png'
import certificate from '../assets/images/certificate.png'
import courseXII from '../assets/images/course-12.png'
import courseXIII from '../assets/images/course-13.png'
import courseXIV from '../assets/images/course-14.png'
import courseXV from '../assets/images/course-15.png'
import courseXVI from '../assets/images/course-16.png'
import courseXXI from '../assets/images/course-21.png'
import courseXXII from '../assets/images/course-22.png'
import courseXXIII from '../assets/images/course-23.png'
import articleI from '../assets/images/article-1.png'
import articleII from '../assets/images/article-2.png'
import articleIII from '../assets/images/article-3.png'
import star from '../assets/images/kid_star.png'


function Profile () {
  const cancelDefault = (e) => {
    e.preventDefault()
  }

  return(<>
    <section>
      <div className="py-8"></div>
    </section>
    {/*  base data */}
    <section>
      <div className="container">
        <div className="py-9 py-xl-13">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="d-flex flex-column">
                <div className="mb-7 mb-md-9">
                  <div className="d-flex align-items-center pb-7 pb-md-9">
                    <img src={selfie} alt="photo-1" className="photo-img me-2" />
                    <div className="me-7">
                      <h5 className="mb-2">弟弟Brother</h5>
                      <h5>INTJ</h5>
                    </div>
                  </div>
                  <h6 className="btn btn-primary btn-padding-sm border-2px btn-width">MBTI 測驗 <i className="bi bi-arrow-right"></i></h6>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-5">
                      <span className="material-icons icon-bg radius-8 me-5">star</span>
                      <div>
                        <p className="fs-7">積分等級</p>
                        <h6>Lv 4 求知者</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-5">
                      <span className="material-icons icon-bg radius-8 me-5">calendar_today</span>
                      <div>
                        <p className="fs-7">出生日期</p>
                        <h6>1989 / 9 / 26</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-5">
                      <i className="bi bi-discord lh-1 fs-4 icon-bg radius-8 me-5"></i>
                      <div>
                        <p className="fs-7">1989 / 9 / 26</p>
                        <h6>弟弟Brother(DBrother#2849)</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-5">
                      <span className="material-icons icon-bg radius-8 me-5">mail</span>
                      <div>
                        <p className="fs-7">電子信箱</p>
                        <h6><a href="#mailto:example@example.com" className="text-gray-60">example@example.com</a></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 p-bg radius-8">
                  <p className="mb-2">關於我 :</p>
                  <p className="mb-7 ">屬於MBTI金字塔底層I到不能再I的建築師人格，雖說以官方文件來說，建築師寫得挺正向的「作為最稀有的人格類型之一，也是最有能力的人群之一」，雖說這份文件僅供參考，但有官方文件這認證，也對自己多了份信心。</p>
                  <p className="mb-2">興趣 :</p>
                  <p>平常有空喜歡看看韓劇、動漫、電影等等，平常也喜歡自己一個人手機拿著就出門晃晃，用手機拍攝不同的人事物或風景，未來希望能入手一台屬於自己的單眼，可以拍攝出更多不同風格的照片。</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div>
                <img src={certificate} alt="certificate" className="w-100" />
                <div className="border-2px border-top-0 radius-bottom-8 certificate-h overflow-auto">
                  <div className="d-flex align-items-center py-3 px-5 hover cursor">
                    <img src={courseXII} alt="course-12" className="certificate-img border-2px radius-8 me-2" />
                    <p className="text-nowrap fs-7"><span className="material-icons text-success me-1 align-bottom">workspace_premium</span>西班牙語入門</p>
                  </div>
                  <div className="d-flex align-items-center py-3 px-5 hover cursor">
                    <img src={courseXIII} alt="course-13" className="certificate-img border-2px radius-8 me-2" />
                    <p className="text-nowrap fs-7"><span className="material-icons text-success me-1 align-bottom">workspace_premium</span>設計思維與創新</p>
                  </div>
                  <div className="d-flex align-items-center py-3 px-5 hover cursor">
                    <img src={courseXIV} alt="course-14" className="certificate-img border-2px radius-8 me-2" />
                    <p className="text-nowrap fs-7"><span className="material-icons text-success me-1 align-bottom">workspace_premium</span>跨文化心理學</p>
                  </div>
                  <div className="d-flex align-items-center py-3 px-5 hover cursor">
                    <img src={courseXV} alt="course-15" className="certificate-img border-2px radius-8 me-2" />
                    <p className="text-nowrap fs-7"><span className="material-icons text-success me-1 align-bottom">workspace_premium</span>認知心理學與行為</p>
                  </div>
                  <div className="d-flex align-items-center py-3 px-5 hover cursor">
                    <img src={courseXVI} alt="course-16" className="certificate-img border-2px radius-8 me-2" />
                    <p className="text-nowrap fs-7"><span className="material-icons text-success me-1 align-bottom">workspace_premium</span>韓語口語實踐</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* course list */}
    <section>
      <div className="courselist-bg">
        <div className="container">
          <div className="row">
            <div className="pt-9 pt-15">
              <div className="col-lg-10 mx-auto">
                <h5 className="border-bottom-black pb-5 mb-7 mb-md-11">課程清單</h5>
                <div className="row g-7 g-lg-9">
                  <div className="col-lg-4">
                    <div className="card border-0 bg-white p-7 h-100">
                      <img src={courseXXI} alt="course-21" className="border-2px radius-8 mb-5" />
                      <h4 className="mb-2"><a onClick={(e) => cancelDefault(e)} href="#" className="stretched-link text-gray-60">零基礎的手機攝影術，瞬間拍出專業的風景照</a></h4>
                      <p className="fs-7 text-gray-60 mb-5">講師－高宇琛</p>
                      <div className="d-flex align-items-center mt-auto">
                        <div className="progress bg-green-light w-100 me-2" style={{height:"12px"}}>
                          <div className="progress-bar bg-success" role="progressbar" style={{width:"50%"}}></div>
                        </div>
                        <p className="text-success fs-7">50%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 bg-white p-7 h-100">
                      <img src={courseXXII} alt="course-22" className="border-2px radius-8 mb-5" />
                      <h4 className="mb-2 "><a onClick={(e) => cancelDefault(e)} href="#" className="stretched-link text-gray-60">寵物生活照實戰:快門、光圈、ISO之間的取捨...</a></h4>
                      <p className="fs-7 text-gray-60 mb-5">講師－高宇琛</p>
                      <div className="d-flex align-items-center mt-auto">
                        <div className="progress bg-green-light w-100 me-2" style={{height:"12px"}}>
                          <div className="progress-bar bg-success" role="progressbar" style={{width:"50%"}}></div>
                        </div>
                        <p className="text-success fs-7">50%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 bg-white p-7 h-100">
                      <img src={courseXXIII} alt="course-23" className="border-2px radius-8 mb-5" />
                      <h4 className="mb-2"><a onClick={(e) => cancelDefault(e)} href="#" className="stretched-link text-gray-60">不用動腦的攝影課-7堂課拍出有質感的照片</a></h4>
                      <p className="fs-7 text-gray-60 mb-5">講師－高宇琛</p>
                      <div className="d-flex align-items-center mt-auto">
                        <div className="progress bg-green-light w-100 me-2" style={{height:"12px"}}>
                          <div className="progress-bar bg-success" role="progressbar" style={{width:"50%"}}></div>
                        </div>
                        <p className="text-success fs-7">50%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"> 
            <div className="py-9 py-lg-15">
              <div className="col-lg-10 mx-auto">
                <h5 className="border-bottom-black pb-5 mb-7 mb-md-11">課程收藏</h5>
                <div className="row g-7 g-lg-9">
                  <div className="col-lg-4">
                    <div className="card border-0 radius-32">
                      <div className="card-header border-0 position-relative bg-white pt-7 px-7 radius-32">
                        <img src={courseXII} alt="course-12" className="card-img" />
                        <form action="#" className="card-icon-position">
                          <input type="checkbox" id="collect" className="collect-ctrl d-none" />
                          <label htmlFor="collect" className="collect-bookmark cursor card-icon-bg me-2"><i className="bi bi-bookmark fs-5"></i></label>
                          <label htmlFor="collect" className="collect-bookmark-fill cursor card-icon-bg me-2"><i className="bi bi-bookmark-fill fs-5"></i></label>
                          <label htmlFor="cart" className="card-icon-bg cursor"><i className="bi bi-cart fs-5"></i></label>
                        </form>
                      </div>
                      <div className="card-body border-0 border-bottom-black px-0 mx-7">
                        <div className="d-flex">
                          <p className="tag-pill bg-gray-40 me-2 text-nowrap">語言與文學</p>
                          <p className="tag-pill bg-purple text-nowrap">直播課程</p>
                        </div>
                        <h4 className="mb-2 mt-5"><a onClick={(e) => cancelDefault(e)} href="#" className="text-gray-80">西班牙語入門</a></h4>
                        <div className="d-flex">
                          <p className="me-4">講師－高宇琛</p>
                          <p className="text-primary">ESTP</p>
                        </div>
                      </div>
                      <div className="card-footer border-0 bg-white px-7 pt-5 pb-7 radius-32">
                        <div className="d-flex justify-content-between">
                          <h4>NT 899</h4>
                          <div className="d-flex justify-content-between align-items-center">
                            <img src={star} alt="star" />
                            <p className="text-nowrap text-success">4.9 (858)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 radius-32">
                      <div className="card-header border-0 position-relative bg-white pt-7 px-7 radius-32">
                        <img src={courseXIII} alt="course-13" className="card-img" />
                        <form action="#" className="card-icon-position">
                          <input type="checkbox" id="collect" className="collect-ctrl d-none" />
                          <label htmlFor="collect" className="collect-bookmark cursor card-icon-bg me-2"><i className="bi bi-bookmark fs-5"></i></label>
                          <label htmlFor="collect" className="collect-bookmark-fill cursor card-icon-bg me-2"><i className="bi bi-bookmark-fill fs-5"></i></label>
                          <label htmlFor="cart" className="card-icon-bg cursor"><i className="bi bi-cart fs-5"></i></label>
                        </form>
                      </div>
                      <div className="card-body border-0 border-bottom-black px-0 mx-7">
                        <div className="d-flex">
                          <p className="tag-pill bg-gray-40 me-2 text-nowrap">語言與文學</p>
                          <p className="tag-pill bg-purple text-nowrap">錄製課程</p>
                        </div>
                        <h4 className="mb-2 mt-5"><a onClick={(e) => cancelDefault(e)} href="#" className="text-gray-80 stretched-link">設計思維與創新</a></h4>
                        <div className="d-flex">
                          <p className="me-4">講師－張昕玟</p>
                          <p className="text-primary">ISFJ</p>
                        </div>
                      </div>
                      <div className="card-footer border-0 bg-white px-7 pt-5 pb-7 radius-32">
                        <div className="d-flex justify-content-between">
                          <h4 className="text-nowrap">NT 1,199</h4>
                          <div className="d-flex justify-content-between align-items-center">
                            <img src={star} alt="star" />
                            <p className="text-nowrap text-success">4.3 (1,031)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 radius-32">
                      <div className="card-header border-0 position-relative bg-white pt-7 px-7 radius-32">
                        <img src={courseXIV} alt="course-14" className="card-img" />
                        <form action="#" className="card-icon-position">
                          <input type="checkbox" id="collect" className="collect-ctrl d-none" />
                          <label htmlFor="collect" className="collect-bookmark cursor card-icon-bg me-2"><i className="bi bi-bookmark fs-5"></i></label>
                          <label htmlFor="collect" className="collect-bookmark-fill cursor card-icon-bg me-2"><i className="bi bi-bookmark-fill fs-5"></i></label>
                          <label htmlFor="cart" className="card-icon-bg cursor"><i className="bi bi-cart fs-5"></i></label>
                        </form>
                      </div>
                      <div className="card-body border-0 border-bottom-black px-0 mx-7">
                        <div className="d-flex">
                          <p className="tag-pill bg-gray-40 me-2 text-nowrap">語言與文學</p>
                          <p className="tag-pill bg-purple text-nowrap">錄製課程</p>
                        </div>
                        <h4 className="mb-2 mt-5"><a onClick={(e) => cancelDefault(e)} href="#" className="text-gray-80 stretched-link">跨文化心理學</a></h4>
                        <div className="d-flex">
                          <p className="me-4">講師－薛詩涵</p>
                          <p className="text-primary">INFP</p>
                        </div>
                      </div>
                      <div className="card-footer border-0 bg-white px-7 pt-5 pb-7 radius-32">
                        <div className="d-flex justify-content-between">
                          <h4>NT 899</h4>
                          <div className="d-flex justify-content-between align-items-center">
                            <img src={star} alt="star" />
                            <p className="text-nowrap text-success">4.7 (858)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pb-12 pb-lg-17">
              <div className="col-lg-10 mx-auto">
                <h5 className="border-bottom-black pb-5 mb-7 mb-md-11">文章收藏</h5>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active text-gray-80" id="pills-photo-tab" data-bs-toggle="pill" data-bs-target="#pills-photo" type="button" role="tab">攝影(8)</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link text-gray-80" id="pills-movie-tab" data-bs-toggle="pill" data-bs-target="#pills-movie" type="button" role="tab">電影(2)</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link text-gray-80" id="pills-work-tab" data-bs-toggle="pill" data-bs-target="#pills-work" type="button" role="tab">職場(2)</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link text-gray-80" id="pills-fashion-tab" data-bs-toggle="pill" data-bs-target="#pills-fashion" type="button" role="tab">流行(4)</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-photo" role="tabpanel">
                    <div className="card border-0 bg-white radius-32 p-7 mb-7">
                      <div className="d-flex flex-column flex-lg-row">
                        <div className="position-relative me-lg-7">
                          <img src={articleI} alt="article-1" className="card-img" />
                          <form action="#" className="card-articleicon-position">
                            <input type="checkbox" id="collect-article-1" className="collect-ctrl d-none" />
                            <label htmlFor="collect-article-1" className="collect-bookmark-fill cursor card-icon-bg"><i className="bi bi-bookmark fs-5"></i></label>
                            <label htmlFor="collect-article-1" className="collect-bookmark cursor card-icon-bg"><i className="bi bi-bookmark-fill fs-5"></i></label>
                          </form>
                        </div>
                        <div>
                          <div className="d-flex flex-column-reverse flex-lg-row justify-content-between">
                            <div className="mb-5">
                              <h4 className="mb-5"><a href="#" className="text-gray-80">死侍與金鋼狼 : 觀影前必須知道的10件事</a></h4>
                              <div className="d-flex">
                                <p className="tag-pill bg-gray-40 me-2">電影</p>
                                <p className="tag-pill bg-gray-40">流行</p>
                              </div>
                            </div>
                            <p className="text-gray-60 py-5 py-lg-0">2024/7/18</p>
                          </div>
                          <p className="text-gray-60">《死侍與金鋼狼》回到漫威/迪士尼旗下，成了漫威電影宇宙首部R及電影，並被期待成為低迷許久的超級英雄電影救星...</p>
                        </div>
                      </div>
                    </div>
                    <div className="card border-0 bg-white radius-32 p-7 mb-7">
                      <div className="d-flex flex-column flex-lg-row">
                        <div className="position-relative me-lg-7">
                          <img src={articleII} alt="article-2" className="card-img" />
                          <form action="#" className="card-articleicon-position">
                            <input type="checkbox" id="collect-article-2" className="collect-ctrl d-none" />
                            <label htmlFor="collect-article-2" className="collect-bookmark-fill cursor card-icon-bg"><i className="bi bi-bookmark fs-5"></i></label>
                            <label htmlFor="collect-article-2" className="collect-bookmark cursor card-icon-bg"><i className="bi bi-bookmark-fill fs-5"></i></label>
                          </form>
                        </div>
                        <div>
                          <div className="d-flex flex-column-reverse flex-lg-row justify-content-between">
                            <div className="mb-5">
                              <h4 className="mb-5"><a href="#" className="text-gray-80">時裝表演舞台攝影心得</a></h4>
                              <div className="d-flex">
                                <p className="tag-pill bg-gray-40 me-2">美感設計</p>
                                <p className="tag-pill bg-gray-40 me-2">服務</p>
                                <p className="tag-pill bg-gray-40">精選整理</p>
                              </div>
                            </div>
                            <p className="text-gray-60 py-5 py-lg-0">2023/3/18</p>
                          </div>
                          <p className="text-gray-60">現今數碼 攝影器材的進步和提升，拍攝時裝表演對於攝影師更能得心應手，但選擇甚麼鏡頭，又要如何運用器材呢?...</p>
                        </div>
                      </div>
                    </div>
                    <div className="card border-0 bg-white radius-32 p-7">
                      <div className="d-flex flex-column flex-lg-row">
                        <div className="position-relative me-lg-7">
                          <img src={articleIII} alt="article-3" className="card-img" />
                          <form action="#" className="card-articleicon-position">
                            <input type="checkbox" id="collect-article-3" className="collect-ctrl d-none" />
                            <label htmlFor="collect-article-3" className="collect-bookmark-fill cursor card-icon-bg"><i className="bi bi-bookmark fs-5"></i></label>
                            <label htmlFor="collect-article-3" className="collect-bookmark cursor card-icon-bg"><i className="bi bi-bookmark-fill fs-5"></i></label>
                          </form>
                        </div>
                        <div className="">
                          <div className="d-flex flex-column-reverse flex-lg-row justify-content-between">
                            <div className="mb-5">
                              <h4 className="mb-5"><a href="#" className="text-gray-80">妙用廣角定焦鏡頭,輕鬆隨拍大城小巷</a></h4>
                              <div className="d-flex">
                                <p className="tag-pill bg-gray-40 me-2">美感設計</p>
                                <p className="tag-pill bg-gray-40 me-2">城市</p>
                                <p className="tag-pill bg-gray-40">精選整理</p>
                              </div>
                            </div>
                            <p className="text-gray-60 py-5 py-lg-0">2022/10/20</p>
                          </div>
                          <p className="text-gray-60 ">提到街頭攝影，傳統上較多人選用焦距為35mm或50mm的定焦鏡頭，因為體積輕巧，且更接近令人更具有現場感...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-movie" role="tabpanel">...</div>
                  <div className="tab-pane fade" id="pills-work" role="tabpanel">...</div>
                  <div className="tab-pane fade" id="pills-fashion" role="tabpanel">...</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default Profile