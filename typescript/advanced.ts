// Union & Intersection Types, Functions
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

type Person = Admin | User;

function describePerson(person: Person): void {
  if (person.role === "admin") {
    console.log("Admin with permissions:", person.permissions);
  } else {
    console.log("User with email:", person.email);
  }
}

describePerson({ role: "admin", permissions: ["manage-users", "edit"] });
describePerson({ role: "user", email: "student@chuka.ac.ke" });
