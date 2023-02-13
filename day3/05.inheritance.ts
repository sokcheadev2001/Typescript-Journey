import Department from "./03.private";

class ITDepartment extends Department {
  private totalMember: string[];
  constructor(fn: string, totalMember: string[]) {
    super(fn);
    this.totalMember = totalMember;
  }

  TeamInformation(this: ITDepartment) {
    console.log(this.totalMember.length);
  }
}

let developerTeam = ["Sokchea", "Sav", "Narotu"];
const developer = new ITDepartment("Developer TEAM", developerTeam);
developer.TeamInformation();
console.log(developer);
