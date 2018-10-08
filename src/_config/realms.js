
export default [
  {
    identifier: 'student',
    title: "Student",
    description: "this is some optional description",
    url: "/student",
    metaData: {
        userType: "student",
        benefits: [
          {
            title: "Create groups",
          },
          {
            title: "Invite teachers to review",
          },
          {
            title: "Publish reports to public to be reviewed",
          },
          {
            title: "Request reviewship",
          },
          {
            title: "And more",
          },
        ] 
      }
  },
  {
    identifier: 'teacher',
    title: "Teacher",
    description: "this is some optional description",
    url: "/teacher",
    metaData: {
        userType: "teacher",
        benefits: [
          {
            title: "Create and lead Classrooms",
          },
          {
            title: "Send invitations to students",
          },
          {
            title: "Create assignments",
          },
          {
            title: "Set rules for assignments",
          },
          {
            title: "And more",
          },
        ] 
      }
  },
] 