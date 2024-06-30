function netSalaryCalculator() {
  const basicSalary = parseFloat(prompt("Enter your basic salary:")); //prompts the user for their basic salary and turns it into a floating point number before storing it in the basicSalary variable
  const benefits = parseFloat(prompt("Enter your total benefits:"));

  const grossSalary = basicSalary + benefits;

  const nssfDeduction = grossSalary * 0.06; //calculates a 6 percent nssf deduction

  //nhif deductions
  let nhifDeduction;
  if (grossSalary > 0 && grossSalary <= 5999) nhifDeduction = 150;
  else if (grossSalary > 5999 && grossSalary <= 7999) nhifDeduction = 300;
  else if (grossSalary > 7999 && grossSalary <= 11999) nhifDeduction = 400;
  else if (grossSalary > 11999 && grossSalary <= 14999) nhifDeduction = 500;
  else if (grossSalary > 14999 && grossSalary <= 19999) nhifDeduction = 600;
  else if (grossSalary > 19999 && grossSalary <= 24999) nhifDeduction = 750;
  else if (grossSalary > 24999 && grossSalary <= 29999) nhifDeduction = 850;
  else if (grossSalary > 29999 && grossSalary <= 34999) nhifDeduction = 900;
  else if (grossSalary > 34999 && grossSalary <= 39999) nhifDeduction = 950;
  else if (grossSalary > 39999 && grossSalary <= 44999) nhifDeduction = 1000;
  else if (grossSalary > 44999 && grossSalary <= 49999) nhifDeduction = 1100;
  else if (grossSalary > 49999 && grossSalary <= 59999) nhifDeduction = 1200;
  else if (grossSalary > 59999 && grossSalary <= 69999) nhifDeduction = 1300;
  else if (grossSalary > 69999 && grossSalary <= 79999) nhifDeduction = 1400;
  else if (grossSalary > 79999 && grossSalary <= 89999) nhifDeduction = 1500;
  else if (grossSalary > 89999 && grossSalary <= 99999) nhifDeduction = 1600;
  else nhifDeduction = 1700;

  //paye deductions
  let paye;
  if (grossSalary > 0 && grossSalary <= 24000) paye = grossSalary * 0.1;
  else if (grossSalary > 24000 && grossSalary <= 32333)
    paye = grossSalary * 0.25;
  else if (grossSalary > 32333 && grossSalary <= 500000)
    paye = grossSalary * 0.3;
  else if (grossSalary > 500000 && grossSalary <= 800000)
    paye = grossSalary * 0.325;
  else paye = grossSalary * 0.35;

  //net salary
  const netSalary = grossSalary - (nssfDeduction + nhifDeduction + paye);

  //logging the expected values in the console
  console.log(`Gross salary: ${grossSalary}`);
  console.log(`NSSF Deduction: ${nssfDeduction}`);
  console.log(`NHIF Deduction: ${nhifDeduction}`);
  console.log(`PAYE: ${paye}`);
  console.log(`Net salary: ${netSalary}`);
}
console.log(netSalaryCalculator()); //calling the function
debugger;
