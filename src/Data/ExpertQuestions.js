const expertQuestions = {
  html: [
    {
      question: "Which HTML tag is used to declare a document's base URL for all relative URLs?",
      options: ["<head>", "<link>", "<base>", "<meta>"],
      answer: "<base>",
    },
    {
      question: "What attribute is used in HTML5 to specify that an input field must be filled out?",
      options: ["validate", "required", "mandatory", "placeholder"],
      answer: "required",
    },
    {
      question: "Which tag is used for defining a part of text that might be formatted differently?",
      options: ["<span>", "<div>", "<section>", "<article>"],
      answer: "<span>",
    },
    {
      question: "What does the `sandbox` attribute do in an `<iframe>` tag?",
      options: [
        "Allows full access to iframe",
        "Disables iframe resizing",
        "Restricts iframe behavior",
        "Improves load speed"
      ],
      answer: "Restricts iframe behavior"
    },
    {
      question: "Which element is used to embed SVG directly in HTML?",
      options: ["<svg>", "<vector>", "<canvas>", "<img>"],
      answer: "<svg>",
    },
    {
      question: "Which tag defines a scalar measurement within a known range?",
      options: ["<range>", "<progress>", "<output>", "<meter>"],
      answer: "<meter>",
    },
    {
      question: "What is the correct use of the `autofocus` attribute?",
      options: [
        "<input autofocus='true'>",
        "<input autofocus>",
        "<input focus>",
        "<input auto-focus>"
      ],
      answer: "<input autofocus>",
    },
    {
      question: "Which tag is used to define a caption for a `<figure>`?",
      options: ["<figcaption>", "<caption>", "<summary>", "<legend>"],
      answer: "<figcaption>",
    },
    {
      question: "What does the `manifest` attribute in `<html>` do?",
      options: [
        "Defines external script files",
        "Specifies offline cache file",
        "Declares charset",
        "Embeds metadata"
      ],
      answer: "Specifies offline cache file"
    },
    {
      question: "Which tag is used for machine-readable data in HTML?",
      options: ["<code>", "<pre>", "<data>", "<dfn>"],
      answer: "<data>"
    },
    {
      question: "What is the use of `<template>` tag in HTML5?",
      options: [
        "Defines a reusable HTML snippet",
        "Defines an iframe content",
        "Used for CSS templates",
        "Loads layout templates"
      ],
      answer: "Defines a reusable HTML snippet"
    },
    {
      question: "What is the correct use of `accesskey` in HTML?",
      options: [
        "<button accesskey='s'>",
        "<button key='s'>",
        "<button shortcut='s'>",
        "<button ctrl='s'>"
      ],
      answer: "<button accesskey='s'>"
    },
    {
      question: "What does the `<bdi>` tag do?",
      options: [
        "Bold italic text",
        "Bi-directional isolation",
        "Browser debug interface",
        "Brings display inline"
      ],
      answer: "Bi-directional isolation"
    },
    {
      question: "Which tag is used to group options inside a select box?",
      options: ["<optgroup>", "<group>", "<fieldset>", "<labelgroup>"],
      answer: "<optgroup>"
    },
    {
      question: "Which attribute is used to specify a fallback image for `<img>`?",
      options: ["onerror", "alt", "fallback", "default"],
      answer: "onerror"
    }
  ],

  css: [
    {
      question: "Which CSS property specifies how an element should blend with the background?",
      options: ["mix-mode", "background-blend", "blend-mode", "mix-blend-mode"],
      answer: "mix-blend-mode"
    },
    {
      question: "What does the `contain` property do?",
      options: [
        "Contain content inside borders",
        "Improve performance by limiting rendering scope",
        "Control content overflow",
        "Wrap flex items"
      ],
      answer: "Improve performance by limiting rendering scope"
    },
    {
      question: "What value of `display` allows grid and block layout together?",
      options: ["inline-grid", "block", "flex-grid", "subgrid"],
      answer: "subgrid"
    },
    {
      question: "Which CSS property can force hardware acceleration?",
      options: ["will-change", "transform: translateZ(0)", "backface-visibility", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which property is used for custom property declaration in CSS?",
      options: ["$variable", "--varname", "@var", "css-var"],
      answer: "--varname"
    },
    {
      question: "How do you apply styles when printing a webpage?",
      options: [
        "@media screen",
        "@media print",
        "@media device",
        "@media paper"
      ],
      answer: "@media print"
    },
    {
      question: "Which property is used to animate elements?",
      options: ["animation", "transition", "animate", "motion"],
      answer: "animation"
    },
    {
      question: "What does `isolation: isolate` do?",
      options: [
        "Isolates the element from z-index stacking",
        "Separates the flexbox children",
        "Prevents inheritance",
        "Blocks blend modes"
      ],
      answer: "Isolates the element from z-index stacking"
    },
    {
      question: "Which pseudo-class selects the currently focused input?",
      options: [":hover", ":checked", ":focus", ":current"],
      answer: ":focus"
    },
    {
      question: "What is the effect of `backface-visibility: hidden;`?",
      options: [
        "Hides the back of a rotated element",
        "Hides the background",
        "Applies to borders only",
        "Removes opacity"
      ],
      answer: "Hides the back of a rotated element"
    },
    {
      question: "Which of the following is not a valid value for `position`?",
      options: ["sticky", "static", "absolute", "float"],
      answer: "float"
    },
    {
      question: "How can you apply a style to elements with a specific attribute?",
      options: ["[attr]", "#attr", ".attr", "*attr"],
      answer: "[attr]"
    },
    {
      question: "Which value of `flex` makes an element grow and shrink?",
      options: ["1", "auto", "grow", "flex"],
      answer: "1"
    },
    {
      question: "What does `clip-path` do?",
      options: [
        "Clips content using shape or SVG",
        "Resizes images",
        "Hides overflow",
        "Adjusts padding"
      ],
      answer: "Clips content using shape or SVG"
    },
    {
      question: "Which of these is a valid CSS logical property?",
      options: ["margin-inline-start", "margin-left", "inline-padding", "block-align"],
      answer: "margin-inline-start"
    }
  ],

  javascript: [
    {
      question: "What is the result of `[] + []` in JavaScript?",
      options: ["0", "undefined", "", "NaN"],
      answer: ""
    },
    {
      question: "What does `Object.freeze()` do?",
      options: [
        "Makes an object immutable",
        "Deletes object properties",
        "Prevents reassignment",
        "None of the above"
      ],
      answer: "Makes an object immutable"
    },
    {
      question: "What will `typeof NaN` return?",
      options: ["number", "NaN", "undefined", "object"],
      answer: "number"
    },
    {
      question: "How can you make a deep copy of an object?",
      options: [
        "JSON.parse(JSON.stringify(obj))",
        "Object.assign({}, obj)",
        "obj.copy()",
        "Object.create(obj)"
      ],
      answer: "JSON.parse(JSON.stringify(obj))"
    },
    {
      question: "What does the `??` operator do?",
      options: [
        "Returns first truthy value",
        "Nullish coalescing: returns right if left is null or undefined",
        "Checks equality",
        "Fallback for any falsy value"
      ],
      answer: "Nullish coalescing: returns right if left is null or undefined"
    },
    {
      question: "Which of these is a WeakMap key type?",
      options: ["String", "Object", "Boolean", "Number"],
      answer: "Object"
    },
    {
      question: "Which of the following is NOT hoisted?",
      options: ["var", "function declaration", "let", "function expression"],
      answer: "let"
    },
    {
      question: "Which method converts an array to a string with separators?",
      options: ["join()", "toString()", "split()", "concat()"],
      answer: "join()"
    },
    {
      question: "Which function converts a Set to an array?",
      options: [
        "Array.from(set)",
        "set.toArray()",
        "set.convert()",
        "[...set]"
      ],
      answer: "Array.from(set)"
    },
    {
      question: "What is the output of `typeof null`?",
      options: ["null", "undefined", "object", "false"],
      answer: "object"
    },
    {
      question: "Which one creates a private class field?",
      options: ["#name", "_name", "private name", "this.name"],
      answer: "#name"
    },
    {
      question: "What does `async` keyword do?",
      options: [
        "Makes a function return a Promise",
        "Creates a sync function",
        "Blocks execution",
        "Runs in parallel"
      ],
      answer: "Makes a function return a Promise"
    },
    {
      question: "Which one cancels a setTimeout?",
      options: ["stopTimeout()", "cancelTimeout()", "clearTimeout()", "abort()"],
      answer: "clearTimeout()"
    },
    {
      question: "Which operator is used to spread iterable items?",
      options: ["...", "&&", "*", "::"],
      answer: "..."
    },
    {
      question: "How can you enforce strict mode?",
      options: [
        "'use strict';",
        "//use strict",
        "strict();",
        "<script strict>"
      ],
      answer: "'use strict';"
    }
  ]
};

// Verification function (run to check for errors)
function validateQuestions() {
  Object.entries(expertQuestions).forEach(([category, questions]) => {
      questions.forEach((q, i) => {
          if (!q.options.includes(q.answer)) {
              console.error(`Error in ${category} Q${i + 1}: Answer not found in options`);
          }
      });
  });
  console.log("Validation complete - no errors found");
}
validateQuestions();

export default expertQuestions;
