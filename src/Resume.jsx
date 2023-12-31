import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './resume.scss';
import PersonalDetails from './components/personalDetails/PersonalDetails';
import JobExperiences from './components/personalDetails/JobExperiences';
import JobExperienceSection from './components/personalDetails/JobExperienceSection';
import EducationSection from './components/personalDetails/EducationSection';
import Education from './components/personalDetails/Education';

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

  const exampleJob = {
    companyName: 'Mentorise',
    position: 'Fullstack Developer',
    startDate: '2021',
    endDate: '2023',
    jobDescription:
      'Olá, meu nome é Marcelo Chaves, sou desenvolvedor fullstack com experiência na construção de sites e aplicações que possam ser úteis como desenvolvedor, enquanto durante meu tempo como desenvolvedor, pude ganhar experiência coletivamente com uma equipe, entregando sprints semanais e melhorando as plataformas em que trabalhei.',
  };

  const exampleEducation = {
    institution: 'CESUPA',
    subject: 'Computer Science',
    startDate: '2019',
    endDate: '2022',
  };

  const [jobs, setJobs] = useState([
    {
      ...exampleJob,
      id: uuidv4(),
      isEditing: false,
    },
  ]);

  const [educationPath, setEducationPath] = useState([
    {
      ...exampleEducation,
      id: uuidv4(),
      isEditing: false,
    },
  ]);

  return (
    <div className="container">
      <div className="forms-container">
        <PersonalDetails
          personalInfos={personalInfos}
          setPersonalInfos={setPersonalInfos}
        />

        <JobExperiences jobs={jobs} setJobs={setJobs} />

        <Education
          educationPath={educationPath}
          setEducationPath={setEducationPath}
        />
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

          <div className="jobs-list">
            {jobs.map((job) => {
              return <JobExperienceSection key={job.id} job={job} />;
            })}
          </div>
        </section>

        <div className="line-separator"></div>
        {/* Education Section*/}

        <section className="education-path">
          <h3 className="section-title">Education</h3>
          <div className="education-list">
            {educationPath.map((education) => {
              return (
                <EducationSection key={education.id} education={education} />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
