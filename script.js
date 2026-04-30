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
//Easter egg
let logoClickCount = 0;
let logoHasFallen = false;
//Easter egg end

// Get technique count for a specific technique
function getTechniqueCount(techniqueName) {
  return patches.filter(p => p.techniques.includes(techniqueName)).length;
}

function getPatchesUsingTechnique(techniqueName) {
  return patches.filter(patch => patch.techniques.includes(techniqueName));
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

function findPatch(title) {
  return patches.find(patch => patch.title === title);
}

function syncBodyScrollLock() {
  const techniqueModalOpen = document.getElementById("technique-modal")?.classList.contains("active");
  const examplesModalOpen = document.getElementById("examples-modal")?.classList.contains("active");
  const imageViewerOpen = document.getElementById("image-viewer")?.classList.contains("active");

  document.body.style.overflow = (techniqueModalOpen || examplesModalOpen || imageViewerOpen) ? "hidden" : "";
}

//VIDEO SUPPORT BEGIN
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];
const VIDEO_PREVIEW_FALLBACK = "./content/icons/video-placeholder.png";
const VIDEO_PLAY_BADGE = `
  <span class="media-preview-badge" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" opacity="0.92"></circle>
      <polygon points="10,8 17,12 10,16" fill="white"></polygon>
    </svg>
  </span>
`;

function isVideoPath(path) {
  const cleanPath = String(path).split("#")[0].split("?")[0].toLowerCase();
  return VIDEO_EXTENSIONS.some(ext => cleanPath.endsWith(ext));
}

function getIntrinsicMediaWidth(element) {
  if (!element) return 0;
  return element.tagName === "VIDEO" ? element.videoWidth : element.naturalWidth;
}

