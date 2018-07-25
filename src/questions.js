const questions = [
  {
    text: "Are you at least 21 years old?",
    no: () => alert("You must be at least 21 years of age"),
    yes: () => "hello"
  },
  {
    text: "Do you have a valid California Driver's License?",
    no: () => alert("You need a valid CA Driver's License"),
    yes: () => "hello"
  },
  {
    text: "Do you have a car?",
    no: () => alert("If you don't have a car, you can rent one from Lyft for $230/week. Insurance is included and monthly maintenance. If you complete enough trips per week, they will pay for your rental fee. Click yes to continue."),
    yes: () => "hello"
  },
  {
    text: "Is your car 2004 or newer?",
    no: () => {
      alert("If your car is older than 2004, you can rent a car from Lyft for only $230/week. Insurance is included and monthly maintenance. If you complete enough rides per week, they will pay for your rental fee. Click yes to continue.")
		},
    yes: () => "hello"
  },
	{
		text: "Does your car have 4 doors?",
		no: () => alert("Your car must have 4 doors"),
		yes: null
	},
	{
		text: "Do you have valid auto insurance?",
		no: () => alert("You need auto insurance"),
		yes: null
	}
];

export default questions;
