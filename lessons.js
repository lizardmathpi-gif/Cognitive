window.LESSONS = {
  "6th-grade/ratios-and-rates": {
    intro: "Compare quantities and find the best deal.",
    learn: [
      {
        heading: "What is a ratio?",
        paragraphs: [
          "A ratio compares two quantities. If a bag has 3 red marbles and 2 blue marbles, the ratio of red to blue is 3 to 2. You can write it three ways: 3 to 2, 3:2, or 3/2.",
          "Order matters. The ratio of blue to red is 2:3, which is a different ratio."
        ],
        example: "A club has 6 seventh graders and 9 sixth graders. The ratio of seventh to sixth graders is 6:9. Both numbers divide by 3, so the simplest form is 2:3."
      },
      {
        heading: "Equivalent ratios",
        paragraphs: [
          "If you multiply or divide both parts of a ratio by the same number, you get an equivalent ratio. It means the same thing in a different size.",
          "Starting with 2:3, multiply by 2 to get 4:6, by 3 to get 6:9, or by 5 to get 10:15."
        ],
        example: "Are 3:4 and 9:12 equivalent? 3 × 3 = 9 and 4 × 3 = 12, so yes."
      },
      {
        heading: "Rates and unit rates",
        paragraphs: [
          "A rate is a ratio that compares two different kinds of units, like miles and hours, or dollars and pounds.",
          "A unit rate tells you how much for exactly 1 of something. To find it, divide."
        ],
        example: "A runner goes 24 miles in 4 hours. The unit rate is 24 ÷ 4 = 6 miles per hour."
      },
      {
        heading: "Using a unit rate",
        paragraphs: [
          "Once you know the unit rate, multiply it by any amount to find the total."
        ],
        example: "5 notebooks cost $15, so 1 notebook costs $15 ÷ 5 = $3. Eight notebooks cost 8 × $3 = $24."
      },
      {
        heading: "Comparing deals",
        paragraphs: [
          "To find the better buy, compare the unit prices. The lower price per item is the better deal."
        ],
        example: "Pack A: 4 apples for $2 is $0.50 each. Pack B: 5 apples for $3 is $0.60 each. Pack A is the better buy."
      }
    ],
    problems: [
      {
        id: "6th-grade/ratios-and-rates/1",
        question: "A class has 12 girls and 8 boys. What is the ratio of girls to boys in simplest form?",
        options: ["12:8", "3:2", "2:3", "4:3"],
        answer: 1,
        explanation: "12:8 simplifies by dividing both numbers by 4, which gives 3:2."
      },
      {
        id: "6th-grade/ratios-and-rates/2",
        question: "Which ratio is equivalent to 4:5?",
        options: ["8:10", "5:4", "4:10", "12:20"],
        answer: 0,
        explanation: "Multiply both parts of 4:5 by 2 to get 8:10."
      },
      {
        id: "6th-grade/ratios-and-rates/3",
        question: "A car travels 180 miles in 3 hours. What is the unit rate in miles per hour?",
        options: ["50", "90", "60", "540"],
        answer: 2,
        explanation: "180 ÷ 3 = 60 miles per hour."
      },
      {
        id: "6th-grade/ratios-and-rates/4",
        question: "4 pencils cost $2. How much do 10 pencils cost?",
        options: ["$4", "$6", "$20", "$5"],
        answer: 3,
        explanation: "One pencil costs $2 ÷ 4 = $0.50. Ten pencils cost 10 × $0.50 = $5."
      },
      {
        id: "6th-grade/ratios-and-rates/5",
        question: "A recipe uses 2 cups of flour for every 3 cups of milk. How many cups of milk go with 8 cups of flour?",
        options: ["10", "16", "12", "24"],
        answer: 2,
        explanation: "8 cups of flour is 4 times 2 cups, so multiply the milk by 4 as well: 3 × 4 = 12."
      },
      {
        id: "6th-grade/ratios-and-rates/6",
        question: "Store A sells 6 juice boxes for $3. Store B sells 10 juice boxes for $6. Which is the better buy?",
        options: ["Store A, at $0.50 each", "Store B, at $0.60 each", "They cost the same", "There's no way to tell"],
        answer: 0,
        explanation: "Store A costs $3 ÷ 6 = $0.50 per box. Store B costs $6 ÷ 10 = $0.60 per box. Lower is better."
      }
    ]
  }
};

window.LESSONS["6th-grade/dividing-fractions-and-decimals"] = {
  intro: "Divide fractions, mixed numbers, and decimals with confidence.",
  learn: [
    {
      heading: "Dividing a fraction by a whole number",
      paragraphs: [
        "To divide a fraction by a whole number, you split the fraction into equal parts. The pieces get smaller, so multiply the denominator by the whole number."
      ],
      example: "1/2 ÷ 3 means splitting one half into 3 equal pieces. Each piece is 1/6, because 2 × 3 = 6."
    },
    {
      heading: "Dividing by a fraction: keep, change, flip",
      paragraphs: [
        "Dividing by a fraction is the same as multiplying by its reciprocal. Keep the first number, change the ÷ to ×, and flip the second fraction upside down."
      ],
      example: "2/3 ÷ 1/4 becomes 2/3 × 4/1 = 8/3, which is 2 2/3."
    },
    {
      heading: "What dividing by a fraction means",
      paragraphs: [
        "A division like 3 ÷ 1/2 asks, 'How many halves fit into 3?' There are 2 halves in every whole, so there are 3 × 2 = 6 halves."
      ],
      example: "How many 1/4-cup scoops fit in 2 cups? 2 ÷ 1/4 = 2 × 4 = 8 scoops."
    },
    {
      heading: "Dividing mixed numbers",
      paragraphs: [
        "Turn any mixed number into an improper fraction first. Then use keep, change, flip."
      ],
      example: "2 1/2 ÷ 5/6: 2 1/2 = 5/2, so 5/2 × 6/5 = 30/10 = 3."
    },
    {
      heading: "Dividing decimals",
      paragraphs: [
        "To divide decimals, move the decimal point the same number of places in both numbers until the number you are dividing by is a whole number. Then divide as usual."
      ],
      example: "4.8 ÷ 0.6: move the decimal one place in both numbers to get 48 ÷ 6 = 8."
    }
  ],
  problems: [
    {
      id: "6th-grade/dividing-fractions-and-decimals/1",
      question: "What is 3/4 ÷ 2?",
      options: ["3/2", "3/8", "1/2", "8/3"],
      answer: 1,
      explanation: "Dividing by 2 doubles the denominator: 3/(4 × 2) = 3/8."
    },
    {
      id: "6th-grade/dividing-fractions-and-decimals/2",
      question: "What is 2/5 ÷ 1/10?",
      options: ["1/25", "1/4", "4", "20"],
      answer: 2,
      explanation: "Keep, change, flip: 2/5 × 10/1 = 20/5 = 4."
    },
    {
      id: "6th-grade/dividing-fractions-and-decimals/3",
      question: "How many 1/3-cup servings are in 4 cups of juice?",
      options: ["12", "4/3", "7", "1 1/3"],
      answer: 0,
      explanation: "4 ÷ 1/3 = 4 × 3 = 12 servings."
    },
    {
      id: "6th-grade/dividing-fractions-and-decimals/4",
      question: "What is 7.2 ÷ 0.9?",
      options: ["0.8", "6.48", "80", "8"],
      answer: 3,
      explanation: "Move the decimal one place in both numbers: 72 ÷ 9 = 8."
    },
    {
      id: "6th-grade/dividing-fractions-and-decimals/5",
      question: "What is 1 1/2 ÷ 3/4?",
      options: ["9/8", "2", "1/2", "3"],
      answer: 1,
      explanation: "1 1/2 = 3/2. Then 3/2 × 4/3 = 12/6 = 2."
    },
    {
      id: "6th-grade/dividing-fractions-and-decimals/6",
      question: "A ribbon is 6.5 meters long. It is cut into pieces that are each 0.5 meter long. How many pieces are there?",
      options: ["3.25", "12", "13", "1.3"],
      answer: 2,
      explanation: "6.5 ÷ 0.5: move the decimal one place in both numbers to get 65 ÷ 5 = 13."
    }
  ]
};

window.LESSONS["6th-grade/expressions-and-one-step-equations"] = {
  intro: "Use letters for unknown numbers, then solve for them.",
  learn: [
    {
      heading: "Variables and expressions",
      paragraphs: [
        "A variable is a letter that stands for a number we don't know yet. An expression is a math phrase made of numbers, variables, and operations, with no equals sign."
      ],
      example: "n + 5 means 'a number plus 5.' If n = 3, then n + 5 = 8."
    },
    {
      heading: "Writing expressions from words",
      paragraphs: [
        "Look for key words. 'Sum,' 'more than,' and 'increased by' mean add. 'Difference,' 'less than,' and 'decreased by' mean subtract. 'Product' and 'times' mean multiply. 'Quotient' means divide."
      ],
      example: "'7 less than a number x' is x − 7. Be careful: the order is switched around."
    },
    {
      heading: "Evaluating expressions",
      paragraphs: [
        "To evaluate an expression, replace the variable with its value, then follow the order of operations."
      ],
      example: "Evaluate 3x + 2 when x = 4. First 3 × 4 = 12, then 12 + 2 = 14."
    },
    {
      heading: "What is an equation?",
      paragraphs: [
        "An equation says two things are equal, like x + 4 = 10. Solving an equation means finding the value of the variable that makes it true."
      ],
      example: "In x + 4 = 10, try x = 6. Then 6 + 4 = 10 is true, so x = 6."
    },
    {
      heading: "Solving one-step equations",
      paragraphs: [
        "Use the inverse operation, the one that undoes what was done to the variable, to get the variable alone. Whatever you do to one side, do to the other."
      ],
      example: "x − 3 = 9: add 3 to both sides, so x = 12. And 4x = 20: divide both sides by 4, so x = 5."
    }
  ],
  problems: [
    {
      id: "6th-grade/expressions-and-one-step-equations/1",
      question: "Which expression means 'a number n increased by 8'?",
      options: ["n − 8", "8n", "n + 8", "n ÷ 8"],
      answer: 2,
      explanation: "'Increased by' means add, so the expression is n + 8."
    },
    {
      id: "6th-grade/expressions-and-one-step-equations/2",
      question: "What is the value of 5y − 3 when y = 4?",
      options: ["17", "23", "2", "12"],
      answer: 0,
      explanation: "5 × 4 − 3 = 20 − 3 = 17."
    },
    {
      id: "6th-grade/expressions-and-one-step-equations/3",
      question: "Solve: x + 9 = 15",
      options: ["24", "6", "9", "135"],
      answer: 1,
      explanation: "Subtract 9 from both sides: x = 15 − 9 = 6."
    },
    {
      id: "6th-grade/expressions-and-one-step-equations/4",
      question: "Solve: 6m = 42",
      options: ["36", "48", "252", "7"],
      answer: 3,
      explanation: "Divide both sides by 6: m = 42 ÷ 6 = 7."
    },
    {
      id: "6th-grade/expressions-and-one-step-equations/5",
      question: "Solve: p ÷ 4 = 5",
      options: ["1.25", "9", "20", "1"],
      answer: 2,
      explanation: "Multiply both sides by 4: p = 5 × 4 = 20."
    },
    {
      id: "6th-grade/expressions-and-one-step-equations/6",
      question: "Which expression means '6 less than a number x'?",
      options: ["6 − x", "x − 6", "6x", "x + 6"],
      answer: 1,
      explanation: "'Less than' switches the order: 6 less than x is x − 6."
    }
  ]
};

window.LESSONS["7th-grade/proportional-relationships-and-percents"] = {
  intro: "Work with constant ratios, then use percents for discounts, tips, and growth.",
  learn: [
    {
      heading: "Proportional relationships",
      paragraphs: [
        "Two quantities are proportional when they always have the same ratio. That constant ratio is called the constant of proportionality, or the unit rate. In the equation y = kx, the letter k is that constant."
      ],
      example: "Tickets cost $8 each, so cost = 8 × tickets. The constant of proportionality is 8, and the table 1 → $8, 2 → $16, 3 → $24 always gives 8 when you divide cost by tickets."
    },
    {
      heading: "Spotting a proportional relationship",
      paragraphs: [
        "Divide y by x for every pair in a table. If you always get the same number, the relationship is proportional. On a graph, the points form a straight line that passes through the origin, (0, 0)."
      ],
      example: "Take the pairs (2, 6), (4, 12), and (5, 15). 6 ÷ 2 = 3, 12 ÷ 4 = 3, and 15 ÷ 5 = 3. It's always 3, so y = 3x."
    },
    {
      heading: "Finding a percent of a number",
      paragraphs: [
        "A percent means 'out of 100.' To find a percent of a number, change the percent to a decimal and multiply."
      ],
      example: "25% of 80: 25% = 0.25, and 0.25 × 80 = 20."
    },
    {
      heading: "Percent increase and decrease",
      paragraphs: [
        "To find a new amount after a change, first find the amount of the change. Then add it for an increase, or subtract it for a decrease."
      ],
      example: "A $40 shirt is 25% off. The discount is 0.25 × 40 = $10, so the sale price is 40 − 10 = $30."
    },
    {
      heading: "Tax, tips, and discounts",
      paragraphs: [
        "Tax, tips, and discounts are all percents of an original amount. Tax and tips are added to the amount. Discounts are subtracted."
      ],
      example: "A $20 meal with a 15% tip: the tip is 0.15 × 20 = $3, so the total is 20 + 3 = $23."
    }
  ],
  problems: [
    {
      id: "7th-grade/proportional-relationships-and-percents/1",
      question: "Tickets cost $8 each. Which equation shows the cost c for t tickets?",
      options: ["c = t + 8", "c = 8t", "c = t ÷ 8", "c = 8 − t"],
      answer: 1,
      explanation: "Each ticket costs $8, so the cost is 8 times the number of tickets: c = 8t."
    },
    {
      id: "7th-grade/proportional-relationships-and-percents/2",
      question: "Which set of (x, y) pairs shows a proportional relationship?",
      options: ["(1, 3), (2, 5), (3, 7)", "(1, 2), (2, 4), (3, 7)", "(1, 3), (2, 6), (3, 9)", "(2, 5), (4, 7), (6, 9)"],
      answer: 2,
      explanation: "In (1, 3), (2, 6), (3, 9), y ÷ x is 3 every time. The other sets don't have a constant ratio."
    },
    {
      id: "7th-grade/proportional-relationships-and-percents/3",
      question: "What is 30% of 70?",
      options: ["21", "2.1", "23.3", "210"],
      answer: 0,
      explanation: "30% = 0.30, and 0.30 × 70 = 21."
    },
    {
      id: "7th-grade/proportional-relationships-and-percents/4",
      question: "A jacket costs $60 and is on sale for 20% off. What is the sale price?",
      options: ["$12", "$40", "$72", "$48"],
      answer: 3,
      explanation: "The discount is 0.20 × 60 = $12. The sale price is 60 − 12 = $48."
    },
    {
      id: "7th-grade/proportional-relationships-and-percents/5",
      question: "Maya's meal costs $24. She leaves a 15% tip. What is the total, including the tip?",
      options: ["$25.50", "$27.60", "$39.00", "$3.60"],
      answer: 1,
      explanation: "The tip is 0.15 × 24 = $3.60. The total is 24 + 3.60 = $27.60."
    },
    {
      id: "7th-grade/proportional-relationships-and-percents/6",
      question: "A town had 500 residents. The population increased by 12%. How many residents does it have now?",
      options: ["512", "620", "560", "60"],
      answer: 2,
      explanation: "The increase is 0.12 × 500 = 60. The new population is 500 + 60 = 560."
    }
  ]
};

