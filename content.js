// Everything the page says lives in this file. Edit the text between the quotes.
// answer: "" shows a "Needs an answer" marker. draft: true shows a "Draft wording" marker.
// media: { src, alt, caption } — images (.avif/.png/.jpg) or videos (.mp4) from assets/.
// Videos can also take a poster: a still .jpg shown before the clip loads.

window.RUBRIC = {
  district: "Akron Public Schools",
  title: "Formative's response to your assessment platform rubric",
  preparedOn: "November 2026",
  intro: "Every answer below follows your rubric's structure: the same areas, criteria and weights. Where it helps, we've added a screenshot or short clip so you can see the feature, not just read about it.",
  contact: {
    name: "",
    email: "",
    phone: "",
  },

  areas: [
    {
      name: "Cost",
      weight: 40,
      rows: [
        {
          q: "What is the cost to onboard?",
          answer: "There is no additional cost to onboard.",
        },
        {
          q: "What are the annual costs?",
          answer: "",
        },
        {
          q: "Are there any additional charges for full implementation (onboarding, training, rostering etc)?",
          answer: "Professional learning is the only additional cost.",
        },
      ],
    },

    {
      name: "Testing platform",
      weight: 16,
      rows: [
        {
          q: "Visual appeal and intuitiveness of staff facing interface?",
          answer: "",
          media: {
            src: "assets/video/staff-interface.mp4",
            poster: "assets/video/staff-interface.jpg",
            alt: "A teacher opens an assessment, switches to the Responses grid, opens one student’s answers and completion time, then views the Insights summary",
            caption: "A teacher moves between editing, live responses and insights",
          },
        },
        {
          q: "Visual appeal and intuitiveness of student facing interface?",
          answer: "",
          media: {
            src: "assets/video/student-takes-assessment.mp4",
            poster: "assets/video/student-takes-assessment.jpg",
            alt: "A student works through a seven-question assessment: multiple choice, a numeric answer with a math keypad, sorting items into categories and short written answers, then submits and sees their score",
            caption: "A student taking an assessment",
          },
        },
        {
          q: "Ease of assessment creation",
          answer: "Assessments can be created from scratch, imported from Google Drive, parsed with Luna (AI), or created at district level and shared with teachers.",
          media: {
            src: "assets/video/luna-create.mp4",
            poster: "assets/video/luna-create.jpg",
            alt: "A teacher asks Luna for grade 8 forces and motion questions, answers Luna’s follow-up, and reviews the drafted questions tagged to Ohio standards",
            caption: "Luna drafting standards-tagged questions from one request (waits sped up)",
          },
        },
        {
          q: "Questions can be aligned to current Ohio Learning Standards",
          answer: "Yes, all content can be aligned to Ohio State Learning Standards, as well as Depth of Knowledge. Additionally, Formative will update standards when the state adjusts.",
          media: {
            src: "assets/video/ohio-standards.mp4",
            poster: "assets/video/ohio-standards.jpg",
            alt: "A teacher adds the Ohio Science (2018–) grade 8 standards set, searches for force, and tags the question with 8.PS.2",
            caption: "Adding Ohio’s grade 8 science standards and tagging a question",
          },
        },
        {
          q: "Can we migrate our existing assessments into the platform",
          answer: "Yes, you will have an assessment specialist that can support in the migration of current assessments into the platform, so there will be less manual work for your team.",
          media: {
            src: "assets/video/migrate.mp4",
            poster: "assets/video/migrate.jpg",
            alt: "A teacher drops a PDF of a printed quiz into the upload area; Luna converts it into editable multiple choice, true or false and written-response questions",
            caption: "Dropping in a paper quiz PDF and letting Luna turn it into questions (wait sped up)",
          },
        },
        {
          q: "Do you have pre-built Ohio state test (OAA/OGT/AIR) practice items for grades 3-12?",
          answer: "There are existing items in the library. It is also possible to create configurations with Luna to directly support assessment items aligned to the state test.",
        },
        {
          q: "Are items tagged by standard, Bloom's level, and DOK level?",
          answer: "Yes, by standard and DOK level. Bloom's Taxonomy levels could be added as well.",
          media: {
            src: "assets/video/item-bank.mp4",
            poster: "assets/video/item-bank.jpg",
            alt: "The item bank filtered to 8th grade science at DOK 2, narrowing tens of thousands of items to about two thousand",
            caption: "Filtering the item bank by subject, grade and Depth of Knowledge",
          },
        },
        {
          q: "What item types are supported? (MC, TEI, short answer, extended response, drag-and-drop, etc.)",
          answer: "There are a wide variety of tech enhanced question types to support all content areas across K-12. Some of these include multiple choice, multiple select, short answer, free response, drag and drop, numeric, graphing, in-line choice, match table grid, categorize, etc.",
          media: {
            src: "assets/video/item-types.mp4",
            poster: "assets/video/item-types.jpg",
            alt: "The Add item menu listing content types and question types such as categorize, drag and drop, graphing, hot spot, match table grid and video response",
            caption: "Every content and question type in the add menu",
          },
        },
        {
          q: "Are objective items (MC, TEI) auto-scored in real time?",
          answer: "Yes, questions are scored in real time.",
          media: {
            src: "assets/video/live-responses-grid.mp4",
            poster: "assets/video/live-responses-grid.jpg",
            alt: "The teacher's responses grid filling in question by question as two students answer live, with each answer marked correct or incorrect and running totals updating",
            caption: "The teacher's view as students answer, recorded live",
          },
        },
        {
          q: "Can teachers hand-score constructed response items within the platform?",
          answer: "Yes, teachers can hand score open-ended items, as well as rubric aligned items. Teachers can also utilize Luna, the AI, to score against a rubric (nothing is shared/sent to students without a teacher sending it).",
          media: {
            src: "assets/video/hand-score.mp4",
            poster: "assets/video/hand-score.jpg",
            alt: "A teacher opens a student’s incorrect written answer, sets the score, clicks Luna to draft feedback, and sends it",
            caption: "Scoring a written answer and having Luna draft feedback",
          },
        },
        {
          q: "Do you support analytic or holistic scoring rubrics for open-ended items?",
          answer: "",
        },
        {
          q: "Can we set up item banks specific to grade and content areas?",
          answer: "",
          media: {
            src: "assets/video/item-bank.mp4",
            poster: "assets/video/item-bank.jpg",
            alt: "The item bank filtered to 8th grade science at DOK 2",
            caption: "Filtering the item bank by subject, grade and Depth of Knowledge",
          },
        },
      ],
    },

    {
      name: "Test configuration & delivery",
      weight: 16,
      rows: [
        {
          q: "Can district staff author new items? Is there a review/approval workflow?",
          answer: "Teachers can author items for their own classroom assessments, or can support creation of common assessments with district discretion.",
          media: {
            src: "assets/video/common-assessment.mp4",
            poster: "assets/video/common-assessment.jpg",
            alt: "Common assessment settings: sharing with an org, an assessment window, scheduled release, content display, grading, lockdown browser and Luna permissions",
            caption: "Common assessment settings a district controls",
          },
        },
        {
          q: "Can tests be shared across buildings, departments, and individual teachers?",
          answer: "Yes, collaboration is simple in Formative. Teachers can share with PLCs, and the district can send an assessment to a grade level, building, or entire district.",
          media: {
            src: "assets/video/share.mp4",
            poster: "assets/video/share.jpg",
            alt: "The Share and permissions dialog: a share link, collaborators with Edit and assign rights, and adding Sunnydale School District with assign access",
            caption: "Sharing an assessment with colleagues or a whole district",
          },
        },
        {
          q: "Can the district lock/protect assessments so teachers cannot alter them?",
          answer: "Yes, any district common assessments can be locked down so that teachers cannot alter any questions. Formative also has Benchmark Mode, where a district can lock the assessment so teachers don't even see the questions.",
          media: {
            src: "assets/video/common-assessment.mp4",
            poster: "assets/video/common-assessment.jpg",
            alt: "Common assessment settings a district sets for every teacher who uses the assessment",
            caption: "Common assessment settings a district controls",
          },
        },
        {
          q: "Can we randomize item order and/or answer choices to reduce academic dishonesty?",
          answer: "Yes, both the questions and answer choices can be given in random order.",
          media: {
            src: "assets/video/randomize.mp4",
            poster: "assets/video/randomize.jpg",
            alt: "Assign settings with Display questions in random order turned on",
            caption: "Turning on random question order",
          },
        },
        {
          q: "Can we set time limits, section breaks, and student pacing controls?",
          answer: "Assessment settings are extremely flexible and can include time limits, open and close windows, feedback release, score release, testing accommodations, teacher paced (teacher controls the pace of the assessment), and student paced.",
          media: {
            src: "assets/video/pacing-time.mp4",
            poster: "assets/video/pacing-time.jpg",
            alt: "Assign settings: choosing teacher-paced or student-paced, scheduling an open time, and turning on a time limit",
            caption: "Pacing mode, open and close times, and a time limit",
          },
        },
        {
          q: "Do you support online AND paper/pencil administration from the same platform?",
          answer: "Yes, Formative has print options to complete an assessment on paper in addition to the online version. There is also an add-on called Bubble Sheet, where students can complete the paper version like a scantron, and upload the results into Formative to access the data.",
          media: {
            src: "assets/video/print.mp4",
            poster: "assets/video/print.jpg",
            alt: "Print options: print booklet, blank formative or with student responses, student summary slips and rubric pages",
            caption: "Print options for a paper version",
          },
        },
        {
          q: "What accommodation tools are built in? (text-to-speech, extended time, separate settings, zoom, etc.)",
          answer: "Accommodations available are text-to-speech, extended time, translations, answer choice reduction, color contrast, and masking. Additionally, teachers can turn on answer choice explanations, hints, and student notes for extra scaffolds and support.",
          media: {
            src: "assets/video/accommodations.mp4",
            poster: "assets/video/accommodations.jpg",
            alt: "Accommodations for one student: time limit extension, text-to-speech and answer choice reduction turned on",
            caption: "Setting accommodations for one student",
          },
        },
        {
          q: "Do you support English Learner accommodations including translated test directions?",
          answer: "Yes, an entire assessment, including directions can be translated to a students native language.",
        },
        {
          q: "Can we schedule and pre-assign tests to specific students or groups?",
          answer: "Yes, tests can be assigned to specific groups of students, individual students, or whole class(es). Open/close times can be set as well.",
          media: {
            src: "assets/video/assign-students.mp4",
            poster: "assets/video/assign-students.jpg",
            alt: "Assign to individual students, selecting four students from the class",
            caption: "Assigning to selected students",
          },
        },
        {
          q: "Is there a secure lockdown browser or testing client available?",
          answer: "Yes, Formative utilizes Respondus Lockdown Browser to ensure a secure testing environment. Teachers can turn on entry and quit passwords, and will be notified if a student tries to exit the assessment or open other windows. In lockdown mode, students cannot exit the assessment, take a screenshot, or open other browsers.",
          media: {
            src: "assets/video/lockdown.mp4",
            poster: "assets/video/lockdown.jpg",
            alt: "Enhanced test security: requiring an entry password and turning on secure exam browser mode, which adds a quit password and auto-pause",
            caption: "Entry password and secure exam browser mode",
          },
        },
        {
          q: "Does your platform have any form of \"cheat detection\" including monitoring time spent on items and rapid correct responses? I.E. technology that would assist with detecting the use of a cell phone to complete an assessment.",
          answer: "copy/paste, detection- show video of live responses, one student go really fast, and one slow, student logged into a different device notifications",
          draft: true,
        },
      ],
    },

    {
      name: "Integration",
      weight: 6,
      rows: [
        {
          q: "How does the platform integrate with our current SIS (eschoolPLUS) for rostering? We use Clever",
          answer: "Rostering would be done through Clever and a direct API connection.",
        },
        {
          q: "We use Schoolytics for our data analytic dashboard. Describe the integration process",
          answer: "Formative has an integration to Schoolytics and would send the data nightly to be viewed in Schoolytics with whatever filtering the district would prefer.",
        },
        {
          q: "Are there any known limitations on what data can be imported or exported?",
          answer: "All data can be exported through SFTP.",
        },
      ],
    },

    {
      name: "Reporting and analytics",
      weight: 5,
      rows: [
        {
          q: "Can reports be viewed at student, classroom, building, and district levels for a district shared assessment?",
          answer: "Yes, there are both teacher and administrator permissions and all data is available in real time, so insights can be actionable. Teachers are able to see their own classrooms of data, as well as PLC data together if preferred. Building administrators can see their building's data, and district administrators can see all of the data in a singular view. From there, admin are able to filter to specific views and save that report for the future.",
          media: {
            src: "assets/img/reporting.avif",
            alt: "An assessment report with overall score bands, standards tagged, lowest-scoring questions and demographic breakdowns",
            caption: "An assessment report",
          },
        },
        {
          q: "Is there standard-by-standard reporting tied directly to Ohio Academic Standards?",
          answer: "Yes, for a teacher in the Responses tab, they can filter to a standards view to see how students are performing on each standard that's assessed. In the Insights tab, PLCs can look at their standards data together as well. For an administrator, in the Team Tracker view, they can also set the viewing to standards to see how the entire district, schools, grade levels, PLCs, etc. are performing on state standards.",
          media: {
            src: "assets/video/standards-report.mp4",
            poster: "assets/video/standards-report.jpg",
            alt: "The Responses grid regrouped by standard, then the Insights tab showing performance by standard",
            caption: "Results grouped by standard, then the Insights standards summary",
          },
        },
        {
          q: "Can teachers see their own class results without seeing other teachers' data?",
          answer: "Yes, teachers can see their own classroom data as soon as students begin taking an assessment. All data is real time. If a district would like teachers to see each other's data in PLCs, that can be allowed, but is at the discretion of the district.",
        },
        {
          q: "Can building admin see both district and classroom teacher created assessment results?",
          answer: "The district sets the permissions and can allow building administrators to see it if they choose to allow it. Otherwise, building administrators will only see their building data.",
        },
        {
          q: "Can district admin see building level results for teacher created assessments?",
          answer: "Yes, administrators are able to view all teacher level data without needing to do any additional steps. They can see it by building, PLC, individual teacher, student, grade level, etc.",
        },
      ],
    },

    {
      name: "Training & support",
      weight: 5,
      rows: [
        {
          q: "How long to rollout? What does rollout look like?",
          answer: "",
        },
        {
          q: "Explain initial PD for tech? For end users?",
          answer: "",
        },
        {
          q: "What are your training tools/methodology?",
          answer: "",
        },
        {
          q: "Describe your Help Desk support?",
          answer: "Yes, the district will also have a customer success manager to support directly.",
          draft: true,
          media: {
            src: "assets/img/help-center.jpg",
            alt: "Formative help center home page with article categories",
            caption: "The Formative help center",
          },
        },
      ],
    },

    {
      name: "SSO, role-based access & data privacy",
      weight: 5,
      rows: [
        {
          q: "Do you have SSO?",
          answer: "Yes",
          media: {
            src: "assets/img/sso-login.jpg",
            alt: "Formative login page with Log in with Google, Clever, Microsoft and Newsela buttons",
            caption: "The Formative login page",
          },
        },
        {
          q: "Can security roles be automated?",
          answer: "Yes",
        },
        {
          q: "How many roles do you have?",
          answer: "Teacher and administrator",
        },
        {
          q: "Can tech admins impersonate others?",
          answer: "yes- in teacher report",
          draft: true,
        },
      ],
    },

    {
      name: "Artificial intelligence",
      weight: 5,
      rows: [
        {
          q: "Describe how your application uses/integrates Artificial Intelligence?",
          answer: "Our platform has Luna (AI) for teacher and administration use only. Administration can create Luna configurations to support alignment to district frameworks/state standards/state tests, etc. When a configuration is created, teachers and admin can then use that config to support the creation of assessments within district confinements. Luna has built in configurations for math, science, ELA, and social studies, as well as rigor booster and misconception buster to support creation of assessments. Luna can generate hints and answer choice explanations, as well as support grading, and feedback creation. Luna is also used to parse existing assessments into editable, digital versions. Students have no access to AI.",
          media: {
            src: "assets/video/luna-next-steps.mp4",
            poster: "assets/video/luna-next-steps.jpg",
            alt: "Luna next steps listing the standards students struggled with, including Ohio 8.PS.2, and offering to generate a practice set or a new formative",
            caption: "Luna suggesting next steps from results",
          },
        },
        {
          q: "What are the limitations and philosophy for Artificial Intelligence?",
          answer: "",
        },
      ],
    },

    {
      name: "Years in business",
      weight: 2,
      rows: [
        {
          q: "How long have you been in business with assessment platforms?",
          answer: "",
        },
        {
          q: "Do you have any customers in Ohio? If so who?",
          answer: "",
        },
        {
          q: "Can you share your financial stability?",
          answer: "",
        },
      ],
    },
  ],
};
