// The Shop page: tabs, item cards, buying, equipping, and options like the tassel color.
(function () {
  const store = window.CognitiveStore;
  const grid = document.querySelector("#shop-grid");
  const tabs = document.querySelector("#shop-tabs");
  const message = document.querySelector("#shop-message");

  if (!store || !grid || !tabs) return;

  let state = store.load();
  let activeSlot = store.SLOTS[0].id;

  function say(text) {
    message.textContent = text;
  }

  function renderTabs() {
    tabs.innerHTML = "";
    store.SLOTS.forEach(function (slot) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tab" + (slot.id === activeSlot ? " active" : "");
      button.textContent = slot.label;
      button.addEventListener("click", function () {
        activeSlot = slot.id;
        say("");
        render();
      });
      tabs.appendChild(button);
    });
  }

  // A row of colored dots for items with a choice, like the cap's tassel.
  function buildOptions(item) {
    const row = document.createElement("div");
    row.className = "option-row";

    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = item.options.label;
    row.appendChild(label);

    item.options.choices.forEach(function (choice) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "option-dot" + (state.options[item.options.name] === choice.id ? " active" : "");
      dot.style.background = choice.color;
      dot.title = choice.name;
      dot.setAttribute("aria-label", choice.name + " " + item.options.label.toLowerCase());
      dot.addEventListener("click", function () {
        store.setOption(state, item.options.name, choice.id);
        say(choice.name + " " + item.options.label.toLowerCase() + " chosen.");
        render();
      });
      row.appendChild(dot);
    });

    return row;
  }

  // For categories where you can wear several things at once: one card that turns them all off.
  function buildNoneCard(slot) {
    const wearing = (state.equipped[slot.id] || []).slice();

    const card = document.createElement("div");
    card.className = "shop-item";

    const swatch = document.createElement("div");
    swatch.className = "swatch";
    store.renderPreview(swatch, { id: "none-" + slot.id, slot: slot.id }, state);
    card.appendChild(swatch);

    const name = document.createElement("h3");
    name.textContent = "No " + slot.label;

    const description = document.createElement("p");
    description.textContent = "Turns off everything here for a plain heptagon.";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "buy";

    if (wearing.length === 0) {
      button.textContent = "Equipped";
      button.classList.add("equipped");
      button.disabled = true;
    } else {
      button.textContent = "Turn all off";
      button.classList.add("secondary");
      button.addEventListener("click", function () {
        wearing.forEach(function (id) { store.unequip(state, id); });
        say("All " + slot.label.toLowerCase() + " turned off.");
        render();
      });
    }

    card.append(name, description, button);
    return card;
  }

  function renderItems() {
    grid.innerHTML = "";
    const slot = store.SLOTS.find(function (s) { return s.id === activeSlot; });
    const multi = Boolean(slot && slot.multi);

    if (multi) {
      grid.appendChild(buildNoneCard(slot));
    }

    store.CATALOG.filter(function (item) {
      return item.slot === activeSlot;
    }).forEach(function (item) {
      const owned = state.owned.indexOf(item.id) !== -1;
      const equipped = store.isEquipped(state, item);

      const card = document.createElement("div");
      card.className = "shop-item" + (item.rarity ? " " + item.rarity : "");

      const swatch = document.createElement("div");
      swatch.className = "swatch";
      store.renderPreview(swatch, item, state);
      card.appendChild(swatch);

            if (item.rarity) {
        const badge = document.createElement("span");
        badge.className = "rarity-badge " + item.rarity;
        badge.textContent = item.rarity === "god" ? "God tier" : item.rarity;
        card.appendChild(badge);
      }

      const name = document.createElement("h3");
      name.textContent = item.name;

      const description = document.createElement("p");
      description.textContent = item.description;

      card.append(name, description);

      if (item.options && owned) {
        card.appendChild(buildOptions(item));
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "buy";

      if (equipped && multi) {
        button.textContent = "Remove";
        button.classList.add("secondary");
        button.addEventListener("click", function () {
          store.unequip(state, item.id);
          say(item.name + " removed.");
          render();
        });
      } else if (equipped) {
        button.textContent = "Equipped";
        button.classList.add("equipped");
        button.disabled = true;
      } else if (owned) {
        button.textContent = "Equip";
        button.classList.add("secondary");
        button.addEventListener("click", function () {
          store.equip(state, item.id);
          say(item.name + " equipped.");
          render();
        });
      } else {
        button.textContent = item.price.toLocaleString() + " gems";
        if (state.points < item.price) {
          button.classList.add("cant-afford");
        }
        button.addEventListener("click", function () {
          const result = store.buy(state, item.id);
          if (result.ok) {
            store.equip(state, item.id);
            say("You bought and equipped " + item.name + ".");
          } else {
            say(result.message);
          }
          render();
        });
      }

      card.appendChild(button);
      grid.appendChild(card);
    });
  }

  function render() {
    renderTabs();
    renderItems();
    store.applyToPage(state);
  }

  render();
})();