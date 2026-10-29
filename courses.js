// Course data for the whole site. Course names must match the headings on math.html exactly.
(function () {
  function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  const raw = [
    { id: "6th-grade", name: "6th Grade Math",
      blurb: "Ratios, fractions, and the start of algebra.",
      topics: ["Ratios and Rates", "Dividing Fractions and Decimals", "Expressions and One-Step Equations"] },
    { id: "7th-grade", name: "7th Grade Math",
      blurb: "Proportions, integers, and multi-step equations.",
      topics: ["Proportional Relationships and Percents", "Operations with Integers and Rational Numbers", "Two-Step Equations and Inequalities"] },
    { id: "8th-grade", name: "8th Grade Math",
      blurb: "Linear relationships, functions, and geometry basics.",
      topics: ["Linear Equations and Slope", "Functions", "Pythagorean Theorem"] },
    { id: "math-1", name: "Math 1",
      blurb: "Linear and exponential models and systems of equations.",
      topics: ["Linear Equations and Inequalities", "Systems of Linear Equations", "Exponential Growth and Decay"] },
    { id: "math-2", name: "Math 2",
      blurb: "Quadratics, congruence, and right triangles.",
      topics: ["Quadratic Functions", "Congruence and Similarity", "Right Triangle Trigonometry"] },
    { id: "math-3", name: "Math 3",
      blurb: "Polynomials, exponentials, logarithms, and statistics.",
      topics: ["Polynomial and Rational Functions", "Exponential and Logarithmic Functions", "Statistics and Probability"] },
    { id: "precalculus", name: "Precalculus",
      blurb: "Trigonometry, conic sections, and the road to calculus.",
      topics: ["Trigonometry and the Unit Circle", "Conic Sections", "Sequences, Series, and Limits"] },
    { id: "hs-calculus", name: "High School Calculus",
      blurb: "Limits, derivatives, and integrals.",
      topics: ["Limits", "Derivatives", "Integrals"] },
    { id: "psat", name: "PSAT",
      blurb: "Core math skills for the PSAT.",
      topics: ["Linear Equations and Inequalities", "Ratios, Rates, and Percents", "Basic Geometry and Trigonometry"] },
    { id: "sat", name: "SAT",
      blurb: "Core math skills for the SAT.",
      topics: ["Systems of Linear Equations", "Quadratics and Nonlinear Functions", "Data Analysis and Statistics"] },
    { id: "pact", name: "PACT",
      blurb: "Core math skills for the PACT.",
      topics: ["Pre-Algebra and Number Sense", "Elementary Algebra", "Geometry and Measurement"] },
    { id: "act", name: "ACT",
      blurb: "Core math skills for the ACT.",
      topics: ["Pre-Algebra and Elementary Algebra", "Intermediate Algebra and Coordinate Geometry", "Plane Geometry and Trigonometry"] }
  ];

  window.COURSES = raw.map(function (course) {
    return Object.assign({}, course, {
      topics: course.topics.map(function (name) {
        return { id: slug(name), name: name };
      })
    });
  });
})();

// Science courses. They're added to the same list as the math courses.
(function () {
  function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  const science = [
    { id: "6th-science", name: "6th Grade Science",
      blurb: "Earth's structure, cells, and energy.",
      topics: ["Plate Tectonics and Earth Structure", "Cells and Their Functions", "Energy and Heat Transfer"] },
    { id: "7th-science", name: "7th Grade Science",
      blurb: "Ecosystems, atoms, and how traits are passed down.",
      topics: ["Ecosystems and Food Webs", "Atoms, Elements, and the Periodic Table", "Heredity and Genetics"] },
    { id: "8th-science", name: "8th Grade Science",
      blurb: "Forces, waves, and the Earth-Sun-Moon system.",
      topics: ["Forces and Motion", "Waves, Light, and Sound", "Earth, Sun, and Moon Systems"] },
    { id: "biology", name: "Biology",
      blurb: "Cells, DNA, and the evolution of life.",
      topics: ["Cells and Cellular Energy", "DNA, Genes, and Protein Synthesis", "Evolution and Natural Selection"] },
    { id: "chemistry", name: "Chemistry",
      blurb: "Atoms, bonds, reactions, and the mole.",
      topics: ["Atomic Structure and Periodic Trends", "Chemical Bonds and Reactions", "Moles and Stoichiometry"] },
    { id: "physics", name: "Physics",
      blurb: "Motion, forces, energy, and circuits.",
      topics: ["Describing Motion", "Forces, Work, and Energy", "Electricity and Circuits"] },
    { id: "earth-science", name: "Earth and Environmental Science",
      blurb: "Earth's cycles, climate, and human impact.",
      topics: ["The Water and Carbon Cycles", "Climate and Climate Change", "Natural Resources and Human Impact"] }
  ];

  science.forEach(function (course) {
    window.COURSES.push(Object.assign({}, course, {
      subject: "science",
      topics: course.topics.map(function (name) {
        return { id: slug(name), name: name };
      })
    }));
  });
})();