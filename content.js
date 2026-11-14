// Everything the page says lives in this file. Edit the text between the quotes.
// answer: "" shows a "Needs an answer" marker. draft: true shows a "Draft wording" marker.
// media: { src, alt, caption }: images (.avif/.png/.jpg) or videos (.mp4) from assets/.
// Videos can also take a poster (a still .jpg shown before the clip loads) and wide: true to sit on top in focus mode.
// media can be a list of clips; give each a short label for its tab in focus mode.

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
          answer: "Annual pricing is based on Akron’s student enrollment and the products included: the Formative School & District license, plus optional add-ons such as the Item Bank, Respondus LockDown Browser and Bubble Sheet. Your Formative account manager will share Akron’s exact annual quote.",
          draft: true,
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
          answer: "Every assessment has the same three tabs, so staff always know where to go: Edit to build, Responses to watch answers arrive live, and Insights to see results by question and standard. Administrators get the same layout plus Admin Tools for reports, the Tracker and team management. The clip shows a teacher moving through all three tabs.",
          media: {
            src: "assets/video/staff-interface.mp4",
            poster: "assets/video/staff-interface.jpg",
            alt: "A teacher opens an assessment, switches to the Responses grid, opens one student’s answers and completion time, then views the Insights summary",
            caption: "A teacher moves between editing, live responses and insights",
          },
        },
        {
          q: "Visual appeal and intuitiveness of student facing interface?",
          answer: "Students see a clean, uncluttered screen with a question navigator, hints when the teacher allows them, and built-in tools such as text-to-speech and a math keypad. It runs in the browser on Chromebooks, iPads and laptops, so there is nothing to install for everyday assessments.",
          media: {
            src: "assets/video/student-takes-assessment.mp4",
            poster: "assets/video/student-takes-assessment.jpg",
            alt: "A student works through a five-question exit ticket: multiple choice, sorting items into categories by dragging, and typed answers, then submits and sees their score",
            caption: "A student taking an assessment",
          },
        },
        {
          q: "Ease of assessment creation",
          answer: "Assessments can be created from scratch, imported from Google Drive, parsed with Luna (AI), or created at district level and shared with teachers.",
          media: [
            {
              src: "assets/video/luna-create.mp4",
              poster: "assets/video/luna-create.jpg",
              alt: "A teacher asks Luna for grade 8 forces and motion questions, answers Luna’s follow-up, and reviews the drafted questions tagged to Ohio standards",
              caption: "Luna drafting standards-tagged questions from one request (waits sped up)",
              label: "Luna from scratch",
            },
            {
              src: "assets/video/parse-pdf.mp4",
              poster: "assets/video/parse-pdf.jpg",
              label: "Parse an existing PDF",
              alt: "A teacher drops a five-page AP Precalculus quiz PDF into Formative; Luna converts it into editable questions that keep their graphs, answer keys and standards tags",
              caption: "Turning a five-page AP Precalc PDF into editable questions, graphs included (waits sped up)",
            },
            {
              src: "assets/video/item-bank-add.mp4",
              poster: "assets/video/item-bank-add.jpg",
              label: "Add from the item bank",
              alt: "A teacher opens the item bank, filters to Math, 11th grade and the Ohio standard F.IF.7.b, selects two items tagged to Ohio standards and adds them to the assessment",
              caption: "Filtering the item bank by Ohio standard F.IF.7.b and adding two items",
            },
          ],
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
            src: "assets/video/parse-pdf.mp4",
            poster: "assets/video/parse-pdf.jpg",
            alt: "A teacher drops a five-page AP Precalculus quiz PDF into Formative; Luna converts it into editable questions that keep their graphs, answer keys and standards tags",
            caption: "Turning a five-page AP Precalc PDF into editable questions, graphs included (waits sped up)",
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
            src: "assets/video/item-bank-add.mp4",
            poster: "assets/video/item-bank-add.jpg",
            alt: "A teacher opens the item bank, filters to Math, 11th grade and the Ohio standard F.IF.7.b, selects two items tagged to Ohio standards and adds them to the assessment",
            caption: "Filtering the item bank by Ohio standard F.IF.7.b and adding two items",
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
            src: "assets/video/live-side-by-side.mp4",
            poster: "assets/video/live-side-by-side.jpg",
            alt: "Side by side: on the right a student answers five questions and submits; on the left the teacher’s Responses grid marks each answer correct or incorrect the moment it is submitted",
            caption: "Live: the teacher’s Responses page (left) fills in as a student answers (right)",
            wide: true,
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
          answer: "Yes. Teachers can attach a rubric to any free response question and score each criterion by clicking a level, and the points total automatically. A single-criterion rubric works for holistic scoring. Luna can also draft a rubric and suggest levels with a short explanation for each, and the teacher reviews and adjusts everything before scores are saved or returned to students.",
        },
        {
          q: "Can we set up item banks specific to grade and content areas?",
          answer: "Yes. The Item Bank (a School & District add-on) includes tens of thousands of ready-made items that teachers can filter by subject, grade, standard, Depth of Knowledge and question type. Akron can also publish its own assessments to a private district library that staff can filter by grade and subject, and administrators can lock items so only admins can find them.",
          media: {
            src: "assets/video/item-bank-add.mp4",
            poster: "assets/video/item-bank-add.jpg",
            alt: "A teacher opens the item bank, filters to Math, 11th grade and the Ohio standard F.IF.7.b, selects two items tagged to Ohio standards and adds them to the assessment",
            caption: "Filtering the item bank by Ohio standard F.IF.7.b and adding two items",
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
          answer: "Yes, an entire assessment, including directions, can be translated into a student’s native language. The Student Translator supports more than 30 languages, and text-to-speech reads the content aloud in the translated language.",
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
          answer: "Yes. Formative flags several signs of academic dishonesty for teachers to review:\n• Copy and paste alerts mark any answer that contains pasted text, even if the student later retyped it.\n• Overlap detection flags a student who is signed in on a second device or browser at the same time (for example, a phone), showing the device, browser, IP address and timestamps. Sessions can pause automatically until the teacher resumes them, and “Restrict to single device” blocks the second session entirely.\n• Timestamps and completion times on every response make it easy to spot a student who finished far faster than the rest of the class.\n• Teachers watch answers arrive live in the Responses grid.\nCombined with Respondus LockDown Browser, entry passwords and random question order, these tools cover both prevention and detection.",
          media: {
            src: "assets/video/live-side-by-side.mp4",
            poster: "assets/video/live-side-by-side.jpg",
            alt: "Side by side: on the right a student answers five questions and submits; on the left the teacher’s Responses grid marks each answer correct or incorrect the moment it is submitted",
            caption: "Live: the teacher’s Responses page (left) fills in as a student answers (right)",
            wide: true,
          },
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
            src: "assets/video/admin-reports.mp4",
            poster: "assets/video/admin-reports.jpg",
            alt: "The Team tracker for a district-wide assessment: overall score, then Marshall School and Wilkerson School, then a teacher, a class and each student, then the same results by standard",
            caption: "A district admin drilling from district to school, teacher, class and student",
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
          media: {
            src: "assets/video/admin-reports.mp4",
            poster: "assets/video/admin-reports.jpg",
            alt: "The Team tracker drilling from the district into a school, teacher, class and students",
            caption: "A district admin drilling from district to school, teacher, class and student",
          },
        },
      ],
    },

    {
      name: "Training & support",
      weight: 5,
      rows: [
        {
          q: "How long to rollout? What does rollout look like?",
          answer: "Rollout is led by Akron’s dedicated Customer Success Manager and follows a clear sequence:\n1. Kickoff to confirm goals, timeline and the first common assessments.\n2. Technical setup with Akron IT: Clever rostering, SSO, Schoolytics and Respondus LockDown Browser.\n3. Training for administrators and teachers.\n4. Migration of existing assessments with an assessment specialist.\n5. Regular check-ins through the first year to review usage and data.\nThe exact timeline depends on Akron’s start date, and we will share a week-by-week plan at kickoff.",
          draft: true,
        },
        {
          q: "Explain initial PD for tech? For end users?",
          answer: "Technology staff: a setup session with our implementation team covering Clever rostering, SSO, LMS and LTI connections, the Schoolytics data sync and Respondus LockDown Browser.\nEnd users: Formative Fundamentals training for teachers, plus administrator training on reports, the Tracker and common assessments. Sessions are scheduled from our Professional Learning catalog through a personalized booking link.",
        },
        {
          q: "What are your training tools/methodology?",
          answer: "Training is hands-on: teachers build and assign a real assessment during their session so they leave ready to use it with students. Live sessions from our Professional Learning catalog are backed by on-demand Formative Certified courses, live events and webinars, tips by email, and a help center with step-by-step articles that is available 24/7.",
        },
        {
          q: "Describe your Help Desk support?",
          answer: "Akron will have a dedicated Customer Success Manager in addition to our support team. Staff can reach support by email at support@formative.com or by live chat (weekdays, 8am to 8pm ET), and the help center is available 24/7 with step-by-step articles.",
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
          answer: "Yes. Staff and students can sign in with Google, Microsoft, Clever, ClassLink or Newsela.",
          media: {
            src: "assets/img/sso-login.jpg",
            alt: "Formative login page with Log in with Google, Clever, Microsoft and Newsela buttons",
            caption: "The Formative login page",
          },
        },
        {
          q: "Can security roles be automated?",
          answer: "Yes. Accounts, roles and class rosters sync automatically from Clever, so new staff, new students and schedule changes flow into Formative without manual setup.",
        },
        {
          q: "How many roles do you have?",
          answer: "Teachers, Org Managers and Admins, plus student accounts. Admin roles can be set at the school or district level, so a principal sees their building while district staff see every school.",
        },
        {
          q: "Can tech admins impersonate others?",
          answer: "Administrators can view any teacher’s activities, student responses and results from Admin Tools, including the Teacher Report, which is how technology staff typically troubleshoot. Our support team can help directly with anything beyond that.",
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
          answer: "Luna is built to support teachers, not replace their judgment. Every question, hint, rubric or piece of feedback Luna drafts is shown to the teacher to review, edit or reject, and nothing reaches a student until a teacher sends it. Students do not use Luna.\nAI can make mistakes, which is why teacher review is built into every step. District leaders can set Luna configurations so generated content follows district frameworks, Ohio standards and state test formats, and Formative can turn AI features off for a district on request. Student data is protected under FERPA and COPPA and is never sold.",
        },
      ],
    },

    {
      name: "Years in business",
      weight: 2,
      rows: [
        {
          q: "How long have you been in business with assessment platforms?",
          answer: "Formative was founded in 2013 and has supported teachers for more than 10 years. Formative joined Newsela in 2023. Today, teachers in more than 90% of U.S. school districts use Formative, and students have submitted more than 6 billion responses.",
        },
        {
          q: "Do you have any customers in Ohio? If so who?",
          answer: "Yes. Teachers across Ohio use Formative, and we would be glad to connect Akron with Ohio district references.",
          draft: true,
        },
        {
          q: "Can you share your financial stability?",
          answer: "Formative is part of Newsela, a leading K-12 instructional content company. Newsela raised a $100 million Series D round in 2021 at a valuation of about $1 billion, backed by investors including Franklin Templeton, TCV, Kleiner Perkins and the Chan Zuckerberg Initiative. Newsela continues to invest in Formative, including adding Schoolytics in 2026.",
          draft: true,
        },
      ],
    },
  ],
};
