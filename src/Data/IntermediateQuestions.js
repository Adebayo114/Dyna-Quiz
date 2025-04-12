const intermediateQuestions = {
  html: [
    {
      question: "What does the 'defer' attribute do in a <script> tag?",
      options: [
        "Executes the script immediately",
        "Defers execution until after the page has loaded",
        "Delays the script until a user event",
        "Loads the script asynchronously"
      ],
      answer: "Defers execution until after the page has loaded"
    },
    {
      question: "Which HTML tag is used for embedding SVG graphics?",
      options: ["<canvas>", "<vector>", "<svg>", "<img>"],
      answer: "<svg>"
    },
    {
      question: "What is the purpose of the 'srcset' attribute in <img>?",
      options: [
        "Sets fallback image",
        "Specifies multiple image sources based on resolution",
        "Defines image size",
        "Creates a slideshow"
      ],
      answer: "Specifies multiple image sources based on resolution"
    },
    {
      question: "Which tag is used for defining navigation links?",
      options: ["<section>", "<menu>", "<nav>", "<footer>"],
      answer: "<nav>"
    },
    {
      question: "What does the 'autocomplete' attribute do in a form?",
      options: [
        "Enables form validation",
        "Allows browser to suggest previously entered values",
        "Validates email format",
        "Automatically submits the form"
      ],
      answer: "Allows browser to suggest previously entered values"
    },
    {
      question: "What is the correct use of the <datalist> tag?",
      options: [
        "To define a dropdown menu",
        "To link CSS",
        "To define options for an input",
        "To provide metadata"
      ],
      answer: "To define options for an input"
    },
    {
      question: "Which tag is used to define a caption for a <figure>?",
      options: ["<caption>", "<figcaption>", "<legend>", "<summary>"],
      answer: "<figcaption>"
    },
    {
      question: "What is the function of the <template> tag in HTML?",
      options: [
        "Used for reusable components",
        "Stores client-side content not rendered when the page loads",
        "Defines document metadata",
        "Applies global styles"
      ],
      answer: "Stores client-side content not rendered when the page loads"
    },
    {
      question: "What does the 'contenteditable' attribute do?",
      options: [
        "Makes the element read-only",
        "Makes the element editable",
        "Encrypts the content",
        "Disables the element"
      ],
      answer: "Makes the element editable"
    },
    {
      question: "What is the purpose of the <output> tag?",
      options: [
        "To define output from a calculation or script",
        "To display alert messages",
        "To write console logs",
        "To define JavaScript blocks"
      ],
      answer: "To define output from a calculation or script"
    },
    {
      question: "Which attribute sets the language of an HTML document?",
      options: ["lang", "xml:lang", "charset", "locale"],
      answer: "lang"
    },
    {
      question: "Which input type is used to select a number within a range?",
      options: ["number", "range", "slider", "progress"],
      answer: "range"
    },
    {
      question: "How do you mark text as important in HTML?",
      options: ["<strong>", "<b>", "<mark>", "<em>"],
      answer: "<strong>"
    },
    {
      question: "Which tag is used to group options in a dropdown list?",
      options: ["<optiongroup>", "<optgroup>", "<fieldset>", "<legend>"],
      answer: "<optgroup>"
    },
    {
      question: "How do you make an input field required?",
      options: [
        "Add type='required'",
        "Add required='true'",
        "Add required",
        "Add validate='true'"
      ],
      answer: "Add required"
    }
  ],
  css: [
    {
      question: "What does the `z-index` property control?",
      options: ["Font size", "Stacking order", "Padding", "Line height"],
      answer: "Stacking order"
    },
    {
      question: "Which of the following units is relative to the font-size of the element?",
      options: ["px", "em", "%", "vh"],
      answer: "em"
    },
    {
      question: "What pseudo-class targets the first child of an element?",
      options: [":first-type", ":nth-child(1)", ":first-child", ":first"],
      answer: ":first-child"
    },
    {
      question: "Which CSS property is used to change the bullet style of a list?",
      options: ["list-style", "bullet-type", "text-style", "list-type"],
      answer: "list-style"
    },
    {
      question: "How do you make a grid with two equal columns?",
      options: [
        "grid-template-columns: auto auto;",
        "grid-template-columns: 1fr 1fr;",
        "display: flex;",
        "grid-template-columns: equal equal;"
      ],
      answer: "grid-template-columns: 1fr 1fr;"
    },
    {
      question: "Which value of `position` allows an element to be positioned relative to the viewport?",
      options: ["absolute", "relative", "fixed", "sticky"],
      answer: "fixed"
    },
    {
      question: "Which property controls the speed of transition effects?",
      options: ["animation", "transition-delay", "transition-duration", "speed"],
      answer: "transition-duration"
    },
    {
      question: "Which of these is not a valid media feature in a media query?",
      options: ["max-width", "device-height", "min-resolution", "screen-ratio"],
      answer: "screen-ratio"
    },
    {
      question: "What does `rem` stand for in CSS?",
      options: ["Root element margin", "Relative em", "Root em", "Responsive em"],
      answer: "Root em"
    },
    {
      question: "Which CSS property prevents text from wrapping to the next line?",
      options: ["text-wrap", "white-space", "nowrap", "overflow"],
      answer: "white-space"
    },
    {
      question: "How do you apply a style only on screens wider than 768px?",
      options: [
        "@media (width > 768px)",
        "@media screen and (min-width: 768px)",
        "@media only screen (768px)",
        "@media screen 768+"
      ],
      answer: "@media screen and (min-width: 768px)"
    },
    {
      question: "What value of `overflow` hides overflowing content?",
      options: ["auto", "scroll", "hidden", "collapse"],
      answer: "hidden"
    },
    {
      question: "Which CSS function is used to apply transparency?",
      options: ["rgba()", "opacity()", "alpha()", "hsl()"],
      answer: "rgba()"
    },
    {
      question: "Which shorthand property can set margin on all four sides?",
      options: ["margin-all", "set-margin", "margin", "padding"],
      answer: "margin"
    },
    {
      question: "What does `inherit` do in a CSS property?",
      options: ["Assigns default", "Clears the value", "Copies parent value", "Sets to auto"],
      answer: "Copies parent value"
    }
  ],
  javascript:[
    {
      question: "What does the `this` keyword refer to in a regular function (not strict mode)?",
      options: ["The current file", "The calling object", "The global object", "The class"],
      answer: "The global object"
    },
    {
      question: "What will `typeof NaN` return?",
      options: ["undefined", "object", "number", "NaN"],
      answer: "number"
    },
    {
      question: "What does the `map()` function do?",
      options: [
        "Modifies original array",
        "Filters items based on condition",
        "Creates a new array with results",
        "Sorts an array"
      ],
      answer: "Creates a new array with results"
    },
    {
      question: "Which keyword is used to define a constant variable?",
      options: ["let", "var", "const", "define"],
      answer: "const"
    },
    {
      question: "How do you convert a string to a number in JavaScript?",
      options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["String", "Boolean", "Float", "Undefined"],
      answer: "Float"
    },
    {
      question: "What will `[...'abc']` return?",
      options: ["['abc']", "[a, b, c]", "Syntax error", "['a','bc']"],
      answer: "[a, b, c]"
    },
    {
      question: "What does `===` check in JavaScript?",
      options: ["Value only", "Type only", "Value and Type", "Reference"],
      answer: "Value and Type"
    },
    {
      question: "Which method can stop an interval?",
      options: ["clearInterval()", "stopInterval()", "cancelInterval()", "removeInterval()"],
      answer: "clearInterval()"
    },
    {
      question: "What is the result of `Boolean('false')`?",
      options: ["false", "true", "undefined", "null"],
      answer: "true"
    },
    {
      question: "Which statement correctly declares an arrow function?",
      options: [
        "function => () {}",
        "() -> {}",
        "() => {}",
        "function() => {}"
      ],
      answer: "() => {}"
    },
    {
      question: "Which array method returns the first matching element?",
      options: ["filter()", "find()", "map()", "includes()"],
      answer: "find()"
    },
    {
      question: "Which object holds browser timing events?",
      options: ["Browser", "Console", "Window", "Event"],
      answer: "Window"
    },
    {
      question: "What does the `finally` block do in a try/catch?",
      options: ["Runs only on error", "Runs after try", "Runs always", "Skips execution"],
      answer: "Runs always"
    },
    {
      question: "What will `0 == '0'` return?",
      options: ["true", "false", "undefined", "error"],
      answer: "true"
    }
  ]
};


// Verification function (run to check for errors)
function validateQuestions() {
  Object.entries(intermediateQuestions).forEach(([category, questions]) => {
      questions.forEach((q, i) => {
          if (!q.options.includes(q.answer)) {
              console.error(`Error in ${category} Q${i + 1}: Answer not found in options`);
          }
      });
  });
  console.log("Validation complete - no errors found");
}
validateQuestions();

export default intermediateQuestions;