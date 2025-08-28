
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid';

import logoText from '../assets/images/Logo-text.png'
import teacherI from '../assets/images/teacher-1.png'
import teacherII from '../assets/images/teacher-2.png'
import teacherIII from '../assets/images/teacher-3.png'
import teacherIV from '../assets/images/teacher-4.png'
import teacherV from '../assets/images/teacher-5.png'

import courseI from '../assets/images/course-1.png'
import courseII from '../assets/images/course-2.png'
import courseIII from '../assets/images/course-3.png'
import courseIV from '../assets/images/course-4.png'
import courseV from '../assets/images/course-5.png'
import courseVI from '../assets/images/course-6.png'

import discount from '../assets/images/discount-88.png'
import mbtiImage from '../assets/images/mbti-image.png'
import mbtiImageSm from '../assets/images/mbti-image-sm.png'
import faq from '../assets/images/FAQ.png'
import star from '../assets/images/kid_star.png'

function Home() {
  const teachers = [
    {
      id:'t001',
      name:'洪琦雯',
      title:'視覺設計總監',
      course:'創意視覺傳達',
      mbti:'INFP',
      image: teacherI
    },
    {
      id:'t002',
      name:'陳靜儀',
      title:'銷售分析師',
      course:'數位行銷策略',
      mbti:'ESFP',
      image: teacherII
    },
    {
      id:'t003',
      name:'洪琦雯',
      title:'視覺設計總監',
      course:'人力資源管理',
      mbti:'ESTJ',
      image: teacherIII
    },
    {
      id:'t004',
      name:'陳靜儀',
      title:'銷售分析師',
      course:'數位行銷策略',
      mbti:'INTJ',
      image: teacherIV
    },
    {
      id:'t005',
      name:'洪琦雯',
      title:'視覺設計總監',
      course:'創意視覺傳達',
      mbti:'ENFP',
      image: teacherV
    },
  ]

  const courses = [
    {
      id:'c001',
      course:'時間管理技巧',
      teacher:'高宇琛',
      price:899,
      mbti:'ESTP',
      tips:['語言與文學', '直播課程'],
      viewer:858,
      star:4.9,
      image:courseI,
      discount:discount
    },
    {
      id:'c002',
      course:'陶瓷藝術入門',
      teacher:'高宇琛',
      price:899,
      mbti:'ESTP',
      tips:['陶瓷藝術入門', '精品文章'],
      viewer:858,
      star:4.9,
      image:courseII,
      discount:discount
    },
    {
      id:'c003',
      course:'韓語口語實踐',
      teacher:'高宇琛',
      price:899,
      mbti:'ESTP',
      tips:['語言與文學', '錄製課程'],
      viewer:858,
      star:4.9,
      image:courseIII,
      discount:discount
    },
    {
      id:'c004',
      course:'數位行銷策略',
      teacher:'高宇琛',
      price:899,
      mbti:'ESTP',
      tips:['語言與文學', '課程組合'],
      viewer:858,
      star:4.9,
      image:courseIV,
      discount:discount
    },
    {
      id:'c005',
      course:'創意視覺故事',
      teacher:'高宇琛',
      price:899,
      mbti:'ESTP',
      tips:['語言與文學', '數位行銷策略'],
      viewer:858,
      star:4.9,
      image:courseV,
      discount:discount
    },
    {
      id:'c006',
      course:'全球化的利與弊',
      teacher:'高宇琛',
      price:899,
      mbti:'ESTP',
      tips:['語言與文學', '直播課程'],
      viewer:858,
      star:4.9,
      image:courseVI,
      discount:discount
    },
  ]

  return(<>
    {/* banner */}
    <section className="banner-bg">
      <div className="container d-flex jutify-content-center align-items-center">
        <div className="mx-auto d-flex flex-column align-items-center slogan-position">
          <h1 className="text-success position-relative slogan me-128 mb-2" data-stroke="共學共成">共學共成</h1>
          <h1 className="text-success position-relative slogan ms-96" data-stroke="知識無界">知識無界</h1>
          <h4 className="mt-4 ms-sm-auto fs-20-24">團隊的力量，是學習的捷徑！</h4>
        </div>
      </div>
    </section>
    {/* introduce */}
    <section>
    <div className="container">
      <div className="py-9 py-lg-15">
        <div className="row ">
          <div className="col-lg-10 mx-auto">
            <div className="row flex-column flex-lg-row">
              <div className="col-lg-7">
                <div className="d-flex flex-column h-100">
                  <div className="my-auto">
                    <h3 className="mb-2 mb-lg-5 fs-lg-1">學識伴</h3>
                    <a href="#index.html"><img src={logoText} alt="logo-text" className="d-block mb-5 mb-lg-7 plus" /></a>
                    <p className="fs-lg-3 mb-5">本平台支持不同MBTI人群共同線上學習，促進多樣性交流，增強合作效能，並提供個性化的學習體驗以滿足不同需求。</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="circle-box mx-auto position-relative">
                  <div className="circle-out circle-position-1 position-absolute bg-white">
                    <div className="circle-ins d-flex flex-column align-items-center">
                      <div className="my-auto">
                        <p className="text-center "><span className="material-icons text-primary-dark fs-1">done_outline</span></p>
                        <h4>深入學習</h4>
                      </div>
                    </div>
                  </div>
                  <div className="circle-out circle-position-2 position-absolute bg-white">
                    <div className="circle-ins d-flex flex-column align-items-center">
                      <div className="my-auto">
                        <p className="text-center "><i className="material-icons text-primary-dark fs-1">done_outline</i></p>
                        <h4>個性化教學</h4>
                      </div>
                    </div>
                  </div>
                  <div className="circle-out circle-position-3 position-absolute bg-white">
                    <div className="circle-ins d-flex flex-column align-items-center">
                      <div className="my-auto">
                        <p className="text-center "><span className="material-icons text-primary-dark fs-1">done_outline</span></p>
                        <h4>合作互助</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* teacher */}
    <section>
      <div className="container container-fuild">
        <div className="row">
          <div className="col-md-10 mx-sm-auto">
            <div className="mac-border">
              <div className="d-flex justify-content-between align-items-center mac-header-bg ps-5">
                <div className="d-flex align-items-center py-7">
                  <div className="d-flex me-5 me-md-12">
                    <p className="mac-sign bg-danger me-2 me-md-5"></p>
                    <p className="mac-sign bg-warning me-2 me-md-5"></p>
                    <p className="mac-sign bg-success"></p>
                  </div>
                  <h5 className="fs-md-4">名師課程</h5>
                </div>
                <div className="d-none d-md-block">
                  <span className="swiper-prev swiper-btn"><i className="bi bi-arrow-left-short arrow-left align-middle fs-2"></i></span>
                  <span className="swiper-next swiper-btn"><i className="bi bi-arrow-right-short arrow-right align-middle fs-2"></i></span>
                </div>
              </div>
              <Swiper
                className="py-7 p-md-6"
                slidesPerView={3}
                spaceBetween={24}
                breakpoints={{
                  375:{
                    slidesPerView:1
                  },
                  576:{
                    slidesPerView:3
                  },
                }}
              >
                {teachers.map((teacher) => {
                  return(
                    <SwiperSlide className="teacher-box" key={teacher.id}>
                      <div>
                        <div className="position-relative mb-5">
                          <h4 className="position-absolute text-success rotate mbti-type mbti-p">{teacher.mbti}</h4>
                          <img src={teacher.image} alt="teacher-1" className="teacher-image" />
                        </div>
                        <div className="d-flex flex-column jutify-content-center px-5">
                          <h5 className="text-center mb-2">{teacher.name}</h5>
                          <p className="text-center mb-5">{teacher.title}</p>
                          <a href="#" className="btn btn-outline-primary-dark border-2 text-nowrap">{teacher.course} <i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  course */}
    <section>
      <div className="container">
        <div className="row pt-9">
          <div className="col-md-10 mx-md-auto">
            <div className="course-radius course-head-bg">
              <div className="position-relative py-5 py-md-8">
                <h3 className="text-center">為您推薦</h3>
                <i className="bi bi-arrow-right-short position-absolute top-0 end-0 fs-2 text-gray-80 px-2 px-md-6 py-md-3 swiper-next-btn swiper-btn swiper-radius opacity-75 d-block"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-bg course-radius-all">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-md-auto">
              <Swiper
                className="py-9 px-5"
                modules={Grid}
                slidesPerView={3}
                grid={{
                  rows: 1,
                }}
                spaceBetween={24}
                breakpoints={{
                  375:{
                    slidesPerView:1
                  },
                  576:{
                    slidesPerView:2
                  },
                  768:{
                    slidesPerView:3,
                    grid:{
                      rows:2,
                      fill:'row'
                    }
                  }
                }}
              >
                {courses.map((course) => {
                  return(
                    <SwiperSlide className="teacher-box mb-5" key={course.id}>
                      <div className="card card-width border-0 position-relative radius-32">
                        <img src={course.discount} alt="Discount-88" className="dis-position dis-width"/>
                        <div className="card-header border-0 position-relative bg-white pt-7 px-7 radius-32">
                          <img src={course.image} alt="course-1" className="card-img"/>
                          <form action="#" className="card-icon-position">
                            <input type="checkbox" id="collect" className="collect-ctrl d-none"/>
                            <label htmlFor="collect" className="collect-bookmark cursor card-icon-bg me-2"><i className="bi bi-bookmark fs-5"></i></label>
                            <label htmlFor="collect" className="collect-bookmark-fill cursor card-icon-bg me-2"><i className="bi bi-bookmark-fill fs-5"></i></label>
                            <label htmlFor="cart" className="card-icon-bg"><i className="bi bi-cart fs-5"></i></label>
                          </form>
                        </div>
                        <div className="card-body border-0 border-bottom-black px-0 mx-7">
                          <div className="d-flex">
                            <p className="tag-pill bg-gray-40 me-2 text-nowrap">{course.tips[0]}</p>
                            <p className="tag-pill tag-03 text-nowrap">{course.tips[1]}</p>
                          </div>
                          <h4 className="mb-2 mt-5"><a href="#" className="text-gray-80 stretched-link">{course.course}</a></h4>
                          <div className="d-flex">
                            <p className="me-4">講師－{course.teacher}</p>
                            <p className="text-primary">{course.mbti}</p>
                          </div>
                        </div>
                        <div className="card-footer border-0 bg-white px-7 pt-5 pb-7 radius-32">
                          <div className="d-flex justify-content-between">
                            <h4>NT {course.price}</h4>
                            <div className="d-flex justify-content-between align-items-center">
                              <img src={star} alt="star"/>
                              <p className="text-nowrap text-success">{course.star} ({course.viewer})</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>     
            </div>
          </div>
        </div>
      </div>  
    </section>
    {/* mbtitest */}
    <section>
      <div className="py-11 py-lg-15">
        <div className="container">
          <div className="pt-9">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="d-flex flex-column align-items-center mb-5 mb-lg-11">
                  <h1 className="mb-5 mb-lg-7">MBTI測驗</h1>
                  <p className="text-center mb-5 mb-lg-7">通過區分色彩化的性格類型，幫助人們了解自身優勢，改善溝通合作，規劃職業方向，促進個人學習和團隊發展。</p>
                  <h5 className="btn btn-primary border-2 border-black">前往測驗 <i className="bi bi-arrow-right"></i></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <picture>
          <source srcSet={mbtiImage} media="(min-width:768px)"/>
          <img src={mbtiImageSm} alt="mbti-image-sm" className="mbti-image" />
        </picture>
      </div>
    </section>
    {/* Q & A */}
    <section className="position-relative">
      <div className="qa-bg pt-13 pb-9 py-md-15">
        <div className="form-border form-bg position-relative mx-auto">
          <form action="#" className="input-group position-absolute form-width start-50 translate-middle">
            <label htmlFor="search" className="input-group-text pe-0 bg-white border-search radius-24"><i className="bi bi-search text-gray-40"></i></label>
            <input type="text" id="search" placeholder="搜尋" className="form-control border-input radius-24 ps-2 ps-md-5"/>
          </form>
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="accordion accordion-h overflow-auto mt-11 mt-md-15" id="accordionExample">
                  <div className="accordion-item mb-5 mb-md-9 radius-32">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-medium radius-32 fs-md-5 py-md-8 px-md-11" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        如何報告技術問題或故障
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show radius-32" data-bs-parent="#accordionExample">
                      <div className="accordion-body px-lg-11 pt-0 pb-lg-7">
                        <p className="fs-7 fs-md-6">如果您在使用我們的產品時遇到任何技術問題或故障，請按照以下步驟報告：</p>
                        <ol className="fs-7 fs-md-6 ps-5">
                          <li>描述問題： 簡單清楚地描述您遇到的問題，包括具體情況和影響。</li>
                          <li>提供信息： 請告知我們問題發生的時間、您所使用的設備、操作系統版本，以及瀏覽器或應用程式的版本。</li>
                          <li>重現步驟： 列出問題發生前的操作步驟，以便我們能夠重現並解決該問題。</li>
                          <li>聯繫方式： 請提供您的聯繫方式，以便我們能夠在需要更多信息時與您取得聯繫。</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-5 mb-md-9 radius-32">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed fw-medium radius-32 fs-md-5 py-md-8 px-md-11" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        如何參與平台的社群活動或討論?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse radius-32" data-bs-parent="#accordionExample">
                      <div className="accordion-body px-lg-11 pt-0 pb-lg-7">
                        <p>我們有平台專屬的Discord群組，當您購買課程後我們將會邀請您進入群組，或是您可直接於課程頁面中的"問題討論"提出問題。</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-5 mb-md-9 radius-32">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed fw-medium radius-32 fs-md-5 py-md-8 px-md-11" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" >
                        如何申請成為平台的合作夥伴或供應商?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse radius-32" data-bs-parent="#accordionExample">
                      <div className="accordion-body px-lg-11 pt-0 pb-lg-7">
                        <p>如果您對我們平台有興趣，想成為平台的一份子，歡迎透過Email或是直接點選網頁下方"我想成為講師"與我們聯繫。</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-5 mb-md-9 radius-32">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed fw-medium radius-32 fs-md-5 py-md-8 px-md-11" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" >
                        如何報告技術問題或故障?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse radius-32" data-bs-parent="#accordionExample">
                      <div className="accordion-body px-lg-11 pt-0 pb-lg-7">
                        <p>當您發現網頁出現不可預期的錯誤，歡迎透過下方Email或是"意見回饋"等方式通知我們，我們將盡速改善，如此期間造成您的不便，敬請見諒。</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item radius-32">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed fw-medium radius-32 fs-md-5 py-md-8 px-md-11" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" >
                        如何報告技術問題或故障?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse radius-32" data-bs-parent="#accordionExample">
                      <div className="accordion-body px-lg-11 pt-0 pb-lg-7">
                        <p>當您發現網頁出現不可預期的錯誤，歡迎透過下方Email或是"意見回饋"等方式通知我們，我們將盡速改善，如此期間造成您的不便，敬請見諒。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={faq} alt="FAQ" className="d-none d-xxl-block faq-position"/>
    </section>
  </>)
}

export default Home