window.LESSONS["7th-grade/operations-with-integers-and-rational-numbers"] = {
  intro: "Add, subtract, multiply, and divide with negative numbers and fractions.",
  learn: [
    {
      heading: "Integers and the number line",
      paragraphs: [
        "Integers are whole numbers and their opposites: ..., −3, −2, −1, 0, 1, 2, 3, ... Positive numbers are to the right of zero on the number line, and negative numbers are to the left.",
        "The absolute value of a number is its distance from zero, so it's never negative."
      ],
      example: "−4 is 4 units to the left of zero, so |−4| = 4."
    },
    {
      heading: "Adding and subtracting integers",
      paragraphs: [
        "Adding a positive number moves right on the number line. Adding a negative number moves left. Subtracting a number is the same as adding its opposite."
      ],
      example: "5 − (−3) = 5 + 3 = 8. And −2 + (−6) = −8."
    },
    {
      heading: "Multiplying and dividing integers",
      paragraphs: [
        "If the signs are the same, the answer is positive. If the signs are different, the answer is negative. This works for both multiplication and division."
      ],
      example: "(−4) × (−3) = 12, but (−4) × 3 = −12. And −20 ÷ 5 = −4."
    },
    {
      heading: "Rational numbers",
      paragraphs: [
        "A rational number is any number that can be written as a fraction of two integers. That includes decimals that end or repeat, like 0.75 or 0.333... The same sign rules work for fractions and decimals."
      ],
      example: "−1/2 + 1/4: use a common denominator to get −2/4 + 1/4 = −1/4."
    },
    {
      heading: "Converting and comparing rational numbers",
      paragraphs: [
        "To turn a fraction into a decimal, divide the top number by the bottom number. To compare two numbers, write them in the same form first."
      ],
      example: "3/8 = 3 ÷ 8 = 0.375, which is greater than 0.3."
    }
  ],
  problems: [
    {
      id: "7th-grade/operations-with-integers-and-rational-numbers/1",
      question: "What is −7 + 3?",
      options: ["−10", "4", "−4", "10"],
      answer: 2,
      explanation: "Start at −7 and move 3 to the right: −4."
    },
    {
      id: "7th-grade/operations-with-integers-and-rational-numbers/2",
      question: "What is 6 − (−5)?",
      options: ["11", "1", "−11", "−1"],
      answer: 0,
      explanation: "Subtracting −5 is the same as adding 5: 6 + 5 = 11."
    },
    {
      id: "7th-grade/operations-with-integers-and-rational-numbers/3",
      question: "What is (−8) × (−4)?",
      options: ["−32", "−12", "12", "32"],
      answer: 3,
      explanation: "Two negatives multiplied give a positive: 8 × 4 = 32."
    },
    {
      id: "7th-grade/operations-with-integers-and-rational-numbers/4",
      question: "What is −36 ÷ 9?",
      options: ["4", "−4", "−27", "−45"],
      answer: 1,
      explanation: "Different signs give a negative answer. 36 ÷ 9 = 4, so the answer is −4."
    },
    {
      id: "7th-grade/operations-with-integers-and-rational-numbers/5",
      question: "What is −1/2 + 3/4?",
      options: ["−1/4", "1/2", "1/4", "5/4"],
      answer: 2,
      explanation: "Use a common denominator: −2/4 + 3/4 = 1/4."
    },
    {
      id: "7th-grade/operations-with-integers-and-rational-numbers/6",
      question: "The temperature was −6°F in the morning and rose 15 degrees by afternoon. What was the afternoon temperature?",
      options: ["−21°F", "9°F", "21°F", "−9°F"],
      answer: 1,
      explanation: "−6 + 15 = 9, so the afternoon temperature was 9°F."
    }
  ]
};

window.LESSONS["7th-grade/two-step-equations-and-inequalities"] = {
  intro: "Solve equations in two steps, then solve and graph inequalities.",
  learn: [
    {
      heading: "Two-step equations",
      paragraphs: [
        "A two-step equation needs two inverse operations to solve. Undo the adding or subtracting first, then undo the multiplying or dividing."
      ],
      example: "2x + 3 = 11. Subtract 3 from both sides to get 2x = 8. Divide both sides by 2 to get x = 4."
    },
    {
      heading: "Why that order works",
      paragraphs: [
        "Think of the order of operations in reverse. The variable was multiplied or divided first, and then something was added or subtracted. To unwrap it, undo the last step first."
      ],
      example: "x/3 − 2 = 5. Add 2 to get x/3 = 7. Multiply by 3 to get x = 21."
    },
    {
      heading: "Check your answer",
      paragraphs: [
        "Put your answer back into the original equation. If both sides come out equal, your answer is right."
      ],
      example: "For 2x + 3 = 11 with x = 4: 2(4) + 3 = 8 + 3 = 11. It works."
    },
    {
      heading: "Inequalities",
      paragraphs: [
        "An inequality compares two sides with <, >, ≤, or ≥ instead of an equals sign. You solve it the same way as an equation, with one special rule: when you multiply or divide both sides by a negative number, flip the inequality sign."
      ],
      example: "x + 4 > 9 gives x > 5. And −2x < 8 gives x > −4, because dividing by −2 flips the sign."
    },
    {
      heading: "Graphing inequalities",
      paragraphs: [
        "On a number line, an open circle means the number is not included (< or >). A closed circle means it is included (≤ or ≥). Shade the side that holds the solutions."
      ],
      example: "x ≤ 3 has a closed circle at 3, with shading to the left."
    }
  ],
  problems: [
    {
      id: "7th-grade/two-step-equations-and-inequalities/1",
      question: "Solve: 3x + 5 = 20",
      options: ["5", "8", "15", "75"],
      answer: 0,
      explanation: "Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5."
    },
    {
      id: "7th-grade/two-step-equations-and-inequalities/2",
      question: "Solve: 4y − 7 = 21",
      options: ["3.5", "7", "28", "10.5"],
      answer: 1,
      explanation: "Add 7 to both sides: 4y = 28. Divide by 4: y = 7."
    },
    {
      id: "7th-grade/two-step-equations-and-inequalities/3",
      question: "Solve: n/5 + 2 = 6",
      options: ["4", "10", "20", "40"],
      answer: 2,
      explanation: "Subtract 2: n/5 = 4. Multiply both sides by 5: n = 20."
    },
    {
      id: "7th-grade/two-step-equations-and-inequalities/4",
      question: "Solve: x + 6 > 10",
      options: ["x > 16", "x < 4", "x > 60", "x > 4"],
      answer: 3,
      explanation: "Subtract 6 from both sides: x > 4."
    },
    {
      id: "7th-grade/two-step-equations-and-inequalities/5",
      question: "Solve: −3x ≥ 12",
      options: ["x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 4"],
      answer: 1,
      explanation: "Divide both sides by −3 and flip the sign: x ≤ −4."
    },
    {
      id: "7th-grade/two-step-equations-and-inequalities/6",
      question: "Sam has $15 and saves $6 each week. After w weeks he has $51. Which equation and answer fit this?",
      options: ["15w + 6 = 51; w = 3", "6w − 15 = 51; w = 11", "15 + 6w = 51; w = 6", "21w = 51; w ≈ 2.4"],
      answer: 2,
      explanation: "He starts with $15 and adds $6 each week: 15 + 6w = 51. Subtract 15: 6w = 36. Divide by 6: w = 6."
    }
  ]
};

window.LESSONS["8th-grade/linear-equations-and-slope"] = {
  intro: "Measure how steep a line is, write its equation, and solve harder equations.",
  learn: [
    {
      heading: "What slope means",
      paragraphs: [
        "Slope measures how steep a line is. It is the rise (how far the line goes up or down) divided by the run (how far it goes to the right)."
      ],
      example: "A line goes up 6 while moving right 3. The slope is 6 ÷ 3 = 2."
    },
    {
      heading: "Finding slope from two points",
      paragraphs: [
        "Use the formula slope = (y₂ − y₁) ÷ (x₂ − x₁). Subtract in the same order on the top and the bottom."
      ],
      example: "For the points (1, 2) and (4, 8): slope = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2."
    },
    {
      heading: "Positive, negative, zero, and undefined slope",
      paragraphs: [
        "A line that goes up from left to right has a positive slope. A line that goes down has a negative slope. A flat, horizontal line has a slope of 0. A straight up-and-down, vertical line has an undefined slope."
      ],
      example: "The line y = 4 is flat, so its slope is 0. A line through (2, 5) and (2, 9) is vertical, so its slope is undefined."
    },
    {
      heading: "Slope-intercept form",
      paragraphs: [
        "A line can be written as y = mx + b. The number m is the slope, and b is the y-intercept, the spot where the line crosses the y-axis."
      ],
      example: "The line y = 3x − 2 has a slope of 3 and crosses the y-axis at −2."
    },
    {
      heading: "Equations with variables on both sides",
      paragraphs: [
        "When a variable appears on both sides, first move the variable terms to one side by adding or subtracting. Then solve like a normal equation."
      ],
      example: "3x + 4 = x + 10. Subtract x from both sides: 2x + 4 = 10. Subtract 4: 2x = 6. Divide by 2: x = 3."
    }
  ],
  problems: [
    {
      id: "8th-grade/linear-equations-and-slope/1",
      question: "What is the slope of the line through (1, 3) and (3, 7)?",
      options: ["2", "1/2", "4", "−2"],
      answer: 0,
      explanation: "Slope = (7 − 3) ÷ (3 − 1) = 4 ÷ 2 = 2."
    },
    {
      id: "8th-grade/linear-equations-and-slope/2",
      question: "What is the slope of the line through (0, 5) and (2, 1)?",
      options: ["2", "−1/2", "−2", "4"],
      answer: 2,
      explanation: "Slope = (1 − 5) ÷ (2 − 0) = −4 ÷ 2 = −2."
    },
    {
      id: "8th-grade/linear-equations-and-slope/3",
      question: "In the equation y = −4x + 9, what is the y-intercept?",
      options: ["−4", "9", "4", "−9"],
      answer: 1,
      explanation: "In y = mx + b, the number b is the y-intercept. Here b = 9."
    },
    {
      id: "8th-grade/linear-equations-and-slope/4",
      question: "What is the slope of a horizontal line?",
      options: ["1", "Undefined", "−1", "0"],
      answer: 3,
      explanation: "A horizontal line doesn't rise at all, so rise ÷ run = 0 ÷ run = 0."
    },
    {
      id: "8th-grade/linear-equations-and-slope/5",
      question: "Solve: 5x − 3 = 2x + 12",
      options: ["3", "5", "15", "−5"],
      answer: 1,
      explanation: "Subtract 2x from both sides: 3x − 3 = 12. Add 3: 3x = 15. Divide by 3: x = 5."
    },
    {
      id: "8th-grade/linear-equations-and-slope/6",
      question: "A line has a slope of 3 and passes through (0, −2). Which equation describes it?",
      options: ["y = −2x + 3", "y = 3x + 2", "y = 3x − 2", "y = −3x − 2"],
      answer: 2,
      explanation: "The slope is m = 3, and the line crosses the y-axis at (0, −2), so b = −2. The equation is y = 3x − 2."
    }
  ]
};

window.LESSONS["8th-grade/functions"] = {
  intro: "Understand input-output rules and tell linear functions from nonlinear ones.",
  learn: [
    {
      heading: "What is a function?",
      paragraphs: [
        "A function is a rule that gives exactly one output for each input. The input is often called x and the output y."
      ],
      example: "The rule 'double the number' takes an input of 4 and gives an output of 8. Every input has just one output."
    },
    {
      heading: "Ways to show a function",
      paragraphs: [
        "A function can be shown as an equation, a table, a graph, or in words. These are different ways to describe the same rule."
      ],
      example: "The equation y = 2x, the table with x: 1, 2, 3 and y: 2, 4, 6, and the words 'double the number' all describe the same function."
    },
    {
      heading: "Is it a function?",
      paragraphs: [
        "A relationship is a function only if no input has two different outputs. On a graph, use the vertical line test: if any vertical line crosses the graph more than once, it is not a function."
      ],
      example: "The pairs (1, 2) and (1, 5) are not a function, because the input 1 has two different outputs."
    },
    {
      heading: "Evaluating functions",
      paragraphs: [
        "To evaluate a function, replace the input with a number and calculate. The notation f(x) is read 'f of x.'"
      ],
      example: "If f(x) = 3x + 1, then f(4) = 3(4) + 1 = 13."
    },
    {
      heading: "Linear and nonlinear functions",
      paragraphs: [
        "A linear function has a constant rate of change, so its graph is a straight line and it can be written as y = mx + b. If the rate of change is not constant, the function is nonlinear."
      ],
      example: "For x: 1, 2, 3, 4 and y: 3, 5, 7, 9, y goes up by 2 every time, so it's linear. For y: 1, 4, 9, 16, the change keeps growing, so it's nonlinear."
    }
  ],
  problems: [
    {
      id: "8th-grade/functions/1",
      question: "Which set of (input, output) pairs is a function?",
      options: ["(1, 2), (1, 5), (2, 7)", "(0, 3), (1, 3), (2, 3)", "(4, 1), (4, 2), (4, 3)", "(2, 5), (2, 6), (3, 7)"],
      answer: 1,
      explanation: "In (0, 3), (1, 3), (2, 3), every input has exactly one output. In the other sets, an input appears twice with different outputs."
    },
    {
      id: "8th-grade/functions/2",
      question: "If f(x) = 2x + 5, what is f(3)?",
      options: ["10", "16", "8", "11"],
      answer: 3,
      explanation: "f(3) = 2(3) + 5 = 6 + 5 = 11."
    },
    {
      id: "8th-grade/functions/3",
      question: "Which equation is a linear function?",
      options: ["y = 3x + 2", "y = x²", "y = 1/x", "y = x³ + 1"],
      answer: 0,
      explanation: "y = 3x + 2 has the form y = mx + b, so its graph is a straight line. The others make curves."
    },
    {
      id: "8th-grade/functions/4",
      question: "A table shows x: 0, 1, 2, 3 and y: 4, 7, 10, 13. What is the rate of change?",
      options: ["1", "4", "3", "7"],
      answer: 2,
      explanation: "y goes up by 3 each time x goes up by 1, so the rate of change is 3."
    },
    {
      id: "8th-grade/functions/5",
      question: "A function rule says 'multiply the input by 4, then subtract 1.' What is the output when the input is 5?",
      options: ["20", "19", "24", "9"],
      answer: 1,
      explanation: "5 × 4 = 20, and 20 − 1 = 19."
    },
    {
      id: "8th-grade/functions/6",
      question: "Which table is NOT linear?",
      options: ["x: 1, 2, 3 and y: 2, 4, 6", "x: 1, 2, 3 and y: 5, 8, 11", "x: 1, 2, 3 and y: 10, 8, 6", "x: 1, 2, 3 and y: 1, 4, 9"],
      answer: 3,
      explanation: "In the last table, y goes up by 3, then by 5, so the rate of change isn't constant. The other tables change by the same amount each time."
    }
  ]
};

window.LESSONS["8th-grade/pythagorean-theorem"] = {
  intro: "Find missing sides of right triangles and check whether a triangle is a right triangle.",
  learn: [
    {
      heading: "Right triangles",
      paragraphs: [
        "A right triangle has one 90° angle. The side across from that angle is the hypotenuse, and it is always the longest side. The other two sides are called the legs."
      ],
      example: "In a triangle with legs 3 and 4, the hypotenuse is the long side opposite the right angle."
    },
    {
      heading: "The Pythagorean theorem",
      paragraphs: [
        "In any right triangle, a² + b² = c², where a and b are the legs and c is the hypotenuse."
      ],
      example: "With legs 3 and 4: 3² + 4² = 9 + 16 = 25, so c = √25 = 5."
    },
    {
      heading: "Finding a missing leg",
      paragraphs: [
        "If you know the hypotenuse and one leg, rearrange the formula: a² = c² − b². Then take the square root."
      ],
      example: "Hypotenuse 13 and one leg 5: a² = 13² − 5² = 169 − 25 = 144, so a = 12."
    },
    {
      heading: "Checking for a right triangle",
      paragraphs: [
        "If a² + b² = c² is true for three side lengths, with c as the longest side, then the triangle is a right triangle."
      ],
      example: "Sides 6, 8, and 10: 6² + 8² = 36 + 64 = 100, and 10² = 100. Yes, it's a right triangle."
    },
    {
      heading: "Using the theorem for distances",
      paragraphs: [
        "The theorem can find real distances, like the diagonal of a rectangle or the length of a ladder leaning on a wall."
      ],
      example: "A 9 ft by 12 ft rectangle has a diagonal of √(9² + 12²) = √225 = 15 ft."
    }
  ],
  problems: [
    {
      id: "8th-grade/pythagorean-theorem/1",
      question: "A right triangle has legs of 6 and 8. What is the hypotenuse?",
      options: ["10", "14", "100", "48"],
      answer: 0,
      explanation: "6² + 8² = 36 + 64 = 100, and √100 = 10."
    },
    {
      id: "8th-grade/pythagorean-theorem/2",
      question: "A right triangle has a hypotenuse of 13 and one leg of 5. What is the other leg?",
      options: ["8", "18", "12", "144"],
      answer: 2,
      explanation: "a² = 13² − 5² = 169 − 25 = 144, so a = 12."
    },
    {
      id: "8th-grade/pythagorean-theorem/3",
      question: "Which set of side lengths forms a right triangle?",
      options: ["4, 5, 6", "5, 12, 13", "6, 7, 8", "3, 4, 6"],
      answer: 1,
      explanation: "5² + 12² = 25 + 144 = 169 = 13². None of the other sets satisfy a² + b² = c²."
    },
    {
      id: "8th-grade/pythagorean-theorem/4",
      question: "A 10 ft ladder leans on a wall, with its base 6 ft from the wall. How high up the wall does it reach?",
      options: ["4 ft", "16 ft", "11.7 ft", "8 ft"],
      answer: 3,
      explanation: "The ladder is the hypotenuse, so a² = 10² − 6² = 100 − 36 = 64, and a = 8 ft."
    },
    {
      id: "8th-grade/pythagorean-theorem/5",
      question: "What is the length of the diagonal of a rectangle that is 9 units by 12 units?",
      options: ["21", "15", "108", "225"],
      answer: 1,
      explanation: "The diagonal is √(9² + 12²) = √(81 + 144) = √225 = 15."
    },
    {
      id: "8th-grade/pythagorean-theorem/6",
      question: "In a right triangle, which side is the hypotenuse?",
      options: ["The shortest side", "Either leg", "The side opposite the right angle", "The side next to the right angle"],
      answer: 2,
      explanation: "The hypotenuse is always across from the 90° angle, and it is the longest side."
    }
  ]
};

