import React from "react";
import "./Footer.css";
import github from "../images/icons/github-icon.svg";
import linkedin from "../images/icons/linkedin-icon.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram-icon.svg";
import youtube from "../images/icons/youtube.svg";
import discord from "../images/icons/discord.svg";
import twitch from "../images/icons/twitch.svg";
import behance from "../images/icons/behance.svg";
import mail from "../images/icons/mail.svg";
import spotify from "../images/icons/spotify.svg";

function Footer() {
  return (
    <div className="social-bar">
      <div className="social-icons">
        <a
          href="https://github.com/Jay4Codes"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/jay-jain-a9bb12200/"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>

        <a
          href="https://twitter.com/Jay4Tweeting"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>

        <a
          href="https://www.instagram.com/jay4editz/"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCllx-wMNpve-uvUmidxyyaw"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>

        <a
          href="https://www.behance.net/jay4editz"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={behance} alt="behance" />
        </a>

        <a
          href="https://discord.gg/4W4Be2tbJc"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={discord} alt="discord" />
        </a>

        <a
          href="https://open.spotify.com/user/uylxje190c3iknkyukj6f9edm?si=81bcc1342077453a&nd=1"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={spotify} alt="spotify" />
        </a>

        <a
          href="https://www.twitch.tv/jay4twitching"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={twitch} alt="twitch" />
        </a>

        <a
          href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
          target="_blank"
          className="slider-nav-item"
          rel="noreferrer"
        >
          <img src={mail} alt="mail" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
