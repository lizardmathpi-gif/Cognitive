// Draws a lesson page: the video, the teaching blocks, then the practice problems.
(function () {
  const key = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const lesson = (window.LESSONS || {})[key];
  const parts = key.split("/");
  const course = (window.COURSES || []).find(function (c) { return c.id === parts[0]; });
  const topic = course && course.topics.find(function (t) { return t.id === parts[1]; });

  const titleEl = document.querySelector("#lesson-title");
  const subEl = document.querySelector("#lesson-sub");
  const backLink = document.querySelector("#back-link");
  const learn = document.querySelector("#learn");
  const problemsEl = document.querySelector("#problems");
  const bar = document.querySelector("#lesson-bar");
  const fill = document.querySelector("#lesson-fill");
  const countEl = document.querySelector("#lesson-count");
  const summary = document.querySelector("#summary");
  const summaryText = document.querySelector("#summary-text");
  const summaryBack = document.querySelector("#summary-back");
  const videoBox = document.querySelector("#video");

  if (!titleEl) return;

  if (!lesson || !course || !topic) {
    titleEl.textContent = "Lesson not found";
    subEl.innerHTML = 'Go back to the <a href="math.html">Math page</a> and pick a course.';
    return;
  }

  const progress = window.CognitiveProgress;
  const store = window.CognitiveStore;
  const courseUrl = "course.html#" + course.id;

  document.title = topic.name + " | Cognitive";
  titleEl.textContent = topic.name;
  subEl.textContent = course.name + " · " + lesson.intro;
  backLink.href = courseUrl;
  backLink.textContent = "← " + course.name;
  summaryBack.href = courseUrl;

  // ----- Video lecture -----
  if (videoBox && lesson.video && lesson.video.youtubeId) {
    const videoHeading = document.createElement("h3");
    videoHeading.textContent = "Video lecture";

    const frame = document.createElement("div");
    frame.className = "video-frame";

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(lesson.video.youtubeId);
    iframe.title = lesson.video.title || "Video lecture";
    iframe.setAttribute("allow", "encrypted-media; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");

    frame.appendChild(iframe);
    videoBox.append(videoHeading, frame);
    videoBox.hidden = false;
  }

  // ----- Learn -----
  lesson.learn.forEach(function (block) {
    const section = document.createElement("section");
    section.className = "learn-block";

    const heading = document.createElement("h3");
    heading.textContent = block.heading;
    section.appendChild(heading);

    block.paragraphs.forEach(function (text) {
      const p = document.createElement("p");
      p.textContent = text;
      section.appendChild(p);
    });

    if (block.example) {
      const box = document.createElement("div");
      box.className = "callout";
      const label = document.createElement("strong");
      label.textContent = "Example: ";
      box.append(label, document.createTextNode(block.example));
      section.appendChild(box);
    }

    learn.appendChild(section);
  });

  // ----- Progress bar and summary -----
  function updateProgress() {
    const total = lesson.problems.length;
    const solved = lesson.problems.filter(function (p) {
      return progress.isSolved(p.id);
    }).length;
    const percent = Math.round((solved / total) * 100);

    fill.style.width = percent + "%";
    bar.setAttribute("aria-valuenow", String(percent));
    countEl.textContent = solved + " of " + total;

    if (solved === total) {
      summary.hidden = false;
      const points = store ? store.load().points : 0;
      summaryText.textContent =
        "You solved all " + total + " problems. You have " + points + " points to spend in the shop.";
    }
  }

  // ----- Practice -----
  lesson.problems.forEach(function (problem, index) {
    const panel = document.createElement("section");
    panel.className = "problem";

    const number = document.createElement("div");
    number.className = "problem-number";
    number.textContent = "Problem " + (index + 1) + " of " + lesson.problems.length;

    const question = document.createElement("p");
    question.className = "problem-question";
    question.textContent = problem.question;

    const options = document.createElement("div");
    options.className = "options";

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    feedback.setAttribute("role", "status");

    const buttons = problem.options.map(function (text, i) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.textContent = text;

      button.addEventListener("click", function () {
        if (i === problem.answer) {
          const result = progress.recordCorrect(problem.id);
          button.classList.add("correct");
          buttons.forEach(function (b) { b.disabled = true; });
          feedback.className = "feedback good";
          feedback.textContent =
            (result.firstTime ? "Correct! +" + result.points + " points. " : "Correct! ") + problem.explanation;
          updateProgress();
        } else {
          button.classList.add("wrong");
          button.disabled = true;
          feedback.className = "feedback bad";
          feedback.textContent = "Not quite. Try another answer.";
        }
      });

      options.appendChild(button);
      return button;
    });

    // If this problem was solved on an earlier visit, show it as solved.
    if (progress.isSolved(problem.id)) {
      buttons[problem.answer].classList.add("correct");
      buttons.forEach(function (b) { b.disabled = true; });
      feedback.className = "feedback good";
      feedback.textContent = "You already solved this one. " + problem.explanation;
    }

    panel.append(number, question, options, feedback);
    problemsEl.appendChild(panel);
  });

  updateProgress();
})();