const yesNo = [ "Yes", "No" ]

const questions = [
    {
        text: "Do you want a server?",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: 1,
            body: {server: true}
        },
        No: {
            nextQuestion: 3,
            body: {server: false}
        }
    },
    {
        text: "Do you want a database?",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: 2,
            body: {db: true}
        },
        No: {
            nextQuestion: 3,
            body: {db: false}
        }
    },
    {
        text: "Would you like an extra router?",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: 3,
            body: {extraRouter: true}
        },
        No: {
            nextQuestion: 3,
            body: {extraRouter: false}
        }
    },
    {
        text: "FRONT END TIME: Do you want to use React",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: 4,
            body: {react: true}
        },
        No: {
            nextQuestion: null,
            body: {react: false}
        }
    },
    {
        text: "Do you want to use react-router?",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: 5,
            body: {reactRouter: true}
        },
        No: {
            nextQuestion: 5,
            body: {reactRouter: false}
        }
    },
    {
        text: "Would you like to use React Redux or React Hooks to manage state?",
        type: "dropdown",
        options: ["React Redux", "React Hooks", "Neither"],
        "React Redux": {
            nextQuestion: null,
            body: {
                redux: true,
                reactHooks: false
            }
        },
        "React Hooks": {
            nextQuestion: null,
            body: {
                redux: false,
                reactHooks: true
            }
        },
        "Neither": {
            nextQuestion: null,
            body: {
                redux: false,
                reactHooks: false
            }
        }
    }
]

export default questions