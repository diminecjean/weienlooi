const ListRow = ({
  orgName,
  orgImgSrc,
  role,
  workType,
  date,
  duration,
  mode,
  location,
  description,
  skills,
}: {
  orgName: string;
  orgImgSrc: string;
  role: string;
  workType: string;
  date: string;
  duration: string;
  mode: string;
  location: string;
  description: string;
  skills: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <img
            className="h-12 w-12 object-cover"
            src={orgImgSrc}
            alt={`${orgName} logo`}
          />
        </div>
        <div className="col-span-5">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold">{role}</h3>
            <p className="text-sm font-normal pb-1">
              {orgName} · {workType}
            </p>
            <p className="text-xs text-gray-500 font-normal pb-1">
              {date} · {duration}
              <br />
              {location} · {mode}
            </p>
            {description && (
              <p className="text-sm font-normal py-1">
                <span className="font-semibold">
                  Description: <br />
                </span>
                {description}
              </p>
            )}
            {skills && (
              <p className="text-sm font-normal py-1">
                <span className="font-semibold">Skills: </span>
                {skills}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function List({
  type,
  orgData,
}: {
  type: string;
  orgData: {
    type: string;
    orgName: string;
    orgImgSrc: string;
    role: string;
    workType: string;
    date: string;
    duration: string;
    mode: string;
    location: string;
    description: string;
    skills: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {orgData.map(
        (org, index) =>
          org.type === type && (
            <div key={org.orgName}>
              <ListRow
                orgName={org.orgName}
                orgImgSrc={org.orgImgSrc}
                role={org.role}
                workType={org.workType}
                date={org.date}
                duration={org.duration}
                mode={org.mode}
                location={org.location}
                description={org.description}
                skills={org.skills}
              />
              {index !== orgData.length - 1 && <hr className="my-2" />}
            </div>
          ),
      )}
    </div>
  );
}
