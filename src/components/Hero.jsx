import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile1.jpg' className="profile-img" width={300} height={300} alt="Kurgat's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Kurgat 👋</h1>
                <p>
     I'm a passionate Software Engineer with a knack for crafting innovative solutions.
     With a strong background in Java, Spring Boot, Flutter, Laravel, JavaScript, React, 
     and Android development, I thrive on tackling challenges and delivering high-quality software. 
     Let's connect and create something amazing together!
               </p>

                <div className="social-icons">
                    <a
                        href="https://twitter.com/Kkurgat_Kiptoo"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/kip-too"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kurgat-kiptoo/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;