import Logo from '../assets/images/Logo.png'
import singIn from '../assets/images/sign-in.png'

function Header () {
  return (<>
    <nav className="navbar navbar-expand-xxxl nav-border nav-position bg-white rounded-bottom-3 py-0 nav-width zindex-1000">
      <div className="d-flex flex-column w-100">
          <div className="d-flex justify-content-between">
              <h1 className="mx-xxxl-auto pt-xxxl-11 pb-xxxl-6"><a className="navbar-brand m-0" href="index.html"><img src={Logo} alt="logo" className="logo"/></a></h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav flex-xxxl-column text-center fw-medium w-100">
                  <li>
                      <form action="#" className="input-group w-100">
                          <label htmlFor="search" className="input-group-text pe-0 bg-white border-search border-start-0 rounded-0"><i className="bi bi-search text-gray-40"></i></label>
                          <input type="text" id="search" placeholder="搜尋" className="form-control border-input border-end-0 rounded-0 ps-2"/>
                      </form>
                  </li>
                  <li className="nav-item"><a className="nav-link active text-gray-60 pt-6"  href="#">精選文章</a></li>
                  <li className="nav-item"><a className="nav-link text-gray-60" href="mainCourse.html">課程專區</a></li>
                  <li className="nav-item"><a className="nav-link text-gray-60" href="#">我的課程</a></li>
                  <li className="nav-item"><a className="nav-link text-gray-60" href="aboutUs.html">關於我們</a></li>
                  <li><a href="#"><img src={singIn} alt="sign in" className="clockIN pt-2 pb-6"/></a></li>
                  <li className="signIN d-flex align-items-center">
                      <a className="btn btn-primary nav-btn-hover btn-border-top rounded-0 rounded-bottom-3 w-100 fs-5 fw-medium" href="#">登入 / 註冊</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  </>)
}

export default Header