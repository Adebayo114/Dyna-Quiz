const beginnersQuestions = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyperlinks and Text Markup Language",
                "HighText Machine Language",
                "Hyper Text Markup Language", // Answer (3rd)
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used to define a paragraph in HTML?",
            options: [
                "<div>",
                "<p>", // Answer (2nd)
                "<h1>",
                "<para>"
            ],
            answer: "<p>"
        },
        {
            question: "Which tag is used for inserting an image?",
            options: [
                "<src>",
                "<img>", // Answer (2nd)
                "<image>",
                "<pic>"
            ],
            answer: "<img>"
        },
        {
            question: "Which tag creates a hyperlink?",
            options: [
                "<url>",
                "<a>", // Answer (2nd)
                "<href>",
                "<link>"
            ],
            answer: "<a>"
        },
        {
            question: "How do you write a comment in HTML?",
            options: [
                "/* comment */",
                "<!-- comment -->", // Answer (2nd)
                "// comment",
                "# comment"
            ],
            answer: "<!-- comment -->"
        },
        {
            question: "Which tag is used to make text bold?",
            options: [
                "<b>", // Answer (1st)
                "<strong>",
                "<bold>",
                "<em>"
            ],
            answer: "<b>"
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            options: [
                "<ol>",
                "<li>",
                "<ul>", // Answer (3rd)
                "<list>"
            ],
            answer: "<ul>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "<br>", // Answer (1st)
                "<lb>",
                "<break>",
                "<line>"
            ],
            answer: "<br>"
        },
        {
            question: "What tag is used to define a table row?",
            options: [
                "<tr>", // Answer (1st)
                "<td>",
                "<th>",
                "<row>"
            ],
            answer: "<tr>"
        },
        {
            question: "What attribute specifies an image file in <img> tag?",
            options: [
                "href",
                "alt",
                "src", // Answer (3rd)
                "file"
            ],
            answer: "src"
        },
        {
            question: "How do you define a title for the HTML document?",
            options: [
                "<title>", // Answer (1st)
                "<head>",
                "<header>",
                "<meta>"
            ],
            answer: "<title>"
        },
        {
            question: "What tag is used to define the main content of an HTML document?",
            options: [
                "<body>",
                "<section>",
                "<main>", // Answer (3rd)
                "<article>"
            ],
            answer: "<main>"
        },
        {
            question: "Which element is used to create a dropdown list?",
            options: [
                "<select>", // Answer (1st)
                "<dropdown>",
                "<list>",
                "<option>"
            ],
            answer: "<select>"
        },
        {
            question: "Which tag is used for table data?",
            options: [
                "<td>", // Answer (1st)
                "<tr>",
                "<table>",
                "<th>"
            ],
            answer: "<td>"
        },
        {
            question: "Which tag adds a heading?",
            options: [
                "<head>",
                "<h1>", // Answer (2nd)
                "<heading>",
                "<title>"
            ],
            answer: "<h1>"
        }
    ],

    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Syntax",
                "Cascading Style Sheets", // Answer (2nd)
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which CSS property changes text color?",
            options: [
                "font-color",
                "color", // Answer (2nd)
                "text-color",
                "foreground"
            ],
            answer: "color"
        },
        {
            question: "How do you select an element with ID 'main'?",
            options: [
                "#main", // Answer (1st)
                ".main",
                "main",
                "*main"
            ],
            answer: "#main"
        },
        {
            question: "How do you select all <p> elements?",
            options: [
                ".p",
                "p", // Answer (2nd)
                "#p",
                "*p"
            ],
            answer: "p"
        },
        {
            question: "Which property is used to change the background color?",
            options: [
                "background-color", // Answer (1st)
                "bg-color",
                "color-bg",
                "background"
            ],
            answer: "background-color"
        },
        {
            question: "Which value is used to make a font bold?",
            options: [
                "weight",
                "bolder",
                "bold", // Answer (3rd)
                "strong"
            ],
            answer: "bold"
        },
        {
            question: "Which property controls the size of text?",
            options: [
                "font-size", // Answer (1st)
                "text-size",
                "font",
                "size"
            ],
            answer: "font-size"
        },
        {
            question: "How do you add a comment in CSS?",
            options: [
                "// comment",
                "<!-- comment -->",
                "/* comment */", // Answer (3rd)
                "# comment"
            ],
            answer: "/* comment */"
        },
        {
            question: "Which property is used to align text in the center?",
            options: [
                "text-align", // Answer (1st)
                "align",
                "center",
                "text-style"
            ],
            answer: "text-align"
        },
        {
            question: "What is the default position of elements in HTML?",
            options: [
                "relative",
                "static", // Answer (2nd)
                "absolute",
                "fixed"
            ],
            answer: "static"
        },
        {
            question: "Which property adds space inside an element?",
            options: [
                "margin",
                "padding", // Answer (2nd)
                "border",
                "spacing"
            ],
            answer: "padding"
        },
        {
            question: "Which property adds space outside an element?",
            options: [
                "margin", // Answer (1st)
                "padding",
                "border",
                "spacing"
            ],
            answer: "margin"
        },
        {
            question: "What selector targets all elements?",
            options: [
                "all",
                "*", // Answer (2nd)
                "universal",
                "document"
            ],
            answer: "*"
        },
        {
            question: "What is the correct CSS syntax to make all <p> elements red?",
            options: [
                "#p { color: red; }",
                "p { color: red; }", // Answer (2nd)
                ".p { color: red; }",
                "p: red;"
            ],
            answer: "p { color: red; }"
        },
        {
            question: "Which unit is relative to the parent font size?",
            options: [
                "px",
                "em", // Answer (2nd)
                "rem",
                "%"
            ],
            answer: "em"
        }
    ],
    javascript: [
        {
            question: "What is JavaScript mainly used for?",
            options: [
                "Styling HTML",
                "Making web pages interactive", // Answer (2nd)
                "Storing data",
                "Creating databases"
            ],
            answer: "Making web pages interactive"
        },
        {
            question: "How do you write a single-line comment in JavaScript?",
            options: [
                "# comment",
                "/* comment */",
                "// comment", // Answer (3rd)
                "<!-- comment -->"
            ],
            answer: "// comment"
        },
        {
            question: "How do you declare a variable?",
            options: [
                "let",
                "var",
                "const",
                "All of the above" // Answer (4th)
            ],
            answer: "All of the above"
        },
        {
            question: "What keyword is used to define a function?",
            options: [
                "function", // Answer (1st)
                "def",
                "fun",
                "method"
            ],
            answer: "function"
        },
        {
            question: "How do you call a function named 'greet'?",
            options: [
                "greet()", // Answer (1st)
                "call greet",
                "greet;",
                "function greet()"
            ],
            answer: "greet()"
        },
        {
            question: "What symbol is used to compare equality?",
            options: [
                "===", // Answer (1st)
                "==",
                "=",
                "!="
            ],
            answer: "==="
        },
        {
            question: "Which data type is NOT primitive?",
            options: [
                "Number",
                "String",
                "Boolean",
                "Object" // Answer (4th)
            ],
            answer: "Object"
        },
        {
            question: "What does 'typeof' do?",
            options: [
                "Checks data type", // Answer (1st)
                "Creates a type",
                "Changes a type",
                "None"
            ],
            answer: "Checks data type"
        },
        {
            question: "Which operator is used for addition?",
            options: [
                "+", // Answer (1st)
                "-",
                "*",
                "="
            ],
            answer: "+"
        },
        {
            question: "What will '3' + 2 return?",
            options: [
                "5",
                "32", // Answer (2nd)
                "Error",
                "6"
            ],
            answer: "32"
        },
        {
            question: "How do you create an array?",
            options: [
                "[]", // Answer (1st)
                "()",
                "{}",
                "<>"
            ],
            answer: "[]"
        },
        {
            question: "How do you access the first item in an array?",
            options: [
                "array[0]", // Answer (1st)
                "array(0)",
                "array{0}",
                "array.first()"
            ],
            answer: "array[0]"
        },
        {
            question: "What is a loop used for?",
            options: [
                "Repeating code", // Answer (1st)
                "Stopping code",
                "Importing code",
                "None"
            ],
            answer: "Repeating code"
        },
        {
            question: "What is the result of 10 % 3?",
            options: [
                "1", // Answer (1st)
                "3",
                "0",
                "10"
            ],
            answer: "1"
        },
        {
            question: "How do you write a conditional statement?",
            options: [
                "when x > y",
                "if (x > y) {}", // Answer (2nd)
                "x > y then",
                "if x > y then"
            ],
            answer: "if (x > y) {}"
        }
    ]
};

// Verification function (run to check for errors)
function validateQuestions() {
    Object.entries(beginnersQuestions).forEach(([category, questions]) => {
        questions.forEach((q, i) => {
            if (!q.options.includes(q.answer)) {
                console.error(`Error in ${category} Q${i + 1}: Answer not found in options`);
            }
        });
    });
    console.log("Validation complete - no errors found");
}
validateQuestions();
export default beginnersQuestions;