import { useEffect } from "react"
import { useNavigate } from "react-router"

function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    },3000)
  },[navigate])

  return(<>
    <section className="banner-bg">
      <div className="container d-flex jutify-content-center align-items-center">
        <div className="mx-auto d-flex flex-column align-items-center slogan-position">
          <h1 className="text-success position-relative slogan" data-stroke="404">404</h1>
          <h1 className="text-success position-relative slogan" data-stroke="Not Found">Not Found</h1>
        </div>
      </div>
    </section>
  </>)
}

export default NotFound