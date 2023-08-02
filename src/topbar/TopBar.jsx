import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><a href="/">HOME</a></li>
                <li className="topListItem"><a href="/">ABOUT</a></li>
                <li className="topListItem"><a href="/">CONTACT</a></li>
                <li className="topListItem"><a href="/">WRITE</a></li>
                <li className="topListItem"><a href="/">LOGOUT</a></li>
            </ul>
        </div>
        <div className="topRight">
            <img src="" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