function renderCollectionMediaItem(mediaPath, altText) {
  const escapedPath = escapeForSingleQuotedJsString(mediaPath);
  const safeAlt = String(altText).replace(/"/g, "&quot;");

  if (isVideoPath(mediaPath)) {
    return `
      <div class="examples-gallery-item media-preview media-preview--video" onclick="openMediaViewer('${escapedPath}')">
        <img src="${VIDEO_PREVIEW_FALLBACK}" alt="" class="video-preview-fallback" aria-hidden="true">
        <video
          src="${mediaPath}"
          class="collection-media collection-media--video"
          preload="metadata"
          muted
          playsinline
          onloadeddata="this.previousElementSibling.style.display='none'"
          onerror="this.style.display='none'"
        ></video>
        ${VIDEO_PLAY_BADGE}
      </div>
    `;
  }

  return `
    <div class="examples-gallery-item" onclick="openMediaViewer('${escapedPath}')">
      <img
        src="${mediaPath}"
        alt="${safeAlt}"
        class="collection-media"
        loading="lazy"
        onerror="this.closest('.examples-gallery-item').style.display='none'"
      >
    </div>
  `;
}

function renderStepMediaPreview(mediaPath, stepIndex) {
  const escapedPath = escapeForSingleQuotedJsString(mediaPath);

  if (isVideoPath(mediaPath)) {
    return `
      <div class="step-media-preview media-preview media-preview--video" onclick="openMediaViewer('${escapedPath}')">
        <img src="${VIDEO_PREVIEW_FALLBACK}" alt="" class="video-preview-fallback" aria-hidden="true">
        <video
          src="${mediaPath}"
          class="step-image step-image--video"
          preload="metadata"
          muted
          playsinline
          onloadeddata="this.previousElementSibling.style.display='none'"
          onerror="this.style.display='none'"
        ></video>
        ${VIDEO_PLAY_BADGE}
      </div>
    `;
  }

  return `
    <img
      src="${mediaPath}"
      alt="Step ${stepIndex + 1}"
      class="step-image"
      onclick="openMediaViewer('${escapedPath}')"
      onerror="this.style.display='none'"
    >
  `;
}
//VIDEO SUPPORT END

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
      <div class="patch-image-container" onclick="openImageViewer('${escapeForSingleQuotedJsString(patch.image)}')">
        <img src="${patch.image}" alt="${patch.title}" class="patch-image" loading="lazy">
      </div>
      <div class="patch-content">
        <h3 class="patch-title">${patch.title}</h3>
        <p class="patch-description">${patch.description}</p>
        <div class="patch-techniques">
          ${patch.techniques.map(t => `<span class="technique-tag" onclick="openTechniqueModal('${escapeForSingleQuotedJsString(t)}')">${t}</span>`).join("")}
        </div>
        ${(patch.link || (Array.isArray(patch.additionalImages) && patch.additionalImages.length > 0)) ? `
          <div class="patch-actions">
            ${patch.link ? `
              <a href="${patch.link}" target="_blank" rel="noopener noreferrer" class="patch-link-btn patch-action-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                View Link
              </a>
            ` : ``}
            ${Array.isArray(patch.additionalImages) && patch.additionalImages.length > 0 ? `
              <button type="button" class="patch-link-btn patch-action-btn patch-additional-images-btn" onclick="openPatchAdditionalImagesModal('${escapeForSingleQuotedJsString(patch.title)}')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Additional Images
              </button>
            ` : ''}
          </div>
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
  const galleryMedia = document.querySelectorAll(".collection-media");

  galleryMedia.forEach((media) => {
    const container = media.closest(".examples-gallery-item");
    if (!container) return;

    const updateMediaSize = () => {
      media.classList.remove("collection-media--true-size");
      media.style.width = "";
      media.style.maxWidth = "";

      const frameWidth = container.clientWidth;
      const intrinsicWidth = getIntrinsicMediaWidth(media);

      if (!frameWidth || !intrinsicWidth) return;

      if (intrinsicWidth < frameWidth) {
        media.classList.add("collection-media--true-size");
        media.style.width = `${intrinsicWidth}px`;
        media.style.maxWidth = "100%";
      }
    };

    if (media.tagName === "VIDEO") {
      if (media.readyState >= 1) {
        updateMediaSize();
      } else {
        media.addEventListener("loadedmetadata", updateMediaSize, { once: true });
      }
    } else {
      if (media.complete) {
        updateMediaSize();
      } else {
        media.addEventListener("load", updateMediaSize, { once: true });
      }
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
    <div class="technique-card ${tech.workInProgress ? 'technique-card--wip' : ''}" onclick="openTechniqueModal('${escapeForSingleQuotedJsString(tech.name)}')">
      <span class="difficulty-badge ${getDifficultyClass(tech.difficulty)}">${tech.difficulty}</span>
      ${tech.workInProgress ? `<span class="wip-badge">Work In Progress</span>` : ""}
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
           (note.externalDescription || "").toLowerCase().includes(query) ||
           (note.internalDescription || "").toLowerCase().includes(query);
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
    <div class="technique-card ${note.workInProgress ? 'technique-card--wip' : ''}" onclick="openNoteModal('${note.name.replace(/'/g, "\\'")}')">
      ${note.workInProgress ? `<span class="wip-badge">Work In Progress</span>` : ""}
      ${note.demoImage ? `<img src="${note.demoImage}" alt="${note.name}" class="technique-thumb" onerror="this.style.display='none'">` : ""}
      <div class="technique-info">
        <h4 class="technique-name">${note.name}</h4>
        <p class="technique-description">${note.externalDescription || note.description || ""}</p>
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

function openImageCollectionModal(title, images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const modal = document.getElementById("examples-modal");
  const titleElement = document.getElementById("examples-modal-title");
  const gallery = document.getElementById("examples-gallery");

  titleElement.textContent = title;

  gallery.innerHTML = images
    .map((mediaPath, index) => renderCollectionMediaItem(mediaPath, `${title} ${index + 1}`))
    .join("");

  modal.classList.add("active");
  syncBodyScrollLock();
  requestAnimationFrame(applyExamplesGallerySizing);
}

// Open technique modal
function openTechniqueModal(techniqueName) {
  const technique = findTechnique(techniqueName);
  if (!technique) return;

  const modal = document.getElementById("technique-modal");
  const body = document.getElementById("modal-body");
  const hasExamples = Array.isArray(technique.examples) && technique.examples.length > 0;
  const escapedTechniqueName = escapeForSingleQuotedJsString(technique.name);
  const usedByPatches = getPatchesUsingTechnique(technique.name);
  const hasUsedBy = usedByPatches.length > 0;
  const isWorkInProgress = technique.workInProgress === true;

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
              ${step.images.map(mediaPath => renderStepMediaPreview(mediaPath, index)).join("")}
            </div>
          ` : ''}
        </div>
      `).join("")}
    </div>
  ` : '';

  body.innerHTML = `
    <div class="modal-header">
      <img src="${technique.demoImage}" alt="${technique.name}" class="modal-demo-image" onclick="openImageViewer('${escapeForSingleQuotedJsString(technique.demoImage)}')" onerror="this.style.display='none'">
      <div class="modal-title-section">
        <div class="modal-title-row">
          <h2 class="modal-title">${technique.name}</h2>
          <span class="difficulty-badge ${getDifficultyClass(technique.difficulty)}">${technique.difficulty}</span>
          ${isWorkInProgress ? `<span class="wip-badge">Work In Progress</span>` : ""}
        </div>
        <div class="modal-copy-actions">
          <p class="modal-subtitle">${technique.description}</p>
          ${(hasExamples || hasUsedBy) ? `
            <div class="modal-action-row">
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
              ${hasUsedBy ? `
                <button class="patch-link-btn patch-additional-images-btn modal-used-by-btn" onclick="openUsedByModal('${escapedTechniqueName}')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Used By
                </button>
              ` : ""}
            </div>
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
  if (!technique) return;

  openImageCollectionModal(
    `${technique.name} - Examples`,
    technique.examples
  );
}

