import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
            

<p>
Hey there! I'm Kurgat Kiptoo, a passionate and highly skilled Software Engineer based in Nairobi, Kenya. With a Bachelor of Science in Software Engineering from Multimedia University of Kenya and a strong foundation in Java, Spring Boot, Flutter, Laravel, JavaScript, React, and Android development, I thrive on tackling challenging projects and crafting innovative solutions.
</p>
<p>
My journey in software engineering has been driven by a deep-seated curiosity and a relentless pursuit of excellence. From spearheading the development of Java-based applications at Vsoft Limited to delving into cross-platform mobile app development with Flutter and Dart at Ceenet Technologies, I've honed my skills in creating scalable, efficient, and user-friendly software solutions.
</p>
I believe in the power of collaboration and continuous learning. Whether it's collaborating with cross-functional teams to deliver robust software solutions or actively participating in Agile development processes, I thrive in environments where teamwork and innovation are valued.
<p>
Outside of coding, you can find me exploring the latest technologies, participating in Hackathons and Coding Competitions.
</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;