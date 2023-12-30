/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function PersonalDetails({ personalInfos, setPersonalInfos }) {
  const [showForm, setShowForm] = useState(false);

  function toggleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <section className="form-container">
      <div className="title-colapse">
        <h1>Personal Details</h1>
        <button className="collapse-btn" onClick={toggleShowForm}>
          ^^
        </button>
      </div>

      {showForm && (
        <form className="form">
          <div className="form-group">
            <label htmlFor="input-fullname">Full name</label>
            <input
              type="text"
              id="input-fullname"
              value={personalInfos.fullName}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  fullName: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-current-position">Current position</label>
            <input
              type="text"
              id="input-current-position"
              value={personalInfos.currentPosition}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  currentPosition: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="about">About</label>
            <textarea
              name=""
              id="about"
              cols="30"
              rows="5"
              value={personalInfos.about}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  about: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="input-email">Email</label>
            <input
              type="text"
              id="input-email"
              value={personalInfos.email}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-phone-number">Phone number</label>
            <input
              type="text"
              id="input-phone-number"
              value={personalInfos.phoneNumber}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  phoneNumber: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-linkedin">Linkedin</label>
            <input
              type="text"
              id="input-linkedin"
              value={personalInfos.linkedin}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  linkedin: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-github">Github</label>
            <input
              type="text"
              id="input-github"
              value={personalInfos.github}
              onChange={(e) =>
                setPersonalInfos({
                  ...personalInfos,
                  github: e.target.value,
                })
              }
            />
          </div>
        </form>
      )}
    </section>
  );
}