window.LESSONS["math-1/linear-equations-and-inequalities"] = {
  intro: "Solve multi-step equations, rearrange formulas, and solve inequalities.",
  learn: [
    {
      heading: "Solving multi-step equations",
      paragraphs: [
        "Simplify each side first by distributing and combining like terms. Then use inverse operations to get the variable alone."
      ],
      example: "2(x + 3) = 14. Distribute: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4."
    },
    {
      heading: "Variables on both sides",
      paragraphs: [
        "Move the variable terms to one side by adding or subtracting, then solve as usual."
      ],
      example: "5x − 7 = 2x + 8. Subtract 2x: 3x − 7 = 8. Add 7: 3x = 15. Divide by 3: x = 5."
    },
    {
      heading: "Solving for a variable in a formula",
      paragraphs: [
        "A literal equation has several letters. To solve for one letter, use inverse operations and treat the other letters like numbers."
      ],
      example: "Solve P = 2l + 2w for l. Subtract 2w: P − 2w = 2l. Divide by 2: l = (P − 2w)/2."
    },
    {
      heading: "Solving linear inequalities",
      paragraphs: [
        "Solve an inequality like an equation, with one special rule: flip the inequality sign when you multiply or divide both sides by a negative number."
      ],
      example: "−3x + 2 ≤ 11. Subtract 2: −3x ≤ 9. Divide by −3 and flip the sign: x ≥ −3."
    },
    {
      heading: "Compound inequalities",
      paragraphs: [
        "An inequality like −2 < x ≤ 5 describes numbers between two values. To solve one, do the same operation to every part."
      ],
      example: "−1 < 2x + 3 ≤ 9. Subtract 3 from every part: −4 < 2x ≤ 6. Divide every part by 2: −2 < x ≤ 3."
    }
  ],
  problems: [
    {
      id: "math-1/linear-equations-and-inequalities/1",
      question: "Solve: 3(x − 2) = 15",
      options: ["5", "7", "9", "11"],
      answer: 1,
      explanation: "Divide both sides by 3: x − 2 = 5. Add 2: x = 7."
    },
    {
      id: "math-1/linear-equations-and-inequalities/2",
      question: "Solve: 7x + 4 = 3x + 28",
      options: ["7", "8", "3.2", "6"],
      answer: 3,
      explanation: "Subtract 3x: 4x + 4 = 28. Subtract 4: 4x = 24. Divide by 4: x = 6."
    },
    {
      id: "math-1/linear-equations-and-inequalities/3",
      question: "Solve P = 2l + 2w for w.",
      options: ["w = (P − 2l)/2", "w = P − l", "w = 2P − 2l", "w = (P + 2l)/2"],
      answer: 0,
      explanation: "Subtract 2l from both sides: P − 2l = 2w. Divide both sides by 2: w = (P − 2l)/2."
    },
    {
      id: "math-1/linear-equations-and-inequalities/4",
      question: "Solve: −2x + 5 > 11",
      options: ["x > −3", "x > 3", "x < −3", "x < 3"],
      answer: 2,
      explanation: "Subtract 5: −2x > 6. Divide by −2 and flip the sign: x < −3."
    },
    {
      id: "math-1/linear-equations-and-inequalities/5",
      question: "Which inequality means 'x is at least 4'?",
      options: ["x > 4", "x ≥ 4", "x ≤ 4", "x < 4"],
      answer: 1,
      explanation: "'At least 4' means 4 or more, so x ≥ 4."
    },
    {
      id: "math-1/linear-equations-and-inequalities/6",
      question: "Solve: −3 < 2x + 1 ≤ 9",
      options: ["−1 < x ≤ 5", "−4 < x ≤ 8", "−2 ≤ x < 4", "−2 < x ≤ 4"],
      answer: 3,
      explanation: "Subtract 1 from every part: −4 < 2x ≤ 8. Divide every part by 2: −2 < x ≤ 4."
    }
  ]
};

window.LESSONS["math-1/systems-of-linear-equations"] = {
  intro: "Find the point where two lines meet, using graphs, substitution, and elimination.",
  learn: [
    {
      heading: "What is a system?",
      paragraphs: [
        "A system of linear equations is two or more equations that use the same variables. Its solution is the point (x, y) that makes every equation true at once."
      ],
      example: "For y = x + 1 and y = 2x − 1, the point (2, 3) works in both: 3 = 2 + 1 and 3 = 2(2) − 1."
    },
    {
      heading: "Solving by graphing",
      paragraphs: [
        "Graph both lines. The solution is where they cross. Parallel lines never cross, so there is no solution. If both equations make the same line, there are infinitely many solutions."
      ],
      example: "y = x + 1 and y = x + 4 both have slope 1 but different intercepts. They're parallel, so there is no solution."
    },
    {
      heading: "Solving by substitution",
      paragraphs: [
        "Solve one equation for a variable, then substitute that expression into the other equation."
      ],
      example: "y = 2x and x + y = 9. Substitute: x + 2x = 9, so 3x = 9 and x = 3. Then y = 6. The solution is (3, 6)."
    },
    {
      heading: "Solving by elimination",
      paragraphs: [
        "Add or subtract the equations so one variable disappears. If needed, multiply an equation first so the terms match."
      ],
      example: "x + y = 10 and x − y = 4. Add them: 2x = 14, so x = 7. Then 7 + y = 10, so y = 3. The solution is (7, 3)."
    },
    {
      heading: "Systems in word problems",
      paragraphs: [
        "Define a variable for each unknown, write one equation for each fact, and solve the system."
      ],
      example: "Adult tickets cost $5 and child tickets cost $3. 10 tickets cost $38. Write a + c = 10 and 5a + 3c = 38. Substituting a = 10 − c: 50 − 2c = 38, so c = 6 and a = 4."
    }
  ],
  problems: [
    {
      id: "math-1/systems-of-linear-equations/1",
      question: "Which point is the solution of y = x + 2 and y = 2x?",
      options: ["(4, 2)", "(1, 3)", "(2, 4)", "(0, 2)"],
      answer: 2,
      explanation: "Setting x + 2 = 2x gives x = 2, and then y = 4. Check: 4 = 2 + 2 and 4 = 2(2)."
    },
    {
      id: "math-1/systems-of-linear-equations/2",
      question: "Solve by substitution: y = 3x and x + y = 12",
      options: ["(3, 9)", "(9, 3)", "(4, 8)", "(2, 6)"],
      answer: 0,
      explanation: "Substitute y = 3x: x + 3x = 12, so 4x = 12 and x = 3. Then y = 9."
    },
    {
      id: "math-1/systems-of-linear-equations/3",
      question: "Solve by elimination: x + y = 9 and x − y = 3",
      options: ["(3, 6)", "(5, 4)", "(12, −3)", "(6, 3)"],
      answer: 3,
      explanation: "Add the equations: 2x = 12, so x = 6. Then 6 + y = 9, so y = 3."
    },
    {
      id: "math-1/systems-of-linear-equations/4",
      question: "How many solutions does the system y = 2x + 1 and y = 2x − 5 have?",
      options: ["One", "None", "Two", "Infinitely many"],
      answer: 1,
      explanation: "Both lines have a slope of 2 but different y-intercepts, so they are parallel and never meet."
    },
    {
      id: "math-1/systems-of-linear-equations/5",
      question: "A theater sells adult tickets for $8 and child tickets for $5. 12 tickets cost $75 in all. How many adult tickets were sold?",
      options: ["5", "7", "8", "4"],
      answer: 0,
      explanation: "Write a + c = 12 and 8a + 5c = 75. Substitute c = 12 − a: 8a + 60 − 5a = 75, so 3a = 15 and a = 5."
    },
    {
      id: "math-1/systems-of-linear-equations/6",
      question: "Which system has the solution (1, 4)?",
      options: ["y = 2x and y = x + 3", "y = x + 4 and y = 2x", "y = x + 3 and y = 2x + 2", "y = 4x and y = x + 5"],
      answer: 2,
      explanation: "Put x = 1 into each equation. y = x + 3 gives 4, and y = 2x + 2 gives 4. The other systems fail at least one equation."
    }
  ]
};

window.LESSONS["math-1/exponential-growth-and-decay"] = {
  intro: "Model things that multiply by the same amount again and again.",
  learn: [
    {
      heading: "Exponential functions",
      paragraphs: [
        "An exponential function has the variable in the exponent: y = a·bˣ. The number a is the starting value, and b is the number you multiply by each step."
      ],
      example: "y = 3·2ˣ starts at 3 and doubles each time x goes up by 1: 3, 6, 12, 24."
    },
    {
      heading: "Growth or decay?",
      paragraphs: [
        "If b is greater than 1, the function grows. If b is between 0 and 1, the function decays."
      ],
      example: "y = 100·(1/2)ˣ halves each step: 100, 50, 25. It's exponential decay."
    },
    {
      heading: "Percent growth and decay",
      paragraphs: [
        "Write the percent as a decimal r. For growth, b = 1 + r. For decay, b = 1 − r."
      ],
      example: "A town of 2,000 people grows 5% a year, so b = 1.05 and the model is y = 2000·1.05ˣ."
    },
    {
      heading: "Evaluating exponentials",
      paragraphs: [
        "Substitute the input and follow the order of operations. Do the exponent first, then multiply."
      ],
      example: "y = 5·2ˣ when x = 3: 2³ = 8, and 5 × 8 = 40."
    },
    {
      heading: "Compound interest",
      paragraphs: [
        "Money earning compound interest grows exponentially. The formula is A = P(1 + r)ᵗ, where P is the starting amount, r is the yearly rate as a decimal, and t is the number of years."
      ],
      example: "$500 at 10% for 2 years: 500 × 1.1² = 500 × 1.21 = $605."
    }
  ],
  problems: [
    {
      id: "math-1/exponential-growth-and-decay/1",
      question: "Which function shows exponential growth?",
      options: ["y = 4·(0.5)ˣ", "y = 4·3ˣ", "y = 4x + 3", "y = 3x²"],
      answer: 1,
      explanation: "In y = 4·3ˣ the multiplier 3 is greater than 1, so the values grow. A multiplier of 0.5 would be decay, and the other two aren't exponential."
    },
    {
      id: "math-1/exponential-growth-and-decay/2",
      question: "What is the value of y = 2·3ˣ when x = 4?",
      options: ["24", "1296", "54", "162"],
      answer: 3,
      explanation: "3⁴ = 81, and 2 × 81 = 162."
    },
    {
      id: "math-1/exponential-growth-and-decay/3",
      question: "A bacteria colony starts at 100 and doubles every hour. Which equation models it, with x in hours?",
      options: ["y = 100·2ˣ", "y = 100 + 2x", "y = 2·100ˣ", "y = 200x"],
      answer: 0,
      explanation: "The starting value is 100 and the multiplier is 2, so y = 100·2ˣ."
    },
    {
      id: "math-1/exponential-growth-and-decay/4",
      question: "A car worth $20,000 loses 10% of its value each year. Which equation gives its value after t years?",
      options: ["y = 20000·1.1ᵗ", "y = 20000 − 0.1t", "y = 20000·0.9ᵗ", "y = 0.9·20000t"],
      answer: 2,
      explanation: "A 10% decay means multiplying by 1 − 0.10 = 0.9 each year, so y = 20000·0.9ᵗ."
    },
    {
      id: "math-1/exponential-growth-and-decay/5",
      question: "A population of 500 grows 20% each year. How many are there after 2 years?",
      options: ["600", "720", "700", "1000"],
      answer: 1,
      explanation: "500 × 1.2² = 500 × 1.44 = 720."
    },
    {
      id: "math-1/exponential-growth-and-decay/6",
      question: "$1,000 is invested at 5% interest compounded yearly. How much is it worth after 2 years?",
      options: ["$1,100.00", "$1,050.00", "$1,500.00", "$1,102.50"],
      answer: 3,
      explanation: "1000 × 1.05² = 1000 × 1.1025 = $1,102.50."
    }
  ]
};

window.LESSONS["math-2/quadratic-functions"] = {
  intro: "Work with parabolas: their shape, their turning point, and how to solve quadratic equations.",
  learn: [
    {
      heading: "What is a quadratic function?",
      paragraphs: [
        "A quadratic function has the form y = ax² + bx + c, where a is not 0. Its graph is a U-shaped curve called a parabola."
      ],
      example: "y = x² − 4 is a quadratic function, and its parabola opens upward."
    },
    {
      heading: "Direction, vertex, and axis of symmetry",
      paragraphs: [
        "If a is positive, the parabola opens up. If a is negative, it opens down. The turning point is the vertex, and the vertical line through it is the axis of symmetry, x = −b/(2a)."
      ],
      example: "For y = x² − 6x + 5, the axis is x = −(−6)/(2 · 1) = 3."
    },
    {
      heading: "Solving by factoring",
      paragraphs: [
        "To solve ax² + bx + c = 0, factor the expression and set each factor equal to zero."
      ],
      example: "x² − 5x + 6 = 0 factors as (x − 2)(x − 3) = 0, so x = 2 or x = 3."
    },
    {
      heading: "The quadratic formula",
      paragraphs: [
        "When factoring is hard, use the formula x = (−b ± √(b² − 4ac)) / (2a). It works for every quadratic equation."
      ],
      example: "x² + 2x − 3 = 0 has a = 1, b = 2, c = −3. So x = (−2 ± √16)/2 = (−2 ± 4)/2, which gives x = 1 or x = −3."
    },
    {
      heading: "Quadratics in the real world",
      paragraphs: [
        "Quadratics describe thrown objects and areas. The vertex gives the highest or lowest value."
      ],
      example: "A ball's height is h = −16t² + 32t. The vertex is at t = −32/(2 · −16) = 1 second, where h = −16 + 32 = 16 feet. That's the maximum height."
    }
  ],
  problems: [
    {
      id: "math-2/quadratic-functions/1",
      question: "Which direction does the parabola y = −2x² + 3 open?",
      options: ["Up", "Down", "Left", "Right"],
      answer: 1,
      explanation: "The x² term has a negative coefficient (a = −2), so the parabola opens downward."
    },
    {
      id: "math-2/quadratic-functions/2",
      question: "What is the axis of symmetry of y = x² − 8x + 3?",
      options: ["x = 4", "x = −4", "x = 8", "x = 3"],
      answer: 0,
      explanation: "x = −b/(2a) = −(−8)/(2 · 1) = 4."
    },
    {
      id: "math-2/quadratic-functions/3",
      question: "Solve: x² − 7x + 12 = 0",
      options: ["x = 2 or x = 6", "x = −3 or x = −4", "x = 1 or x = 12", "x = 3 or x = 4"],
      answer: 3,
      explanation: "The equation factors as (x − 3)(x − 4) = 0, so x = 3 or x = 4."
    },
    {
      id: "math-2/quadratic-functions/4",
      question: "Solve: x² = 49",
      options: ["x = 7 only", "x = 24.5", "x = 7 or x = −7", "x = −7 only"],
      answer: 2,
      explanation: "Both 7 and −7 square to 49, so take the positive and the negative square root."
    },
    {
      id: "math-2/quadratic-functions/5",
      question: "Use the quadratic formula to solve x² − 4x − 5 = 0.",
      options: ["x = 1 or x = −5", "x = 5 or x = −1", "x = 4 or x = 5", "x = −4 or x = 5"],
      answer: 1,
      explanation: "Here a = 1, b = −4, c = −5. So x = (4 ± √(16 + 20))/2 = (4 ± 6)/2, which gives x = 5 or x = −1."
    },
    {
      id: "math-2/quadratic-functions/6",
      question: "A ball's height is h = −16t² + 64t. At what time is the ball at its highest point?",
      options: ["2 seconds", "4 seconds", "64 seconds", "16 seconds"],
      answer: 0,
      explanation: "The vertex is at t = −b/(2a) = −64/(2 × −16) = 2 seconds."
    }
  ]
};