function openUsedByModal(techniqueName) {
  const technique = findTechnique(techniqueName);
  if (!technique) return;

  const usedByPatches = getPatchesUsingTechnique(technique.name);
  if (usedByPatches.length === 0) return;

  openImageCollectionModal(
    `${technique.name} - Used By`,
    usedByPatches.map(patch => patch.image),
    null
  );
}

function openPatchAdditionalImagesModal(patchTitle) {
  const patch = findPatch(patchTitle);
  if (!patch) return;

  openImageCollectionModal(
    `${patch.title} - Additional Images`,
    patch.additionalImages
  );
}

//Open note modal
function openNoteModal(noteName) {
  const note = findNote(noteName);
  if (!note) return;

  const modal = document.getElementById("technique-modal");
  const body = document.getElementById("modal-body");
  const isUnOrdered = note.unOrdered === true;
  const isWorkInProgress = note.workInProgress === true;

  const stepsHtml = note.steps.length > 0 ? `
    <div class="modal-steps">
      ${note.steps.map((step, index) => `
        <div class="step-item">
          <div class="step-header">
            <span class="step-number">${isUnOrdered ? "•" : index + 1}</span>
            <span class="step-name">${step.name}</span>
          </div>
          ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
          ${step.images && step.images.length > 0 ? `
            <div class="step-images">
              ${step.images.map(mediaPath => renderStepMediaPreview(mediaPath, index)).join("")}
            </div>
          ` : ''}
        </div>
      `).join("")}
    </div>
  ` : '';

  body.innerHTML = `
    <div class="modal-header">
      ${note.demoImage ? `<img src="${note.demoImage}" alt="${note.name}" class="modal-demo-image" onclick="openImageViewer('${note.demoImage}')" onerror="this.style.display='none'">` : ""}
      <div class="modal-title-section">
        <div class="modal-title-row">
          <h2 class="modal-title">${note.name}</h2>
          ${isWorkInProgress ? `<span class="wip-badge">Work In Progress</span>` : ""}
        </div>
        <p class="modal-subtitle">${note.internalDescription || note.description || ""}</p>
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
function openMediaViewer(mediaSrc) {
  const viewer = document.getElementById("image-viewer");
  const img = document.getElementById("image-viewer-img");
  const video = document.getElementById("image-viewer-video");

  if (isVideoPath(mediaSrc)) {
    img.style.display = "none";
    img.src = "";

    video.style.display = "block";
    video.src = mediaSrc;
    video.load();
  } else {
    video.pause();
    video.removeAttribute("src");
    video.load();
    video.style.display = "none";

    img.style.display = "block";
    img.src = mediaSrc;
  }

  viewer.classList.add("active");
  syncBodyScrollLock();
}

function openImageViewer(imageSrc) {
  openMediaViewer(imageSrc);
}

// Close image viewer
function closeImageViewer() {
  const viewer = document.getElementById("image-viewer");
  const img = document.getElementById("image-viewer-img");
  const video = document.getElementById("image-viewer-video");

  viewer.classList.remove("active");

  img.src = "";
  img.style.display = "block";

  video.pause();
  video.removeAttribute("src");
  video.load();
  video.style.display = "none";

  syncBodyScrollLock();
}

//Easter egg
function playLogoShake(logoImage) {
  logoImage.classList.remove("logo-image--shake");
  void logoImage.offsetWidth;
  logoImage.classList.add("logo-image--shake");
}

function triggerLogoFall(logoImage) {
  if (logoHasFallen) return;
  logoHasFallen = true;

  const rect = logoImage.getBoundingClientRect();
  const clone = logoImage.cloneNode(true);

  clone.className = "falling-logo-clone";
  clone.style.left = `${rect.left}px`;
  clone.style.top = `${rect.top}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;

  document.body.appendChild(clone);
  logoImage.classList.add("logo-image--gone");

  requestAnimationFrame(() => {
    clone.classList.add("falling-logo-clone--animate");
  });

  clone.addEventListener("animationend", () => {
    clone.remove();
  }, { once: true });
}
//Easter egg over

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

  //Easter egg
  const logoImage = document.querySelector(".logo-image");
  if (logoImage) {
    logoImage.addEventListener("click", () => {
      if (logoHasFallen) return;

      logoClickCount += 1;

      if (logoClickCount >= 10) {
        triggerLogoFall(logoImage);
      } else {
        playLogoShake(logoImage);
      }
    });

    logoImage.addEventListener("animationend", () => {
      logoImage.classList.remove("logo-image--shake");
    });
  }
  //Easter egg over

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
