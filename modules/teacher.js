/* By default all the modules are private in js and we need to make them public so that they are accessable outside and the class can be made public by exporting */

import { Person } from "./person";

//export function promote() {}
export default class Teacher extends Person {
  constructor(name, education) {
    super(name);
    this.education = education;
  }
  teach() {
    console.log("teaching");
  }
}