window.LESSONS["math-2/congruence-and-similarity"] = {
  intro: "Tell when shapes are identical or just scaled copies, and use that to find missing lengths.",
  learn: [
    {
      heading: "Congruent figures",
      paragraphs: [
        "Congruent figures have exactly the same size and shape. Their matching sides are equal and their matching angles are equal."
      ],
      example: "Two triangles with sides 3, 4, and 5 are congruent, even if one is flipped or turned."
    },
    {
      heading: "Triangle congruence shortcuts",
      paragraphs: [
        "You don't need to check all six measurements. SSS, SAS, ASA, and AAS each prove that two triangles are congruent. SSA does not work."
      ],
      example: "Two triangles with two equal sides and the equal angle between those sides are congruent by SAS."
    },
    {
      heading: "Similar figures",
      paragraphs: [
        "Similar figures have the same shape but not necessarily the same size. Their matching angles are equal, and their matching sides are in the same ratio, called the scale factor."
      ],
      example: "A triangle with sides 3, 4, 5 and one with sides 6, 8, 10 are similar. The scale factor is 2."
    },
    {
      heading: "Similarity shortcut",
      paragraphs: [
        "Two triangles are similar if two pairs of angles are equal. This is called AA similarity."
      ],
      example: "Two triangles that both have a 40° angle and a 60° angle also both have an 80° angle, so they are similar by AA."
    },
    {
      heading: "Finding missing sides with similarity",
      paragraphs: [
        "Set up a proportion using matching sides, then solve it."
      ],
      example: "Triangle ABC ~ triangle DEF, with AB = 4, DE = 10, and BC = 6. Then 4/10 = 6/EF, so EF = (6 × 10)/4 = 15."
    }
  ],
  problems: [
    {
      id: "math-2/congruence-and-similarity/1",
      question: "Which of these does NOT prove two triangles congruent?",
      options: ["SSS", "SAS", "ASA", "SSA"],
      answer: 3,
      explanation: "SSA (two sides and an angle that isn't between them) doesn't guarantee congruence. SSS, SAS, and ASA do."
    },
    {
      id: "math-2/congruence-and-similarity/2",
      question: "Two similar triangles have a scale factor of 3. A side of the small triangle is 5. What is the matching side of the large triangle?",
      options: ["15", "8", "5/3", "2"],
      answer: 0,
      explanation: "Multiply by the scale factor: 5 × 3 = 15."
    },
    {
      id: "math-2/congruence-and-similarity/3",
      question: "Triangle ABC ~ triangle DEF. AB = 6, DE = 9, and BC = 8. What is EF?",
      options: ["10", "5.33", "12", "14"],
      answer: 2,
      explanation: "6/9 = 8/EF. Cross multiply: 6 · EF = 72, so EF = 12."
    },
    {
      id: "math-2/congruence-and-similarity/4",
      question: "Two triangles each have angles of 50° and 70°. What can you conclude?",
      options: ["They are congruent", "They are similar", "They are both right triangles", "They have the same area"],
      answer: 1,
      explanation: "Two pairs of equal angles means the triangles are similar by AA. Similar doesn't have to mean congruent."
    },
    {
      id: "math-2/congruence-and-similarity/5",
      question: "A 6 ft tall person casts a 4 ft shadow. At the same time, a tree casts a 20 ft shadow. How tall is the tree?",
      options: ["24 ft", "13.3 ft", "26 ft", "30 ft"],
      answer: 3,
      explanation: "The two triangles are similar, so 6/4 = h/20. Then h = (6 × 20)/4 = 30 ft."
    },
    {
      id: "math-2/congruence-and-similarity/6",
      question: "Triangles ABC and DEF have AB = DE, BC = EF, and angle B = angle E. Why are they congruent?",
      options: ["SSS", "ASA", "SAS", "AA"],
      answer: 2,
      explanation: "Two sides and the angle between them are equal, so the triangles are congruent by SAS."
    }
  ]
};

window.LESSONS["math-2/right-triangle-trigonometry"] = {
  intro: "Use sine, cosine, and tangent to find missing sides and angles in right triangles.",
  learn: [
    {
      heading: "Sides of a right triangle",
      paragraphs: [
        "Pick one of the two acute angles. The opposite side is across from that angle. The adjacent side is next to the angle but isn't the hypotenuse. The hypotenuse is always across from the right angle."
      ],
      example: "For angle A, the side that touches A and isn't the hypotenuse is the adjacent side."
    },
    {
      heading: "The three ratios",
      paragraphs: [
        "sin = opposite ÷ hypotenuse. cos = adjacent ÷ hypotenuse. tan = opposite ÷ adjacent. A memory trick is SOH CAH TOA."
      ],
      example: "In a 3-4-5 triangle, where angle A is opposite the side of length 3: sin A = 3/5, cos A = 4/5, and tan A = 3/4."
    },
    {
      heading: "Finding a missing side",
      paragraphs: [
        "Choose the ratio that uses the side you know and the side you want. Write the equation and solve."
      ],
      example: "Angle 30° and hypotenuse 10, find the opposite side x. sin 30° = x/10, and sin 30° = 0.5, so x = 5."
    },
    {
      heading: "Finding a missing angle",
      paragraphs: [
        "Use the inverse functions on your calculator: sin⁻¹, cos⁻¹, and tan⁻¹."
      ],
      example: "Opposite 5 and hypotenuse 10: sin A = 5/10 = 0.5, so A = sin⁻¹(0.5) = 30°."
    },
    {
      heading: "Angles of elevation",
      paragraphs: [
        "An angle of elevation is measured up from the horizontal. Tangent is useful for height and distance problems."
      ],
      example: "You stand 50 ft from a tree and the angle up to its top is 45°. tan 45° = 1, so the tree is 50 ft taller than your eye level."
    }
  ],
  problems: [
    {
      id: "math-2/right-triangle-trigonometry/1",
      question: "In a right triangle, sin A equals which ratio?",
      options: ["adjacent ÷ hypotenuse", "opposite ÷ adjacent", "opposite ÷ hypotenuse", "hypotenuse ÷ opposite"],
      answer: 2,
      explanation: "SOH: sine is opposite over hypotenuse."
    },
    {
      id: "math-2/right-triangle-trigonometry/2",
      question: "A right triangle has sides 5, 12, and 13. What is tan of the angle opposite the side of length 5?",
      options: ["5/12", "5/13", "12/13", "12/5"],
      answer: 0,
      explanation: "TOA: tangent is opposite over adjacent. The opposite side is 5 and the adjacent side is 12, so tan = 5/12."
    },
    {
      id: "math-2/right-triangle-trigonometry/3",
      question: "A 10 ft ladder makes a 60° angle with the ground. About how high up the wall does it reach? (sin 60° ≈ 0.87)",
      options: ["5 ft", "11.5 ft", "6 ft", "8.7 ft"],
      answer: 3,
      explanation: "The height is opposite the 60° angle and the ladder is the hypotenuse, so sin 60° = h/10. Then h = 10 × 0.87 = 8.7 ft."
    },
    {
      id: "math-2/right-triangle-trigonometry/4",
      question: "In a right triangle, the side opposite angle A is 6 and the hypotenuse is 12. What is angle A?",
      options: ["60°", "30°", "45°", "15°"],
      answer: 1,
      explanation: "sin A = 6/12 = 0.5, and sin⁻¹(0.5) = 30°."
    },
    {
      id: "math-2/right-triangle-trigonometry/5",
      question: "You stand 40 ft from a flagpole. The angle of elevation to the top is 45°. How tall is the flagpole above your eye level?",
      options: ["20 ft", "56.6 ft", "40 ft", "80 ft"],
      answer: 2,
      explanation: "tan 45° = h/40, and tan 45° = 1, so h = 40 ft."
    },
    {
      id: "math-2/right-triangle-trigonometry/6",
      question: "What is cos A when the adjacent side is 8 and the hypotenuse is 10?",
      options: ["4/5", "3/5", "4/3", "5/4"],
      answer: 0,
      explanation: "CAH: cosine is adjacent over hypotenuse, so cos A = 8/10 = 4/5."
    }
  ]
};

window.LESSONS["math-3/polynomial-and-rational-functions"] = {
  intro: "Understand polynomial graphs, find their zeros, and spot asymptotes in fractions of polynomials.",
  learn: [
    {
      heading: "Polynomials and their degree",
      paragraphs: [
        "A polynomial is a sum of terms like 3x⁴ or −5x. The degree is the highest exponent. The degree and the sign of the leading coefficient tell you what the graph does at the far left and far right."
      ],
      example: "f(x) = 2x³ − 5x + 1 has degree 3 and leading coefficient 2. A degree-3 polynomial with a positive leading coefficient falls on the left and rises on the right."
    },
    {
      heading: "Zeros and factors",
      paragraphs: [
        "A zero is an input that makes the function equal 0. It's where the graph touches or crosses the x-axis. If (x − r) is a factor, then x = r is a zero."
      ],
      example: "f(x) = (x − 2)(x + 3)(x − 5) has zeros at 2, −3, and 5."
    },
    {
      heading: "The Remainder Theorem",
      paragraphs: [
        "When you divide f(x) by (x − r), the remainder is f(r). If f(r) = 0, then (x − r) is a factor of f(x)."
      ],
      example: "For f(x) = x³ − 4x + 3, f(1) = 1 − 4 + 3 = 0, so (x − 1) is a factor."
    },
    {
      heading: "Rational functions and vertical asymptotes",
      paragraphs: [
        "A rational function is a fraction made of two polynomials. It is undefined wherever the denominator is 0. Those spots usually create vertical asymptotes, which are lines the graph gets closer and closer to."
      ],
      example: "f(x) = 1/(x − 3) has a vertical asymptote at x = 3."
    },
    {
      heading: "Horizontal asymptotes",
      paragraphs: [
        "Compare the degrees of the top and bottom. If the bottom has the higher degree, the horizontal asymptote is y = 0. If the degrees are equal, divide the leading coefficients."
      ],
      example: "f(x) = (2x + 1)/(x − 4) has equal degrees, so the horizontal asymptote is y = 2/1 = 2."
    }
  ],
  problems: [
    {
      id: "math-3/polynomial-and-rational-functions/1",
      question: "What is the degree of f(x) = 4x⁵ − 3x² + 7?",
      options: ["2", "4", "5", "7"],
      answer: 2,
      explanation: "The degree is the highest exponent, which is 5."
    },
    {
      id: "math-3/polynomial-and-rational-functions/2",
      question: "What are the zeros of f(x) = (x − 1)(x + 4)?",
      options: ["1 and −4", "−1 and 4", "1 and 4", "−1 and −4"],
      answer: 0,
      explanation: "Set each factor equal to zero: x − 1 = 0 gives x = 1, and x + 4 = 0 gives x = −4."
    },
    {
      id: "math-3/polynomial-and-rational-functions/3",
      question: "Is (x − 2) a factor of f(x) = x² + 3x − 10?",
      options: ["No, because f(2) = 8", "No, because f(2) = −4", "Yes, because f(2) = 10", "Yes, because f(2) = 0"],
      answer: 3,
      explanation: "f(2) = 4 + 6 − 10 = 0. When f(r) = 0, (x − r) is a factor."
    },
    {
      id: "math-3/polynomial-and-rational-functions/4",
      question: "Where is the vertical asymptote of f(x) = 5/(x + 2)?",
      options: ["x = 2", "x = −2", "x = 5", "y = 0"],
      answer: 1,
      explanation: "The denominator x + 2 is zero when x = −2, so there is a vertical asymptote at x = −2."
    },
    {
      id: "math-3/polynomial-and-rational-functions/5",
      question: "What is the horizontal asymptote of f(x) = (3x² + 1)/(x² − 4)?",
      options: ["y = 0", "y = −4", "y = 3", "y = 1"],
      answer: 2,
      explanation: "The top and bottom both have degree 2, so divide the leading coefficients: 3/1 = 3."
    },
    {
      id: "math-3/polynomial-and-rational-functions/6",
      question: "What is the horizontal asymptote of f(x) = (x + 1)/(x² + 5)?",
      options: ["y = 0", "y = 1", "y = 5", "There is none"],
      answer: 0,
      explanation: "The bottom has the higher degree (2 versus 1), so the graph flattens toward y = 0."
    }
  ]
};

window.LESSONS["math-3/exponential-and-logarithmic-functions"] = {
  intro: "Use logarithms to undo exponents and solve exponential equations.",
  learn: [
    {
      heading: "Logarithms undo exponents",
      paragraphs: [
        "A logarithm answers the question, 'What exponent do I need?' The statement log_b(x) = y means bʸ = x."
      ],
      example: "log₂(8) = 3, because 2³ = 8."
    },
    {
      heading: "Common and natural logarithms",
      paragraphs: [
        "Writing log(x) with no base means base 10. The natural logarithm, ln(x), uses the base e, which is about 2.718."
      ],
      example: "log(1000) = 3, because 10³ = 1000."
    },
    {
      heading: "Properties of logarithms",
      paragraphs: [
        "log(a·b) = log a + log b. log(a/b) = log a − log b. log(aⁿ) = n·log a."
      ],
      example: "log₂(8) + log₂(4) = log₂(32) = 5, which matches 3 + 2."
    },
    {
      heading: "Solving exponential equations",
      paragraphs: [
        "If both sides can be written with the same base, set the exponents equal. If not, take the logarithm of both sides."
      ],
      example: "2ˣ = 32. Since 32 = 2⁵, x = 5. For 3ˣ = 20, take logs: x = log(20)/log(3), which is about 2.73."
    },
    {
      heading: "Solving logarithmic equations",
      paragraphs: [
        "Rewrite the logarithm in exponential form, then solve."
      ],
      example: "log₃(x) = 4 means x = 3⁴ = 81."
    }
  ],
  problems: [
    {
      id: "math-3/exponential-and-logarithmic-functions/1",
      question: "What is log₂(16)?",
      options: ["8", "4", "2", "32"],
      answer: 1,
      explanation: "2⁴ = 16, so log₂(16) = 4."
    },
    {
      id: "math-3/exponential-and-logarithmic-functions/2",
      question: "What is log(10,000)?",
      options: ["3", "5", "10", "4"],
      answer: 3,
      explanation: "10⁴ = 10,000, so log(10,000) = 4."
    },
    {
      id: "math-3/exponential-and-logarithmic-functions/3",
      question: "Solve: 5ˣ = 125",
      options: ["3", "25", "5", "625"],
      answer: 0,
      explanation: "125 = 5³, so x = 3."
    },
    {
      id: "math-3/exponential-and-logarithmic-functions/4",
      question: "Which expression equals log(a) + log(b)?",
      options: ["log(a + b)", "log(a·b)", "log(a/b)", "a·log(b)"],
      answer: 1,
      explanation: "Adding logs with the same base multiplies the inputs: log a + log b = log(a·b)."
    },
    {
      id: "math-3/exponential-and-logarithmic-functions/5",
      question: "Solve: log₃(x) = 2",
      options: ["6", "8", "9", "5"],
      answer: 2,
      explanation: "Rewrite in exponential form: x = 3² = 9."
    },
    {
      id: "math-3/exponential-and-logarithmic-functions/6",
      question: "Solve 2ˣ = 10. About what is x? (Use log 10 = 1 and log 2 ≈ 0.301.)",
      options: ["5", "3.32", "8", "0.301"],
      answer: 1,
      explanation: "Take the log of both sides: x · log 2 = log 10. So x = 1 ÷ 0.301 ≈ 3.32."
    }
  ]
};

window.LESSONS["math-3/statistics-and-probability"] = {
  intro: "Describe data, use the normal curve, and calculate probabilities and counts.",
  learn: [
    {
      heading: "Describing data",
      paragraphs: [
        "Measures of center are the mean (the average), the median (the middle value), and the mode (the most common value). The range, the largest value minus the smallest, describes how spread out the data is."
      ],
      example: "For 2, 4, 4, 6, 9: the mean is 25 ÷ 5 = 5, the median is 4, the mode is 4, and the range is 9 − 2 = 7."
    },
    {
      heading: "The normal distribution",
      paragraphs: [
        "Many data sets form a bell-shaped curve centered at the mean. About 68% of values fall within 1 standard deviation of the mean, about 95% within 2, and about 99.7% within 3."
      ],
      example: "Test scores have a mean of 70 and a standard deviation of 10. About 68% of scores fall between 60 and 80."
    },
    {
      heading: "Basic probability",
      paragraphs: [
        "Probability is the number of favorable outcomes divided by the total number of outcomes. It is always between 0 and 1."
      ],
      example: "Rolling a 4 on a fair die has probability 1/6. Rolling an even number has probability 3/6 = 1/2."
    },
    {
      heading: "Independent events",
      paragraphs: [
        "Two events are independent if one doesn't change the chance of the other. For independent events, P(A and B) = P(A) × P(B)."
      ],
      example: "Flipping heads twice in a row: 1/2 × 1/2 = 1/4."
    },
    {
      heading: "Combinations",
      paragraphs: [
        "The number of ways to choose r things from n when order doesn't matter is nCr = n! ÷ (r! × (n − r)!)."
      ],
      example: "Choosing 2 students from 5: 5C2 = 5! ÷ (2! × 3!) = 120 ÷ 12 = 10."
    }
  ],
  problems: [
    {
      id: "math-3/statistics-and-probability/1",
      question: "What is the median of 3, 7, 8, 12, 20?",
      options: ["8", "10", "7", "12"],
      answer: 0,
      explanation: "The numbers are already in order, and the middle one is 8."
    },
    {
      id: "math-3/statistics-and-probability/2",
      question: "Test scores have a mean of 80 and a standard deviation of 5. About what percent of scores fall between 75 and 85?",
      options: ["50%", "95%", "68%", "34%"],
      answer: 2,
      explanation: "75 and 85 are 1 standard deviation below and above the mean, which covers about 68% of the data."
    },
    {
      id: "math-3/statistics-and-probability/3",
      question: "A bag has 3 red marbles and 7 blue marbles. What is the probability of picking a red marble?",
      options: ["3/7", "7/10", "1/3", "3/10"],
      answer: 3,
      explanation: "There are 3 red marbles out of 10 total, so the probability is 3/10."
    },
    {
      id: "math-3/statistics-and-probability/4",
      question: "A fair coin is flipped 3 times. What is the probability of getting heads all 3 times?",
      options: ["1/2", "1/8", "3/8", "1/6"],
      answer: 1,
      explanation: "The flips are independent: 1/2 × 1/2 × 1/2 = 1/8."
    },
    {
      id: "math-3/statistics-and-probability/5",
      question: "How many ways can you choose 3 books from 6 if the order doesn't matter?",
      options: ["18", "120", "20", "36"],
      answer: 2,
      explanation: "6C3 = 6! ÷ (3! × 3!) = 720 ÷ 36 = 20."
    },
    {
      id: "math-3/statistics-and-probability/6",
      question: "The mean of 5 numbers is 12. What is their sum?",
      options: ["60", "17", "2.4", "12"],
      answer: 0,
      explanation: "Mean = sum ÷ count, so the sum is 12 × 5 = 60."
    }
  ]
};

