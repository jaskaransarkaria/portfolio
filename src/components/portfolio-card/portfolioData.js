export const projectInfo = [
  {
    projectName: "JobSpeed",
    description:
      "A bespoke CRM system built for a Jewellery repair business based in King's Heath. I'm proud of this project; it is in production and being used daily.",
    features:
      "Desktop application built for Windows and features user authentication, customer job tracking and database, automated invoice creation, automated invoice emailing and sms service, printable invoices and a file uploading interface.",
    frontEndInfo: "python gui framework Kivy",
    backEndInfo: "python3, Sqlite3, reportlab, bcrypt",
    API:
      "Apache2 web server hosted on Ubuntu 16.04. Handles user authentication and sessions with Flask",
    gitHub: "-- a private repo -- available upon request",
    technolgies: ["python3", "Kivy", "Flask", "Sqlite3"],
    images: [
      { imgPath: "/jobspeed_login.svg", imgDescription: "JobSpeed Login" },
      {
        imgPath: "/jobspeed_kanban.svg",
        imgDescription: "JobSpeed job tracking kanban"
      },
      {
        imgPath: "/jobspeed_invoice_returned.svg",
        imgDescription: "Automated JobSpeed invoice"
      }
    ]
  },
  {
    projectName: "School of Code Project Week: Employee Talent gridding app",
    description: `Our bootcamp sponsors set the cohort a task to build a system which could be used by HR to assess employees talent. We worked in teams and were given 4 days building time.`,
    features: `The app featured user authentication, search capabilities, and a drag and drop gridding system.`,
    frontEndInfo: "React, CSS3",
    backEndInfo: "Node.js, Express, MongoDB, bcrypt",
    API:
      "Hosted on Heroku, Express handled interaction with the database and verified users",
    gitHub: "-- a private repo -- available upon request",
    technolgies: [
      "Node.js",
      "React",
      "CSS3",
      "MongoDB",
      "Express",
      "bcrypt",
      "Agile"
    ],
    images: [
      { imgPath: "/talent_login.svg", imgDescription: "user authentication" },
      {
        imgPath: "/talent_search.svg",
        imgDescription: "search bar"
      },
      {
        imgPath: "/talent_grid.svg",
        imgDescription: "talent grid"
      }
    ]
  }
];
