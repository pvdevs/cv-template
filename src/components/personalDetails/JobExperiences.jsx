import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormDynamic from './FormDynamic';

export default function JobExperiences() {
  const exampleJob = {
    companyName: 'Mentorise',
    position: 'Fullstack Developer',
    startDate: '12/01/2021',
    endDate: '12/01/2023',
    jobDescription:
      'Olá, meu nome é Marcelo Chaves, sou desenvolvedor fullstack com experiência na construção de sites e aplicações que possam ser úteis como desenvolvedor, enquanto durante meu tempo como desenvolvedor, pude ganhar experiência coletivamente com uma equipe, entregando sprints semanais e melhorando as plataformas em que trabalhei.',
  };

  const [infos, setInfos] = useState({
    companyName: undefined,
    position: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
  });

  const [jobs, setJobs] = useState([
    {
      ...exampleJob,
      id: uuidv4(),
      isEditing: false,
    },
  ]);

  console.log(jobs);

  const [isAddingJob, setIsAddingJob] = useState(false);

  function addNewJob(e) {
    e.preventDefault();
    setJobs([...jobs, { ...infos, id: uuidv4(), isEditing: false }]);

    removeNewJobForm();
    resetInfos();
    console.log(jobs);
  }

  function updateInfosThroughJob(job) {
    setInfos({
      companyName: job.companyName,
      position: job.position,
      startDate: job.startDate,
      endDate: job.endDate,
      jobDescription: job.jobDescription,
    });
  }

  function addNewJobForm() {
    setIsAddingJob(true);
    //resetInfos();
  }

  function removeNewJobForm(e) {
    e && e.preventDefault();

    setIsAddingJob(false);
    //resetInfos();
  }

  function saveButton(e, id) {
    e && e.preventDefault();

    setJobs(
      jobs.map((job) => {
        if (job.id === id) {
          return { ...job, ...infos, isEditing: false };
        } else {
          return job;
        }
      })
    );
    setUserIsEditing(false);
    resetInfos();
  }

  function cancelButton(e, id) {
    e.preventDefault();

    turnEditOff(e, id);
    resetInfos();
  }

  function turnEditOff(e, id) {
    setUserIsEditing(false);

    e.preventDefault();

    setJobs(
      jobs.map((job) => {
        if (job.id === id) {
          return { ...job, isEditing: false };
        } else {
          return job;
        }
      })
    );
  }

  function resetInfos() {
    setInfos({
      ...infos,
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      jobDescription: '',
    });
  }

  function turnEditOn(e, id) {
    setUserIsEditing(true);

    e.preventDefault();

    setJobs(
      jobs.map((job) => {
        if (job.id === id) {
          console.log(job.companyName);
          return { ...job, isEditing: true };
        } else {
          return { ...job, isEditing: false };
        }
      })
    );
    console.log(jobs);
  }

  console.log(jobs);
  // Company, Occupation, Start time - End time.
  // Description

  const [showSection, setShowSection] = useState(true);
  const [userIsEditing, setUserIsEditing] = useState(false);

  function toggleShowSection() {
    setShowSection(!showSection);
  }

  return (
    <section className="form-container">
      <div className="title-colapse">
        <h1>Experiences</h1>
        <button className="collapse-btn" onClick={toggleShowSection}>
          ^^
        </button>
      </div>
      {console.log(jobs)}
      {jobs.map((job) => {
        if (job.isEditing) {
          return (
            <FormDynamic
              key={job.id}
              id={job.id}
              infos={infos}
              setInfos={setInfos}
              cancelButton={cancelButton}
              saveButton={saveButton}
            />
          );
        } else {
          return (
            <div
              className="form-collapsed"
              key={job.id}
              onClick={(e) => {
                updateInfosThroughJob(job);
                turnEditOn(e, job.id);
              }}
            >
              <h2>{job.companyName}</h2>
            </div>
          );
        }
      })}
      {!userIsEditing && (
        <section className="new-job-section">
          {!isAddingJob && (
            <button className="add-new-job" onClick={addNewJobForm}>
              Add new job
            </button>
          )}

          {isAddingJob && (
            <FormDynamic
              infos={infos}
              setInfos={setInfos}
              cancelButton={removeNewJobForm}
              saveButton={addNewJob}
            />
          )}
        </section>
      )}
    </section>
  );
}
