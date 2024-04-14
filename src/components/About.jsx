import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Hi, I'm Kurgat Kiptoo, a Software Engineer based in Nairobi, Kenya. I specialize in Java, Spring Boot, Flutter, Laravel, JavaScript, React, and Android development. I thrive on challenging projects and love crafting innovative solutions.
                    </p>
                    <p>
                        My experience includes developing Java-based applications at Vsoft Limited and exploring cross-platform mobile app development with Flutter and Dart at Ceenet Technologies. I'm passionate about collaboration, continuous learning, and staying updated with the latest technologies.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>
    );
}

export default About;
