export default function Header(props) {
  return (
    <div className="rss-header">
      <a href="/" className="rss-app-name-link">
        <img src="https://joancarballo.com/images/joan-carballo-cabanes.png" alt="Joan Carballo" height="20" className="rss-logo"></img>
        <span className="rss-app-name">Carballo's RSS Reader</span>
      </a>
      <div className="rss-header-profile-links">
        <ul>
          <li>
            <a href="https://joancarballo.com/">
              <img src={require("../../assets/cv.png")} alt="Joan Carballo's Online Curriculum" height="20" className="rss-cv"></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carballo/">
              <img src={require("../../assets/linkedin.png")} alt="Joan Carballo's Linkedin" height="20" className="rss-cv"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/joancarballo">
              <img src={require("../../assets/github.png")} alt="Joan Carballo's Github" height="20" className="rss-cv"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
