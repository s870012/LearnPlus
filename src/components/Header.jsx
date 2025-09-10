import { NavLink } from 'react-router'

import Logo from '../assets/images/Logo.png'
import signIn from '../assets/images/sign-in.png'
import singInDone from '../assets/images/sign-in-done.png'
import { useEffect, useState } from 'react'

function Header () {
    // Navbar 清單
    const navList = [
        {title:'學識伴++', value:'article', route:'/'},
        {title:'課程專區', value:'course', route:'/course'},
        {title:'我的課程', value:'profile', route:'/profile'},
        {title:'關於我們', value:'about', route:'/about'},
    ]
    const [currentPage, setCurrentPage] = useState(null)
    useEffect(() => {
        handleStatus()
    },[currentPage])

    const handleStatus = (item) => {
        setCurrentPage(item)
    }

    // 簽到
    const [isSignIn, setIsSignIn] = useState(false)
    const handleSignIn = (e) => {
        e.preventDefault()
        if (isLogin) {
            setIsSignIn(true)
        } else {
            alert('請先登入')
        }
    }

    // 登入
    const [isLogin, setIsLogin] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault()
        setIsLogin(true)
    }

    // 登出
    const logOut = () => {
        setIsLogin(false)
        setIsSignIn(false)
    }

    return (<>
    <nav className="navbar navbar-expand-xxxl nav-border nav-position bg-white rounded-bottom-3 py-0 nav-width zindex-1000">
        <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-between">
                <h1 className="mx-xxxl-auto pt-xxxl-11 pb-xxxl-6"><NavLink to="/" className="navbar-brand m-0"><img src={Logo} alt="logo" className="logo"/></NavLink></h1>
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
                    {navList.map((item, index) => {
                        return (
                            <NavLink key={index} to={item.route} className={`nav-item nav-link text-gray-60 ${currentPage === item.value ? 'active' : ''}`} onClick={() => handleStatus(item.value)}>{item.title}
                            </NavLink>
                        )
                    })}
                    <li><a href="#" onClick={(e) => handleSignIn(e)}><img src={`${isSignIn ? singInDone : signIn}`} alt="sign in" className="clockIN pt-2 pb-6"/></a></li>
                    {isLogin ?
                    (<div class="navbar-nav text-center fw-medium w-100">
                        <a onClick="event.preventDefault()" href="#" className="btn btn-primary text-nowrap rounded-0 radius-bottom-l border-end-dark btn-border-top nav-btn-hover nav-hover fw-medium w-100"><i className="bi bi-cart-fill"></i>購物車</a>
                        <div className="btn-group dropup">
                            <a onClick="event.preventDefault()" href="#" className="btn btn-primary dropdown-up text-nowrap rounded-0 radius-bottom-r btn-border-top nav-btn-hover fw-medium" data-bs-toggle="dropdown"><i className="bi bi-person-fill"></i>帳戶</a>
                            <ul className="dropdown-menu dropdown-menu-end me-3 mb-3 p-3 border-2px">
                                <li className="py-2 px-5"><a href="" className="text-gray-60 li-hover"><i className="bi bi-person-circle"></i> 個人資料</a></li>
                                <li className="py-2 px-5"><a href="" className="text-gray-60 li-hover"><i className="bi bi-star"></i> 積分紀錄</a></li>
                                <li className="py-2 px-5"><a href="" className="text-gray-60 li-hover"><i className="bi bi-bell"></i> 訊息通知</a></li>
                                <li className="py-2 px-5 border-bottom-black"><a href="" className="text-gray-60 li-hover"><i className="bi bi-gear"></i> 設定</a></li>
                                <li className="py-2 px-5 logOut"><a href="" className="text-gray-60 li-hover"><i className="bi bi-box-arrow-right" onClick={logOut}></i> 登出</a></li>
                            </ul>
                        </div>
                    </div>) :
                    (<li className="signIN d-flex align-items-center" onClick={(e) => handleLogin(e)}>
                        <a className="btn btn-primary nav-btn-hover btn-border-top rounded-0 rounded-bottom-3 w-100 fs-5 fw-medium" href="#">登入 / 註冊</a>
                    </li>)
                    }
                    
                </ul>
            </div>
        </div>
    </nav>
    </>)
}

export default Header