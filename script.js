// ----- Sidebar toggle, remembered between pages -----
const root = document.documentElement;
const toggle = document.querySelector(".menu-toggle");

// The script in the <head> already applied the saved choice.
// Here we just make the button's label match it.
toggle.setAttribute("aria-expanded", String(!root.classList.contains("sidebar-collapsed")));

toggle.addEventListener("click", function () {
  const collapsed = root.classList.toggle("sidebar-collapsed");
  toggle.setAttribute("aria-expanded", String(!collapsed));
  try {
    localStorage.setItem("sidebarCollapsed", String(collapsed));
  } catch (error) {
    // Ignore: we just can't remember the choice.
  }
});
// ----- Topic search (only runs on pages that have a search box) -----
const search = document.querySelector("#topic-search");

if (search) {
  const categories = document.querySelectorAll(".category");
  const noResults = document.querySelector("#no-results");

  search.addEventListener("input", function () {
    const query = search.value.trim().toLowerCase();
    let visibleCategories = 0;

    categories.forEach(function (category) {
      const name = category.querySelector("h3").textContent.toLowerCase();
      const topics = category.querySelectorAll("li");
      let anyTopicShown = false;

      topics.forEach(function (topic) {
        const matches =
          query === "" ||
          name.includes(query) ||
          topic.textContent.toLowerCase().includes(query);
        topic.hidden = !matches;
        if (matches) {
          anyTopicShown = true;
        }
      });

      category.hidden = !anyTopicShown;
      if (anyTopicShown) {
        visibleCategories++;
      }
    });

    noResults.hidden = visibleCategories > 0;
  });
}
// ----- Mini calendar (only runs on pages that have one) -----
const calendar = document.querySelector("#calendar");

if (calendar) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthName = today.toLocaleString("default", { month: "long" });

  const firstWeekday = new Date(year, month, 1).getDay();   // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = '<div class="calendar-title">' + monthName + " " + year + "</div>";
  html += '<div class="calendar-grid">';

  ["S", "M", "T", "W", "T", "F", "S"].forEach(function (letter) {
    html += '<span class="calendar-weekday">' + letter + "</span>";
  });

  for (let i = 0; i < firstWeekday; i++) {
    html += "<span></span>";               // empty cells before the 1st
  }

    for (let day = 1; day <= daysInMonth; day++) {
    let classes = "calendar-day";
    if (day === today.getDate()) {
      classes += " today";
    } else if (day > today.getDate()) {
      classes += " future";
    }
    if (window.CognitiveProgress && window.CognitiveProgress.wasActive(year, month, day)) {
      classes += " done";
    }
    html += '<span class="' + classes + '">' + day + "</span>";
  }

  html += "</div>";
  calendar.innerHTML = html;
}
   // ----- Math page: link each category to its course page -----
   if (window.COURSES) {
     document.querySelectorAll(".category").forEach(function (category) {
       const heading = category.querySelector("h3");
       const course = window.COURSES.find(function (c) {
         return c.name === heading.textContent.trim();
       });
       if (!course) return;

       const url = "course.html#" + course.id;
       heading.innerHTML = '<a href="' + url + '">' + course.name + "</a>";

       const link = document.createElement("a");
       link.className = "course-link";
       link.href = url;
       link.textContent = "View course →";
       category.appendChild(link);
     });
   }
// ----- Math page: remember where you were when you open a course -----
const categoryGrid = document.querySelector(".category-grid");

if (categoryGrid) {
    const RETURN_KEY = "scrollReturn:" + window.location.pathname;

  // When the page loads, jump back to the saved spot (once).
  window.addEventListener("load", function () {
    try {
      const saved = Number(sessionStorage.getItem(RETURN_KEY));
      sessionStorage.removeItem(RETURN_KEY);
      if (saved > 0) window.scrollTo(0, saved);
    } catch (error) {}
  });

  // When a course link is clicked, save the current scroll position.
  categoryGrid.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      try {
        sessionStorage.setItem(RETURN_KEY, String(window.scrollY));
      } catch (error) {}
    }
  });
}