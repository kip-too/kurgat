import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Kurgat
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1iIiTFAKQY22cn-xIH38sOZsBYWSRIAj4/view?usp=sharing" className="cta-btn">Résumé</a>
        </div>
    )
}

export default Navbar;