/**
 * ============================================================================
 * PATCH LIBRARY - Functional Script
 * ============================================================================
 *
 * This file contains the functional part of the website.
 * Edit config.js for categories, techniques and patches.
 *
 * ============================================================================
 */
let currentFilter = "All";
let searchQuery = "";
let viewMode = "gallery"; // "grid", "gallery", or "list"

// Get technique count for a specific technique
function getTechniqueCount(techniqueName) {
  return patches.filter(p => p.techniques.includes(techniqueName)).length;
}

// Get CSS class for difficulty badge
function getDifficultyClass(difficulty) {
  const classes = {
    "Beginner": "difficulty-beginner",
    "Intermediate": "difficulty-intermediate",
    "Advanced": "difficulty-advanced"
  };
  return classes[difficulty] || "";
}

// Find technique object by name
function findTechnique(name) {
  return techniques.find(t => t.name === name);
}

function findNote(name) {
  return notes.find(note => note.name === name);
}

function syncBodyScrollLock() {
  const techniqueModalOpen = document.getElementById("technique-modal")?.classList.contains("active");
  const examplesModalOpen = document.getElementById("examples-modal")?.classList.contains("active");
  const imageViewerOpen = document.getElementById("image-viewer")?.classList.contains("active");

  document.body.style.overflow = (techniqueModalOpen || examplesModalOpen || imageViewerOpen) ? "hidden" : "";
}

function escapeForSingleQuotedJsString(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");
}


// Render filter buttons dynamically from categories array
function renderFilterButtons() {
  const container = document.getElementById("filter-buttons");
  const allCategories = ["All", ...categories];
  
  container.innerHTML = allCategories.map(cat => `
    <button class="filter-btn ${cat === currentFilter ? 'active' : ''}" data-category="${cat}">${cat}</button>
  `).join("");
  
  // Attach event listeners
  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setFilter(btn.dataset.category);
    });
  });
}

// Render patches grid
function renderPatches() {
  const grid = document.getElementById("patch-grid");
  
  // Update grid class based on view mode
  grid.className = `patch-grid patch-grid--${viewMode}`;

  const filtered = patches.filter(patch => {
    const matchesCategory = currentFilter === "All" || patch.category === currentFilter;
    const matchesSearch = searchQuery === "" ||
      patch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patch.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patch.techniques.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <p>No designs found matching your criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(patch => `
    <article class="patch-card patch-card--${viewMode}" data-category="${patch.category}">
      <div class="patch-image-container" onclick="openImageViewer('${patch.image}')">
        <img src="${patch.image}" alt="${patch.title}" class="patch-image" loading="lazy">
      </div>
      <div class="patch-content">
        <h3 class="patch-title">${patch.title}</h3>
        <p class="patch-description">${patch.description}</p>
        <div class="patch-techniques">
          ${patch.techniques.map(t => `<span class="technique-tag" onclick="openTechniqueModal('${t}')">${t}</span>`).join("")}
        </div>
        ${patch.link ? `
          <a href="${patch.link}" target="_blank" rel="noopener noreferrer" class="patch-link-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            View Link
          </a>
        ` : ''}
      </div>
    </article>
  `).join("");

  if (viewMode === "gallery") {
    requestAnimationFrame(applyGalleryImageSizing);
  }
}

function applyGalleryImageSizing() {
  if (viewMode !== "gallery") return;

  const galleryImages = document.querySelectorAll(".patch-card--gallery .patch-image");

  galleryImages.forEach((img) => {
    const container = img.closest(".patch-image-container");
    if (!container) return;

    const updateImageSize = () => {
      img.classList.remove("patch-image--true-size");
      img.style.width = "";
      img.style.maxWidth = "";

      const frameWidth = container.clientWidth;
      const naturalWidth = img.naturalWidth;

      if (!frameWidth || !naturalWidth) return;

      if (naturalWidth < frameWidth) {
        img.classList.add("patch-image--true-size");
        img.style.width = `${naturalWidth}px`;
        img.style.maxWidth = "100%";
      }
    };

    if (img.complete) {
      updateImageSize();
    } else {
      img.addEventListener("load", updateImageSize, { once: true });
    }
  });
}

function applyExamplesGallerySizing() {
  const galleryImages = document.querySelectorAll(".example-image");

  galleryImages.forEach((img) => {
    const container = img.closest(".examples-gallery-item");
    if (!container) return;

    const updateImageSize = () => {
      img.classList.remove("example-image--true-size");
      img.style.width = "";
      img.style.maxWidth = "";

      const frameWidth = container.clientWidth;
      const naturalWidth = img.naturalWidth;

      if (!frameWidth || !naturalWidth) return;

      if (naturalWidth < frameWidth) {
        img.classList.add("example-image--true-size");
        img.style.width = `${naturalWidth}px`;
        img.style.maxWidth = "100%";
      }
    };

    if (img.complete) {
      updateImageSize();
    } else {
      img.addEventListener("load", updateImageSize, { once: true });
    }
  });
}

// Render view mode toggle
function renderViewModeToggle() {
  const container = document.getElementById("view-mode-toggle");
  container.innerHTML = `
    <button class="view-mode-btn ${viewMode === 'grid' ? 'active' : ''}" data-mode="grid" title="Grid view">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    </button>
    <button class="view-mode-btn ${viewMode === 'gallery' ? 'active' : ''}" data-mode="gallery" title="Gallery view">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    </button>
    <button class="view-mode-btn ${viewMode === 'list' ? 'active' : ''}" data-mode="list" title="List view">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    </button>
  `;
  
  container.querySelectorAll(".view-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setViewMode(btn.dataset.mode);
    });
  });
}

