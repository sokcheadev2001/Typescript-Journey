type Admin = {
  name: string;
  priviledges: string[];
};

type NormalStaff = {
  name: string;
  startDate: Date;
};

//  intersection type
type ElevatedEmployee = Admin & NormalStaff;

const E1: ElevatedEmployee = {
  name: "Elon",
  priviledges: ["Handle CI/CD"],
  startDate: new Date(),
};