window.LESSONS["precalculus/trigonometry-and-the-unit-circle"] = {
  intro: "Measure angles in radians and use the unit circle to find sine and cosine.",
  learn: [
    {
      heading: "Radians",
      paragraphs: [
        "A radian measures an angle by the length of the arc it cuts off on a circle with radius 1. A half turn is 180°, which is π radians. To convert degrees to radians, multiply by π/180."
      ],
      example: "90° = 90 × π/180 = π/2 radians."
    },
    {
      heading: "The unit circle",
      paragraphs: [
        "The unit circle has a radius of 1 and is centered at the origin. For an angle θ, the point on the circle is (cos θ, sin θ). So cosine is the x-coordinate and sine is the y-coordinate."
      ],
      example: "At θ = 0 the point is (1, 0), so cos 0 = 1 and sin 0 = 0. At θ = π/2 the point is (0, 1)."
    },
    {
      heading: "Special angles",
      paragraphs: [
        "Learn the values for 30° (π/6), 45° (π/4), and 60° (π/3). sin 30° = 1/2, sin 45° = √2/2, and sin 60° = √3/2. The cosine values are the same numbers in reverse order."
      ],
      example: "cos 60° = 1/2 and sin 60° = √3/2."
    },
    {
      heading: "Quadrants and signs",
      paragraphs: [
        "In Quadrant I, sine and cosine are both positive. In Quadrant II only sine is positive. In Quadrant III only tangent is positive. In Quadrant IV only cosine is positive."
      ],
      example: "At 150°, in Quadrant II, sin 150° = 1/2 is positive and cos 150° = −√3/2 is negative."
    },
    {
      heading: "A key identity",
      paragraphs: [
        "For every angle, sin²θ + cos²θ = 1. This comes straight from the unit circle, since x² + y² = 1. You can use it to find one ratio when you know the other."
      ],
      example: "If sin θ = 3/5 in Quadrant I, then cos²θ = 1 − 9/25 = 16/25, so cos θ = 4/5."
    }
  ],
  problems: [
    {
      id: "precalculus/trigonometry-and-the-unit-circle/1",
      question: "Convert 60° to radians.",
      options: ["π/6", "π/3", "π/2", "2π/3"],
      answer: 1,
      explanation: "60 × π/180 = π/3."
    },
    {
      id: "precalculus/trigonometry-and-the-unit-circle/2",
      question: "What is the point on the unit circle at 90° (π/2)?",
      options: ["(1, 0)", "(0, −1)", "(0, 1)", "(−1, 0)"],
      answer: 2,
      explanation: "At 90° you're at the top of the circle, at the point (0, 1)."
    },
    {
      id: "precalculus/trigonometry-and-the-unit-circle/3",
      question: "What is sin 30°?",
      options: ["√3/2", "√2/2", "1", "1/2"],
      answer: 3,
      explanation: "sin 30° = 1/2 is one of the special angle values."
    },
    {
      id: "precalculus/trigonometry-and-the-unit-circle/4",
      question: "What is cos 180°?",
      options: ["0", "−1", "1", "Undefined"],
      answer: 1,
      explanation: "At 180° the point on the unit circle is (−1, 0), and cosine is the x-coordinate, so cos 180° = −1."
    },
    {
      id: "precalculus/trigonometry-and-the-unit-circle/5",
      question: "If sin θ = 3/5 and θ is in Quadrant I, what is cos θ?",
      options: ["4/5", "5/3", "3/4", "2/5"],
      answer: 0,
      explanation: "sin²θ + cos²θ = 1, so cos²θ = 1 − 9/25 = 16/25. In Quadrant I cosine is positive, so cos θ = 4/5."
    },
    {
      id: "precalculus/trigonometry-and-the-unit-circle/6",
      question: "In which quadrant are both sin θ and cos θ negative?",
      options: ["Quadrant I", "Quadrant II", "Quadrant IV", "Quadrant III"],
      answer: 3,
      explanation: "In Quadrant III, both the x-coordinate (cosine) and the y-coordinate (sine) are negative."
    }
  ]
};

window.LESSONS["precalculus/conic-sections"] = {
  intro: "Identify circles, parabolas, ellipses, and hyperbolas from their equations.",
  learn: [
    {
      heading: "What are conic sections?",
      paragraphs: [
        "If you slice a cone with a flat plane, the cut shape is a conic section: a circle, an ellipse, a parabola, or a hyperbola. Each one has its own kind of equation."
      ],
      example: "A cut parallel to the base of the cone gives a circle."
    },
    {
      heading: "Circles",
      paragraphs: [
        "A circle with center (h, k) and radius r has the equation (x − h)² + (y − k)² = r². Notice that r² is on the right side, not r."
      ],
      example: "(x − 2)² + (y + 1)² = 25 has center (2, −1) and radius 5."
    },
    {
      heading: "Parabolas",
      paragraphs: [
        "A parabola is all the points that are the same distance from a fixed point, called the focus, and a fixed line, called the directrix. The parabola x² = 4py has its vertex at the origin, opens up when p is positive, and has its focus at (0, p)."
      ],
      example: "x² = 8y gives 4p = 8, so p = 2 and the focus is at (0, 2)."
    },
    {
      heading: "Ellipses",
      paragraphs: [
        "An ellipse centered at the origin has the equation x²/a² + y²/b² = 1. It crosses the x-axis at ±a and the y-axis at ±b."
      ],
      example: "x²/25 + y²/9 = 1 crosses the x-axis at ±5 and the y-axis at ±3."
    },
    {
      heading: "Hyperbolas",
      paragraphs: [
        "A hyperbola with the equation x²/a² − y²/b² = 1 opens left and right. Its vertices are at (±a, 0), and its asymptotes are the lines y = ±(b/a)x."
      ],
      example: "x²/16 − y²/9 = 1 has vertices at (±4, 0) and asymptotes y = ±(3/4)x."
    }
  ],
  problems: [
    {
      id: "precalculus/conic-sections/1",
      question: "What are the center and radius of (x − 3)² + (y + 4)² = 36?",
      options: ["Center (3, −4), radius 6", "Center (−3, 4), radius 6", "Center (3, −4), radius 36", "Center (−3, 4), radius 36"],
      answer: 0,
      explanation: "The center is (h, k) = (3, −4), and r² = 36, so the radius is 6."
    },
    {
      id: "precalculus/conic-sections/2",
      question: "Which equation describes an ellipse that is not a circle?",
      options: ["x² + y² = 9", "x²/4 + y²/9 = 1", "x² − y² = 1", "y = x²"],
      answer: 1,
      explanation: "An ellipse has the form x²/a² + y²/b² = 1 with different denominators. x² + y² = 9 is a circle, x² − y² = 1 is a hyperbola, and y = x² is a parabola."
    },
    {
      id: "precalculus/conic-sections/3",
      question: "What is the focus of the parabola x² = 12y?",
      options: ["(0, 12)", "(0, 6)", "(0, 3)", "(3, 0)"],
      answer: 2,
      explanation: "4p = 12, so p = 3. The focus is (0, p) = (0, 3)."
    },
    {
      id: "precalculus/conic-sections/4",
      question: "Where does the ellipse x²/49 + y²/16 = 1 cross the x-axis?",
      options: ["x = ±4", "x = ±16", "x = ±49", "x = ±7"],
      answer: 3,
      explanation: "The x-intercepts are ±a, where a² = 49. So a = 7, and the ellipse crosses at x = ±7."
    },
    {
      id: "precalculus/conic-sections/5",
      question: "What are the asymptotes of x²/4 − y²/25 = 1?",
      options: ["y = ±(2/5)x", "y = ±(5/2)x", "y = ±4x", "y = ±25x"],
      answer: 1,
      explanation: "The asymptotes are y = ±(b/a)x. Here a = 2 and b = 5, so y = ±(5/2)x."
    },
    {
      id: "precalculus/conic-sections/6",
      question: "Which conic section does x² + y² = 49 describe?",
      options: ["Circle", "Parabola", "Hyperbola", "Ellipse that is not a circle"],
      answer: 0,
      explanation: "x² + y² = r² is a circle. Here r = 7, and the center is the origin."
    }
  ]
};

window.LESSONS["precalculus/sequences-series-and-limits"] = {
  intro: "Find terms and sums of sequences, then meet the idea of a limit.",
  learn: [
    {
      heading: "Arithmetic sequences",
      paragraphs: [
        "An arithmetic sequence adds the same number each time. That number is the common difference d. The nth term is aₙ = a₁ + (n − 1)d."
      ],
      example: "In 3, 7, 11, 15, ..., a₁ = 3 and d = 4, so the 10th term is 3 + 9(4) = 39."
    },
    {
      heading: "Geometric sequences",
      paragraphs: [
        "A geometric sequence multiplies by the same number each time. That number is the common ratio r. The nth term is aₙ = a₁ · rⁿ⁻¹."
      ],
      example: "In 2, 6, 18, 54, ..., a₁ = 2 and r = 3, so the 5th term is 2 · 3⁴ = 162."
    },
    {
      heading: "Series",
      paragraphs: [
        "A series is a sum of the terms of a sequence. The sum of the first n terms of an arithmetic sequence is Sₙ = n(a₁ + aₙ)/2."
      ],
      example: "1 + 2 + 3 + ... + 10 = 10(1 + 10)/2 = 55."
    },
    {
      heading: "Infinite geometric series",
      paragraphs: [
        "If the common ratio r is between −1 and 1, an infinite geometric series adds up to a finite number: S = a₁/(1 − r)."
      ],
      example: "1 + 1/2 + 1/4 + 1/8 + ... = 1/(1 − 1/2) = 2."
    },
    {
      heading: "Limits",
      paragraphs: [
        "A limit tells you the value a function gets close to as the input gets close to some number. You can often find one by factoring and canceling."
      ],
      example: "For (x² − 4)/(x − 2) as x approaches 2, factor the top: (x − 2)(x + 2)/(x − 2) = x + 2. So the limit is 4."
    }
  ],
  problems: [
    {
      id: "precalculus/sequences-series-and-limits/1",
      question: "What is the 10th term of the sequence 5, 8, 11, 14, ...?",
      options: ["32", "35", "29", "38"],
      answer: 0,
      explanation: "a₁ = 5 and d = 3, so a₁₀ = 5 + 9(3) = 32."
    },
    {
      id: "precalculus/sequences-series-and-limits/2",
      question: "What is the 6th term of the geometric sequence 3, 6, 12, ...?",
      options: ["48", "192", "96", "36"],
      answer: 2,
      explanation: "a₁ = 3 and r = 2, so a₆ = 3 · 2⁵ = 96."
    },
    {
      id: "precalculus/sequences-series-and-limits/3",
      question: "What is 1 + 2 + 3 + ... + 20?",
      options: ["200", "210", "420", "190"],
      answer: 1,
      explanation: "S = n(a₁ + aₙ)/2 = 20(1 + 20)/2 = 210."
    },
    {
      id: "precalculus/sequences-series-and-limits/4",
      question: "What is the sum of the infinite series 3 + 1.5 + 0.75 + ...?",
      options: ["4.5", "9", "12", "6"],
      answer: 3,
      explanation: "a₁ = 3 and r = 0.5, so S = 3/(1 − 0.5) = 6."
    },
    {
      id: "precalculus/sequences-series-and-limits/5",
      question: "What is the limit of (x² − 9)/(x − 3) as x approaches 3?",
      options: ["0", "6", "9", "It does not exist"],
      answer: 1,
      explanation: "Factor: (x − 3)(x + 3)/(x − 3) = x + 3, which gets close to 6 as x gets close to 3."
    },
    {
      id: "precalculus/sequences-series-and-limits/6",
      question: "A sequence goes 100, 90, 80, 70, ... Which formula gives the nth term?",
      options: ["aₙ = 100 − 10n", "aₙ = 110 − 10n", "aₙ = 100n − 10", "aₙ = 10n + 90"],
      answer: 1,
      explanation: "a₁ = 100 and d = −10, so aₙ = 100 + (n − 1)(−10) = 110 − 10n."
    }
  ]
};

window.LESSONS["hs-calculus/limits"] = {
  intro: "Learn what a function approaches, and how to find that value.",
  learn: [
    {
      heading: "What a limit is",
      paragraphs: [
        "A limit describes the value a function gets close to as the input gets close to some number. We write lim x→a f(x) = L. The function doesn't have to equal L at x = a. It only has to get close."
      ],
      example: "As x gets close to 2, f(x) = 3x + 1 gets close to 7, so lim x→2 (3x + 1) = 7."
    },
    {
      heading: "Direct substitution",
      paragraphs: [
        "For many functions you can just plug the number in. If you get a real number, that's the limit."
      ],
      example: "lim x→3 (x² + 2) = 3² + 2 = 11."
    },
    {
      heading: "The 0/0 problem",
      paragraphs: [
        "If substitution gives 0/0, the limit isn't found yet. Try factoring the top and bottom, then cancel the common factor and substitute again."
      ],
      example: "lim x→5 (x² − 25)/(x − 5) = lim x→5 (x + 5) = 10."
    },
    {
      heading: "One-sided limits",
      paragraphs: [
        "The left-hand limit looks at values just below a, and the right-hand limit looks at values just above a. The limit exists only if both one-sided limits are equal."
      ],
      example: "For f(x) = |x|/x at x = 0, the left-hand limit is −1 and the right-hand limit is 1. They disagree, so the limit does not exist."
    },
    {
      heading: "Limits at infinity",
      paragraphs: [
        "As x gets larger and larger, a fraction like 1/x gets closer to 0. Rewrite the expression so you can see that, then find the limit."
      ],
      example: "(3x + 1)/x = 3 + 1/x. As x grows without bound, 1/x approaches 0, so the limit is 3."
    }
  ],
  problems: [
    {
      id: "hs-calculus/limits/1",
      question: "What is lim x→4 (2x + 3)?",
      options: ["8", "11", "7", "14"],
      answer: 1,
      explanation: "Substitute x = 4: 2(4) + 3 = 11."
    },
    {
      id: "hs-calculus/limits/2",
      question: "What is lim x→2 (x² + 5x)?",
      options: ["10", "7", "12", "14"],
      answer: 3,
      explanation: "Substitute x = 2: 4 + 10 = 14."
    },
    {
      id: "hs-calculus/limits/3",
      question: "What is lim x→3 (x² − 9)/(x − 3)?",
      options: ["6", "0", "9", "Does not exist"],
      answer: 0,
      explanation: "Substituting gives 0/0, so factor: (x − 3)(x + 3)/(x − 3) = x + 3. At x = 3 that is 6."
    },
    {
      id: "hs-calculus/limits/4",
      question: "What is lim x→1 (x² − 1)/(x − 1)?",
      options: ["0", "1", "2", "Does not exist"],
      answer: 2,
      explanation: "Factor: (x − 1)(x + 1)/(x − 1) = x + 1, which approaches 2 as x approaches 1."
    },
    {
      id: "hs-calculus/limits/5",
      question: "What is lim x→∞ (5x + 2)/x?",
      options: ["2", "5", "∞", "0"],
      answer: 1,
      explanation: "(5x + 2)/x = 5 + 2/x. As x grows, 2/x approaches 0, so the limit is 5."
    },
    {
      id: "hs-calculus/limits/6",
      question: "A function has a left-hand limit of 3 and a right-hand limit of 5 at x = 2. What is true?",
      options: ["The limit equals 3", "The limit equals 5", "The limit equals 4", "The limit does not exist"],
      answer: 3,
      explanation: "The two one-sided limits must be equal for the limit to exist. These are different, so it does not exist."
    }
  ]
};