// Set view mode
function setViewMode(mode) {
  viewMode = mode;
  renderViewModeToggle();
  renderPatches();
}

// Render techniques grid
function renderTechniques() {
  const grid = document.getElementById("technique-grid");

  const filtered = techniques.filter(tech => {
    if (searchQuery === "") return true;
    const query = searchQuery.toLowerCase();
    return tech.name.toLowerCase().includes(query) ||
           tech.description.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <p>No techniques found matching your search.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(tech => `
    <div class="technique-card" onclick="openTechniqueModal('${tech.name}')">
      <span class="difficulty-badge ${getDifficultyClass(tech.difficulty)}">${tech.difficulty}</span>
      <img src="${tech.demoImage}" alt="${tech.name}" class="technique-thumb" onerror="this.style.display='none'">
      <div class="technique-info">
        <h4 class="technique-name">${tech.name}</h4>
        <p class="technique-description">${tech.description}</p>
        <span class="technique-count">${getTechniqueCount(tech.name)} design${getTechniqueCount(tech.name) !== 1 ? "s" : ""}</span>
      </div>
    </div>
  `).join("");
}

//Render notes
function renderNotes() {
  const grid = document.getElementById("notes-grid");
  if (!grid) return;

  const filtered = notes.filter(note => {
    if (searchQuery === "") return true;
    const query = searchQuery.toLowerCase();
    return note.name.toLowerCase().includes(query) ||
           note.description.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <p>No notes found matching your search.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(note => `
    <div class="technique-card" onclick="openNoteModal('${note.name.replace(/'/g, "\\'")}')">
      <img src="${note.demoImage}" alt="${note.name}" class="technique-thumb" onerror="this.style.display='none'">
      <div class="technique-info">
        <h4 class="technique-name">${note.name}</h4>
        <p class="technique-description">${note.description}</p>
        <span class="technique-count">Note</span>
      </div>
    </div>
  `).join("");
}

// Update statistics counters
function updateStats() {
  document.getElementById("stat-designs").textContent = patches.length;
  document.getElementById("stat-techniques").textContent = techniques.length;
  document.getElementById("stat-notes").textContent = notes.length;
}

// Set active filter
function setFilter(category) {
  currentFilter = category;
  renderFilterButtons();
  renderPatches();
}

// Open technique modal
function openTechniqueModal(techniqueName) {
  const technique = findTechnique(techniqueName);
  if (!technique) return;

  const modal = document.getElementById("technique-modal");
  const body = document.getElementById("modal-body");
  const hasExamples = Array.isArray(technique.examples) && technique.examples.length > 0;
  const escapedTechniqueName = escapeForSingleQuotedJsString(technique.name);

  const stepsHtml = technique.steps.length > 0 ? `
    <div class="modal-steps">
      <h3 class="modal-steps-title">Step-by-Step Guide</h3>
      ${technique.steps.map((step, index) => `
        <div class="step-item">
          <div class="step-header">
            <span class="step-number">${index + 1}</span>
            <span class="step-name">${step.name}</span>
          </div>
          ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
          ${step.images && step.images.length > 0 ? `
            <div class="step-images">
              ${step.images.slice(0, 2).map(img => `
                <img src="${img}" alt="Step ${index + 1}" class="step-image" onclick="openImageViewer('${img}')" onerror="this.style.display='none'">
              `).join("")}
            </div>
          ` : ''}
        </div>
      `).join("")}
    </div>
  ` : '';

  body.innerHTML = `
    <div class="modal-header">
      <img src="${technique.demoImage}" alt="${technique.name}" class="modal-demo-image" onclick="openImageViewer('${technique.demoImage}')" onerror="this.style.display='none'">
      <div class="modal-title-section">
        <div class="modal-title-row">
          <h2 class="modal-title">${technique.name}</h2>
          <span class="difficulty-badge ${getDifficultyClass(technique.difficulty)}">${technique.difficulty}</span>
        </div>
        <div class="modal-copy-actions">
          <p class="modal-subtitle">${technique.description}</p>
          ${hasExamples ? `
            <button class="patch-link-btn modal-examples-btn" onclick="openExamplesModal('${escapedTechniqueName}')">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Examples
            </button>
          ` : ""}
        </div>
      </div>
    </div>
    ${stepsHtml}
  `;

  modal.classList.add("active");
  syncBodyScrollLock();
}

function openExamplesModal(techniqueName) {
  const technique = findTechnique(techniqueName);
  if (!technique || !Array.isArray(technique.examples) || technique.examples.length === 0) return;

  const modal = document.getElementById("examples-modal");
  const title = document.getElementById("examples-modal-title");
  const gallery = document.getElementById("examples-gallery");

  title.textContent = `${technique.name} - Examples`;

  gallery.innerHTML = technique.examples.slice(0, 10).map((imagePath, index) => `
    <div class="examples-gallery-item" onclick="openImageViewer('${escapeForSingleQuotedJsString(imagePath)}')">
      <img
        src="${imagePath}"
        alt="${technique.name} example ${index + 1}"
        class="example-image"
        loading="lazy"
        onerror="this.closest('.examples-gallery-item').style.display='none'"
      >
    </div>
  `).join("");

  modal.classList.add("active");
  syncBodyScrollLock();
  requestAnimationFrame(applyExamplesGallerySizing);
}

//Open note modal
function openNoteModal(noteName) {
  const note = findNote(noteName);
  if (!note) return;

  const modal = document.getElementById("technique-modal");
  const body = document.getElementById("modal-body");

  const stepsHtml = note.steps.length > 0 ? `
    <div class="modal-steps">
      <h3 class="modal-steps-title">Step-by-Step Guide</h3>
      ${note.steps.map((step, index) => `
        <div class="step-item">
          <div class="step-header">
            <span class="step-number">${index + 1}</span>
            <span class="step-name">${step.name}</span>
          </div>
          ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
          ${step.images && step.images.length > 0 ? `
            <div class="step-images">
              ${step.images.slice(0, 2).map(img => `
                <img src="${img}" alt="Step ${index + 1}" class="step-image" onclick="openImageViewer('${img}')" onerror="this.style.display='none'">
              `).join("")}
            </div>
          ` : ''}
        </div>
      `).join("")}
    </div>
  ` : '';

  body.innerHTML = `
    <div class="modal-header">
      <img src="${note.demoImage}" alt="${note.name}" class="modal-demo-image" onclick="openImageViewer('${note.demoImage}')" onerror="this.style.display='none'">
      <div class="modal-title-section">
        <h2 class="modal-title">${note.name}</h2>
        <p class="modal-subtitle">${note.description}</p>
      </div>
    </div>
    ${stepsHtml}
  `;

  modal.classList.add("active");
  syncBodyScrollLock();
}

// Close technique modal
function closeTechniqueModal() {
  const modal = document.getElementById("technique-modal");
  modal.classList.remove("active");
  syncBodyScrollLock();
}

function closeExamplesModal() {
  const modal = document.getElementById("examples-modal");
  modal.classList.remove("active");
  syncBodyScrollLock();
}

// Open image viewer
function openImageViewer(imageSrc) {
  const viewer = document.getElementById("image-viewer");
  const img = document.getElementById("image-viewer-img");
  img.src = imageSrc;
  viewer.classList.add("active");
  syncBodyScrollLock();
}

// Close image viewer
function closeImageViewer() {
  const viewer = document.getElementById("image-viewer");
  viewer.classList.remove("active");
  syncBodyScrollLock();
}

// Initialize application
function init() {
  updateStats();
  renderFilterButtons();
  renderViewModeToggle();
  renderPatches();
  renderTechniques();
  renderNotes();

  // Search functionality
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderPatches();
    renderTechniques();
    renderNotes();
  });

  // Modal close button
  document.getElementById("modal-close").addEventListener("click", closeTechniqueModal);
  
  // Close modal on overlay click
  document.getElementById("technique-modal").addEventListener("click", (e) => {
    if (e.target.id === "technique-modal") {
      closeTechniqueModal();
    }
  });

  document.getElementById("examples-modal-close").addEventListener("click", closeExamplesModal);

  document.getElementById("examples-modal").addEventListener("click", (e) => {
    if (e.target.id === "examples-modal") {
      closeExamplesModal();
    }
  });

  // Image viewer close
  document.getElementById("image-viewer-close").addEventListener("click", closeImageViewer);
  document.getElementById("image-viewer").addEventListener("click", (e) => {
    if (e.target.id === "image-viewer") {
      closeImageViewer();
    }
  });

  // Close modals with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (document.getElementById("image-viewer").classList.contains("active")) {
        closeImageViewer();
      } else if (document.getElementById("examples-modal").classList.contains("active")) {
        closeExamplesModal();
      } else if (document.getElementById("technique-modal").classList.contains("active")) {
        closeTechniqueModal();
      }
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      
      // Update active state
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  window.addEventListener("resize", () => {
    if (viewMode === "gallery") {
      applyGalleryImageSizing();
    }

    if (document.getElementById("examples-modal").classList.contains("active")) {
      applyExamplesGallerySizing();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
