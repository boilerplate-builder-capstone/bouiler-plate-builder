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
        text: "Let's talk about the front end. Do you want to use React?",
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
        text: "Would you like to use React Redux to manage state on the front end?",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: 6,
            body: {redux: true}
        },
        No: {
            nextQuestion: 6,
            body: {redux: false}
        }
    },
    {
        text: "Would you also like to use React Hooks to manage component state?",
        type: "radio",
        options: yesNo,
        Yes: {
            nextQuestion: null,
            body: {reacthooks: true}
        },
        No: {
            nextQuestion: null,
            body: {reacthooks: false}
        }
    }
]

export default questions