window.LESSONS["hs-calculus/derivatives"] = {
  intro: "Find slopes of curves and rates of change using derivative rules.",
  learn: [
    {
      heading: "What a derivative is",
      paragraphs: [
        "The derivative f′(x) gives the slope of the line that just touches the curve at x. It tells you the instantaneous rate of change of the function at that point."
      ],
      example: "If s(t) is a ball's position, then s′(t) is its velocity at time t."
    },
    {
      heading: "The power rule",
      paragraphs: [
        "If f(x) = xⁿ, then f′(x) = n·xⁿ⁻¹. Bring the exponent down in front, then lower the exponent by 1."
      ],
      example: "f(x) = x⁵ has f′(x) = 5x⁴. And f(x) = 3x² has f′(x) = 3 · 2x = 6x."
    },
    {
      heading: "Sums, constants, and multiples",
      paragraphs: [
        "Take the derivative of each term separately. A constant multiplier stays in place, and the derivative of a plain number is 0."
      ],
      example: "f(x) = 4x³ − 2x + 7 has f′(x) = 12x² − 2."
    },
    {
      heading: "The chain rule",
      paragraphs: [
        "For a function inside another function, take the derivative of the outside, keep the inside, then multiply by the derivative of the inside."
      ],
      example: "f(x) = (3x + 1)² has f′(x) = 2(3x + 1) · 3 = 6(3x + 1)."
    },
    {
      heading: "Using the derivative",
      paragraphs: [
        "Plug a value into f′ to get the slope there. Set f′(x) = 0 to find where the graph flattens out, which is where a high point or low point can happen."
      ],
      example: "f(x) = x² − 6x has f′(x) = 2x − 6. Setting 2x − 6 = 0 gives x = 3, which is the minimum."
    }
  ],
  problems: [
    {
      id: "hs-calculus/derivatives/1",
      question: "What is the derivative of f(x) = x⁴?",
      options: ["x³", "4x³", "4x⁴", "3x⁴"],
      answer: 1,
      explanation: "Power rule: bring down the 4 and lower the exponent by 1, giving 4x³."
    },
    {
      id: "hs-calculus/derivatives/2",
      question: "What is the derivative of f(x) = 5x² + 3x − 8?",
      options: ["10x + 3", "5x + 3", "10x − 8", "10x² + 3"],
      answer: 0,
      explanation: "5x² gives 10x, 3x gives 3, and the constant −8 gives 0. So f′(x) = 10x + 3."
    },
    {
      id: "hs-calculus/derivatives/3",
      question: "What is the slope of the tangent line to f(x) = x² at x = 3?",
      options: ["3", "9", "6", "2"],
      answer: 2,
      explanation: "f′(x) = 2x, so f′(3) = 6."
    },
    {
      id: "hs-calculus/derivatives/4",
      question: "What is the derivative of f(x) = (2x + 5)³?",
      options: ["3(2x + 5)²", "6(2x + 5)³", "2(2x + 5)²", "6(2x + 5)²"],
      answer: 3,
      explanation: "Chain rule: 3(2x + 5)² times the derivative of the inside, which is 2. That gives 6(2x + 5)²."
    },
    {
      id: "hs-calculus/derivatives/5",
      question: "At what value of x does f(x) = x² − 8x + 3 have its minimum?",
      options: ["x = 4", "x = 8", "x = −4", "x = 3"],
      answer: 0,
      explanation: "f′(x) = 2x − 8. Setting it equal to 0 gives x = 4."
    },
    {
      id: "hs-calculus/derivatives/6",
      question: "A ball's position is s(t) = 5t² meters. What is its velocity at t = 2 seconds?",
      options: ["10 m/s", "20 m/s", "40 m/s", "5 m/s"],
      answer: 1,
      explanation: "Velocity is the derivative: s′(t) = 10t. At t = 2, that is 20 m/s."
    }
  ]
};

window.LESSONS["hs-calculus/integrals"] = {
  intro: "Reverse derivatives to find antiderivatives, then use them to find areas and totals.",
  learn: [
    {
      heading: "Antiderivatives",
      paragraphs: [
        "An antiderivative of f is a function F whose derivative is f. It undoes differentiation. We write ∫ f(x) dx = F(x) + C."
      ],
      example: "The derivative of x³ is 3x², so ∫ 3x² dx = x³ + C."
    },
    {
      heading: "The power rule for integrals",
      paragraphs: [
        "To integrate xⁿ, raise the exponent by 1 and divide by the new exponent: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C. This works as long as n is not −1."
      ],
      example: "∫ x⁴ dx = x⁵/5 + C. And ∫ 6x dx = 3x² + C."
    },
    {
      heading: "Why there is a + C",
      paragraphs: [
        "Constants disappear when you take a derivative, so many different functions share the same derivative. The + C stands for the constant we can't know."
      ],
      example: "x² + 1, x² − 5, and x² all have the derivative 2x."
    },
    {
      heading: "Definite integrals",
      paragraphs: [
        "A definite integral from a to b equals F(b) − F(a). It gives the net area between the curve and the x-axis."
      ],
      example: "∫₁³ 2x dx: an antiderivative is x². At 3 it is 9 and at 1 it is 1, so the answer is 9 − 1 = 8."
    },
    {
      heading: "Totals from rates",
      paragraphs: [
        "A definite integral adds up a rate over an interval to give the total change."
      ],
      example: "A tank fills at 4 gallons per minute. Over 5 minutes, ∫₀⁵ 4 dt = 4(5) − 4(0) = 20 gallons."
    }
  ],
  problems: [
    {
      id: "hs-calculus/integrals/1",
      question: "What is ∫ 4x³ dx?",
      options: ["12x² + C", "x⁴ + C", "4x⁴ + C", "x³ + C"],
      answer: 1,
      explanation: "Raise the exponent to 4 and divide by 4: 4x⁴/4 = x⁴, plus C."
    },
    {
      id: "hs-calculus/integrals/2",
      question: "What is ∫ (6x² + 2) dx?",
      options: ["12x + C", "2x³ + C", "2x³ + 2x + C", "6x³ + 2x + C"],
      answer: 2,
      explanation: "6x² integrates to 2x³, and the constant 2 integrates to 2x. So the answer is 2x³ + 2x + C."
    },
    {
      id: "hs-calculus/integrals/3",
      question: "Why does an indefinite integral include + C?",
      options: ["Many functions have the same derivative", "C stands for calculus", "It makes the answer larger", "It is only needed for fractions"],
      answer: 0,
      explanation: "Constants disappear when you differentiate, so functions that differ only by a constant have the same derivative."
    },
    {
      id: "hs-calculus/integrals/4",
      question: "Evaluate ∫₀² 3x² dx (the integral from 0 to 2).",
      options: ["6", "12", "4", "8"],
      answer: 3,
      explanation: "An antiderivative is x³. At 2 it is 8 and at 0 it is 0, so the answer is 8."
    },
    {
      id: "hs-calculus/integrals/5",
      question: "Evaluate ∫₁⁴ 2 dx (the integral from 1 to 4).",
      options: ["8", "6", "2", "10"],
      answer: 1,
      explanation: "An antiderivative of 2 is 2x. At 4 it is 8 and at 1 it is 2, so 8 − 2 = 6."
    },
    {
      id: "hs-calculus/integrals/6",
      question: "Water flows into a tank at a rate of 3t gallons per minute. How many gallons flow in during the first 4 minutes?",
      options: ["12", "48", "24", "6"],
      answer: 2,
      explanation: "∫₀⁴ 3t dt = (3/2)t² evaluated from 0 to 4 = (3/2)(16) = 24 gallons."
    }
  ]
};

window.LESSONS["psat/linear-equations-and-inequalities"] = {
  intro: "Solve, set up, and graph the linear equations and inequalities that show up on the PSAT.",
  learn: [
    {
      heading: "Solving linear equations",
      paragraphs: [
        "Isolate the variable with inverse operations, and do the same thing to both sides. Check your answer by putting it back into the equation."
      ],
      example: "4x − 7 = 21. Add 7: 4x = 28. Divide by 4: x = 7."
    },
    {
      heading: "Turning words into equations",
      paragraphs: [
        "Decide what the variable stands for first. A fixed amount is a constant, and an amount that repeats is multiplied by the variable."
      ],
      example: "A gym charges $30 to join plus $15 each month. After m months, the total cost is 30 + 15m."
    },
    {
      heading: "Reading slope-intercept form",
      paragraphs: [
        "In y = mx + b, the slope m is the rate of change, and b is the starting value, where x = 0."
      ],
      example: "A plant is 5 cm tall and grows 2 cm each week: h = 2w + 5."
    },
    {
      heading: "Linear inequalities",
      paragraphs: [
        "Solve an inequality like an equation, but flip the sign when you multiply or divide both sides by a negative number."
      ],
      example: "3x + 2 < 14 gives 3x < 12, so x < 4. And −2x ≥ 6 gives x ≤ −3."
    },
    {
      heading: "Systems and number of solutions",
      paragraphs: [
        "Two lines with different slopes cross once, so there is one solution. Lines with the same slope and different intercepts never meet, so there is no solution. If both equations are the same line, there are infinitely many solutions."
      ],
      example: "y = 2x + 1 and y = 2x + 4 have the same slope but different intercepts, so they have no solution."
    }
  ],
  problems: [
    {
      id: "psat/linear-equations-and-inequalities/1",
      question: "If 5x + 3 = 38, what is the value of x?",
      options: ["7", "8", "35", "6.2"],
      answer: 0,
      explanation: "Subtract 3: 5x = 35. Divide by 5: x = 7."
    },
    {
      id: "psat/linear-equations-and-inequalities/2",
      question: "If 3(x − 4) = 2x + 5, what is x?",
      options: ["1", "9", "17", "−7"],
      answer: 2,
      explanation: "Distribute: 3x − 12 = 2x + 5. Subtract 2x: x − 12 = 5. Add 12: x = 17."
    },
    {
      id: "psat/linear-equations-and-inequalities/3",
      question: "A taxi charges $4 plus $2.50 per mile. Which equation gives the cost c for m miles?",
      options: ["c = 4m + 2.5", "c = 6.5m", "c = 2.5 + 4m", "c = 2.5m + 4"],
      answer: 3,
      explanation: "The $2.50 repeats for every mile, so it multiplies m. The $4 is a one-time charge, so it's added."
    },
    {
      id: "psat/linear-equations-and-inequalities/4",
      question: "Which value of x satisfies 2x − 5 > 9?",
      options: ["x = 5", "x = 8", "x = 7", "x = 2"],
      answer: 1,
      explanation: "Add 5: 2x > 14. Divide by 2: x > 7. Only 8 is greater than 7."
    },
    {
      id: "psat/linear-equations-and-inequalities/5",
      question: "How many solutions does the system y = 3x − 2 and 2y = 6x − 4 have?",
      options: ["None", "One", "Exactly two", "Infinitely many"],
      answer: 3,
      explanation: "Dividing the second equation by 2 gives y = 3x − 2, the same line. Every point on the line is a solution."
    },
    {
      id: "psat/linear-equations-and-inequalities/6",
      question: "A line passes through (0, 4) and (2, 10). What is its equation?",
      options: ["y = 3x + 4", "y = 6x + 4", "y = 3x + 10", "y = 2x + 4"],
      answer: 0,
      explanation: "The slope is (10 − 4)/(2 − 0) = 3, and the y-intercept is 4, so y = 3x + 4."
    }
  ]
};window.LESSONS["psat/ratios-rates-and-percents"] = {
  intro: "Solve proportion, rate, and percent problems quickly and accurately.",
  learn: [
    {
      heading: "Ratios and proportions",
      paragraphs: [
        "A proportion says two ratios are equal. To solve one, cross multiply and then divide."
      ],
      example: "3/5 = x/20. Cross multiply: 5x = 60, so x = 12."
    },
    {
      heading: "Rates and unit rates",
      paragraphs: [
        "A rate compares two quantities with different units. Divide to find the unit rate, and then multiply to scale it up."
      ],
      example: "A car goes 150 miles on 5 gallons, which is 150 ÷ 5 = 30 miles per gallon."
    },
    {
      heading: "Percent basics",
      paragraphs: [
        "Percent = part ÷ whole × 100. In a word problem, 'of' usually means multiply."
      ],
      example: "18 is what percent of 24? 18 ÷ 24 = 0.75, so it's 75%."
    },
    {
      heading: "Percent change",
      paragraphs: [
        "Percent change = (new − old) ÷ old × 100. Always divide by the old, starting amount."
      ],
      example: "A price goes from $50 to $65. The change is 15, and 15 ÷ 50 = 0.30, so it's a 30% increase."
    },
    {
      heading: "More than one percent change",
      paragraphs: [
        "Successive percent changes multiply. They do not simply add or cancel."
      ],
      example: "A $100 item goes up 10% and then down 10%: 100 × 1.1 × 0.9 = $99, not $100."
    }
  ],
  problems: [
    {
      id: "psat/ratios-rates-and-percents/1",
      question: "If 4/7 = x/21, what is x?",
      options: ["12", "9", "28", "5.25"],
      answer: 0,
      explanation: "Cross multiply: 7x = 84, so x = 12."
    },
    {
      id: "psat/ratios-rates-and-percents/2",
      question: "A printer prints 90 pages in 6 minutes. At that rate, how many pages does it print in 15 minutes?",
      options: ["150", "225", "540", "36"],
      answer: 1,
      explanation: "The rate is 90 ÷ 6 = 15 pages per minute. In 15 minutes, that's 15 × 15 = 225 pages."
    },
    {
      id: "psat/ratios-rates-and-percents/3",
      question: "24 is what percent of 60?",
      options: ["25%", "36%", "40%", "144%"],
      answer: 2,
      explanation: "24 ÷ 60 = 0.40, which is 40%."
    },
    {
      id: "psat/ratios-rates-and-percents/4",
      question: "The price of a game rises from $40 to $50. What is the percent increase?",
      options: ["10%", "20%", "80%", "25%"],
      answer: 3,
      explanation: "The change is 10, and 10 ÷ 40 = 0.25, which is 25%."
    },
    {
      id: "psat/ratios-rates-and-percents/5",
      question: "A store raises a $200 jacket's price by 20% and then discounts the new price by 20%. What is the final price?",
      options: ["$200", "$192", "$208", "$240"],
      answer: 1,
      explanation: "200 × 1.20 = 240, and then 240 × 0.80 = 192. The two changes do not cancel."
    },
    {
      id: "psat/ratios-rates-and-percents/6",
      question: "A recipe for 4 servings uses 3 cups of flour. How many cups are needed for 10 servings?",
      options: ["7.5", "12", "6", "7"],
      answer: 0,
      explanation: "3/4 = x/10. Cross multiply: 4x = 30, so x = 7.5."
    }
  ]
};

window.LESSONS["psat/basic-geometry-and-trigonometry"] = {
  intro: "Review angles, areas, right triangles, and the three basic trig ratios.",
  learn: [
    {
      heading: "Angles and triangles",
      paragraphs: [
        "The angles inside a triangle add up to 180°. Angles that make a straight line also add up to 180°, and vertical angles are equal."
      ],
      example: "A triangle with angles of 50° and 60° has a third angle of 180° − 110° = 70°."
    },
    {
      heading: "Area and perimeter",
      paragraphs: [
        "Rectangle: area = length × width, and perimeter = 2(length + width). Triangle: area = (1/2) × base × height."
      ],
      example: "A triangle with base 10 and height 6 has an area of (1/2)(10)(6) = 30."
    },
    {
      heading: "Right triangles",
      paragraphs: [
        "In a right triangle, a² + b² = c², where c is the hypotenuse. Common whole-number triples are 3-4-5, 5-12-13, and 8-15-17."
      ],
      example: "With legs 9 and 12, the hypotenuse is √(81 + 144) = √225 = 15."
    },
    {
      heading: "Sine, cosine, and tangent",
      paragraphs: [
        "sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, and tan = opposite ÷ adjacent."
      ],
      example: "In a 5-12-13 right triangle, the sine of the angle opposite the 5 side is 5/13."
    },
    {
      heading: "Circles",
      paragraphs: [
        "A circle's area is πr² and its circumference is 2πr. The radius is half the diameter."
      ],
      example: "A circle with a diameter of 10 has a radius of 5 and an area of 25π."
    }
  ],
  problems: [
    {
      id: "psat/basic-geometry-and-trigonometry/1",
      question: "Two angles of a triangle measure 35° and 75°. What is the third angle?",
      options: ["70°", "110°", "40°", "145°"],
      answer: 0,
      explanation: "35 + 75 = 110, and 180 − 110 = 70°."
    },
    {
      id: "psat/basic-geometry-and-trigonometry/2",
      question: "What is the area of a triangle with a base of 8 and a height of 5?",
      options: ["13", "40", "20", "26"],
      answer: 2,
      explanation: "Area = (1/2)(8)(5) = 20."
    },
    {
      id: "psat/basic-geometry-and-trigonometry/3",
      question: "A circle has a diameter of 12. What is its area?",
      options: ["12π", "24π", "144π", "36π"],
      answer: 3,
      explanation: "The radius is 6, so the area is π(6²) = 36π."
    },
    {
      id: "psat/basic-geometry-and-trigonometry/4",
      question: "A right triangle has legs of 8 and 15. What is the hypotenuse?",
      options: ["23", "17", "7", "12"],
      answer: 1,
      explanation: "8² + 15² = 64 + 225 = 289, and √289 = 17."
    },
    {
      id: "psat/basic-geometry-and-trigonometry/5",
      question: "In a right triangle, the side opposite angle A is 9 and the hypotenuse is 15. What is sin A?",
      options: ["3/5", "4/5", "3/4", "5/3"],
      answer: 0,
      explanation: "sin A = opposite ÷ hypotenuse = 9/15 = 3/5."
    },
    {
      id: "psat/basic-geometry-and-trigonometry/6",
      question: "A rectangle has a perimeter of 30 and a length of 9. What is its width?",
      options: ["21", "12", "6", "3"],
      answer: 2,
      explanation: "2(9 + w) = 30, so 9 + w = 15 and w = 6."
    }
  ]
};

