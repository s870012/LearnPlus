import courseXXI from "../assets/images/course-21.png";
import courseIX from "../assets/images/course-9.png";
import selfieI from "../assets/images/photo-1.png";
import selfieII from "../assets/images/photo-2.png";

function Course() {
  const lessons = [
    {
      lesson:'第1章',
      title:'零基礎如何拍出好照片'
    },
    {
      lesson:'第2章',
      title:'構圖&情境一次搞定'
    },
    {
      lesson:'第3章',
      title:'超熱門的攝影風格'
    },
    {
      lesson:'第4章',
      title:'後製與調色技巧'
    },
    {
      lesson:'第5章',
      title:'攝影打光，輕鬆學！'
    },
    {
      lesson:'第6章',
      title:'好色彩、好道具、營造好情境'
    },
    {
      lesson:'第7章',
      title:'邁向攝影達人之路'
    },
    {
      lesson:'第8章',
      title:'一般人常犯的攝影迷思'
    },
    {
      lesson:'第9章',
      title:'加贈補充單元'
    },
    {
      lesson:'第10章',
      title:'[募資達標]解鎖單元'
    },
    {
      lesson:'第11章',
      title:'零基礎如何拍出好照片(下集)簡介'
    },
  ]

  const cancelDefault = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className="bgdownImg">
        {/* 上方選單  */}
        <div className="container">
          <nav
            style={{ "--bs-breadcrumb-divider": "''" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb topNavigation">
              <li className="breadcrumb-item pt-3 pb-3 ps-2 pe-2 active">
                <a href="#">所有課程</a>
              </li>
              <li className="pt-3 pb-3 ps-2 pe-2 ">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </li>
              <li
                className="breadcrumb-item pt-3 pb-3 ps-2 pe-2"
                aria-current="page"
              >
                <a href="#">藝術與設計</a>
              </li>
              <li className="pt-3 pb-3 ps-2 pe-2 ">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </li>
              <li
                className="breadcrumb-item pt-3 pb-3 ps-2 pe-2"
                aria-current="page"
              >
                <a href="#" className="text-success">
                  零基礎的手機攝影術 瞬間拍出專業的風景照
                </a>
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <img src={courseXXI} className="d-block w-100 rounded-top-2 object-fit-cover" alt="..." style={{maxHeight:'450px'}} />
                <div className="card-body border border-2  border-dark rounded-bottom-2">
                  <div className="classinform d-flex flex-column flex-md-row justify-content-between align-items-center p-7">
                    <h5 className="card-title fs-5 fw-bold mb-4 mb-md-0 ">
                      零基礎手機攝影術，瞬間拍出專業的風景照
                    </h5>
                    <div className="d-flex">
                      <a
                        href="#"
                        className="btn btn-gray-40 rounded-pill me-5 py-2 px-3 text-nowrap"
                      >
                        藝術與設計
                      </a>
                      <a
                        href="#"
                        className="btn btn-purple rounded-pill py-2 px-3 text-nowrap"
                      >
                        錄製課程
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="col-circle">
                      <div className="circle-prograss">
                        <div className="card border-0">
                          <div className="card-body circle-inside d-flex flex-column">
                            <span className="text-secondary fw-bold">75%</span>
                            <h6 className="card-title">上課進度</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="col-circle">
                      <div className="circle-submit">
                        <div className="card border-0">
                          <div className="card-body circle-inside d-flex flex-column">
                            <span className="text-secondary fw-bold">0%</span>
                            <h6 className="card-title">繳交作業率</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="col-circle">
                      <div className="circle-score">
                        <div className="card border-0">
                          <div className="card-body circle-inside d-flex flex-column">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-secondary"
                            >
                              <mask
                                id="mask0_11348_4197"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="currentColor" />
                              </mask>
                              <g mask="url(#mask0_11348_4197)">
                                <path
                                  d="M7.625 6.4L10.425 2.775C10.625 2.50833 10.8625 2.3125 11.1375 2.1875C11.4125 2.0625 11.7 2 12 2C12.3 2 12.5875 2.0625 12.8625 2.1875C13.1375 2.3125 13.375 2.50833 13.575 2.775L16.375 6.4L20.625 7.825C21.0583 7.95833 21.4 8.20417 21.65 8.5625C21.9 8.92083 22.025 9.31667 22.025 9.75C22.025 9.95 21.9958 10.15 21.9375 10.35C21.8792 10.55 21.7833 10.7417 21.65 10.925L18.9 14.825L19 18.925C19.0167 19.5083 18.825 20 18.425 20.4C18.025 20.8 17.5583 21 17.025 21C16.9917 21 16.8083 20.975 16.475 20.925L12 19.675L7.525 20.925C7.44167 20.9583 7.35 20.9792 7.25 20.9875C7.15 20.9958 7.05833 21 6.975 21C6.44167 21 5.975 20.8 5.575 20.4C5.175 20 4.98333 19.5083 5 18.925L5.1 14.8L2.375 10.925C2.24167 10.7417 2.14583 10.55 2.0875 10.35C2.02917 10.15 2 9.95 2 9.75C2 9.33333 2.12083 8.94583 2.3625 8.5875C2.60417 8.22917 2.94167 7.975 3.375 7.825L7.625 6.4Z"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <h6 className="card-title">課程評分</h6>
                            <p className="circle-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="col-circle">
                      <div className="circle-certificate">
                        <div className="card border-0">
                          <div className="card-body circle-inside d-flex flex-column">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-secondary"
                            >
                              <mask
                                id="mask0_11219_4422"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="currentColor" />
                              </mask>
                              <g mask="url(#mask0_11219_4422)">
                                <path
                                  d="M9.52505 18L20.125 7.39999L18.7001 5.99999L9.50005 15.175L5.27505 10.925L3.85005 12.35L9.52505 18ZM9.52505 20.825L1.05005 12.35L5.27505 8.09999L9.52505 12.35L18.6751 3.17499L22.975 7.37499L9.52505 20.825Z"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <h6 className="card-title">完課證明</h6>
                            <p className="circle-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-around align-items-center rounded-top-2 bg-dark">
                <h5 className="mb-5 mt-5 text-white">課程單元</h5>
                <h6 className="text-success">課程已全部完成</h6>
              </div>
              <ul className="list-group rounded-top-0" style={{maxHeight:'700px', overflowY:'scroll'}}>
                {lessons.map((lesson, index) => {
                  return(
                    <li className="list-group-item p-5 hover" key={index}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="fs-7">{lesson.lesson}</p>
                          <a onClick={(e) => cancelDefault(e)} href="#" className="fs-5 mt-2 text-dark fw-bold stretched-link">{lesson.title}</a>
                        </div>
                        <div className="align-middle">
                          <span className="material-icons text-success">done_outline</span>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- 課程影片--> */}
      </section> 
      <section className="container">
        <div className="sectionDown">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item " role="presentation">
              <button
                className="nav-link fs-5"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                問題討論
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-5 active"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                課程簡介
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-5"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                課程評價
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- 問題討論...分頁內容 --> */}
            <div
              className="tab-pane border border-2 border-dark p-5 rounded-3"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="text-center">
                <div className="btn-group gap-2">
                  <button
                    className="btn btn-lg border border-2 rounded fw-bold dropdown-toggle border-indigo"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    全部單位
                  </button>
                  <button type="button" className="border-indigo rounded fs-5 text-black">
                    發表留言
                  </button>
                  <ul className="dropdown-menu text-center w-100">
                    <li>
                      <a onClick={(e) => cancelDefault(e)} href="#">第1章.第1單位</a>
                    </li>
                    <li>
                      <a onClick={(e) => cancelDefault(e)} href="#">第3章.第9單元</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5">
                <input
                  className="form-control py-2 w-50 mt-4 border border-1 border-indigo ms-5"
                  type="text"
                  placeholder="搜尋看看~您想問的問題"
                  aria-label="default input example"
                />
                <button type="button" className="border-0 mt-3 fw-normal fs-6">
                  日期排序
                </button>
              </div>
              <div className="card-body pt-1">
                <span>解決中</span>
                <h4 className="card-title text-indigo fw-bold mt-2 mb-2">
                  第1章,第2單元
                </h4>
                <p>拍攝的角度與姿勢</p>
                <div className="d-flex gap-2">
                  <p>孫學志</p>
                  <p>1個月</p>
                </div>
                <hr style={{ border: "1px solid black" }} />
              </div>
              <div className="card-body pt-1">
                <span>解決中</span>
                <h4 className="card-title text-indigo fw-bold mt-2 mb-2">
                  第3章,第9單元
                </h4>
                <p>焦距.柔光的選擇</p>
                <div className="d-flex gap-2">
                  <p>蔣學金</p>
                  <p>2個月</p>
                </div>
                <hr />
              </div>
              <div className="text-center">
                <button type="button" className="moreinform border border-1 text-white bg-indigo fs-5 fw-bold p-2">
                  載入更多討論
                </button>
              </div>
              <div
                className="message text-center position:relative"
                style={{ marginBottom: "-150px" }}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="80%"
                  viewBox="0 0 120 80"
                  enableBackground="new 0 0 0 0"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#000000"
                    opacity="0.000000"
                    stroke="none"
                    d="
      M19.000000,74.000000 
        C13.008744,74.000000 7.017488,74.000000 1.019674,74.000000 
        C1.013116,49.710876 1.013116,25.421747 1.013116,1.066309 
        C40.897408,1.066309 80.794952,1.066309 120.846252,1.066309 
        C120.846252,25.332623 120.846252,49.666183 120.846252,74.000000 
        C115.256210,74.000000 109.597816,74.000000 103.455673,73.631493 
        C101.647949,72.480019 100.323975,71.697060 99.000267,70.453705 
        C99.000412,56.022808 99.000282,42.052299 99.396072,28.045996 
        C100.849625,26.876844 101.907265,25.743492 102.964905,24.610138 
        C101.642212,23.740910 100.335892,22.147879 98.994217,22.117516 
        C88.708504,21.884733 78.415916,21.955839 68.054413,21.557846 
        C66.808884,15.758683 62.509346,17.196112 58.898968,16.983473 
        C55.309376,16.772055 54.589787,19.254768 53.503487,21.950127 
        C43.089069,21.988876 33.137520,21.881119 23.194979,22.131315 
        C21.784378,22.166811 20.417578,23.942883 19.030504,24.913347 
        C20.353645,25.969637 21.676788,27.025928 22.999691,28.545721 
        C22.950779,42.990162 22.902107,56.971104 22.492588,70.973236 
        C21.087826,71.996277 20.043911,72.998138 19.000000,74.000000 
      z"
                  />
                  <path
                    fill="#5AA071"
                    opacity="1.000000"
                    stroke="none"
                    d="
      M19.468657,74.000000 
        C20.043911,72.998138 21.087826,71.996277 22.674835,71.294167 
        C24.532515,71.388557 25.847097,71.183205 27.524673,71.165878 
        C32.986492,71.502335 38.085320,71.650749 43.639404,71.753891 
        C60.456264,71.698540 76.817970,71.713745 93.179321,71.644882 
        C95.120537,71.636711 97.059814,71.168861 98.999992,70.914093 
        C100.323975,71.697060 101.647949,72.480019 102.985962,73.631493 
        C75.312439,74.000000 47.624878,74.000000 19.468657,74.000000 
      z"
                  />
                  <path
                    fill="#FCF6E8"
                    opacity="1.000000"
                    stroke="none"
                    d="
      M99.000267,70.453705 
        C97.059814,71.168861 95.120537,71.636711 93.179321,71.644882 
        C76.817970,71.713745 60.456264,71.698540 43.590752,71.353546 
        C43.178001,68.501984 42.477356,66.866081 39.483616,66.967377 
        C35.382294,67.106133 31.272753,67.002060 27.161680,67.002060 
        C27.161680,68.668816 27.161680,69.823334 27.161680,70.977852 
        C25.847097,71.183205 24.532515,71.388557 23.035685,71.272980 
        C22.902107,56.971104 22.950779,42.990162 23.464340,28.472395 
        C30.557907,27.886318 37.186794,27.776245 43.815216,27.799461 
        C62.210300,27.863897 80.605194,27.983803 99.000160,28.081793 
        C99.000282,42.052299 99.000412,56.022808 99.000267,70.453705 
      z"
                  />
                  <path
                    fill="#5AA071"
                    opacity="1.000000"
                    stroke="none"
                    d="
      M99.396072,28.045996 
        C80.605194,27.983803 62.210300,27.863897 43.815216,27.799461 
        C37.186794,27.776245 30.557907,27.886318 23.464581,28.008892 
        C21.676788,27.025928 20.353645,25.969637 19.030504,24.913347 
        C20.417578,23.942883 21.784378,22.166811 23.194979,22.131315 
        C33.137520,21.881119 43.089069,21.988876 53.762611,22.141182 
        C59.033474,22.177526 63.579468,22.055029 68.125465,21.932531 
        C78.415916,21.955839 88.708504,21.884733 98.994217,22.117516 
        C100.335892,22.147879 101.642212,23.740910 102.964905,24.610138 
        C101.907265,25.743492 100.849625,26.876844 99.396072,28.045996 
      z"
                  />
                  <path
                    fill="#4A845B"
                    opacity="1.000000"
                    stroke="none"
                    d="
      M68.054413,21.557846 
        C63.579468,22.055029 59.033474,22.177526 54.228352,22.108971 
        C54.589787,19.254768 55.309376,16.772055 58.898968,16.983473 
        C62.509346,17.196112 66.808884,15.758683 68.054413,21.557846 
      z"
                  />
                  <path
                    fill="#444444"
                    opacity="1.000000"
                    stroke="none"
                    d="
      M27.524673,71.165878 
        C27.161680,69.823334 27.161680,68.668816 27.161680,67.002060 
        C31.272753,67.002060 35.382294,67.106133 39.483616,66.967377 
        C42.477356,66.866081 43.178001,68.501984 43.135487,71.398834 
        C38.085320,71.650749 32.986492,71.502335 27.524673,71.165878 
      z"
                  />
                </svg>
              </div>
              <div
                className="messagetitle position:relative"
                style={{
                  transform: "translate(0, -70px)",
                  textAlign: "center",
                }}
              >
                <p className="fs-4 fw-normal">參與互動討論.讓學習更生動</p>
                <button type="button" className="border border-1 text-white bg-indigo fs-5 fw-bold p-2 mt-lg-5 mt-5">
                  發表留言
                </button>
              </div>
            </div>
            {/* <!-- 課程簡介 --> */}
            <div
              className="tab-pane active border border-2 border-dark p-11 rounded-3"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="card-body">
                <h4 className="card-title text-primary-dark fw-bold border-2 border-bottom border-primary-dark pb-5">
                  課程單元
                </h4>
                <ul
                  className="d-flex justify-content-start py-9"
                  style={{ listStyleType: "none" }}
                >
                  <li
                    className="d-flex gap-5 me-7"
                    style={{ width: "231px" }}
                  >
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="48"
                        height="48"
                        rx="8"
                        fill="#F3E5D2"
                      />
                      <mask
                        id="mask0_11359_11579"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="12"
                        y="12"
                        width="24"
                        height="25"
                      >
                        <rect
                          x="12"
                          y="12.5"
                          width="24"
                          height="24"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_11359_11579)">
                        <path
                          d="M18 34.5C17.45 34.5 16.9792 34.3042 16.5875 33.9125C16.1958 33.5208 16 33.05 16 32.5V16.5C16 15.95 16.1958 15.4792 16.5875 15.0875C16.9792 14.6958 17.45 14.5 18 14.5H30C30.55 14.5 31.0208 14.6958 31.4125 15.0875C31.8042 15.4792 32 15.95 32 16.5V32.5C32 33.05 31.8042 33.5208 31.4125 33.9125C31.0208 34.3042 30.55 34.5 30 34.5H18ZM18 32.5H30V16.5H28V23.5L25.5 22L23 23.5V16.5H18V32.5Z"
                          fill="#1E1E1E"
                        />
                      </g>
                    </svg>
                    <div>
                      <span>課程時長</span>
                      <h6 className="mb-0 fw-bold pt-2 text-nowrap">
                        5小時5分鐘
                      </h6>
                    </div>
                  </li>
                  <li
                    className="d-flex gap-5 me-7"
                    style={{ width: "231px" }}
                  >
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="48"
                        height="48"
                        rx="8"
                        fill="#F3E5D2"
                      />
                      <mask
                        id="mask0_11359_11579"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="12"
                        y="12"
                        width="24"
                        height="25"
                      >
                        <rect
                          x="12"
                          y="12.5"
                          width="24"
                          height="24"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_11359_11579)">
                        <path
                          d="M18 34.5C17.45 34.5 16.9792 34.3042 16.5875 33.9125C16.1958 33.5208 16 33.05 16 32.5V16.5C16 15.95 16.1958 15.4792 16.5875 15.0875C16.9792 14.6958 17.45 14.5 18 14.5H30C30.55 14.5 31.0208 14.6958 31.4125 15.0875C31.8042 15.4792 32 15.95 32 16.5V32.5C32 33.05 31.8042 33.5208 31.4125 33.9125C31.0208 34.3042 30.55 34.5 30 34.5H18ZM18 32.5H30V16.5H28V23.5L25.5 22L23 23.5V16.5H18V32.5Z"
                          fill="#1E1E1E"
                        />
                      </g>
                    </svg>

                    <div>
                      <span>單元數</span>
                      <h6 className="mb-0 fw-bold pt-2 text-nowrap">
                        11章節30單元
                      </h6>
                    </div>
                  </li>
                  <li
                    className="d-flex gap-5 me-7"
                    style={{ width: "231px" }}
                  >
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="48"
                        height="48"
                        rx="8"
                        fill="#F3E5D2"
                      />
                      <mask
                        id="mask0_11359_11585"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="12"
                        y="12"
                        width="24"
                        height="25"
                      >
                        <rect
                          x="12"
                          y="12.5"
                          width="24"
                          height="24"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_11359_11585)">
                        <path
                          d="M24 24.5C22.9 24.5 21.9583 24.1083 21.175 23.325C20.3917 22.5417 20 21.6 20 20.5C20 19.4 20.3917 18.4583 21.175 17.675C21.9583 16.8917 22.9 16.5 24 16.5C25.1 16.5 26.0417 16.8917 26.825 17.675C27.6083 18.4583 28 19.4 28 20.5C28 21.6 27.6083 22.5417 26.825 23.325C26.0417 24.1083 25.1 24.5 24 24.5ZM16 32.5V29.7C16 29.1333 16.1458 28.6125 16.4375 28.1375C16.7292 27.6625 17.1167 27.3 17.6 27.05C18.6333 26.5333 19.6833 26.1458 20.75 25.8875C21.8167 25.6292 22.9 25.5 24 25.5C25.1 25.5 26.1833 25.6292 27.25 25.8875C28.3167 26.1458 29.3667 26.5333 30.4 27.05C30.8833 27.3 31.2708 27.6625 31.5625 28.1375C31.8542 28.6125 32 29.1333 32 29.7V32.5H16Z"
                          fill="#1E1E1E"
                        />
                      </g>
                    </svg>
                    <div>
                      <span>課程總人數</span>
                      <h6 className="mb-0 fw-bold pt-2 text-nowrap">
                        5000位同學
                      </h6>
                    </div>
                  </li>
                  <li className="d-flex gap-5" style={{ width: "231px" }}>
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="48"
                        height="48"
                        rx="8"
                        fill="#F3E5D2"
                      />
                      <mask
                        id="mask0_11359_11591"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="12"
                        y="12"
                        width="24"
                        height="25"
                      >
                        <rect
                          x="12"
                          y="12.5"
                          width="24"
                          height="24"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_11359_11591)">
                        <path
                          d="M18 27.5H25L27 25.5H18V27.5ZM18 23.5H24V21.5H18V23.5ZM16 19.5V29.5H23L21 31.5H14V17.5H34V20.5H32V19.5H16ZM34.9 24.8C34.9833 24.8833 35.025 24.975 35.025 25.075C35.025 25.175 34.9833 25.2667 34.9 25.35L34 26.25L32.25 24.5L33.15 23.6C33.2333 23.5167 33.325 23.475 33.425 23.475C33.525 23.475 33.6167 23.5167 33.7 23.6L34.9 24.8ZM25 33.5V31.75L31.65 25.1L33.4 26.85L26.75 33.5H25Z"
                          fill="#1E1E1E"
                        />
                      </g>
                    </svg>
                    <div>
                      <span>作業數</span>
                      <h6 className="mb-0 fw-bold pt-2 text-nowrap">
                        3份作業
                      </h6>
                    </div>
                  </li>
                </ul>
                <ul className="fs-6 ms-6">
                  <li>觀看沒有期限.完成課程有完課證明！</li>
                  <li className="pt-2">
                    直播課程有分組討論.請下載
                    <code className="fs-6 text-decoration-underline">
                      DC連結！
                    </code>
                  </li>
                </ul>
              </div>
              <div className="pt-11">
                <h4 className="card-title text-primary-dark fw-bold border-2 border-bottom border-primary-dark pb-5">
                  關於老師
                </h4>
                <div
                  className="aboutteacher d-flex justify-content-between pt-9 pb-7"
                  style={{ listStyleType: "none" }}
                >
                  <div className="d-flex gap-5">
                    <img src={selfieII} className="photomary-img" />
                    <div className="d-flex flex-column-reverse">
                      <span>ESTJ</span>
                      <h6 className="fw-bold">喬治與瑪莉 攝影工作室</h6>
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/" target="_blanket">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.78002 1.57422C5.39912 1.57422 4.07475 2.12264 3.09812 3.0989C2.12148 4.07516 1.57255 5.39932 1.57202 6.78022V20.6682C1.57202 22.0495 2.12072 23.3741 3.09741 24.3508C4.0741 25.3275 5.39877 25.8762 6.78002 25.8762H20.668C22.0489 25.8757 23.3731 25.3268 24.3493 24.3501C25.3256 23.3735 25.874 22.0491 25.874 20.6682V6.78022C25.8735 5.39967 25.3248 4.07581 24.3486 3.09961C23.3724 2.12341 22.0486 1.57475 20.668 1.57422H6.78002ZM22.166 6.78822C22.166 7.18604 22.008 7.56757 21.7267 7.84888C21.4454 8.13018 21.0638 8.28822 20.666 8.28822C20.2682 8.28822 19.8867 8.13018 19.6054 7.84888C19.3241 7.56757 19.166 7.18604 19.166 6.78822C19.166 6.39039 19.3241 6.00886 19.6054 5.72756C19.8867 5.44625 20.2682 5.28822 20.666 5.28822C21.0638 5.28822 21.4454 5.44625 21.7267 5.72756C22.008 6.00886 22.166 6.39039 22.166 6.78822ZM13.726 9.56422C12.6227 9.56422 11.5646 10.0025 10.7845 10.7827C10.0043 11.5628 9.56602 12.6209 9.56602 13.7242C9.56602 14.8275 10.0043 15.8856 10.7845 16.6658C11.5646 17.4459 12.6227 17.8842 13.726 17.8842C14.8293 17.8842 15.8874 17.4459 16.6676 16.6658C17.4477 15.8856 17.886 14.8275 17.886 13.7242C17.886 12.6209 17.4477 11.5628 16.6676 10.7827C15.8874 10.0025 14.8293 9.56422 13.726 9.56422ZM7.56402 13.7242C7.56402 12.0905 8.21302 10.5237 9.36824 9.36844C10.5235 8.21322 12.0903 7.56422 13.724 7.56422C15.3578 7.56422 16.9246 8.21322 18.0798 9.36844C19.235 10.5237 19.884 12.0905 19.884 13.7242C19.884 15.358 19.235 16.9248 18.0798 18.08C16.9246 19.2352 15.3578 19.8842 13.724 19.8842C12.0903 19.8842 10.5235 19.2352 9.36824 18.08C8.21302 16.9248 7.56402 15.358 7.56402 13.7242Z"
                          fill="#17AB7A"
                        />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blanket" className="ps-4 pe-1">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.8 0.400391H3.20002C1.66002 0.400391 0.400024 1.66039 0.400024 3.20039V22.8004C0.400024 24.3418 1.66002 25.6004 3.20002 25.6004H13V15.8004H10.2V12.3354H13V9.46539C13 6.43579 14.6968 4.30779 18.2724 4.30779L20.7966 4.31059V7.95759H19.1208C17.7292 7.95759 17.2 9.00199 17.2 9.97079V12.3368H20.7952L20 15.8004H17.2V25.6004H22.8C24.34 25.6004 25.6 24.3418 25.6 22.8004V3.20039C25.6 1.66039 24.34 0.400391 22.8 0.400391Z"
                          fill="#17AB7A"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="fs-6 fw-normal">
                  喬治與瑪莉攝影工作室,由 「喬治」 + 「瑪莉」
                  兩位專業攝影師組成。我們接觸攝影15年,有多年商業攝影經歷,並長期在IG、FB上連載《1分鐘攝影小教室》,廣受熱烈回應。我們擅長把枯燥的攝影知識,輕鬆有趣的課程！
                </p>
              </div>

              <div className="pt-11">
                <h4 className="text-primary-dark fw-bold border-2 border-bottom border-primary-dark pb-5">
                  可以學到
                </h4>
                <ol className="fs-6 fw-normal pt-9 ps-5">
                  <li className="pb-2">自己拍好美食&商品</li>
                  <li className="pb-2">
                    不花大錢,靠手機拍出實用照片用於社群.行銷.設計...
                  </li>
                  <li className="pb-2">
                    學到全面的攝影能力(打光/構圖/情境/調色)
                  </li>
                  <li>學會攝影大通則,未來都能用</li>
                </ol>
              </div>
            </div>
            {/* <!-- 課程評價 --> */}
            <div
              className="tab-pane border border-2 border-dark p-4 rounded-3"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="card-body mb-4">
                <div className="d-flex ms-5 gap-2">
                  <h2 className="fs-1">5.0</h2>
                  <div className="bigStar">
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between ps-0 mt-4 mb-6"
                  style={{ listStyleType: "none" }}
                >
                  <div className="mx-7">
                    <div className="text-center">
                      <img
                        src={courseIX}
                        className="border rounded-circle object-fit-cover"
                        style={{width:'120px', maxHeight:'120px'}}
                      />
                      <div className="d-flex flex-column mt-4">
                        <h6 className="fs-7 text-nowrap">攝影達人</h6>
                        <time>2023.11.24</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <p className="fs-5 fw-normal mt-3">
                      感謝老師簡單易懂的教學，內容超豐富價格也不貴，cp值超高還能反覆觀看，有什麼不買的理由。
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="card-body mb-4">
                <div className="d-flex ms-5 gap-2">
                  <h2 className="fs-1">5.0</h2>
                  <div className="bigStar">
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between ps-0 mt-4 mb-6">
                  <div className="mx-7">
                    <div className="text-center">
                      <img
                        src={selfieI}
                        className="rounded-circle object-fit-cover"
                        style={{ height: "50%" }}
                      />
                      <div className="d-flex flex-column mt-4">
                        <h6 className="fs-7 text-nowrap">蔣學金</h6>
                        <time>2024.7.24</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <p className="fs-5 fw-normal mt-3">
                      感謝老師簡單易懂的教學，內容超豐富價格也不貴，cp值超高還能反覆觀看，有什麼不買的理由。
                    </p>
                  </div>
                </div>
                <hr className="border border-dark" />
              </div>
              <div className="card-body mb-4">
                <div className="d-flex ms-5 gap-2">
                  <h2 className="fs-1">5.0</h2>
                  <div className="bigStar">
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between ps-0 mt-4 mb-6"
                  style={{ listStyleType: "none" }}
                >
                  <div className="mx-7">
                    <div className="text-center">
                      <img
                        src={selfieII}
                        className="rounded-circle object-fit-cover"
                        style={{ height: "50%" }}
                      />
                      <div className="d-flex flex-column mt-4">
                        <h6 className="fs-7 text-nowrap">龔愛鑾</h6>
                        <time>2024.1.24</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <i className="bi bi-star-fill text-warning fs-2"></i>
                    <p className="fs-5 fw-normal mt-3">
                      感謝老師簡單易懂的教學，內容超豐富價格也不貴，cp值超高還能反覆觀看，有什麼不買的理由。
                    </p>
                  </div>
                </div>
                <hr style={{ border: "1px solid black" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
