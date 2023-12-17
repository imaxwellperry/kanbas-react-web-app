import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://kit.fontawesome.com/0bf0bb8855.js';
import styles from '../index.css';

import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
  <div>
    <body>
        <div className={styles.wd-flex-pg-container}>
            <div class="wd-flex-col-nav-bar">
                <div class="wd-flex-nav-box">
                    <i class = "fas fa-n wd-neu-symbol"></i>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="../account.html" id="id-nav">
                        <div><i class="far fa-user wd-account-symbol"></i>
                        </div>
                    Account</a>
                </div>
                <div class="wd-flex-nav-box-active">
                    <a href="./index.html" id="id-nav-active">
                        <i class="fas fa-gauge wd-nav-symbol"></i>
                        <div>Dashboard</div>
                    </a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="../courses.html" id="id-nav">
                        <i class="fas fa-book wd-nav-symbol"></i>
                        <div>Courses</div>
                    </a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="#" id="id-nav">
                        <div><i class="fas      fa-calendar-days wd-nav-symbol"></i>
                        </div>
                    Calendar</a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="#" id="id-nav"><div><i class="fas fa-envelope-open-text wd-nav-symbol"></i></div>
                    Inbox</a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="#" id="id-nav"><div><i class="far fa-clock wd-nav-symbol"></i></div>
                    History</a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="#" id="id-nav"><div><i class="fas fa-network-wired wd-nav-symbol"></i></div>
                    Studio</a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="#" id="id-nav"><div><i class="fas fa-arrow-right-from-bracket wd-nav-symbol"></i></div>
                    Commons</a>
                </div>
                <div class="wd-flex-nav-box">
                    <a href="#" id="id-nav"><div><i class="far fa-circle-question wd-nav-symbol"></i></div>
                    Help</a>
                </div>
            </div>
            <div class="dash-pg-container">
                <div>
                    <h1 class="dash-title"> Dashboard </h1>
                </div>
                <div>
                    <hr class="dash-line"/>
                </div>
                <div class="dash-courses-container">
                    <div>
                        <h4 class="dash-courses-title">Published Courses</h4>
                    </div>
                    <div>
                        <hr class="dash-line"/>
                    </div>
                    <div class="d-flex flex-row flex-wrap">
                        <div class="card dash-course-card" >
                                <a href="../Courses/home.html" class="course-link">
                                <img src={require('./cardImages/1920x1200-antique-brass-solid-color-background.jpg')} class="card-img-top" alt="idk" style={{width: "325px", height:"120px"}}/>
                                <div class="card-body text-truncate">
                                    <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                    <h5 class="card-title">CS5610.17367.202410</h5>
                                    <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                                </div>
                                </a>
                        </div>
                        <div class="card dash-course-card" >
                            <a href="../Courses/home.html" class="course-link">
                            <img src="./cardImages/1920x1200-antique-bronze-solid-color-background.jpg" class="card-img-top"/>
                            <div class="card-body text-truncate">
                                <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                <h5 class="card-title">CS5610.17367.202410</h5>
                                <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                            </div>
                            </a>
                        </div>
                        <div class="card dash-course-card" >
                            <a href="../Courses/home.html" class="course-link">
                            <img src="./cardImages/1920x1200-antique-fuchsia-solid-color-background.jpg" class="card-img-top"/>
                            <div class="card-body text-truncate">
                                <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                <h5 class="card-title">CS5610.17367.202410</h5>
                                <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                            </div>
                            </a>
                        </div>
                        <div class="card dash-course-card" >
                            <a href="../Courses/home.html" class="course-link">
                            <img src="./cardImages/1920x1200-antique-ruby-solid-color-background.jpg" class="card-img-top"/>
                            <div class="card-body text-truncate">
                                <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                <h5 class="card-title">CS5610.17367.202410</h5>
                                <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                            </div>
                            </a>
                        </div>
                        <div class="card dash-course-card" >
                            <a href="../Courses/home.html" class="course-link">
                            <img src="./cardImages/1920x1200-ao-english-solid-color-background.jpg" class="card-img-top"/>
                            <div class="card-body text-truncate">
                                <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                <h5 class="card-title">CS5610.17367.202410</h5>
                                <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                            </div>
                            </a>
                        </div>
                        <div class="card dash-course-card" >
                            <a href="../Courses/home.html" class="course-link">
                            <img src="./cardImages/1920x1200-apple-green-solid-color-background.jpg" class="card-img-top"/>
                            <div class="card-body text-truncate">
                                <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                <h5 class="card-title">CS5610.17367.202410</h5>
                                <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                            </div>
                            </a>
                        </div>
                        <div class="card dash-course-card" >
                            <a href="../Courses/home.html" class="course-link">
                            <img src="./cardImages/1920x1200-baby-pink-solid-color-background.jpg" class="card-img-top"/>
                            <div class="card-body text-truncate">
                                <h6 class="card-subtitle" >CS5610 17367 Web Development</h6>
                                <h5 class="card-title">CS5610.17367.202410</h5>
                                <h7 class="card-text" >202410_2_Fall 2023 Semester Full Term</h7>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    </body>
  </div>);
}

export default Dashboard;