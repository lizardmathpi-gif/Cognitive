// Shared shop data and saved state. Load on every page that shows the avatar or gems.
(function () {
  const KEY = window.Auth ? window.Auth.key("cognitiveShop") : "cognitiveShop";

  // "multi" categories let you wear several items at once.
  const SLOTS = [
    { id: "color", label: "Colors" },
    { id: "face", label: "Faces" },
    { id: "hat", label: "Hats" },
    { id: "effect", label: "Effects", multi: true },
    { id: "background", label: "Backgrounds" },
    { id: "mythic", label: "Mythic" }
  ];

  const INK = "#1f2a4d";

  const TASSELS = [
    { id: "gold", name: "Gold", color: "#f2c14e" },
    { id: "red", name: "Red", color: "#d94b4b" },
    { id: "blue", name: "Blue", color: "#3f7fd0" },
    { id: "green", name: "Green", color: "#2f9e6a" },
    { id: "white", name: "White", color: "#f3f5fb" }
  ];

  // ----- Drawings -----

  // A minimal clock face. The two numbers are where each hand points.
  function clockFace(hourEnd, minuteEnd, marks) {
    let decoration = "";
    if (marks === "ticks") {
      decoration = '<path d="M50 40 V43 M65 55 H62 M50 70 V67 M35 55 H38" fill="none" stroke="#1f2a4d" stroke-width="1.6" stroke-linecap="round" />';
    } else if (marks === "dots") {
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 50 + 13.5 * Math.sin(angle);
        const y = 55 - 13.5 * Math.cos(angle);
        decoration += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="0.9" fill="#1f2a4d" />';
      }
    }
    return (
      '<circle cx="50" cy="55" r="17" fill="#fffdf5" stroke="#1f2a4d" stroke-width="2" />' +
      decoration +
      '<path d="M50 55 L' + hourEnd + '" fill="none" stroke="#1f2a4d" stroke-width="2.4" stroke-linecap="round" />' +
      '<path d="M50 55 L' + minuteEnd + '" fill="none" stroke="#1f2a4d" stroke-width="1.6" stroke-linecap="round" />' +
      '<circle cx="50" cy="55" r="1.6" fill="#1f2a4d" />'
    );
  }

  // The mythic clock: the whole heptagon is the dial. The center of the heptagon is (50, 52).
  function buildLiveClock() {
    let marks = "";
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 * Math.PI) / 180;
      const inner = i % 3 === 0 ? 23.5 : 26;
      const outer = 29;
      const x1 = 50 + inner * Math.sin(angle);
      const y1 = 52 - inner * Math.cos(angle);
      const x2 = 50 + outer * Math.sin(angle);
      const y2 = 52 - outer * Math.cos(angle);
      marks +=
        '<line class="ink-line tick" x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) +
        '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" />';
    }
    return (
      marks +
      '<line class="live-hand ink-line hand-hour" data-hand="hour" x1="50" y1="52" x2="50" y2="38" />' +
      '<line class="live-hand ink-line hand-minute" data-hand="minute" x1="50" y1="52" x2="50" y2="29" />' +
      '<line class="live-hand hand-second" data-hand="second" x1="50" y1="58" x2="50" y2="25" />' +
      '<circle class="ink-fill" cx="50" cy="52" r="2.6" />' +
      '<circle cx="50" cy="52" r="1.4" fill="#d94b4b" />'
    );
  }

  // Quantum Core: drawn around (0, 0), then moved to the heptagon's center.
  const QUANTUM_CORE =
    '<g transform="translate(50 52)">' +
      '<g>' +
        '<animateTransform class="core-burst" attributeName="transform" type="scale" values="1;1.45;1" keyTimes="0;0.35;1" dur="0.9s" begin="indefinite" />' +
        '<g>' +
          '<circle r="24" fill="none" stroke="#5ee1ff" stroke-width="1.6" stroke-dasharray="3 5" stroke-linecap="round">' +
            '<animate attributeName="stroke" values="#5ee1ff;#c77dff;#ffd166;#5ee1ff" dur="6s" repeatCount="indefinite" />' +
          '</circle>' +
          '<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />' +
        '</g>' +
        '<g>' +
          '<circle r="16" fill="none" stroke="#c77dff" stroke-width="1.4" stroke-dasharray="2 4" stroke-linecap="round">' +
            '<animate attributeName="stroke" values="#c77dff;#ffd166;#5ee1ff;#c77dff" dur="6s" repeatCount="indefinite" />' +
          '</circle>' +
          '<animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="7s" repeatCount="indefinite" />' +
        '</g>' +
        '<circle r="11" fill="#5ee1ff" opacity="0.35">' +
          '<animate attributeName="fill" values="#5ee1ff;#c77dff;#ffd166;#5ee1ff" dur="6s" repeatCount="indefinite" />' +
          '<animate attributeName="r" values="10;13;10" dur="2s" repeatCount="indefinite" />' +
        '</circle>' +
        '<circle r="6" fill="#ffffff" opacity="0.95">' +
          '<animate attributeName="r" values="5;7;5" dur="1.6s" repeatCount="indefinite" />' +
        '</circle>' +
      '</g>' +
    '</g>';

  // Personal Galaxy: nebula clouds, twinkling stars, and an orbiting planet, all inside the heptagon.
  function buildGalaxy() {
    const stars = [
      [35, 38, 0.9], [62, 36, 0.7], [70, 52, 1.1], [30, 56, 0.7], [44, 70, 0.9],
      [58, 72, 0.7], [50, 30, 1.0], [68, 66, 0.8], [38, 48, 0.6], [55, 46, 0.7],
      [46, 58, 0.6], [64, 44, 0.8], [33, 66, 0.8], [72, 60, 0.6]
    ];
    let dots = "";
    stars.forEach(function (s, i) {
      dots +=
        '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="' + s[2] + '" fill="#ffffff">' +
        '<animate attributeName="opacity" values="0.25;1;0.25" dur="' + (2 + (i % 4) * 0.7).toFixed(1) +
        's" begin="' + (i * 0.3).toFixed(1) + 's" repeatCount="indefinite" />' +
        '</circle>';
    });
    return (
      '<g style="filter: blur(3px)">' +
        '<circle cx="40" cy="45" r="14" fill="#7a3cff" opacity="0.4">' +
          '<animateTransform attributeName="transform" type="translate" values="-2 1;2 -1;-2 1" dur="9s" repeatCount="indefinite" />' +
        '</circle>' +
        '<circle cx="62" cy="58" r="13" fill="#00b4ff" opacity="0.32">' +
          '<animateTransform attributeName="transform" type="translate" values="2 -1;-2 2;2 -1" dur="11s" repeatCount="indefinite" />' +
        '</circle>' +
        '<circle cx="50" cy="68" r="10" fill="#ff5fa2" opacity="0.28">' +
          '<animateTransform attributeName="transform" type="translate" values="1 2;-2 -1;1 2" dur="13s" repeatCount="indefinite" />' +
        '</circle>' +
      '</g>' +
      dots +
      '<g transform="rotate(-22 50 52)">' +
        '<ellipse cx="50" cy="52" rx="23" ry="9" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.2" />' +
        '<circle r="2.8" fill="#ffb347">' +
          '<animateMotion dur="14s" repeatCount="indefinite" path="M73 52 A23 9 0 1 1 27 52 A23 9 0 1 1 73 52 Z" />' +
        '</circle>' +
      '</g>'
    );
  }

  // Eclipse Mode: golden rays that slowly rotate and pulse behind a dark heptagon.
  function buildCorona() {
    let rays = "";
    for (let i = 0; i < 16; i++) {
      const angle = (i * 22.5 * Math.PI) / 180;
      const half = (4 * Math.PI) / 180;
      const baseR = 36;
      const tipR = i % 2 === 0 ? 47 : 43;
      const points = [
        [50 + baseR * Math.sin(angle - half), 52 - baseR * Math.cos(angle - half)],
        [50 + tipR * Math.sin(angle), 52 - tipR * Math.cos(angle)],
        [50 + baseR * Math.sin(angle + half), 52 - baseR * Math.cos(angle + half)]
      ].map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" ");
      rays += '<polygon points="' + points + '" fill="#ffb23e" />';
    }
    return (
      '<circle cx="50" cy="52" r="39" fill="none" stroke="#ffd27a" stroke-width="3" opacity="0.55" style="filter: blur(1.5px)">' +
        '<animate attributeName="opacity" values="0.35;0.75;0.35" dur="2.6s" repeatCount="indefinite" />' +
      '</circle>' +
      '<g opacity="0.85">' +
        rays +
        '<animate attributeName="opacity" values="0.55;0.95;0.55" dur="3s" repeatCount="indefinite" />' +
        '<animateTransform attributeName="transform" type="rotate" from="0 50 52" to="360 50 52" dur="40s" repeatCount="indefinite" />' +
      '</g>'
    );
  }

  // Hologram Frame: a larger heptagon outline with two light streaks racing around it.
  const FRAME_POINTS = "50,7.8 84.6,24.4 93.1,61.8 69.2,91.8 30.8,91.8 6.9,61.8 15.4,24.4";
  const HOLO_FRAME =
    '<polygon class="holo-base" points="' + FRAME_POINTS + '" />' +
    '<polygon class="holo-run" pathLength="100" points="' + FRAME_POINTS + '" />' +
    '<polygon class="holo-run second" pathLength="100" points="' + FRAME_POINTS + '" />';

  // Star Companions: three small stars near the top of the heptagon.
  const STAR_POINTS = "0,-4 0.94,-1.29 3.8,-1.24 1.52,0.49 2.35,3.24 0,1.6 -2.35,3.24 -1.52,0.49 -3.8,-1.24 -0.94,-1.29";
  const STAR_COMPANIONS =
    '<g transform="translate(21 17) scale(1.4)"><polygon class="star" points="' + STAR_POINTS + '" /></g>' +
    '<g transform="translate(80 11) scale(1.1)"><polygon class="star" style="animation-delay: 0.8s" points="' + STAR_POINTS + '" /></g>' +
    '<g transform="translate(88 30) scale(0.85)"><polygon class="star" style="animation-delay: 1.6s" points="' + STAR_POINTS + '" /></g>';

  // Graduation Cap: the tassel color is chosen by the player.
  function gradCap(color) {
    return (
      '<path class="hat-part" d="M35 22 L35 31 Q50 38 65 31 L65 22 L50 28 Z" fill="#20242d" />' +
      '<path class="hat-part" d="M50 7 L80 18 L50 29 L20 18 Z" fill="#2b2f3a" />' +
      '<circle cx="50" cy="18" r="1.9" fill="' + color + '" />' +
      '<path d="M50 18 Q67 21 75 20" fill="none" stroke="' + color + '" stroke-width="1.5" stroke-linecap="round" />' +
      '<path d="M75 20 L75 31" fill="none" stroke="' + color + '" stroke-width="1.6" stroke-linecap="round" />' +
      '<rect x="73.4" y="30" width="3.2" height="6" rx="1.2" fill="' + color + '" />'
    );
  }

  function tasselColor(state) {
    const id = state.options && state.options.tassel;
    const found = TASSELS.find(function (t) { return t.id === id; }) || TASSELS[0];
    return found.color;
  }

  // Faces sit inside the body, centered near (50, 55).
  const FACES = {
    smile:
      '<circle class="ink-fill" cx="41" cy="50" r="3.4" />' +
      '<circle class="ink-fill" cx="59" cy="50" r="3.4" />' +
      '<path class="ink-line" d="M40 62 Q50 71 60 62" />',
    sleepy:
      '<path class="ink-line" d="M36 51 Q41 56 46 51" />' +
      '<path class="ink-line" d="M54 51 Q59 56 64 51" />' +
      '<circle class="ink-line" cx="50" cy="65" r="2.8" />',
    wink:
      '<circle class="ink-fill" cx="41" cy="50" r="3.4" />' +
      '<path class="ink-line" d="M54 51 Q59 45 64 51" />' +
      '<path class="ink-line" d="M40 62 Q50 71 60 62" />',
    clock1010: clockFace("43.1 51", "60.4 49", "ticks"),
    clock300: clockFace("58 55", "50 43", "dots"),
    clock820: clockFace("43.1 59", "60.4 61", "none")
  };

  // Hats sit on the top corner of the heptagon.
  const HATS = {
    none: "",
    beanie:
      '<path class="hat-part" d="M31 25 C31 9 69 9 69 25 Z" fill="#e8793a" />' +
      '<rect class="hat-part" x="29" y="22" width="42" height="6" rx="3" fill="#c75d1f" />' +
      '<circle class="hat-part" cx="50" cy="9" r="4" fill="#f3f5fb" />',
    party:
      '<path class="hat-part" d="M50 3 L66 27 L34 27 Z" fill="#b79cf0" />' +
      '<path d="M41 17 L59 17 M37 23 L63 23" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity="0.85" />' +
      '<circle class="hat-part" cx="50" cy="3" r="3.5" fill="#f6d86a" />',
    top:
      '<rect class="hat-part" x="30" y="23" width="40" height="5" rx="2.5" fill="#2b2f3a" />' +
      '<rect class="hat-part" x="37" y="4" width="26" height="21" rx="2" fill="#2b2f3a" />' +
      '<rect class="hat-part" x="37" y="17" width="26" height="4" fill="#c0392b" />',
    crown:
      '<path class="hat-part" d="M32 28 L34 11 L42 19 L50 7 L58 19 L66 11 L68 28 Z" fill="#f2c14e" />' +
      '<circle class="hat-part" cx="50" cy="22" r="2.2" fill="#d94b4b" />'
  };
  // AI Assistant: a floating blue hexagon beside the character. It doesn't do anything yet.
  const AI_ASSISTANT =
    '<g>' +
      '<animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="3.4s" repeatCount="indefinite" />' +
      '<polygon points="88,68.8 97.7,74.4 97.7,85.6 88,91.2 78.3,85.6 78.3,74.4" fill="#4da3ff" opacity="0.35" style="filter: blur(2px)">' +
        '<animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.4s" repeatCount="indefinite" />' +
      '</polygon>' +
      '<polygon class="hat-part" points="88,71 95.8,75.5 95.8,84.5 88,89 80.2,84.5 80.2,75.5" fill="#2f7df6" />' +
      '<text x="88" y="82.8" text-anchor="middle" font-size="6.5" font-weight="700" fill="#ffffff" font-family="system-ui, sans-serif">AI</text>' +
    '</g>';
  // ----- The shop items -----
  // price 0 = the free default for that category.
  // vars = color changes. back/mid/front = extra drawing layers. replacesFace = hides the normal face.
  const CATALOG = [
    { id: "color-sky", slot: "color", name: "Sky Blue", price: 0,
      description: "The classic. Free for everyone.",
      vars: { "--body": "#6aa7e8", "--ink": INK } },
    { id: "color-mint", slot: "color", name: "Mint", price: 30,
      description: "A fresh green.",
      vars: { "--body": "#7fcf9b", "--ink": INK } },
    { id: "color-sunny", slot: "color", name: "Sunny", price: 30,
      description: "Bright and cheerful.",
      vars: { "--body": "#f6d86a", "--ink": INK } },
    { id: "color-coral", slot: "color", name: "Coral", price: 40,
      description: "Warm and bold.",
      vars: { "--body": "#f08a7a", "--ink": INK } },
    { id: "color-lavender", slot: "color", name: "Lavender", price: 40,
      description: "Soft and dreamy.",
      vars: { "--body": "#b79cf0", "--ink": INK } },
    { id: "color-graphite", slot: "color", name: "Graphite", price: 60,
      description: "Dark and cool, with a light face.",
      vars: { "--body": "#4a5568", "--ink": "#f4ead5" } },

    { id: "face-smile", slot: "face", name: "Smile", price: 0,
      description: "Happy to see you.", svg: FACES.smile },
    { id: "face-sleepy", slot: "face", name: "Sleepy", price: 30,
      description: "Time for a nap.", svg: FACES.sleepy },
    { id: "face-wink", slot: "face", name: "Wink", price: 30,
      description: "You got this.", svg: FACES.wink },
    { id: "face-clock-1010", slot: "face", name: "Clock 10:10", price: 60,
      description: "A clock face with a smile built in.", svg: FACES.clock1010 },
    { id: "face-clock-300", slot: "face", name: "Clock 3:00", price: 60,
      description: "Twelve dots, on the dot.", svg: FACES.clock300 },
    { id: "face-clock-820", slot: "face", name: "Clock 8:20", price: 60,
      description: "A bare dial for a calm look.", svg: FACES.clock820 },

    { id: "hat-none", slot: "hat", name: "No Hat", price: 0,
      description: "Keep it simple.", svg: HATS.none },
    { id: "hat-beanie", slot: "hat", name: "Beanie", price: 40,
      description: "Cozy and orange.", svg: HATS.beanie },
    { id: "hat-party", slot: "hat", name: "Party Hat", price: 50,
      description: "Every day is a celebration.", svg: HATS.party },
    { id: "hat-top", slot: "hat", name: "Top Hat", price: 80,
      description: "Very fancy.", svg: HATS.top },
    { id: "hat-crown", slot: "hat", name: "Crown", price: 120,
      description: "For top scorers.", svg: HATS.crown },
    { id: "hat-grad", slot: "hat", name: "Graduation Cap", price: 1000, rarity: "rare",
      description: "A classic academic cap. Once you own it, you can recolor the tassel.",
      svgFor: function (state) { return gradCap(tasselColor(state)); },
      options: { name: "tassel", label: "Tassel", choices: TASSELS } },

    { id: "fx-stars", slot: "effect", name: "Star Companions", price: 2000, rarity: "rare",
      description: "Tiny stars that hover beside your character near the top.",
      front: STAR_COMPANIONS },
    { id: "fx-holo", slot: "effect", name: "Hologram Frame", price: 3000, rarity: "epic",
      description: "A floating border with moving highlights around the heptagon.",
      back: HOLO_FRAME },
    
    { id: "fx-ai", slot: "effect", name: "AI Assistant", price: 100000000, rarity: "god",
      description: "A glowing blue hexagon that floats beside your character. The AI features are coming later, so for now it only looks good.",
      front: AI_ASSISTANT },
    { id: "bg-plain", slot: "background", name: "Plain", price: 0,
      description: "A calm, light backdrop." },
    { id: "bg-aurora", slot: "background", name: "Aurora Background", price: 5000, rarity: "legendary",
      description: "Moving northern lights behind your character.",
      bg: "aurora" },

    { id: "mythic-none", slot: "mythic", name: "Standard", price: 0,
      description: "Your regular heptagon." },
    { id: "mythic-eclipse", slot: "mythic", name: "Eclipse Mode", price: 12000, rarity: "mythic",
      description: "A darkened heptagon with a moving solar corona.",
      vars: { "--body": "#07080d", "--ink": "#f4ead5", "--outline": "#2a1a05" },
      back: buildCorona() },
    { id: "mythic-quantum", slot: "mythic", name: "Quantum Core", price: 15000, rarity: "mythic",
      description: "The center becomes a rotating energy core that pulses, shifts color, and bursts when you earn points.",
      vars: { "--body": "#0d1330", "--ink": "#e8f4ff" },
      mid: QUANTUM_CORE, replacesFace: true },
    { id: "mythic-galaxy", slot: "mythic", name: "Personal Galaxy", price: 20000, rarity: "mythic",
      description: "A living galaxy of stars and nebulae with a planet in orbit, all inside the heptagon.",
      vars: { "--body": "#0a0e2a", "--ink": "#e8f0ff" },
      mid: buildGalaxy() },
    { id: "mythic-clock", slot: "mythic", name: "Heptagon Clock", price: 25000, rarity: "mythic",
      description: "The whole heptagon becomes a live clock with hour, minute, and second hands showing your real time.",
      mid: buildLiveClock(), replacesFace: true }
  ];

  // ----- The character: a rounded heptagon, built in layers -----
  const BODY_POINTS = "50,18 76.6,30.8 83.2,59.6 64.8,82.6 35.3,82.6 16.9,59.6 23.4,30.8";

  const AVATAR_SVG =
    '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      '<ellipse cx="50" cy="93" rx="26" ry="4" fill="#000000" opacity="0.18" />' +
      '<g class="back-slot"></g>' +
      '<polygon class="body-outline" points="' + BODY_POINTS + '" />' +
      '<polygon class="avatar-body" points="' + BODY_POINTS + '" />' +
      '<ellipse cx="38" cy="38" rx="11" ry="6" fill="#ffffff" opacity="0.2" transform="rotate(-30 38 38)" />' +
      '<g class="mid-slot"></g>' +
      '<g class="face-slot"></g>' +
      '<g class="hat-slot"></g>' +
      '<g class="front-slot"></g>' +
    '</svg>';

  // ----- Looking things up -----
  function findItem(id) {
    return CATALOG.find(function (item) { return item.id === id; });
  }

  function slotInfo(slotId) {
    return SLOTS.find(function (slot) { return slot.id === slotId; });
  }

  function isMulti(slotId) {
    const slot = slotInfo(slotId);
    return Boolean(slot && slot.multi);
  }

  function freeDefaultFor(slotId) {
    return CATALOG.find(function (item) { return item.slot === slotId && item.price === 0; });
  }

  function itemFor(state, slotId) {
    return findItem(state.equipped[slotId]) || freeDefaultFor(slotId);
  }

  function equippedItems(state, slotId) {
    return (state.equipped[slotId] || []).map(findItem).filter(Boolean);
  }

  function isEquipped(state, item) {
    const value = state.equipped[item.slot];
    return Array.isArray(value) ? value.indexOf(item.id) !== -1 : value === item.id;
  }

  // ----- Saved data -----
  function defaultState() {
    const state = { points: 0, totalEarned: 0, owned: [], equipped: {}, options: { tassel: "gold" } };
    SLOTS.forEach(function (slot) {
      if (slot.multi) {
        state.equipped[slot.id] = [];
        return;
      }
      const free = freeDefaultFor(slot.id);
      state.owned.push(free.id);
      state.equipped[slot.id] = free.id;
    });
    return state;
  }

  function load() {
    const base = defaultState();
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);

      // Keep only items that still exist, and always keep the free defaults.
      const owned = base.owned.slice();
      (Array.isArray(saved.owned) ? saved.owned : []).forEach(function (id) {
        if (findItem(id) && owned.indexOf(id) === -1) owned.push(id);
      });

      const savedEquipped = saved.equipped || {};
      const equipped = {};
      SLOTS.forEach(function (slot) {
        if (slot.multi) {
          const list = Array.isArray(savedEquipped[slot.id]) ? savedEquipped[slot.id] : [];
          equipped[slot.id] = list.filter(function (id) {
            const item = findItem(id);
            return item && item.slot === slot.id && owned.indexOf(id) !== -1;
          });
          return;
        }
        const wanted = savedEquipped[slot.id];
        const item = wanted && findItem(wanted);
        equipped[slot.id] =
          item && item.slot === slot.id && owned.indexOf(wanted) !== -1
            ? wanted
            : base.equipped[slot.id];
      });

      const options = Object.assign({}, base.options, saved.options);
      if (!TASSELS.some(function (t) { return t.id === options.tassel; })) {
        options.tassel = base.options.tassel;
      }

      return {
        points: Number.isFinite(saved.points) ? saved.points : 0,
        totalEarned: Number.isFinite(saved.totalEarned) ? saved.totalEarned : 0,
        owned: owned,
        equipped: equipped,
        options: options
      };
    } catch (error) {
      return base;
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (error) {
      // Storage may be blocked; the page still works, it just can't remember.
    }
  }

  // ----- Actions -----
  function addPoints(state, amount) {
    state.points += amount;
    state.totalEarned += amount;
    save(state);
    window.setTimeout(pulseCores, 60);
  }

  function buy(state, id) {
    const item = findItem(id);
    if (!item) return { ok: false, message: "That item doesn't exist." };
    if (state.owned.indexOf(id) !== -1) return { ok: false, message: "You already own this." };
    if (state.points < item.price) {
      return { ok: false, message: "You need " + (item.price - state.points).toLocaleString() + " more gems." };
    }
    state.points -= item.price;
    state.owned.push(id);
    save(state);
    return { ok: true };
  }

  function equip(state, id) {
    const item = findItem(id);
    if (!item || state.owned.indexOf(id) === -1) return false;
    if (isMulti(item.slot)) {
      const list = state.equipped[item.slot] || [];
      if (list.indexOf(id) === -1) list.push(id);
      state.equipped[item.slot] = list;
    } else {
      state.equipped[item.slot] = id;
    }
    save(state);
    return true;
  }

  function unequip(state, id) {
    const item = findItem(id);
    if (!item || !isMulti(item.slot)) return false;
    state.equipped[item.slot] = (state.equipped[item.slot] || []).filter(function (other) {
      return other !== id;
    });
    save(state);
    return true;
  }

  function setOption(state, name, value) {
    if (name === "tassel" && TASSELS.some(function (t) { return t.id === value; })) {
      state.options.tassel = value;
      save(state);
      return true;
    }
    return false;
  }

  // ----- Animated parts -----
  function setHand(hand, degrees) {
    const rounded = Math.round(degrees * 10) / 10;
    if (hand.getAttribute("data-angle") === String(rounded)) return;
    hand.setAttribute("data-angle", String(rounded));
    hand.setAttribute("transform", "rotate(" + rounded + " 50 52)");
  }

  // Moves the three clock hands to the real time.
  function tickClocks() {
    const hands = document.querySelectorAll(".live-hand");
    if (hands.length === 0) return;

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    hands.forEach(function (hand) {
      const kind = hand.getAttribute("data-hand");
      if (kind === "hour") setHand(hand, hours * 30);
      else if (kind === "minute") setHand(hand, minutes * 6);
      else setHand(hand, seconds * 6);
    });
  }

  let clockTimer = null;

  function startClocks() {
    tickClocks();
    if (clockTimer === null) {
      clockTimer = window.setInterval(tickClocks, 250);
    }
  }

  // Makes every Quantum Core flash outward once.
  function pulseCores() {
    document.querySelectorAll(".core-burst").forEach(function (animation) {
      try { animation.beginElement(); } catch (error) {}
    });
  }

  // If gems were earned since this tab last showed a character, celebrate once.
  function checkForNewPoints(state) {
    const seenKey = "seen:" + KEY;
    try {
      const seen = sessionStorage.getItem(seenKey);
      if (seen !== null && state.totalEarned > Number(seen)) {
        window.setTimeout(pulseCores, 400);
      }
      sessionStorage.setItem(seenKey, String(state.totalEarned));
    } catch (error) {}
  }

    function reducedMotion() {
    if (document.documentElement.getAttribute("data-motion") === "reduce") return true;
    return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // ----- Putting it together -----
  function markupOf(item, state) {
    if (!item) return "";
    if (typeof item.svgFor === "function") return item.svgFor(state);
    return item.svg || "";
  }

  // Works out everything the character should show for a given state.
  function lookFromState(state) {
    const color = itemFor(state, "color");
    const face = itemFor(state, "face");
    const hat = itemFor(state, "hat");
    const mythic = itemFor(state, "mythic");
    const background = itemFor(state, "background");
    const layered = [mythic].concat(equippedItems(state, "effect"));

    function layer(name) {
      return layered.map(function (item) { return item[name] || ""; }).join("");
    }

    return {
      vars: Object.assign({}, color.vars, mythic.vars || {}),
      bg: background.bg || "",
      back: layer("back"),
      mid: layer("mid"),
      front: layer("front"),
      face: mythic.replacesFace ? "" : markupOf(face, state),
      hat: markupOf(hat, state)
    };
  }

  const OVERRIDABLE = ["--body", "--ink", "--outline"];

  function dress(element, look) {
    OVERRIDABLE.forEach(function (name) { element.style.removeProperty(name); });
    Object.keys(look.vars).forEach(function (name) {
      element.style.setProperty(name, look.vars[name]);
    });

    if (look.bg) element.setAttribute("data-bg", look.bg);
    else element.removeAttribute("data-bg");

    element.querySelector(".back-slot").innerHTML = look.back;
    element.querySelector(".mid-slot").innerHTML = look.mid;
    element.querySelector(".face-slot").innerHTML = look.face;
    element.querySelector(".hat-slot").innerHTML = look.hat;
    element.querySelector(".front-slot").innerHTML = look.front;

    const svg = element.querySelector("svg");
    if (svg && reducedMotion() && svg.pauseAnimations) svg.pauseAnimations();
  }

  function applyToPage(state) {
    const look = lookFromState(state);

    document.querySelectorAll(".avatar").forEach(function (avatar) {
      if (!avatar.querySelector(".front-slot")) {
        avatar.innerHTML = AVATAR_SVG;
      }
      dress(avatar, look);
    });

    document.querySelectorAll('[data-points="balance"]').forEach(function (el) {
      el.textContent = state.points.toLocaleString();
    });
    document.querySelectorAll('[data-points="total"]').forEach(function (el) {
      el.textContent = state.totalEarned.toLocaleString();
    });

    startClocks();
  }

  // A small preview of one shop item, on the player's current color.
  function renderPreview(element, item, state) {
    const temp = defaultState();
    temp.options = Object.assign({}, state.options);
    temp.equipped.color = state.equipped.color;
    if (isMulti(item.slot)) temp.equipped[item.slot] = [item.id];
    else temp.equipped[item.slot] = item.id;

    element.classList.add("mini-avatar");
    element.innerHTML = AVATAR_SVG;
    dress(element, lookFromState(temp));
    startClocks();
  }

  window.CognitiveStore = {
    SLOTS: SLOTS,
    CATALOG: CATALOG,
    load: load,
    save: save,
    findItem: findItem,
    isEquipped: isEquipped,
    addPoints: addPoints,
    buy: buy,
    equip: equip,
    unequip: unequip,
    setOption: setOption,
    pulseCores: pulseCores,
    applyToPage: applyToPage,
    renderPreview: renderPreview
  };

  const initial = load();
  applyToPage(initial);
  checkForNewPoints(initial);
})();