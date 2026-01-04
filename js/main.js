const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

function escapeHtml(str=""){
  return str.replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function getParam(name){
  const u = new URL(window.location.href);
  return u.searchParams.get(name);
}

function t(key){
  const lang = window.getLang();
  return (window.I18N?.[lang]?.[key]) ?? (window.I18N?.en?.[key]) ?? key;
}

function applyI18n(){
  const lang = window.getLang();
  document.documentElement.lang = lang;
  document.body.dir = (lang === "ar") ? "rtl" : "ltr";

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  $$(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

/* Language buttons */
(function(){
  $$(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      window.setLang(btn.dataset.lang);
      applyI18n();
      // rerender dynamic sections
      initFeatured();
      if($("#projectsGrid")) renderProjects(currentFilter);
      if(location.pathname.endsWith("project.html")) initProjectDetails(true);
    });
  });
})();

/* Mobile nav */
(function(){
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");
  if(!navToggle || !navLinks) return;
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  $$("a", navLinks).forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
})();

/* Footer year */
const y = $("#year");
if(y) y.textContent = new Date().getFullYear();

/* Reveal animations */
(function(){
  const nodes = $$(".reveal");
  if(!nodes.length) return;
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("show");
    });
  }, {threshold: .12});
  nodes.forEach(n=>obs.observe(n));
})();

/* Featured on Home */
function initFeatured(){
  const wrap = $("#featuredGrid");
  if(!wrap) return;

  const ids = window.FEATURED_PROJECT_IDS || [];
  const all = window.PORTFOLIO_PROJECTS || [];
  const items = ids.map(id => all.find(p => p.id === id)).filter(Boolean);

  wrap.innerHTML = items.map(p => {
    const title = t(p.titleKey);
    const meta = t(p.metaKey);

    return `
      <article class="card p-card">
        <div class="p-thumb">
          <img src="${escapeHtml(p.thumb)}" alt="${escapeHtml(title)}" loading="lazy">
        </div>
        <div class="p-body">
          <h3 class="p-title">${escapeHtml(title)}</h3>
          <p class="p-meta">${escapeHtml(meta)}</p>
          <div class="p-tags">
            ${(p.tags||[]).slice(0,4).map(tag=>`<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="sub-cta" style="margin-top:12px">
            <a class="btn small primary" href="project.html?id=${encodeURIComponent(p.id)}">${escapeHtml(t("case_badge").split("•")[0].trim() || "Case Study")}</a>
            <a class="btn small ghost" href="projects.html">${escapeHtml(t("nav_projects"))}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* Projects listing */
let currentFilter = "all";

function renderProjects(filter="all"){
  currentFilter = filter;
  const grid = $("#projectsGrid");
  if(!grid) return;

  grid.innerHTML = "";
  const items = (window.PORTFOLIO_PROJECTS||[]).filter(p => filter==="all" ? true : p.category === filter);

  items.forEach(p=>{
    const title = t(p.titleKey);
    const meta = t(p.metaKey);

    const card = document.createElement("article");
    card.className = "card p-card";
    card.innerHTML = `
      <div class="p-thumb">
        <img src="${escapeHtml(p.thumb)}" alt="${escapeHtml(title)}" loading="lazy">
      </div>
      <div class="p-body">
        <h3 class="p-title">${escapeHtml(title)}</h3>
        <p class="p-meta">${escapeHtml(meta)}</p>
        <div class="p-tags">
          ${(p.tags||[]).slice(0,4).map(tag=>`<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="sub-cta" style="margin-top:12px">
          <a class="btn small primary" href="project.html?id=${encodeURIComponent(p.id)}">${escapeHtml(t("case_badge").split("•")[0].trim() || "Case Study")}</a>
          <a class="btn small ghost" href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'})">${escapeHtml(t("back_top"))}</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

(function initProjectsPage(){
  const grid = $("#projectsGrid");
  if(!grid) return;

  renderProjects("all");

  const chips = $$(".chip");
  chips.forEach(ch=>{
    ch.addEventListener("click", ()=>{
      chips.forEach(c=>c.classList.remove("active"));
      ch.classList.add("active");
      renderProjects(ch.dataset.filter);
    });
  });
})();

/* Project details */
function initProjectDetails(force=false){
  if(!force && !location.pathname.endsWith("project.html")) return;
  if(!location.pathname.endsWith("project.html")) return;

  const id = getParam("id");
  const all = (window.PORTFOLIO_PROJECTS||[]);
  const p = all.find(x=>x.id===id) || all[0];
  if(!p) return;

  const title = t(p.titleKey);
  const meta = t(p.metaKey);

  const tEl = $("#pTitle"); const mEl = $("#pMeta");
  const oEl = $("#pOverview"); const sEl = $("#pScope"); const hEl = $("#pHighlights");
  const gEl = $("#pGallery");

  document.title = `${title} | ${t("name")}`;
  if(tEl) tEl.textContent = title;
  if(mEl) mEl.textContent = meta;
  if(oEl) oEl.textContent = t(p.overviewKey);

  if(sEl) sEl.innerHTML = (p.scopeKeys||[]).map(k=>`<li>${escapeHtml(t(k))}</li>`).join("");
  if(hEl) hEl.innerHTML = (p.highlightKeys||[]).map(k=>`<li>${escapeHtml(t(k))}</li>`).join("");

  // Before/After
  const baSlider = $("#baSlider");
  const baBefore = $("#baBefore");
  const baAfter = $("#baAfter");
  const baRange = $("#baRange");

  if(p.beforeAfter?.before && p.beforeAfter?.after){
    baBefore.src = p.beforeAfter.before;
    baAfter.src  = p.beforeAfter.after;
    baSlider.hidden = false;

    const afterWrap = $(".ba-after", baSlider);
    const set = (val)=>{
      const pct = Math.min(95, Math.max(5, Number(val)));
      afterWrap.style.width = pct + "%";
    };
    set(50);
    baRange.value = 50;
    baRange.addEventListener("input", e=>set(e.target.value));
  } else {
    baSlider.hidden = true;
  }

  // Gallery
  if(gEl){
    // Group project (e.g., j.co chain with multiple branches)
    if(Array.isArray(p.branches) && p.branches.length){
      gEl.innerHTML = p.branches.map((b, idx)=>`
        <section class="branch-block">
          <div class="branch-head">
            <h3 class="branch-title">${escapeHtml(t(b.nameKey) || b.name || ("Branch " + (idx+1)))}</h3>
            <span class="branch-pill">${escapeHtml(t("branch_badge") || "Branch")}</span>
          </div>
          <div class="gallery-grid">
            ${(b.gallery||[]).map(src=>`
              <div class="gimg">
                <img src="${escapeHtml(src)}" alt="${escapeHtml(title)}" loading="lazy">
              </div>
            `).join("")}
          </div>
        </section>
      `).join("");

      $$(".gimg img", gEl).forEach(img=>{
        img.addEventListener("click", ()=>window.open(img.src, "_blank", "noopener"));
      });
    } else {
      // Single project
      gEl.innerHTML = (p.gallery||[]).map(src=>`
        <div class="gimg">
          <img src="${escapeHtml(src)}" alt="${escapeHtml(title)}" loading="lazy">
        </div>
      `).join("");

      $$(".gimg img", gEl).forEach(img=>{
        img.addEventListener("click", ()=>window.open(img.src, "_blank", "noopener"));
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  // default language
  if(!localStorage.getItem("lang")) localStorage.setItem("lang", "en");
  applyI18n();

  initFeatured();
  initProjectDetails();
});
