import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Kurgat
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1-f4nbN8HgE7L-Uz30-kb1qNmWOE6FCEJ/view?usp=sharing" className="cta-btn">Résumé</a>
        </div>
    )
}

export default Navbar;