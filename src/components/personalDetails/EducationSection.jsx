/* eslint-disable react/prop-types */
export default function EducationSection({ education }) {
  return (
    <div className="education">
      <div className="education-infos">
        <p className="institution">{education.institution}</p>
        <p className="education-subject">{education.subject}</p>
        <p className="education-period">
          {education.startDate} - {education.endDate}
        </p>
      </div>
    </div>
  );
}
