import React from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(3);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="bx bx-trophy qualification__icon"></i>
            Achivements
          </div>
          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="bx bxs-right-top-arrow-circle qualification__icon"></i>
            PORs
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">Secondary Education</h3>
                <span className="qualification__subtitle">
                  CBSE Board(94.8%)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2020-2021</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Senior Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  CBSE Board (96.2%)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2021-2022</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">
                  Indian Institute of Technology, Delhi
                </h3>
                <span className="qualification__subtitle">
                  Btech *CGPA:- 6.8(current)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022-Present</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">Jee Mains</h3>
                <span className="qualification__subtitle">
                  Among top 2.5% students
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">JEE Advanced</h3>
                <span className="qualification__subtitle">
                  Among top 9.5% students
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">WorldQuant IQC Stage-1</h3>
                <span className="qualification__subtitle">
                  World Rank -17, AIR - 17, IIT Delhi Rank - 2
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">Activity Head</h3>
                <span className="qualification__subtitle">
                  Rendezvous'22, Asia's largest cultural fest
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Activity Head</h3>
                <span className="qualification__subtitle">
                  Rendezvous'23, Asia's largest cultural fest
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2023</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">Techincal Executive</h3>
                <span className="qualification__subtitle">
                  Boards of Student Welfare (BSW), IIT Delhi
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Techincal Executive</h3>
                <span className="qualification__subtitle">
                   Student Affair Council, IIT Delhi
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">June-2024 - July-2024</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__descr">
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">
                Full Stack Developer Intern at Ignite
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Techincal Coordinator</h3>
                <span className="qualification__subtitle">
                   Rendezvous IIT Delhi 2024
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
