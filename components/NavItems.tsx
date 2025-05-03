import { Link } from "react-router"

const NavItems = () => {
  return (
    <section className="nav-items">
        <Link to="/" className="link-logo">
            <img src="/assets/icons/logo.svg" alt="logo" className="size-[30-x]" />
            <h1>Fly Woldreamz</h1>
        </Link>
    </section>
  )
}

export default NavItems