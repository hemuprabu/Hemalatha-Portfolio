import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {

        const handleEmailClick = (event) => {
          event.preventDefault();
          const email = 'hemalathaprakasam219@gmail.com';
          const subject = 'Hello Hemalatha';
          const body = 'I would like to discuss...';
          const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoLink;
        };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a className={styles.contactBtn} href='mailto:hemalathaprakasam219@gmail.com'>hemalathaprakasam219@gmail.com</a>


        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hemalatha-prakasam-42040377/">linkedin.com/hemalatha-prakasam</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/hemuprabu">github.com/hemuprabu</a>
        </li>
      </ul>
    </footer>
  );
};