// Everything the page says lives in this file. Edit the text between the quotes.
// answer: "" shows a "Needs an answer" marker. draft: true shows a "Draft wording" marker.
// media: { src, alt, caption } — images (.avif/.png/.jpg) or videos (.mp4) from assets/.
// Videos can also take a poster: a still .jpg shown before the clip loads.

window.RUBRIC = {
  district: "Akron Public Schools",
  title: "Formative's response to your assessment platform rubric",
  preparedOn: "November 2026",
  intro:
    "Every answer below follows your rubric's structure: the same areas, criteria and weights. Where it helps, we've added a screenshot or short clip so you can see the feature, not just read about it.",
  contact: { name: "", email: "", phone: "" },

  areas: [
    {
      name: "Cost",
      weight: 40,
      rows: [
        {
          q: "What is the cost to onboard?",
          answer: "There is no additional cost to onboard.",
        },
        { q: "What are the annual costs?", answer: "" },
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
            src: "assets/img/staff-interface.avif",
            alt: "Teacher view of a live assessment, with each student's score per question and the Luna AI assistant open beside it",
            caption: "The teacher view while students take an assessment",
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
          answer:
            "Assessments can be created from scratch, imported from Google Drive, parsed with Luna (AI), or created at district level and shared with teachers.",
          media: {
            src: "assets/video/luna-creates-assessment.mp4",
            poster: "assets/video/luna-creates-assessment.jpg",
            alt: "A teacher asks Luna for grade 8 forces and motion questions; Luna drafts multiple choice, numeric, categorize and short answer items tagged to standards, and the teacher accepts them all",
            caption: "Luna drafting a standards-tagged quick check from one request (sped up)",
          },
        },
        {
          q: "Questions can be aligned to current Ohio Learning Standards",
          answer:
            "Yes, all content can be aligned to Ohio State Learning Standards, as well as Depth of Knowledge. Additionally, Formative will update standards when the state adjusts.",
          media: {
            src: "assets/img/responses-standards.avif",
            alt: "Teacher responses view filtered by standard, with scores per standard and a feedback box for one student",
            caption: "Results filtered by standard",
          },
        },
        {
          q: "Can we migrate our existing assessments into the platform",
          answer:
            "Yes, you will have an assessment specialist that can support in the migration of current assessments into the platform, so there will be less manual work for your team.",
          media: {
            src: "assets/img/upload-pdf.png",
            alt: "Uploading a PDF to turn an existing assessment into an editable one",
            caption: "Upload a PDF or pick a file from Google Drive",
          },
        },
        {
          q: "Do you have pre-built Ohio state test (OAA/OGT/AIR) practice items for grades 3-12?",
          answer:
            "There are existing items in the library. It is also possible to create configurations with Luna to directly support assessment items aligned to the state test.",
        },
        {
          q: "Are items tagged by standard, Bloom's level, and DOK level?",
          answer: "Yes, by standard and DOK level. Bloom's Taxonomy levels could be added as well.",
        },
        {
          q: "What item types are supported? (MC, TEI, short answer, extended response, drag-and-drop, etc.)",
          answer:
            "There are a wide variety of tech enhanced question types to support all content areas across K-12. Some of these include multiple choice, multiple select, short answer, free response, drag and drop, numeric, graphing, in-line choice, match table grid, categorize, etc.",
          media: {
            src: "assets/img/question-types.avif",
            alt: "The list of content and question types available when adding to an assessment",
            caption: "Content and question types",
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
          answer:
            "Yes, teachers can hand score open-ended items, as well as rubric aligned items. Teachers can also utilize Luna, the AI, to score against a rubric (nothing is shared/sent to students without a teacher sending it).",
          media: {
            src: "assets/img/teacher-review.avif",
            alt: "A teacher reviewing two students' written answers, setting a score and writing feedback",
            caption: "Scoring and giving feedback on written answers",
          },
        },
        { q: "Do you support analytic or holistic scoring rubrics for open-ended items?", answer: "" },
        { q: "Can we set up item banks specific to grade and content areas?", answer: "" },
      ],
    },

    {
      name: "Test configuration & delivery",
      weight: 16,
      rows: [
        {
          q: "Can district staff author new items? Is there a review/approval workflow?",
          answer:
            "Teachers can author items for their own classroom assessments, or can support creation of common assessments with district discretion.",
        },
        {
          q: "Can tests be shared across buildings, departments, and individual teachers?",
          answer:
            "Yes, collaboration is simple in Formative. Teachers can share with PLCs, and the district can send an assessment to a grade level, building, or entire district.",
          media: {
            src: "assets/img/collaborators.avif",
            alt: "Adding collaborators to a set of shared exit tickets",
            caption: "Sharing assessments with colleagues",
          },
        },
        {
          q: "Can the district lock/protect assessments so teachers cannot alter them?",
          answer:
            "Yes, any district common assessments can be locked down so that teachers cannot alter any questions. Formative also has Benchmark Mode, where a district can lock the assessment so teachers don't even see the questions.",
          media: {
            src: "assets/img/common-assessment-settings.avif",
            alt: "Common assessment settings: permissions, assessment window, scheduled release and display options",
            caption: "Common assessment settings",
          },
        },
        {
          q: "Can we randomize item order and/or answer choices to reduce academic dishonesty?",
          answer: "Yes, both the questions and answer choices can be given in random order.",
        },
        {
          q: "Can we set time limits, section breaks, and student pacing controls?",
          answer:
            "Assessment settings are extremely flexible and can include time limits, open and close windows, feedback release, score release, testing accommodations, teacher paced (teacher controls the pace of the assessment), and student paced.",
        },
        {
          q: "Do you support online AND paper/pencil administration from the same platform?",
          answer:
            "Yes, Formative has print options to complete an assessment on paper in addition to the online version. There is also an add-on called Bubble Sheet, where students can complete the paper version like a scantron, and upload the results into Formative to access the data.",
        },
        {
          q: "What accommodation tools are built in? (text-to-speech, extended time, separate settings, zoom, etc.)",
          answer:
            "Accommodations available are text-to-speech, extended time, translations, answer choice reduction, color contrast, and masking. Additionally, teachers can turn on answer choice explanations, hints, and student notes for extra scaffolds and support.",
        },
        {
          q: "Do you support English Learner accommodations including translated test directions?",
          answer:
            "Yes, an entire assessment, including directions can be translated to a students native language.",
        },
        {
          q: "Can we schedule and pre-assign tests to specific students or groups?",
          answer:
            "Yes, tests can be assigned to specific groups of students, individual students, or whole class(es). Open/close times can be set as well.",
        },
        {
          q: "Is there a secure lockdown browser or testing client available?",
          answer:
            "Yes, Formative utilizes Respondus Lockdown Browser to ensure a secure testing environment. Teachers can turn on entry and quit passwords, and will be notified if a student tries to exit the assessment or open other windows. In lockdown mode, students cannot exit the assessment, take a screenshot, or open other browsers.",
        },
        {
          q: "Does your platform have any form of \"cheat detection\" including monitoring time spent on items and rapid correct responses? I.E. technology that would assist with detecting the use of a cell phone to complete an assessment.",
          answer:
            "copy/paste, detection- show video of live responses, one student go really fast, and one slow, student logged into a different device notifications",
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
          answer:
            "Formative has an integration to Schoolytics and would send the data nightly to be viewed in Schoolytics with whatever filtering the district would prefer.",
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
          answer:
            "Yes, there are both teacher and administrator permissions and all data is available in real time, so insights can be actionable. Teachers are able to see their own classrooms of data, as well as PLC data together if preferred. Building administrators can see their building's data, and district administrators can see all of the data in a singular view. From there, admin are able to filter to specific views and save that report for the future.",
          media: {
            src: "assets/img/reporting.avif",
            alt: "An assessment report with overall score bands, standards tagged, lowest-scoring questions and demographic breakdowns",
            caption: "An assessment report",
          },
        },
        {
          q: "Is there standard-by-standard reporting tied directly to Ohio Academic Standards?",
          answer:
            "Yes, for a teacher in the Responses tab, they can filter to a standards view to see how students are performing on each standard that's assessed. In the Insights tab, PLCs can look at their standards data together as well. For an administrator, in the Team Tracker view, they can also set the viewing to standards to see how the entire district, schools, grade levels, PLCs, etc. are performing on state standards.",
          media: {
            src: "assets/img/tracker-standards.avif",
            alt: "Tracker view with one student's mastery broken down standard by standard",
            caption: "Standard-by-standard mastery for one student",
          },
        },
        {
          q: "Can teachers see their own class results without seeing other teachers' data?",
          answer:
            "Yes, teachers can see their own classroom data as soon as students begin taking an assessment. All data is real time. If a district would like teachers to see each other's data in PLCs, that can be allowed, but is at the discretion of the district.",
        },
        {
          q: "Can building admin see both district and classroom teacher created assessment results?",
          answer:
            "The district sets the permissions and can allow building administrators to see it if they choose to allow it. Otherwise, building administrators will only see their building data.",
        },
        {
          q: "Can district admin see building level results for teacher created assessments?",
          answer:
            "Yes, administrators are able to view all teacher level data without needing to do any additional steps. They can see it by building, PLC, individual teacher, student, grade level, etc.",
        },
      ],
    },

    {
      name: "Training & support",
      weight: 5,
      rows: [
        { q: "How long to rollout? What does rollout look like?", answer: "" },
        { q: "Explain initial PD for tech? For end users?", answer: "" },
        { q: "What are your training tools/methodology?", answer: "" },
        {
          q: "Describe your Help Desk support?",
          answer: "Yes, the district will also have a customer success manager to support directly.",
          draft: true,
        },
      ],
    },

    {
      name: "SSO, role-based access & data privacy",
      weight: 5,
      rows: [
        { q: "Do you have SSO?", answer: "Yes" },
        { q: "Can security roles be automated?", answer: "Yes" },
        { q: "How many roles do you have?", answer: "Teacher and administrator" },
        { q: "Can tech admins impersonate others?", answer: "yes- in teacher report", draft: true },
      ],
    },

    {
      name: "Artificial intelligence",
      weight: 5,
      rows: [
        {
          q: "Describe how your application uses/integrates Artificial Intelligence?",
          answer:
            "Our platform has Luna (AI) for teacher and administration use only. Administration can create Luna configurations to support alignment to district frameworks/state standards/state tests, etc. When a configuration is created, teachers and admin can then use that config to support the creation of assessments within district confinements. Luna has built in configurations for math, science, ELA, and social studies, as well as rigor booster and misconception buster to support creation of assessments. Luna can generate hints and answer choice explanations, as well as support grading, and feedback creation. Luna is also used to parse existing assessments into editable, digital versions. Students have no access to AI.",
          media: {
            src: "assets/img/luna-next-steps.avif",
            alt: "Luna suggesting next steps after an assessment: a practice set or follow-up formative on the standards students struggled with",
            caption: "Luna suggesting next steps from results",
          },
        },
        { q: "What are the limitations and philosophy for Artificial Intelligence?", answer: "" },
      ],
    },

    {
      name: "Years in business",
      weight: 2,
      rows: [
        { q: "How long have you been in business with assessment platforms?", answer: "" },
        { q: "Do you have any customers in Ohio? If so who?", answer: "" },
        { q: "Can you share your financial stability?", answer: "" },
      ],
    },
  ],
};
