import profile from "../images/me.jpg";

function SocialLinks() {
  return (
    <>
      <div className="container">
        <div className="social-info">
          <img src={profile} alt="profile photo" />
          <h2>jessica randall</h2>
          <h3>london, united kingdom</h3>
        </div>
        <div className="contact">
          <q>font-end developer and avid reader</q>
          <ul className="links">
            <li>
              <a href="https://github.com/ahmeteid" target="_blank">
                github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-aslan-b1869622a/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.frontendmentor.io/profile/ahmeteid"
                target="_blank"
              >
                front-end mentor
              </a>
            </li>
            <li>
              <a href="mailto:ahmeteid355@gmail.com" target="_blank">
                email
              </a>
            </li>
            <li>
              <a href="tel:+905550678060" target="_blank">
                phone number
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SocialLinks;