window.LESSONS["sat/systems-of-linear-equations"] = {
  intro: "Solve systems quickly, count solutions, and handle word problems.",
  learn: [
    {
      heading: "Elimination, the fast way",
      paragraphs: [
        "Add or subtract the two equations so that one variable cancels. Look for matching or opposite coefficients first."
      ],
      example: "2x + y = 11 and x − y = 1. Add them: 3x = 12, so x = 4. Then y = 3."
    },
    {
      heading: "Substitution when a variable is already alone",
      paragraphs: [
        "If one equation already says y = something, substitute that something into the other equation."
      ],
      example: "y = 2x + 1 and 3x + y = 16. Substitute: 3x + 2x + 1 = 16, so 5x = 15 and x = 3. Then y = 7."
    },
    {
      heading: "Questions that ask for an expression",
      paragraphs: [
        "Sometimes you don't need to find x and y separately. If a question asks for x + y, try adding or subtracting the equations first."
      ],
      example: "If x + 2y = 9 and 2x + y = 12, adding gives 3x + 3y = 21, so x + y = 7."
    },
    {
      heading: "How many solutions?",
      paragraphs: [
        "Compare the two lines. Different slopes cross once, so there is one solution. The same slope with different intercepts never meet, so there is no solution. The same line twice has infinitely many solutions."
      ],
      example: "2x + 3y = 6 and 4x + 6y = 12 are the same line, because the second equation is double the first. So there are infinitely many solutions."
    },
    {
      heading: "Word problems",
      paragraphs: [
        "Define a variable for each unknown and write one equation for each fact. Then solve the system."
      ],
            example: "Small boxes hold 6 pencils and large boxes hold 10. Together 8 boxes hold 64 pencils. Write s + l = 8 and 6s + 10l = 64. Substituting s = 8 − l gives 6(8 − l) + 10l = 64, so 48 + 4l = 64, which means l = 4 and s = 4."
    }
  ],
  problems: [
    {
      id: "sat/systems-of-linear-equations/1",
      question: "If 3x + y = 13 and x − y = 3, what is x?",
      options: ["3", "4", "5", "7"],
      answer: 1,
      explanation: "Add the equations: 4x = 16, so x = 4."
    },
    {
      id: "sat/systems-of-linear-equations/2",
      question: "If y = 3x − 2 and 2x + y = 13, what is y?",
      options: ["3", "5", "7", "9"],
      answer: 2,
      explanation: "Substitute: 2x + 3x − 2 = 13, so 5x = 15 and x = 3. Then y = 3(3) − 2 = 7."
    },
    {
      id: "sat/systems-of-linear-equations/3",
      question: "If 3x + y = 14 and x + 3y = 10, what is x + y?",
      options: ["6", "24", "4", "12"],
      answer: 0,
      explanation: "Add the equations: 4x + 4y = 24. Divide by 4: x + y = 6."
    },
    {
      id: "sat/systems-of-linear-equations/4",
      question: "How many solutions does the system 3x − y = 4 and 6x − 2y = 8 have?",
      options: ["None", "Exactly one", "Exactly two", "Infinitely many"],
      answer: 3,
      explanation: "The second equation is exactly twice the first, so both describe the same line. Every point on it is a solution."
    },
    {
      id: "sat/systems-of-linear-equations/5",
      question: "For what value of k does the system y = 3x + 2 and y = kx − 5 have no solution?",
      options: ["−3", "2", "3", "5"],
      answer: 2,
      explanation: "No solution means the lines are parallel, so they have the same slope: k = 3. The intercepts 2 and −5 are different, so the lines never meet."
    },
    {
      id: "sat/systems-of-linear-equations/6",
      question: "A parking lot has cars (4 wheels each) and motorcycles (2 wheels each). There are 10 vehicles with 32 wheels in total. How many motorcycles are there?",
      options: ["2", "4", "6", "8"],
      answer: 1,
      explanation: "Let c + m = 10 and 4c + 2m = 32. Substitute c = 10 − m: 40 − 2m = 32, so m = 4."
    }
  ]
};

window.LESSONS["sat/quadratics-and-nonlinear-functions"] = {
  intro: "Read quadratics in three forms, solve them, and use them to model real situations.",
  learn: [
    {
      heading: "Three forms of a quadratic",
      paragraphs: [
        "Standard form is y = ax² + bx + c. Vertex form is y = a(x − h)² + k, which shows the vertex (h, k). Factored form is y = a(x − r)(x − s), which shows the zeros r and s."
      ],
      example: "y = 2(x − 3)² + 1 has its vertex at (3, 1) and opens upward."
    },
    {
      heading: "Solving quadratic equations",
      paragraphs: [
        "Set the equation equal to 0, then factor, take square roots, or use the quadratic formula."
      ],
      example: "x² − 6x + 8 = 0 factors as (x − 2)(x − 4) = 0, so x = 2 or x = 4."
    },
    {
      heading: "The discriminant",
      paragraphs: [
        "The value b² − 4ac tells you how many real solutions there are. If it's positive, there are two. If it's zero, there is one. If it's negative, there are none."
      ],
      example: "For x² + 2x + 5 = 0, b² − 4ac = 4 − 20 = −16, so there are no real solutions."
    },
    {
      heading: "Axis of symmetry and extreme values",
      paragraphs: [
        "The axis of symmetry is the line x = −b/(2a), and it passes through the vertex. The vertex is the minimum if a is positive and the maximum if a is negative."
      ],
      example: "For y = x² − 4x + 3, the axis is x = 2 and y(2) = 4 − 8 + 3 = −1, so the minimum value is −1."
    },
    {
      heading: "Modeling with quadratics",
      paragraphs: [
        "Quadratics describe things like thrown objects. The vertex gives the highest point, and the zeros show when the object is at ground level."
      ],
      example: "A height of h = −16t² + 48t has its vertex at t = 1.5 seconds, where h = −36 + 72 = 36 feet."
    }
  ],
  problems: [
    {
      id: "sat/quadratics-and-nonlinear-functions/1",
      question: "What is the vertex of y = (x − 4)² + 7?",
      options: ["(−4, 7)", "(4, −7)", "(4, 7)", "(7, 4)"],
      answer: 2,
      explanation: "In vertex form y = a(x − h)² + k, the vertex is (h, k) = (4, 7)."
    },
    {
      id: "sat/quadratics-and-nonlinear-functions/2",
      question: "What are the solutions of x² − 5x + 6 = 0?",
      options: ["2 and 3", "−2 and −3", "1 and 6", "−1 and −6"],
      answer: 0,
      explanation: "The equation factors as (x − 2)(x − 3) = 0, so x = 2 or x = 3."
    },
    {
      id: "sat/quadratics-and-nonlinear-functions/3",
      question: "How many real solutions does x² + 4x + 9 = 0 have?",
      options: ["Two", "One", "None", "Infinitely many"],
      answer: 2,
      explanation: "The discriminant is 4² − 4(1)(9) = 16 − 36 = −20. It's negative, so there are no real solutions."
    },
    {
      id: "sat/quadratics-and-nonlinear-functions/4",
      question: "What is the minimum value of y = x² − 6x + 5?",
      options: ["3", "5", "−9", "−4"],
      answer: 3,
      explanation: "The vertex is at x = 6/2 = 3. Then y = 9 − 18 + 5 = −4."
    },
    {
      id: "sat/quadratics-and-nonlinear-functions/5",
      question: "A quadratic has zeros at x = −2 and x = 5. Which could be its equation?",
      options: ["y = (x − 2)(x + 5)", "y = (x + 2)(x − 5)", "y = (x + 2)(x + 5)", "y = (x − 2)(x − 5)"],
      answer: 1,
      explanation: "A zero at x = −2 comes from the factor (x + 2), and a zero at x = 5 comes from (x − 5)."
    },
    {
      id: "sat/quadratics-and-nonlinear-functions/6",
      question: "A ball's height in feet is h = −16t² + 64t. What is its maximum height?",
      options: ["32 ft", "128 ft", "64 ft", "16 ft"],
      answer: 2,
      explanation: "The vertex is at t = −64/(2 × −16) = 2. Then h = −16(4) + 64(2) = −64 + 128 = 64 feet."
    }
  ]
};

window.LESSONS["sat/data-analysis-and-statistics"] = {
  intro: "Summarize data, read graphs and tables, and interpret lines of best fit and surveys.",
  learn: [
    {
      heading: "Mean, median, and outliers",
      paragraphs: [
        "The mean is the sum divided by the count, and the median is the middle value. An outlier, a value far from the others, pulls the mean toward it much more than it pulls the median."
      ],
      example: "For 3, 4, 5, 6, 42: the mean is 60 ÷ 5 = 12, but the median is 5. The outlier 42 drags the mean up."
    },
    {
      heading: "Reading tables and graphs",
      paragraphs: [
        "Read the title, the axis labels, and the units before you look at the data. Make sure you know exactly what is being compared."
      ],
      example: "In a scatterplot of study hours and test scores, points that rise from left to right show a positive association."
    },
    {
      heading: "Lines of best fit",
      paragraphs: [
        "A line of best fit has the form y = mx + b. The slope m is the predicted change in y for each increase of 1 in x. The intercept b is the predicted y when x is 0."
      ],
      example: "If the line is y = 4x + 50, each extra hour predicts 4 more points, and 0 hours predicts a score of 50."
    },
    {
      heading: "Probability from data",
      paragraphs: [
        "Probability is the part divided by the whole. For a conditional probability, first narrow the table down to the group you're told about."
      ],
      example: "Of 40 students who play sports, 10 play soccer. If one of those 40 is picked at random, P(soccer) = 10/40 = 1/4."
    },
    {
      heading: "Spread and margin of error",
      paragraphs: [
        "A larger standard deviation means the data is more spread out. A survey's margin of error gives a range likely to contain the true value."
      ],
      example: "A poll says 54% with a margin of error of 3%. The true value is likely between 51% and 57%."
    }
  ],
  problems: [
    {
      id: "sat/data-analysis-and-statistics/1",
      question: "What is the median of 4, 9, 2, 7, 5?",
      options: ["5", "7", "5.4", "9"],
      answer: 0,
      explanation: "In order, the numbers are 2, 4, 5, 7, 9. The middle value is 5. (The mean is 5.4, which isn't the same thing.)"
    },
    {
      id: "sat/data-analysis-and-statistics/2",
      question: "The data set 10, 12, 13, 15, 60 has a mean of 22. If the 60 is removed, what happens to the mean?",
      options: ["It increases", "It stays the same", "It decreases", "It cannot be determined"],
      answer: 2,
      explanation: "Without the 60, the sum is 50 and the mean is 50 ÷ 4 = 12.5, much lower than 22."
    },
    {
      id: "sat/data-analysis-and-statistics/3",
      question: "A line of best fit for a plant's height is y = 2.5x + 8, where x is days and y is height in cm. What does the 2.5 represent?",
      options: ["The predicted height at day 0", "The predicted growth per day", "The number of plants", "The total number of days"],
      answer: 1,
      explanation: "The slope is the predicted change in height for each additional day: 2.5 cm per day."
    },
    {
      id: "sat/data-analysis-and-statistics/4",
      question: "Using y = 2.5x + 8, what is the predicted height after 10 days?",
      options: ["25 cm", "28 cm", "35 cm", "33 cm"],
      answer: 3,
      explanation: "2.5(10) + 8 = 25 + 8 = 33 cm."
    },
    {
      id: "sat/data-analysis-and-statistics/5",
      question: "In a group of 60 students, 24 take art. If a student is chosen at random, what is the probability that the student takes art?",
      options: ["3/5", "1/24", "2/5", "24/36"],
      answer: 2,
      explanation: "24 ÷ 60 = 2/5."
    },
    {
      id: "sat/data-analysis-and-statistics/6",
      question: "A survey reports that 62% of voters favor a measure, with a margin of error of 4 percentage points. Which range is most likely to contain the true percent?",
      options: ["62% to 66%", "58% to 66%", "54% to 70%", "60% to 64%"],
      answer: 1,
      explanation: "62 − 4 = 58 and 62 + 4 = 66, so the true value is likely between 58% and 66%."
    }
  ]
};

window.LESSONS["pact/pre-algebra-and-number-sense"] = {
  intro: "Build speed with place value, fractions, decimals, percents, and number rules.",
  learn: [
    {
      heading: "Place value and rounding",
      paragraphs: [
        "Each digit's place decides its value. To round, look at the digit just to the right of the place you're rounding to. If it is 5 or more, round up. If it is 4 or less, round down."
      ],
      example: "Round 3,846 to the nearest hundred. The tens digit is 4, so round down to 3,800."
    },
    {
      heading: "Fractions, decimals, and percents",
      paragraphs: [
        "To turn a fraction into a decimal, divide the top by the bottom. To turn a decimal into a percent, multiply by 100."
      ],
      example: "3/4 = 3 ÷ 4 = 0.75 = 75%."
    },
    {
      heading: "Order of operations",
      paragraphs: [
        "Work in this order: parentheses, exponents, then multiplication and division from left to right, then addition and subtraction from left to right."
      ],
      example: "6 + 4 × 2 = 6 + 8 = 14, not 20."
    },
    {
      heading: "Factors and multiples",
      paragraphs: [
        "A factor divides a number evenly. A multiple is what you get by multiplying a number by 1, 2, 3, and so on. The greatest common factor (GCF) is the biggest shared factor, and the least common multiple (LCM) is the smallest shared multiple."
      ],
      example: "The factors of 12 are 1, 2, 3, 4, 6, and 12. For 12 and 18, the GCF is 6 and the LCM is 36."
    },
    {
      heading: "Percent of a number",
      paragraphs: [
        "To find a percent of a number, change the percent to a decimal and multiply."
      ],
      example: "20% of 150 = 0.20 × 150 = 30."
    }
  ],
  problems: [
    {
      id: "pact/pre-algebra-and-number-sense/1",
      question: "Round 6,472 to the nearest hundred.",
      options: ["6,400", "6,500", "6,470", "7,000"],
      answer: 1,
      explanation: "The tens digit is 7, which is 5 or more, so round the hundreds digit up: 6,500."
    },
    {
      id: "pact/pre-algebra-and-number-sense/2",
      question: "What is 3/5 written as a percent?",
      options: ["35%", "53%", "6%", "60%"],
      answer: 3,
      explanation: "3 ÷ 5 = 0.6, and 0.6 × 100 = 60%."
    },
    {
      id: "pact/pre-algebra-and-number-sense/3",
      question: "What is 8 + 3 × (6 − 2)?",
      options: ["20", "44", "32", "14"],
      answer: 0,
      explanation: "Parentheses first: 6 − 2 = 4. Then multiply: 3 × 4 = 12. Then add: 8 + 12 = 20."
    },
    {
      id: "pact/pre-algebra-and-number-sense/4",
      question: "What is the greatest common factor of 24 and 36?",
      options: ["6", "4", "12", "72"],
      answer: 2,
      explanation: "The factors of 24 and 36 that they share are 1, 2, 3, 4, 6, and 12. The greatest is 12."
    },
    {
      id: "pact/pre-algebra-and-number-sense/5",
      question: "What is the least common multiple of 4 and 6?",
      options: ["24", "12", "2", "10"],
      answer: 1,
      explanation: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... The first one they share is 12."
    },
    {
      id: "pact/pre-algebra-and-number-sense/6",
      question: "What is 35% of 80?",
      options: ["28", "35", "2.8", "45"],
      answer: 0,
      explanation: "0.35 × 80 = 28."
    }
  ]
};

