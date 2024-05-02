import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { DiCode } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiNpm } from "react-icons/di";

const Navbar = () => {
  return (
    <div>
      <header>
        <div>
          <hr />
          <DiHtml5 />
          <FaCss3 />
          <DiJavascript1 />
          <FaReact />
          <SiTailwindcss />
          <FaFigma />
          <SiVite />
          <DiCode />
          <DiNodejsSmall />
          <DiNpm />
          <DiFirebase />
          <DiMongodb />
          <DiGit />
        </div>
        <h1 className='title'>Angel</h1>

        <ul>
          <li><a href="/">#home</a></li>
          <li><a href="/works">#works</a></li>
          <li><a href="/about">#about-me</a></li>
          <li><a href="/contact">#contact</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar