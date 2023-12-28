import { useState } from 'react';
import './resume.scss';

export function Resume() {
  const sillyAboutMessage =
    'Olá, meu nome é Paulo Victor, sou desenvolvedor fullstack com experiência na construção de sites e aplicações que possam ser úteis como desenvolvedor, enquanto durante meu tempo como desenvolvedor, pude ganhar experiência coletivamente com uma equipe, entregando sprints semanais e melhorando as plataformas em que trabalhei.';
  // Form
  const [fullName, setFullName] = useState('Paulo Victor');
  const [currentPosition, setCurrentPosition] = useState('Fullstack Developer');
  const [about, setAbout] = useState(sillyAboutMessage);
  const [email, setEmail] = useState('paulovictor.devs@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+55 91 998084647');
  const [linkedin, setLinkedin] = useState('in/pvictorls/');
  const [github, setGithub] = useState('github.com/pvdevs');

  return (
    <div className="container">
      <div className="forms-container">
        <section className="personal-details-section">
          <h1>Personal Details</h1>

          <form className="personal-details">
            <div>
              <label htmlFor="input-fullname">Full name</label>
              <input
                type="text"
                id="input-fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="input-current-position">Current position</label>
              <input
                type="text"
                id="input-current-position"
                value={currentPosition}
                onChange={(e) => setCurrentPosition(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="about">About</label>
              <textarea
                name=""
                id="about"
                cols="30"
                rows="5"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="input-email">Email</label>
              <input
                type="text"
                id="input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="input-phone-number">Phone number</label>
              <input
                type="text"
                id="input-phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="input-linkedin">Linkedin</label>
              <input
                type="text"
                id="input-linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="input-github">Github</label>
              <input
                type="text"
                id="input-github"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </form>
        </section>
      </div>

      <div className="resume">
        {/* Introduction Section */}

        <section className="introduction">
          <div className="name-n-position">
            <h2 className="fullname">{fullName}</h2>
            <h3 className="current-position">{currentPosition}</h3>
          </div>

          <div className="bio-n-infos">
            <p className="about">{about}</p>
            <ul>
              <li className="email">
                <b>Email:</b> {email}
              </li>
              <li className="telephone">
                <b>Phone number:</b> {phoneNumber}
              </li>
              <li className="linkedin">
                <b>Linkedin:</b> {linkedin}
              </li>
              <li className="github">
                <b>Github:</b> {github}
              </li>
            </ul>
          </div>
        </section>

        <div className="line-separator"></div>

        {/* Job experiences section */}

        <section className="job-experiences">
          <h3 className="section-title">Experiences</h3>
          <div className="job">
            <div className="job-infos">
              <p className="company-name">Mentorise</p>
              <p className="job-position">Fullstack Developer</p>
              <p className="job-period">2022 - Present</p>
            </div>
            <p className="job-description">
              Trabalho para desenvolver e manter a plataforma Mentorise. Meus
              objetivos são criar melhorias incluindo tarefas simples e até mais
              complexas para manutenção da plataforma e melhoria da plataforma
              como um todo.
            </p>
          </div>
        </section>

        <div className="line-separator"></div>
        {/* Education Section*/}

        <section className="education">
          <h3 className="section-title">Education</h3>

          <div className="educational-experience">
            <p className="educational-institution">
              CESUPA - Centro Universitario do Estado do Para
            </p>
            <p className="educational-period">2019-2022</p>
            <p className="educational-subject">Computer Science</p>
          </div>
        </section>
      </div>
    </div>
  );
}
