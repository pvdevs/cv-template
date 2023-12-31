/* eslint-disable react/prop-types */
export default function FormDynamicEducation({
  infos,
  setInfos,
  id,
  cancelButton,
  saveButton,
}) {
  return (
    <form className="form" key={id}>
      <div className="form-group">
        <label htmlFor="institution">Institution</label>
        <input
          type="text"
          id="institution"
          value={infos.institution}
          placeholder="ah fs"
          onChange={(e) =>
            setInfos({
              ...infos,
              institution: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-subject">Subject</label>
        <input
          type="text"
          id="input-subject"
          value={infos.subject}
          onChange={(e) =>
            setInfos({
              ...infos,
              subject: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-start-date">Start date</label>
        <input
          type="number"
          min={1900}
          max={2099}
          step={1}
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
          type="number"
          min={1900}
          max={2099}
          step={1}
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
