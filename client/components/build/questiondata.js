const yesNo = [ "Yes", "No" ]

const questions = [
    {
        text: "Do you want a server?",
        type: "radio",
        options: yesNo,
        yes: 1,
        no: 3
    },
    {
        text: "Do you want a database?",
        type: "radio",
        options: yesNo,
        yes: 2,
        no: 3
    },
    {
        text: "Would you like an extra router?",
        type: "radio",
        options: yesNo,
        yes: 3,
        no: 3
    },
    {
        text: "FRONT END TIME: Do you want to use React",
        type: "radio",
        options: yesNo,
        yes: 4,
        no: "finished"
    },
    {
        text: "Do you want to use react-router?",
        type: "radio",
        options: yesNo,
        yes: 5,
        no: 5
    },
    {
        text: "Would you like to use React Redux or React Hooks to manage state?",
        type: "select",
        options: ["React Redux", "React Hooks", "Neither"]
    },
]

export default backEndQuestions