window.LESSONS["pact/elementary-algebra"] = {
  intro: "Evaluate expressions, solve simple equations and inequalities, and use basic formulas.",
  learn: [
    {
      heading: "Evaluating expressions",
      paragraphs: [
        "To evaluate an expression, replace the variable with its value and then follow the order of operations."
      ],
      example: "3a + 2 when a = 5: 3 × 5 + 2 = 15 + 2 = 17."
    },
    {
      heading: "Solving equations",
      paragraphs: [
        "Undo addition or subtraction first, then undo multiplication or division. Do the same thing to both sides."
      ],
      example: "2x + 5 = 17. Subtract 5: 2x = 12. Divide by 2: x = 6."
    },
    {
      heading: "Solving inequalities",
      paragraphs: [
        "Solve an inequality the same way as an equation. The answer is a range of numbers, not just one."
      ],
      example: "x − 3 < 7. Add 3 to both sides: x < 10."
    },
    {
      heading: "Using formulas",
      paragraphs: [
        "Many problems give you a formula. Substitute the numbers you know and solve for the rest. A common one is distance = rate × time."
      ],
      example: "A car going 60 miles per hour for 2.5 hours travels 60 × 2.5 = 150 miles."
    },
    {
      heading: "Combining like terms and distributing",
      paragraphs: [
        "Multiply the number outside the parentheses by everything inside. Then combine terms that have the same variable."
      ],
      example: "2(x + 3) + 4x = 2x + 6 + 4x = 6x + 6."
    }
  ],
  problems: [
    {
      id: "pact/elementary-algebra/1",
      question: "What is the value of 4n − 3 when n = 6?",
      options: ["21", "24", "18", "9"],
      answer: 0,
      explanation: "4 × 6 − 3 = 24 − 3 = 21."
    },
    {
      id: "pact/elementary-algebra/2",
      question: "Solve: 3x + 4 = 19",
      options: ["7.67", "23", "5", "15"],
      answer: 2,
      explanation: "Subtract 4: 3x = 15. Divide by 3: x = 5."
    },
    {
      id: "pact/elementary-algebra/3",
      question: "Solve: 2y − 5 = 9",
      options: ["2", "7", "9", "14"],
      answer: 1,
      explanation: "Add 5: 2y = 14. Divide by 2: y = 7."
    },
    {
      id: "pact/elementary-algebra/4",
      question: "Solve: x + 6 ≥ 11",
      options: ["x ≥ 17", "x ≤ 5", "x ≥ 66", "x ≥ 5"],
      answer: 3,
      explanation: "Subtract 6 from both sides: x ≥ 5."
    },
    {
      id: "pact/elementary-algebra/5",
      question: "Simplify: 3(x + 2) + 2x",
      options: ["5x + 2", "6x + 2", "5x + 6", "5x + 5"],
      answer: 2,
      explanation: "Distribute: 3x + 6 + 2x. Combine like terms: 5x + 6."
    },
    {
      id: "pact/elementary-algebra/6",
      question: "A car travels at 55 miles per hour. How far does it go in 3 hours?",
      options: ["165 miles", "58 miles", "18.3 miles", "55 miles"],
      answer: 0,
      explanation: "Distance = rate × time = 55 × 3 = 165 miles."
    }
  ]
};

window.LESSONS["pact/geometry-and-measurement"] = {
  intro: "Work with angles, perimeter, area, circles, volume, and unit conversions.",
  learn: [
    {
      heading: "Angles",
      paragraphs: [
        "The angles in a triangle add up to 180°. Two angles that add up to 90° are complementary, and two that add up to 180° are supplementary."
      ],
      example: "The complement of 35° is 90° − 35° = 55°."
    },
    {
      heading: "Perimeter and area",
      paragraphs: [
        "A rectangle's perimeter is 2(length + width) and its area is length × width. A triangle's area is one half times base times height."
      ],
      example: "A 7 by 4 rectangle has a perimeter of 2(7 + 4) = 22 and an area of 7 × 4 = 28."
    },
    {
      heading: "Circles",
      paragraphs: [
        "A circle's circumference is 2πr and its area is πr². The diameter is twice the radius."
      ],
      example: "A circle with a radius of 3 has a circumference of 6π and an area of 9π."
    },
    {
      heading: "Volume",
      paragraphs: [
        "The volume of a box is length × width × height. It is measured in cubic units."
      ],
      example: "A box that is 5 by 3 by 2 has a volume of 5 × 3 × 2 = 30 cubic units."
    },
    {
      heading: "Units and conversions",
      paragraphs: [
        "To change units, multiply or divide by the conversion factor. Remember that 1 yard = 3 feet, 1 foot = 12 inches, and 1 meter = 100 centimeters."
      ],
      example: "3 yards = 3 × 3 = 9 feet. And 150 cm = 150 ÷ 100 = 1.5 m."
    }
  ],
  problems: [
    {
      id: "pact/geometry-and-measurement/1",
      question: "Two angles are complementary. One measures 38°. What is the other?",
      options: ["142°", "52°", "62°", "38°"],
      answer: 1,
      explanation: "Complementary angles add to 90°, so the other angle is 90° − 38° = 52°."
    },
    {
      id: "pact/geometry-and-measurement/2",
      question: "A rectangle is 9 cm by 5 cm. What is its perimeter?",
      options: ["45 cm", "14 cm", "28 cm", "56 cm"],
      answer: 2,
      explanation: "Perimeter = 2(9 + 5) = 28 cm."
    },
    {
      id: "pact/geometry-and-measurement/3",
      question: "What is the area of a triangle with a base of 10 and a height of 7?",
      options: ["35", "70", "17", "27"],
      answer: 0,
      explanation: "Area = (1/2)(10)(7) = 35."
    },
    {
      id: "pact/geometry-and-measurement/4",
      question: "A circle has a radius of 5. What is its circumference?",
      options: ["25π", "5π", "20π", "10π"],
      answer: 3,
      explanation: "Circumference = 2πr = 2π(5) = 10π."
    },
    {
      id: "pact/geometry-and-measurement/5",
      question: "What is the volume of a box that is 6 by 4 by 3?",
      options: ["13", "36", "72", "48"],
      answer: 2,
      explanation: "Volume = 6 × 4 × 3 = 72."
    },
    {
      id: "pact/geometry-and-measurement/6",
      question: "How many feet are in 4 yards?",
      options: ["12", "4/3", "48", "7"],
      answer: 0,
      explanation: "1 yard = 3 feet, so 4 yards = 4 × 3 = 12 feet."
    }
  ]
};

window.LESSONS["act/pre-algebra-and-elementary-algebra"] = {
  intro: "Percents, equations, exponents, averages, and counting at ACT speed.",
  learn: [
    {
      heading: "Percent problems",
      paragraphs: [
        "A discount of p% leaves you paying (100 − p)% of the price. Multiply the price by that decimal to go straight to the sale price."
      ],
      example: "An $80 item is 25% off. You pay 75%, so 80 × 0.75 = $60."
    },
    {
      heading: "Equations with variables on both sides",
      paragraphs: [
        "Distribute first, then get the variable terms on one side and the numbers on the other."
      ],
      example: "3(x − 2) = 2x + 5. Distribute: 3x − 6 = 2x + 5. Subtract 2x: x − 6 = 5. Add 6: x = 11."
    },
    {
      heading: "Laws of exponents",
      paragraphs: [
        "When you multiply powers with the same base, add the exponents. When you raise a power to a power, multiply the exponents."
      ],
      example: "x³ · x⁴ = x⁷, and (x²)³ = x⁶."
    },
    {
      heading: "Averages",
      paragraphs: [
        "The average is the total divided by the count. To find a missing value, work out the total you need first."
      ],
      example: "Scores of 80, 90, 85, and 95 have a total of 350, so the average is 350 ÷ 4 = 87.5."
    },
    {
      heading: "Counting",
      paragraphs: [
        "When you make a choice from each of several groups, multiply the number of choices in each group."
      ],
      example: "With 3 shirts and 4 pairs of pants, you can make 3 × 4 = 12 outfits."
    }
  ],
  problems: [
    {
      id: "act/pre-algebra-and-elementary-algebra/1",
      question: "A $120 jacket is on sale for 30% off. What is the sale price?",
      options: ["$36", "$90", "$84", "$150"],
      answer: 2,
      explanation: "You pay 70% of the price: 0.70 × 120 = $84."
    },
    {
      id: "act/pre-algebra-and-elementary-algebra/2",
      question: "Solve: 4(x − 1) = 2x + 10",
      options: ["3", "7", "5", "14"],
      answer: 1,
      explanation: "Distribute: 4x − 4 = 2x + 10. Subtract 2x: 2x − 4 = 10. Add 4: 2x = 14, so x = 7."
    },
    {
      id: "act/pre-algebra-and-elementary-algebra/3",
      question: "Simplify: x⁵ · x³",
      options: ["x⁸", "x¹⁵", "2x⁸", "x²"],
      answer: 0,
      explanation: "When multiplying powers with the same base, add the exponents: 5 + 3 = 8."
    },
    {
      id: "act/pre-algebra-and-elementary-algebra/4",
      question: "Simplify: (2x³)²",
      options: ["2x⁶", "4x⁵", "4x⁶", "4x⁹"],
      answer: 2,
      explanation: "Square the 2 to get 4, and multiply the exponents: 3 × 2 = 6. So the answer is 4x⁶."
    },
    {
      id: "act/pre-algebra-and-elementary-algebra/5",
      question: "Rosa scored 82, 90, and 88 on three tests. What score does she need on a fourth test to have an average of 88?",
      options: ["88", "90", "94", "92"],
      answer: 3,
      explanation: "She needs a total of 4 × 88 = 352. So far she has 82 + 90 + 88 = 260, so she needs 352 − 260 = 92."
    },
    {
      id: "act/pre-algebra-and-elementary-algebra/6",
      question: "A restaurant offers 3 appetizers, 5 main dishes, and 2 desserts. How many different meals have one of each?",
      options: ["10", "30", "15", "60"],
      answer: 1,
      explanation: "Multiply the choices: 3 × 5 × 2 = 30."
    }
  ]
};

window.LESSONS["act/intermediate-algebra-and-coordinate-geometry"] = {
  intro: "Lines, distance, quadratics, functions, and absolute value on the coordinate plane.",
  learn: [
    {
      heading: "Lines and slope",
      paragraphs: [
        "Slope = (y₂ − y₁) ÷ (x₂ − x₁). Parallel lines have equal slopes. Perpendicular lines have slopes that are negative reciprocals of each other."
      ],
      example: "A line perpendicular to y = 2x + 1 has a slope of −1/2."
    },
    {
      heading: "Distance and midpoint",
      paragraphs: [
        "The midpoint is the average of the x-values and the average of the y-values. The distance is √((x₂ − x₁)² + (y₂ − y₁)²), which is the Pythagorean theorem."
      ],
      example: "For (1, 2) and (7, 10), the midpoint is (4, 6) and the distance is √(36 + 64) = 10."
    },
    {
      heading: "Quadratics and factoring",
      paragraphs: [
        "To solve a quadratic equation, move everything to one side, factor, and set each factor equal to zero."
      ],
      example: "x² + x − 12 = 0 factors as (x + 4)(x − 3) = 0, so x = −4 or x = 3."
    },
    {
      heading: "Functions",
      paragraphs: [
        "In f(g(x)), work from the inside out. Evaluate g(x) first, then use that result as the input to f."
      ],
      example: "If f(x) = 2x + 1 and g(x) = x², then f(g(3)) = f(9) = 19."
    },
    {
      heading: "Absolute value equations",
      paragraphs: [
        "|expression| = a means the expression equals a or equals −a. Solve both cases."
      ],
      example: "|x − 3| = 5 gives x − 3 = 5 or x − 3 = −5, so x = 8 or x = −2."
    }
  ],
  problems: [
    {
      id: "act/intermediate-algebra-and-coordinate-geometry/1",
      question: "What is the slope of a line perpendicular to y = 4x − 3?",
      options: ["4", "−4", "1/4", "−1/4"],
      answer: 3,
      explanation: "A perpendicular slope is the negative reciprocal of 4, which is −1/4."
    },
    {
      id: "act/intermediate-algebra-and-coordinate-geometry/2",
      question: "What is the midpoint of (2, 5) and (10, 9)?",
      options: ["(6, 7)", "(8, 14)", "(4, 2)", "(12, 14)"],
      answer: 0,
      explanation: "Average the x-values: (2 + 10)/2 = 6. Average the y-values: (5 + 9)/2 = 7."
    },
    {
      id: "act/intermediate-algebra-and-coordinate-geometry/3",
      question: "What is the distance between (0, 0) and (6, 8)?",
      options: ["14", "10", "48", "7"],
      answer: 1,
      explanation: "√(6² + 8²) = √(36 + 64) = √100 = 10."
    },
    {
      id: "act/intermediate-algebra-and-coordinate-geometry/4",
      question: "Solve: x² − 3x − 10 = 0",
      options: ["x = −5 or x = 2", "x = 5 or x = 2", "x = 5 or x = −2", "x = −5 or x = −2"],
      answer: 2,
      explanation: "The equation factors as (x − 5)(x + 2) = 0, so x = 5 or x = −2."
    },
    {
      id: "act/intermediate-algebra-and-coordinate-geometry/5",
      question: "If f(x) = 3x − 2 and g(x) = x + 4, what is f(g(1))?",
      options: ["6", "16", "7", "13"],
      answer: 3,
      explanation: "g(1) = 1 + 4 = 5. Then f(5) = 3(5) − 2 = 13."
    },
    {
      id: "act/intermediate-algebra-and-coordinate-geometry/6",
      question: "Solve: |2x − 4| = 10",
      options: ["x = 7 only", "x = 7 or x = −3", "x = 3 or x = −7", "x = 7 or x = 3"],
      answer: 1,
      explanation: "Either 2x − 4 = 10, which gives x = 7, or 2x − 4 = −10, which gives x = −3."
    }
  ]
};

window.LESSONS["act/plane-geometry-and-trigonometry"] = {
  intro: "Angles, similar triangles, circles, and trigonometry on the ACT.",
  learn: [
    {
      heading: "Parallel lines and angles",
      paragraphs: [
        "When a line crosses two parallel lines, corresponding angles are equal and alternate interior angles are equal. Angles on the same side between the lines add up to 180°."
      ],
      example: "If one angle is 70°, its alternate interior partner is also 70°, and its same-side partner is 110°."
    },
    {
      heading: "Similar triangles",
      paragraphs: [
        "Similar triangles have equal angles and sides in the same ratio. The scale factor compares matching sides."
      ],
      example: "A triangle with sides 3, 4, and 5 is similar to one with sides 9, 12, and 15. The scale factor is 3."
    },
    {
      heading: "Circles and sectors",
      paragraphs: [
        "A sector is a slice of a circle. Its area is the fraction angle/360 of the whole circle's area, πr²."
      ],
      example: "A 90° sector of a circle with radius 6 has an area of (1/4)(36π) = 9π."
    },
    {
      heading: "Right triangle trigonometry",
      paragraphs: [
        "sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, and tan = opposite ÷ adjacent."
      ],
      example: "In a right triangle with opposite side 7 and hypotenuse 25, sin = 7/25."
    },
    {
      heading: "Special right triangles",
      paragraphs: [
        "In a 45-45-90 triangle the sides are x, x, and x√2. In a 30-60-90 triangle the sides are x, x√3, and 2x, where x is the shortest side."
      ],
      example: "A 45-45-90 triangle with legs of 5 has a hypotenuse of 5√2. A 30-60-90 triangle with a short side of 3 has sides 3, 3√3, and 6."
    }
  ],
  problems: [
    {
      id: "act/plane-geometry-and-trigonometry/1",
      question: "Two parallel lines are cut by a transversal. One angle measures 65°. What is the measure of the alternate interior angle?",
      options: ["115°", "25°", "65°", "130°"],
      answer: 2,
      explanation: "Alternate interior angles between parallel lines are equal, so the angle is also 65°."
    },
    {
      id: "act/plane-geometry-and-trigonometry/2",
      question: "In a 30-60-90 triangle, the shortest side is 4. What is the hypotenuse?",
      options: ["4√3", "8", "4√2", "12"],
      answer: 1,
      explanation: "In a 30-60-90 triangle, the hypotenuse is twice the shortest side: 2 × 4 = 8."
    },
    {
      id: "act/plane-geometry-and-trigonometry/3",
      question: "A 45-45-90 triangle has legs of length 6. What is the hypotenuse?",
      options: ["6√2", "12", "6√3", "36"],
      answer: 0,
      explanation: "In a 45-45-90 triangle, the hypotenuse is the leg times √2: 6√2."
    },
    {
      id: "act/plane-geometry-and-trigonometry/4",
      question: "A sector has a central angle of 90° in a circle of radius 10. What is the area of the sector?",
      options: ["100π", "50π", "10π", "25π"],
      answer: 3,
      explanation: "A 90° sector is 1/4 of the circle. The full area is π(10²) = 100π, so the sector is 25π."
    },
    {
      id: "act/plane-geometry-and-trigonometry/5",
      question: "A right triangle has legs of 5 and 12. What is cos of the angle opposite the side of length 5?",
      options: ["5/13", "12/13", "5/12", "13/12"],
      answer: 1,
      explanation: "The hypotenuse is 13. For the angle opposite the 5 side, the adjacent side is 12, so cos = 12/13."
    },
    {
      id: "act/plane-geometry-and-trigonometry/6",
      question: "Triangle ABC is similar to triangle DEF with a scale factor of 2 : 3. If AB = 8, what is DE?",
      options: ["16/3", "10", "24", "12"],
      answer: 3,
      explanation: "The sides are in the ratio 2:3, so 8/DE = 2/3. Then DE = 8 × 3/2 = 12."
    }
  ]
};

window.LESSONS["6th-grade/ratios-and-rates"].video = {
  youtubeId: "PASTE_THE_VIDEO_ID_HERE",
  title: "Ratios and Rates lecture"
};
