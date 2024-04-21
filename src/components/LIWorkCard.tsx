import { orgData } from "../providers/OrgData";
import List from "./List";

export default function LIWorkCard() {
  return (
    <div className="w-full relative rounded-lg bg-white dark:bg-sky-800 flex flex-col gap-0 overflow-hidden shadow-lg hover:shadow-cyan-300/50 hover:ring-2 hover:ring-cyan-300">
      <div className="relative isolate flex flex-col justify-end rounded-2xl px-8 py-6 w-full text-left">
        <h2 className="font-semibold text-xl mb-4">Work</h2>
        <List
          type="Work"
          orgData={
            orgData as {
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
            }[]
          }
        />
      </div>
    </div>
  );
}
