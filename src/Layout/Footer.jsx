import { BiCopyright } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="d-flex-between">
        <h4 className="d-flex align-items-center g-sm">
          Copyright By :
          <span>
            {<BiCopyright style={{ position: "relative", top: 2 }} />} Mahfuj
          </span>
        </h4>
        <ul className="social_link d-flex align-items-center flex-wrap-wrap g-lg">
          <li>
            <a
              href="https://www.facebook.com/mahfujali.noyon/"
              target="_blank"
              rel="noreferrer"
            >
              {<BsFacebook size={24} />}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mahfuj890"
              target="_blank"
              rel="noreferrer"
            >
              {<AiOutlineGithub size={24} />}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
