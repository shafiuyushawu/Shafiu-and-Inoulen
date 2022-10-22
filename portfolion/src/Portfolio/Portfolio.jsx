import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>

  <header id="about">
    <nav id="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div id="welcome-section" class="container">
      <h1 id="title">Hey, this Shafiu and Inoulen</h1>
      <p class="lead"><em>we are full-stack web developer</em></p>
    </div>
  </header>

  
  <section id="projects">
    <div class="project-tile">
      <h1 id="caption">"These are some of my projects"</h1><br />
      <div id="bottom-line"></div>
      <div class="projects">
        <div class="box">
          <a target="_blank" href="#">
            <img src={require('../img/bg.jpg')} alt="project-img" class="project-img" />
            <p>
              <span class="code">&lt;</span>
              Tribute Page
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>

        <div class="box">
          <a target="_blank" href="#" alt="project-img" class="project-img">
            <img src={require('../img/bg.jpg')} alt="project-img" class="project-img"/>
            <p>
              <span class="code">&lt;</span>
              Personal Portfolio
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>

        <div class="box">
          <a target="_blank" href="#">
            <img src={require('../img/bg.jpg')} alt="project-img" class="project-img" />
            <p>
              <span class="code">&lt;</span>
              Documentation Page
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>

        <div target="_blank" class="box">
          <a href="#">
            <img src={require('../img/bg.jpg')} alt="project-img" class="project-img" />
            <p>
              <span class="code">&lt;</span>
              Landing Page
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>

        <div target="_blank" class="box">
          <a href="#">
            <img src={require('../img/bg.jpg')} alt="project-img" class="project-img" />
            <p>
              <span class="code">&lt;</span>
              Personal Site
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>

        <div target="_blank" class="box">
          <a href="#">
            <img src={require('../img/bg.jpg')} alt="project-img" class="project-img" />
            <p>
              <span class="code">&lt;</span>
              Survey Form
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>
      </div>
      <a href="#" class="btn">Show More</a>
    </div>
  </section>

  
  <section id="contact">
    <div class="container">
      <h1>Let's work together...</h1>
      <p>Need help with your project? Just ask!</p>
      <div class="social">
        <div>
          <a target="_blank" href="#">
            <i class="fab fa-facebook fa-1x"></i>
            Facebook
          </a>
          <a id="profile-link" target="_blank" href="#">
            <i class="fab fa-github fa-1x"></i>
            Github
          </a>
          <a target="_blank" href="#">
            <i class="fab fa-twitter fa-1x"></i>
            Twitter
          </a>
          <a href="#">
            <i class="fas fa-envelope-open-text fa-1x"></i>
            Mail
          </a>
          <a href="#">
            <i class="fas fa-phone fa-1x"></i>
            Call Me
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer id="main-footer">
    <div class="container">
      <p>&copy; Copyright Free</p>
      <p id="creator">This site recreated by <a href="#">FreeCodeCamp-Solutions</a></p>
    </div>
  </footer>
    </div>
  )
}

export default Portfolio