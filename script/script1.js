function gradeGenerator() {
  const marks = prompt("Enter marks (0-100):");//prompts user to enter marks and stores them in the marks variable
  //the following code checks if certain conditions are met before returning specific grades according marks
  if (marks < 0 || marks > 100) {
    return "Please enter valid marks.";
  } else if (marks > 79 ) {
    return "Grade: A";
  } else if (marks >= 60 ) {
    return "Grade: B";
  } else if (marks >= 50 ) {
    return "Grade: C";
  } else if (marks >= 40 ) {
    return "Grade: D";
  } else if (marks >= 0 ) {
    return "Grade: E";
  }
}
console.log(gradeGenerator());//logs expected values in the console
debugger;

