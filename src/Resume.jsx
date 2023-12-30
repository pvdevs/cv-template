import { useState } from 'react';
import './resume.scss';
import PersonalDetails from './components/personalDetails/PersonalDetails';
import JobExperiences from './components/personalDetails/JobExperiences';

export function Resume() {
  // Form as Object
  const [personalInfos, setPersonalInfos] = useState({
    fullName: 'Paulo Victor',
    currentPosition: 'Fullstack Developer',
    about:
      'Olá, meu nome é Marcelo Chaves, sou desenvolvedor fullstack com experiência na construção de sites e aplicações que possam ser úteis como desenvolvedor, enquanto durante meu tempo como desenvolvedor, pude ganhar experiência coletivamente com uma equipe, entregando sprints semanais e melhorando as plataformas em que trabalhei.',
    email: 'paulovictor.devs@gmail.com',
    phoneNumber: '+55 91 99808-4647',
    linkedin: 'in/pvictorls/',
    github: 'github.com/pvdevs',
  });

  return (
    <div className="container">
      <div className="forms-container">
        <PersonalDetails
          personalInfos={personalInfos}
          setPersonalInfos={setPersonalInfos}
        />

        <JobExperiences />
      </div>

      <div className="resume">
        {/* Personal Information Section */}

        <section className="introduction">
          <div className="name-n-position">
            <h2 className="fullname">{personalInfos.fullName}</h2>
            <h3 className="current-position">
              {personalInfos.currentPosition}
            </h3>
          </div>

          <div className="bio-n-infos">
            <p className="about">{personalInfos.about}</p>
            <ul>
              <li className="email">
                <b>Email:</b> {personalInfos.email}
              </li>
              <li className="telephone">
                <b>Phone number:</b> {personalInfos.phoneNumber}
              </li>
              <li className="linkedin">
                <b>Linkedin:</b> {personalInfos.linkedin}
              </li>
              <li className="github">
                <b>Github:</b> {personalInfos.github}
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
