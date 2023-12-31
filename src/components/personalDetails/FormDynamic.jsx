/* eslint-disable react/prop-types */
export default function FormDynamic({
  infos,
  setInfos,
  id,
  cancelButton,
  saveButton,
}) {
  return (
    <form className="form" key={id}>
      <div className="form-group">
        <label htmlFor="company-name">Company name</label>
        <input
          type="text"
          id="company-name"
          value={infos.companyName}
          placeholder="ah fs"
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
        <button className="cancel-btn" onClick={(e) => cancelButton(e, id)}>
          Cancel
        </button>
        <button className="save-btn" onClick={(e) => saveButton(e, id)}>
          Save
        </button>
      </div>
    </form>
  );
}
