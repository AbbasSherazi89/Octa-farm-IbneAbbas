import {React} from "react";
import {Link} from "react-router-dom"
const Header = () => {

  // const [navbar, setnavbar] = useState(false);
  
  // const changeBg=()=>
  // {
  //   if(window.scrollY>=90)
  //   {setnavbar(true);}
  //   else{
  //     setnavbar(false);
  //   }
  // }
  // window.addEventListener('scroll', changeBg);

  return (
    <>
    {/* <div className={navbar ? 'nav-color' : 'nav-trans'}> */}
      <nav className='navbar navbar-expand-lg bg-dark  py-4'>
        <div className="container">
          <Link to="/">
            <div>
              <img
                className="quant"
                src="assets/octa-logo.png"
                alt=" Logo "
                width={150}
              />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold ">
              <li className="nav-item position-relative">
                <Link className="nav-link" aria-current="page" to="/">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#litepaper">
                  Litepaper
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#platform">
                  Platform
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://porkswap.finance/reports/audit-by-solid-group.pdf">
                  Audit Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    {/* </div> */}
    </>
  );
};

export default Header;
