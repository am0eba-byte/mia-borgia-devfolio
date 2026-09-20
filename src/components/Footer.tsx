import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/am0eba-byte" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mia-borgia" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.youtube.com/@mia-bo-bia" target="_blank" rel="noreferrer"><YouTubeIcon/></a>
      </div>
      <p>Check out my <a className="para-link" href="https://am0eba-byte.github.io/miabo-bia/index.html" target="_blank" rel="noreferrer">original portfolio site</a> from my college days, written in pure HTML & CSS!</p>
      <p>This portfolio was based upon a template designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;