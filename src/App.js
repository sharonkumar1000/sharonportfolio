import './App.css';

function App() {
  return (
    <>
    <div id="header">
      <div class="container">
        <nav>
          <img class="logo" src="../public/logo.jpg" alt="no image to be published" />
          {/* <img src="../../public/logo.jpg" alt="" /> */}
          <ul id = "sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#certificates">Certifications</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
          </ul>
          <i class="fa-solid fa-bars" onclick="openmenu()"></i>
        </nav>

        <div class="header-text">
          <p>FULL STACK DEVELOPER</p>
          <h1>
            HI, I'm <span>Sharon</span><br />
            Kumar From India
          </h1>
        </div>
      </div>
    </div>

    <div id="about">
      <div class="container">
        <div class="row">
          <div class="about-col-1">
            <img src="/profile.jpg" alt="" />
          </div>
          <div class="about-col-2">
            <h1 class="sub-title">About me</h1>
            <p>
              I am a full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and a strong foundation in Data Structures and Algorithms (DSA). My skills extend to Django, enhancing my ability to build versatile applications. Additionally, I am proficient in Java for DSA, applying efficient problem-solving techniques.</p>
            <div class="tab-titles">
              <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
              {/* <p class="tab-links" onclick="opentab('education')" >Education</p> */}
            </div>
            <div class="tab-contents active-tab" id = "skills">
              <ul>
                <li><span>FullStack</span><br/> FrontEnd,Backend</li>
                <li><span>DSA</span><br/> Java</li>
              </ul>
            </div>
            <div class="tab-contents" id = "education">
              <ul>
                <li><span>2025</span><br/> SRKR Engineering College</li>
                <li><span>2020</span><br/> 
                  Jawahar Navodaya Vidyalaya
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div id="portfolio">
      <div class="container">
        <h1 class="sub-title">My Projects</h1>
        <div class="work-list">
          <div class="work">
            <img src="/img1.png" alt="not coming"/>
            <div class="layer">
              <h3>Ecommerce Website</h3>
              <p>Full-stack e-commerce site using MongoDB, Express.js, React.js, and Node.js. Implemented user
                authentication, dynamic cart management, and an admin panel for product management.
                </p>
              <a href="https://ecommercesk.netlify.app/"><i class="fa-duotone fa-solid fa-link"></i></a>
            </div>
          </div>
          <div class="work">
            <img src="/img2.png" alt="not coming"/>
            <div class="layer">
              <h3>Movie Rating</h3>
              <p>Implemented user-friendly features for rating, reviews, and dynamic content retrieval, showcasing proficiency
                in web development and cloud deployment.</p>
              <a href="https://skrating.netlify.app/"><i class="fa-duotone fa-solid fa-link"></i></a>
            </div>
          </div>
          <div class="work">
            <img src="/img3.png" alt=""/>
            <div class="layer">
              <h3>Spotify Clone</h3>
              <p> Implemented essential playback features including play, pause, forward, and volume control to enable seamless
                music listening experience.</p>
              <a href="https://skspotifyclone.freewebhostmost.com/"><i class="fa-duotone fa-solid fa-link"></i></a>
            </div>
          </div>
        </div>
        <a href="#" class="btn">See More</a>
      </div>
    </div>


     <div id="certificates">
      <div class="container">
        <h1 class = "sub-title">Certifications</h1>
        <div class="box1">
          <div class="boxleft">
            <h3><a href="https://drive.google.com/file/d/1S4rvGydwcQMe5ZfWCm0irbTwSPsuk8z3/view">Artificial Intelligence and Machine Learning  <i class="fa-solid fa-arrow-up-right-from-square"></i></a> </h3>
            <p>Developed skills in Python programming, data preprocessing, model evaluation, and deployment. Ready to tackle real-world challenges in AI and ML domains, contributing to innovative solutions and business growth.</p>
          </div>
          <div class="boxright">
            <img class="certimg" src="/AIML.png " alt=""/>
          </div>
        </div>
        <div class="box1">
          <div class="boxleft">
            <h3><a href="https://drive.google.com/file/d/1MjhNrwzI6OhBQ9g55_MyfZAhIYEK9Dai/view">DSA using Python<i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
            <p>Covered topics include arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching. Developed skills in problem-solving, algorithmic thinking, and code optimization. Ready to tackle complex programming challenges with confidence and efficiency.</p>
          </div>
          <div class="boxright">
            <img class="certimg" src="/DSA.png" alt=""/>
          </div>
        </div>
        <div class="box1">
          <div class="boxleft">
            <h3><a href="https://drive.google.com/file/d/1fJHSgGVEmMes7JmnjDChU5DUAsiW9aMP/view">Google Cloud<i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
            <p>Completed Google Cloud Career Readiness course, led by Erin Rifkin, Managing Director of Google Cloud Learning Services. Focused on Associate Cloud Engineer Track, mastering Google Cloud Platform essentials, including computing, storage, networking, and security</p>
          </div>
          <div class="boxright">
            <img class="certimg" src="/GCLOUD.png" alt=""/>
          </div>
        </div>
        <div class="box1">
          <div class="boxleft">
            <h3><a href="https://drive.google.com/file/d/16IYbC9vJNFjOQ6oVeAA6SZAqAV7RZt1p/view">CCNA<i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
            <p>Acquired skills in configuring routers and switches, troubleshooting network issues, and understanding network security principles. Ready to apply knowledge to design, implement, and maintain robust network infrastructures.</p>
          </div>
          <div class="boxright">
            <img class ="certimg" src="/CCNA.png" alt=""/>
          </div>
        </div>
      </div>
     </div>

     <div id="contact">
      <div class="container">
        <div class="row">
          <div class="contact-left">
            <h1 class="sub-title">Contact Me</h1>
            <p><i class="fa-solid fa-paper-plane"></i>sharonkumar1000@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i>6301586051</p>
            <div class="social-icons">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="/Resume.pdf" download class="btn btn2">Download CV</a>
          </div>
          <div class="contact-right">
            <form>
              <input type="text" name = "name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows = "6" placeholder="Your Message"></textarea>
              <button type="submit" class="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>copyright &copy; sharon </p>
      </div>
     </div>
  </>
  );
}

export default App;
