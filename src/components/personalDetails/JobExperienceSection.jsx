/* eslint-disable react/prop-types */
export default function JobExperienceSection({ job }) {
  return (
    <div className="job">
      <div className="job-infos">
        <p className="company-name">{job.companyName}</p>
        <p className="job-position">{job.position}</p>
        <p className="job-period">
          {job.startDate} - {job.endDate}
        </p>
      </div>
      <p className="job-description">{job.jobDescription}</p>
    </div>
  );
}
