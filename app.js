(function () {
  const R = window.RUBRIC;
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  document.title = `Formative for ${R.district}`;
  $(".prepared").textContent = `Prepared for ${R.district}, ${R.preparedOn}`;
  $("#title").textContent = R.title;
  $("#intro").textContent = R.intro;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.play().catch(() => {});
        else e.target.pause();
      });
    },
    { threshold: 0.4 },
  );

  let missing = 0;
  let drafts = 0;

  // Weight strip
  const strip = $("#weight-strip");
  R.areas.forEach((area, i) => {
    const li = el("li");
    li.style.setProperty("--w", area.weight);
    li.style.setProperty("--i", i);
    if (area.weight >= 10) li.classList.add("is-wide");
    const a = el("a");
    a.href = `#${slug(area.name)}`;
    a.dataset.area = slug(area.name);
    a.title = `${area.name}: ${area.weight}% of the score`;
    a.append(el("span", "seg"), el("span", "seg-pct", `${area.weight}%`), el("span", "seg-name", area.name));
    li.append(a);
    strip.append(li);
  });

  // Table
  const table = $("#rubric");
  const items = [];
  R.areas.forEach((area) => {
    const tbody = el("tbody");
    tbody.id = slug(area.name);
    area.rows.forEach((row, r) => {
      const index = items.length;
      items.push({ area, row });
      const tr = el("tr", "row");
      tr.addEventListener("click", () => openFocus(index));
      if (r === 0) {
        const th = el("th", "cell-area");
        th.scope = "rowgroup";
        th.rowSpan = area.rows.length;
        const stick = el("div", "sticky");
        stick.append(el("span", "area-name", area.name), el("span", "area-weight-inline", `${area.weight}% of score`));
        th.append(stick);
        tr.append(th);
      }

      const tq = el("td", "cell-q");
      const qBtn = el("button", "q-btn", row.q);
      qBtn.type = "button";
      qBtn.setAttribute("aria-haspopup", "dialog");
      tq.append(qBtn);
      tr.append(tq);

      if (r === 0) {
        const tw = el("td", "cell-w");
        tw.rowSpan = area.rows.length;
        const stick = el("div", "sticky");
        stick.append(el("span", "weight-num", `${area.weight}%`));
        tw.append(stick);
        tr.append(tw);
      }

      const td = el("td", "cell-a");
      if (!row.answer) missing++;
      if (row.answer && row.draft) {
        drafts++;
        td.classList.add("is-draft");
      }
      td.append(...answerNodes(row));
      const list = mediaList(row);
      if (list.length) td.append(mediaFigure(list[0], list.length));
      tr.append(td);
      tbody.append(tr);
    });
    table.append(tbody);
  });

  if (missing || drafts) {
    const b = $("#draft-banner");
    const parts = [];
    if (missing) parts.push(`${missing} ${missing === 1 ? "answer is" : "answers are"} missing`);
    if (drafts) parts.push(`${drafts} ${drafts === 1 ? "needs" : "need"} client-ready wording`);
    b.textContent = `Draft: ${parts.join(" and ")}. This note disappears once every answer is filled in.`;
    b.hidden = false;
  }

  // Footer
  const f = $("#footer");
  const c = R.contact || {};
  if (c.name || c.email) {
    const box = el("div", "contact");
    box.append(el("p", "contact-lead", "Questions about any of these answers?"));
    const who = el("p", "contact-who");
    who.append(el("strong", null, c.name || ""));
    if (c.email) {
      const a = el("a", null, c.email);
      a.href = `mailto:${c.email}`;
      who.append(document.createElement("br"), a);
    }
    if (c.phone) who.append(document.createElement("br"), document.createTextNode(c.phone));
    box.append(who);
    f.append(box);
  }
  const logo = el("img", "footer-logo");
  logo.src = "assets/formative-logo.svg";
  logo.alt = "Formative by Newsela";
  f.append(logo);

  function answerNodes(row) {
    if (!row.answer) return [el("p", "flag flag-missing", "Needs an answer before this goes to the district")];
    const nodes = [];
    if (row.draft) nodes.push(el("span", "flag flag-draft", "Draft wording"));
    nodes.push(el("p", "answer", row.answer));
    return nodes;
  }

  function mediaList(row) {
    return Array.isArray(row.media) ? row.media : row.media ? [row.media] : [];
  }

  // Inline media; clicks bubble to the row, which opens focus mode
  function mediaFigure(m, count = 1) {
    const fig = el("figure", "media");
    const frame = el("div", "media-frame");
    frame.append(mediaNode(m, false));
    fig.append(frame);
    const cap = el("figcaption", null, m.caption || "");
    if (count > 1) cap.append(el("span", "media-more", `1 of ${count} clips. Open to see all.`));
    fig.append(cap);
    return fig;
  }

  function mediaNode(m, large) {
    if (/\.(mp4|webm)$/i.test(m.src)) {
      const v = document.createElement("video");
      v.muted = true;
      v.setAttribute("muted", "");
      v.loop = true;
      v.playsInline = true;
      v.preload = "metadata";
      v.controls = large;
      if (m.poster) v.poster = m.poster;
      v.setAttribute("aria-label", m.alt);
      v.src = m.src;
      if (large) v.play().catch(() => {});
      else if (!reducedMotion) videoObserver.observe(v);
      return v;
    }
    const img = el("img");
    img.src = m.src;
    img.alt = m.alt;
    img.loading = large ? "eager" : "lazy";
    return img;
  }

  // Focus mode: one row at a time, with previous/next
  const focus = $("#focus");
  const focusBody = $("#focus-body");
  let current = 0;

  function renderFocus(i) {
    current = (i + items.length) % items.length;
    const { area, row } = items[current];
    $("#focus-area-name").textContent = area.name;
    $("#focus-area-weight").textContent = `${area.weight}% of score`;
    $("#focus-count").textContent = `${current + 1} of ${items.length}`;
    $("#focus-q").textContent = row.q;
    const answer = $("#focus-answer");
    answer.classList.toggle("is-draft", !!(row.answer && row.draft));
    answer.replaceChildren(...answerNodes(row));
    const list = mediaList(row);
    const clips = $("#focus-clips");
    const show = (k) => {
      const m = list[k];
      $("#focus-media").replaceChildren(m ? mediaNode(m, true) : "");
      $("#focus-caption").textContent = m?.caption || "";
      focusBody.classList.toggle("is-wide", !!m?.wide);
      clips.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-pressed", String(j === k)));
    };
    clips.replaceChildren(
      ...(list.length > 1
        ? list.map((m, k) => {
            const b = el("button", "clip-btn", m.label || `Clip ${k + 1}`);
            b.type = "button";
            b.addEventListener("click", () => show(k));
            return b;
          })
        : []),
    );
    focusBody.classList.toggle("has-media", list.length > 0);
    show(0);
    focusBody.scrollTop = 0;
    if (!reducedMotion) {
      focusBody.classList.remove("is-changing");
      void focusBody.offsetWidth;
      focusBody.classList.add("is-changing");
    }
    history.replaceState(null, "", `#q-${current + 1}`);
  }

  function openFocus(i) {
    renderFocus(i);
    if (!focus.open) focus.showModal();
  }

  function closeFocus() {
    focus.close();
  }

  focus.querySelector(".focus-close").addEventListener("click", closeFocus);
  focus.querySelector(".focus-prev").addEventListener("click", () => renderFocus(current - 1));
  focus.querySelector(".focus-next").addEventListener("click", () => renderFocus(current + 1));
  focus.addEventListener("click", (e) => {
    if (e.target === focus) closeFocus();
  });
  focus.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") renderFocus(current + 1);
    else if (e.key === "ArrowLeft") renderFocus(current - 1);
    else return;
    e.preventDefault();
  });
  focus.addEventListener("close", () => {
    $("#focus-media").replaceChildren();
    history.replaceState(null, "", location.pathname + location.search);
    table.querySelectorAll("tr.row")[current]?.querySelector(".q-btn")?.focus({ preventScroll: true });
  });

  let touchX = null;
  focus.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
  focus.addEventListener("touchend", (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 60) renderFocus(current + (dx < 0 ? 1 : -1));
  });

  const openFromHash = () => {
    const m = location.hash.match(/^#q-(\d+)$/);
    if (m && items[m[1] - 1] && !(focus.open && current === m[1] - 1)) openFocus(m[1] - 1);
  };
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  // Highlight the area currently on screen
  const links = [...strip.querySelectorAll("a")];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("is-current", l.dataset.area === e.target.id));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  table.querySelectorAll("tbody").forEach((tb) => io.observe(tb));

  requestAnimationFrame(() => document.body.classList.add("is-ready"));
})();
