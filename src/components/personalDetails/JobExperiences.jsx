import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function JobExperiences() {
  const [infos, setInfos] = useState({
    companyName: 'Mentorise',
    position: 'Fullstack Developer',
    startDate: '2022/12/2',
    endDate: '2023/12/1',
    jobDescription:
      'Olá, meu nome é Marcelo Chaves, sou desenvolvedor fullstack com experiência na construção de sites e aplicações que possam ser úteis como desenvolvedor, enquanto durante meu tempo como desenvolvedor, pude ganhar experiência coletivamente com uma equipe, entregando sprints semanais e melhorando as plataformas em que trabalhei.',
  });

  const [jobs, setJobs] = useState([
    {
      ...infos,
      id: uuidv4(),
      isEditing: true,
    },
  ]);

  console.log(jobs);

  function saveButton(e) {
    //
  }

  function cancelButton(e, id) {
    e.preventDefault();

    setJobs(
      jobs.map((job) => {
        if (job.id === id) {
          return { ...job, isEditing: false };
        }
      })
    );
    //
  }

  console.log(jobs);
  // Company, Occupation, Start time - End time.
  // Description

  const [showSection, setShowSection] = useState(true);
  const [showForm, setShowForm] = useState(true);

  function toggleShowForm() {
    setShowForm(!showForm);
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

      {jobs.map((job) => {
        if (job.isEditing) {
          return (
            <form className="form" key={job.id}>
              <div className="form-group">
                <label htmlFor="company-name">Company name</label>
                <input
                  type="text"
                  id="company-name"
                  value={infos.companyName}
                  onChange={(e) =>
                    setInfos({
                      ...infos,
                      companyName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-position">Position</label>
                <input
                  type="text"
                  id="input-position"
                  value={infos.position}
                  onChange={(e) =>
                    setInfos({
                      ...infos,
                      position: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-start-date">Start date</label>
                <input
                  type="date"
                  id="input-start-date"
                  value={infos.startDate}
                  onChange={(e) =>
                    setInfos({
                      ...infos,
                      startDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="input-end-date">End date</label>
                <input
                  type="date"
                  id="input-end-date"
                  value={infos.endDate}
                  onChange={(e) =>
                    setInfos({
                      ...infos,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="input-job-description">Job description</label>
                <textarea
                  name=""
                  id="input-job-description"
                  cols="30"
                  rows="5"
                  value={infos.jobDescription}
                  onChange={(e) =>
                    setInfos({
                      ...infos,
                      jobDescription: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="form-buttons">
                <button
                  className="cancel-btn"
                  onClick={(e) => cancelButton(e, job.id)}
                >
                  Cancel
                </button>
                <button className="save-btn">Save</button>
              </div>
            </form>
          );
        } else {
          <div className="form-collapsed">
            <h1>{job.companyName}</h1>
          </div>;
        }
      })}
    </section>
  );
}

/*

      {showSection && (
        <form className="form">
          <div className="form-group">
            <label htmlFor="company-name">Company name</label>
            <input
              type="text"
              id="company-name"
              value={infos.companyName}
              onChange={(e) =>
                setInfos({
                  ...infos,
                  companyName: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-position">Position</label>
            <input
              type="text"
              id="input-position"
              value={infos.position}
              onChange={(e) =>
                setInfos({
                  ...infos,
                  position: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-start-date">Start date</label>
            <input
              type="date"
              id="input-start-date"
              value={infos.startDate}
              onChange={(e) =>
                setInfos({
                  ...infos,
                  startDate: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-end-date">End date</label>
            <input
              type="date"
              id="input-end-date"
              value={infos.endDate}
              onChange={(e) =>
                setInfos({
                  ...infos,
                  endDate: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-job-description">Job description</label>
            <textarea
              name=""
              id="input-job-description"
              cols="30"
              rows="5"
              value={infos.jobDescription}
              onChange={(e) =>
                setInfos({
                  ...infos,
                  jobDescription: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="form-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save</button>
          </div>
        </form>
      )}
      */
