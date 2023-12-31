/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormDynamic from './FormDynamic';

export default function JobExperiences({ jobs, setJobs }) {
  const [infos, setInfos] = useState({
    companyName: undefined,
    position: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
  });

  const [isAddingJob, setIsAddingJob] = useState(false);

  const [showSection, setShowSection] = useState(true);

  const [userIsEditing, setUserIsEditing] = useState(false);

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
  }

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
