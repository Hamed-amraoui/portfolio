export default function Navbar() {
  return (
    <nav>
      <div className="profile">
        <div className="profilePhotoContainer">
          <img className="profilePhoto" src="./profile.png" alt="HamedAMRAOUI" />
        </div>
        <span>Hamed AMRAOUI</span>
      </div>
      <div className='menu'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}