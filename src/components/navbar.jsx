import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Kurgat
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/159my4XIpTICkwziwqeWtXT7in0prU4I1/view?usp=sharing" className="cta-btn">Résumé</a>
        </div>
    )
}

export default Navbar;