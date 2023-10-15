/* eslint-disable react/no-unescaped-entities */
import { LinkedIn, Facebook, Instagram, GitHub } from '@mui/icons-material';

export default function Home(){
  return (
    <section id='home' className='home'>
        <div className="greeting">
          <span>HEY, I'M HAMED AMRAOUI</span>
          <p>A Full Stack Web developer focused on building simple and complexed web applications on demand</p>
          <input type="button" value="PROJECTS" />
        </div>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/hamed-amraoui">
            <LinkedIn sx={{color: '#000'}} fontSize='large' />
          </a>
          <a href="https://www.facebook.com/hamed.amraoui.2">
            <Facebook sx={{color: '#000'}} fontSize='large' />
          </a>
          <a href="https://github.com/Hamed-amraoui">
            <GitHub sx={{color: '#000'}} fontSize='large' />
          </a>
          <a href="https://www.instagram.com/hamed_amraoui">
            <Instagram sx={{color: '#000'}} fontSize='large' />
          </a>
        </div>
        <div className='mouseScroll'>
          <div className="mouse"></div>
        </div>
    </section>
  )  
}