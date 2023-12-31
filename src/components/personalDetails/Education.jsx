/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormDynamicEducation from './FormDynamicEducation';

export default function Education({ educationPath, setEducationPath }) {
  const [infos, setInfos] = useState({
    institution: undefined,
    subject: '',
    startDate: '',
    endDate: '',
  });

  const [isAddingEducation, setIsAddingEducation] = useState(false);

  const [userIsEditing, setUserIsEditing] = useState(false);

  const [showForm, setShowForm] = useState(false);

  function toggleShowForm() {
    setShowForm(!showForm);
  }

  function addNewEducation(e) {
    e.preventDefault();
    setEducationPath([
      ...educationPath,
      { ...infos, id: uuidv4(), isEditing: false },
    ]);

    removeNewEducationForm();
    resetInfos();
  }

  function updateInfosThroughEducation(education) {
    setInfos({
      institution: education.institution,
      subject: education.subject,
      startDate: education.startDate,
      endDate: education.endDate,
    });
  }

  function addNewEducationForm() {
    setIsAddingEducation(true);
    //resetInfos();
  }

  function removeNewEducationForm(e) {
    e && e.preventDefault();

    setIsAddingEducation(false);
    //resetInfos();
  }

  function saveButton(e, id) {
    e && e.preventDefault();

    setEducationPath(
      educationPath.map((education) => {
        if (education.id === id) {
          return { ...education, ...infos, isEditing: false };
        } else {
          return education;
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

    setEducationPath(
      educationPath.map((education) => {
        if (education.id === id) {
          return { ...education, isEditing: false };
        } else {
          return education;
        }
      })
    );
  }

  function resetInfos() {
    setInfos({
      ...infos,
      institution: '',
      subject: '',
      startDate: '',
      endDate: '',
    });
  }

  function turnEditOn(e, id) {
    setUserIsEditing(true);
    e.preventDefault();
    setEducationPath(
      educationPath.map((education) => {
        if (education.id === id) {
          console.log(education.institution);
          return { ...education, isEditing: true };
        } else {
          return { ...education, isEditing: false };
        }
      })
    );
  }

  return (
    <section className="form-container">
      <div className="title-colapse">
        <h1>Education Path</h1>
        <button className="collapse-btn" onClick={toggleShowForm}>
          ^^
        </button>
      </div>
      {showForm && (
        <>
          {educationPath.map((education) => {
            if (education.isEditing) {
              return (
                <FormDynamicEducation
                  key={education.id}
                  id={education.id}
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
                  key={education.id}
                  onClick={(e) => {
                    updateInfosThroughEducation(education);
                    turnEditOn(e, education.id);
                  }}
                >
                  <h2>{education.institution}</h2>
                </div>
              );
            }
          })}
          {!userIsEditing && (
            <section className="new-education-section">
              {!isAddingEducation && (
                <button
                  className="add-new-education"
                  onClick={addNewEducationForm}
                >
                  Add new education
                </button>
              )}

              {isAddingEducation && (
                <FormDynamicEducation
                  infos={infos}
                  setInfos={setInfos}
                  cancelButton={removeNewEducationForm}
                  saveButton={addNewEducation}
                />
              )}
            </section>
          )}
        </>
      )}
    </section>
  );
}
