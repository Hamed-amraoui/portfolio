import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";


const Footer = () => (
  <footer className="footer">
    <div className="footer-upper">
      <div className="footer-info">
        <h3>Hamed AMRAOUI</h3>
        <p>A Full Stack Web developer focused on building simple and complexed web applications on demand</p>
      </div>
      <div className="footer-social">
        <h3 className="footer-social-title">SOCIAL</h3>
        <div className="footer-social-items">
          <a href="https://www.linkedin.com/in/hamed-amraoui">
            <LinkedIn className="footer-social-item" />
          </a>
          <a href="https://www.facebook.com/hamed.amraoui.2">
            <Facebook className="footer-social-item" />
          </a>
          <a href="https://github.com/Hamed-amraoui">
            <GitHub className="footer-social-item" />
          </a>
          <a href="https://www.instagram.com/hamed_amraoui">
            <Instagram className="footer-social-item" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
    © Copyright 2023, Made by <span>Hamed Amraoui</span>
    </div>
  </footer>
)
export default Footer;