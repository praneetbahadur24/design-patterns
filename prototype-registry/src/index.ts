import { Student } from "./Student";
import { StudentRegistry } from "./StudentRegistry";

const register = new StudentRegistry();
const csStudentPrototype = new Student();
csStudentPrototype.setId(1);
csStudentPrototype.setFirstName("Praneet");
csStudentPrototype.setLastName("Bahadur");

register.register("student", csStudentPrototype);

const alice = register.get("student").clone();
alice.setId(3);
alice.setFirstName("Alice");

console.log("csStudentPrototype", csStudentPrototype);
console.log("alice", alice);
