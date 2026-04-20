/**
 * ============================================================================
 * PATCH LIBRARY - Configuration & Content File
 * ============================================================================
 *
 * This file contains all editable content for the Patch Library website.
 * Edit the arrays below to add, remove, or modify content.
 *
 * STRUCTURE:
 * 1. CATEGORIES - List of patch categories (filter buttons auto-generate)
 * 2. TECHNIQUES - Technique definitions with steps and images
 * 3. PATCHES - Patch definitions with all properties
 *
 * FIXED OPTIONS:
 * - Difficulty levels: "Beginner", "Intermediate", "Advanced"
 *   (These have predefined color styling in CSS)
 *
 * JUMP WITHIN THE FILE: (Ctrl+F jump)
 * Categories: CATEGORIES-JMP
 * Techniques: TECHNIQUES-JMP
 * Patches: PATCHES-JMP
 *
 * ============================================================================
 */

// ============================================================================
// CATEGORIES-JMP
// ============================================================================
// Add or remove categories here. Filter buttons will automatically update.
// The "All" filter is always included automatically.

const categories = [
  "Kat1", "Kat2"
];

// ============================================================================
// TECHNIQUES-JMP
// ============================================================================
// Each technique has:
// - name: Display name (required)
// - description: Short description shown in the card (required)
// - demoImage: Path to demonstrator image (required)
// - steps: Array of step objects (required, can be empty [])
//   Each step has:
//   - name: Step title (required)
//   - description: Step description (optional, can be "" or omitted)
//   - images: Array of image paths, max 2 (optional, can be [] or omitted)

const techniques = [
  {
    name: "Satin Stitch",
    description: "Parallel stitches creating smooth, filled areas",
    demoImage: "./images/techniques/satin-stitch.jpg",
    steps: [
      {
        name: "Prepare Your Fabric",
        description: "Secure your fabric in an embroidery hoop, keeping it taut but not overstretched. Mark your shape outline with a water-soluble marker.Secure your fabric in an embroidery hoop, keeping it taut but not overstretched. Mark your shape outline with a water-soluble marker.Secure your fabric in an embroidery hoop, keeping it taut but not overstretched. Mark your shape outline with a water-soluble marker.Secure your fabric in an embroidery hoop, keeping it taut but not overstretched. Mark your shape outline with a water-soluble marker.Secure your fabric in an embroidery hoop, keeping it taut but not overstretched. Mark your shape outline with a water-soluble marker.Secure your fabric in an embroidery hoop, keeping it taut but not overstretched. Mark your shape outline with a water-soluble marker.",
        images: ["./images/techniques/satin-step1a.png", "./images/techniques/satin-step1b.jpg"]
      },
      {
        name: "Start at the Edge",
        description: "Bring your needle up at one edge of the shape. Pull the thread through completely.",
        images: ["./images/techniques/satin-step2.jpg"]
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Create Parallel Lines",
        description: "Insert the needle directly across on the opposite edge. Bring it back up right next to your first stitch. Keep stitches close together with no gaps.",
        images: []
      },
      {
        name: "Maintain Tension",
        description: "Keep consistent tension throughout. Stitches should lie flat without puckering the fabric.",
        images: []
      }
    ]
  },
  {
    name: "French Knots",
    description: "Small, textured dots for detail work",
    demoImage: "./images/techniques/french-knots.jpg",
    steps: [
      {
        name: "Bring Needle Up",
        description: "Come up through the fabric at the point where you want the knot.",
        images: []
      },
      {
        name: "Wrap the Thread",
        description: "Hold the thread taut with your non-dominant hand. Wrap the thread around the needle 2-3 times.",
        images: ["./images/techniques/french-step2.jpg"]
      },
      {
        name: "Insert and Pull",
        description: "Insert the needle very close to (but not in) the original hole. Hold the wraps in place as you pull the thread through to the back.",
        images: []
      }
    ]
  },
  {
    name: "Stem Stitch",
    description: "Rope-like line for outlines and stems",
    demoImage: "./images/techniques/stem-stitch.jpg",
    steps: [
      {
        name: "Start Your Line",
        description: "Bring the needle up at the start of your line.",
        images: []
      },
      {
        name: "Create First Stitch",
        description: "Insert the needle a short distance ahead, then bring it back up halfway between the start and end points, keeping thread below the needle.",
        images: []
      },
      {
        name: "Continue the Pattern",
        description: "Repeat, always keeping the thread on the same side. Each new stitch starts from the middle of the previous one.",
        images: []
      }
    ]
  },
  {
    name: "Backstitch",
    description: "Strong, continuous line stitch",
    demoImage: "./images/techniques/backstitch.jpg",
    steps: [
      {
        name: "First Stitch",
        description: "Come up one stitch length from your starting point. Go back down at the start.",
        images: []
      },
      {
        name: "Continue Backward",
        description: "Come up one stitch length ahead, then go back down where your last stitch ended. This creates a continuous line.",
        images: []
      }
    ]
  },
  {
    name: "Chain Stitch",
    description: "Looped chain for decorative lines",
    demoImage: "./images/techniques/chain-stitch.jpg",
    steps: [
      {
        name: "Create First Loop",
        description: "Bring needle up and insert it back in the same hole, leaving a loop. Come up a stitch length away, catching the loop.",
        images: []
      },
      {
        name: "Build the Chain",
        description: "Insert the needle inside the previous loop and repeat. Each loop catches the next.",
        images: []
      }
    ]
  },
  {
    name: "Lazy Daisy",
    description: "Petal-shaped loops for flowers",
    demoImage: "./images/techniques/lazy-daisy.jpg",
    steps: [
      {
        name: "Create Petal Loop",
        description: "Like chain stitch, but each loop is anchored with a small stitch at the tip.",
        images: []
      },
      {
        name: "Arrange Petals",
        description: "Create multiple petals radiating from a center point to form a flower.",
        images: []
      }
    ]
  },
  {
    name: "Long & Short Stitch",
    description: "Blended gradients and shading",
    demoImage: "./images/techniques/long-short.jpg",
    steps: [
      {
        name: "First Row",
        description: "Create alternating long and short satin stitches along the edge of your shape.",
        images: []
      },
      {
        name: "Subsequent Rows",
        description: "Fill in with stitches that blend into the previous row. Vary lengths to create smooth transitions.",
        images: []
      },
      {
        name: "Color Blending",
        description: "Change thread colors between rows for gradient effects. Blend where colors meet.",
        images: []
      }
    ]
  },
  {
    name: "Split Stitch",
    description: "Fine lines with subtle texture",
    demoImage: "./images/techniques/split-stitch.jpg",
    steps: [
      {
        name: "First Stitch",
        description: "Create a single straight stitch.",
        images: []
      },
      {
        name: "Split the Thread",
        description: "Bring the needle up through the middle of the previous stitch, splitting the thread fibers.",
        images: []
      },
      {
        name: "Continue Pattern",
        description: "Each new stitch splits the one before it, creating a braided appearance.",
        images: []
      }
    ]
  },
  {
    name: "Running Stitch",
    description: "Simple dashed line stitch",
    demoImage: "./images/techniques/running-stitch.jpg",
    steps: [
      {
        name: "Weave Through Fabric",
        description: "Pass the needle in and out of the fabric at regular intervals, creating evenly spaced dashes.",
        images: []
      },
      {
        name: "Keep Consistent",
        description: "Maintain equal stitch and gap lengths for a clean appearance.",
        images: []
      }
    ]
  }
];

// ============================================================================
// PATCHES-JMP
// ============================================================================
// Each patch has:
// - title: Display name (required)
// - description: Short description (required)
// - image: Path to patch image (required)
// - category: Must match one from categories array above (required)
// - difficulty: "Beginner", "Intermediate", or "Advanced" (required)
// - techniques: Array of technique names - must match names in techniques array (required)
// - link: External URL (optional - if set, shows a link button)

const patches = [
  {
    title: "Mountain Landscape",
    description: "Vintage-style mountain scene with pine trees using varied stitch techniques for depth and texture.",
    image: "./images/patch-1.jpg",
    category: "Nature",
    difficulty: "Intermediate",
    techniques: ["Satin Stitch", "French Knots", "Long & Short Stitch"],
    link: ""
  },
  {
    title: "Wildflower Botanical",
    description: "Delicate botanical illustration featuring wildflowers and leaves with intricate detail work.",
    image: "./images/patch-2.jpg",
    category: "Botanical",
    difficulty: "Beginner",
    techniques: ["Stem Stitch", "Lazy Daisy", "Backstitch"],
    link: "https://example.com/wildflower-pattern"
  },
  {
    title: "Celestial Moon",
    description: "Crescent moon and stars design with metallic accents for a mystical aesthetic.",
    image: "./images/patch-3.jpg",
    category: "Celestial",
    difficulty: "Intermediate",
    techniques: ["Chain Stitch", "Backstitch", "Satin Stitch"],
    link: ""
  },
  {
    title: "Geometric Abstract",
    description: "Modern minimalist design with clean geometric shapes and balanced composition.",
    image: "./images/patch-4.jpg",
    category: "Abstract",
    difficulty: "Beginner",
    techniques: ["Running Stitch", "Backstitch", "Satin Stitch"],
    link: ""
  },
  {
    title: "Vintage Bee",
    description: "Realistic bee embroidery with detailed wing work and dimensional body texture.",
    image: "./images/patch-5.jpg",
    category: "Nature",
    difficulty: "Advanced",
    techniques: ["French Knots", "Long & Short Stitch", "Satin Stitch"],
    link: "https://example.com/bee-tutorial"
  },
  {
    title: "Japanese Waves",
    description: "Ocean waves in traditional Japanese style with flowing water patterns and movement.",
    image: "./images/patch-6.jpg",
    category: "Abstract",
    difficulty: "Advanced",
    techniques: ["Split Stitch", "Satin Stitch", "Stem Stitch"],
    link: ""
  },
  {
    title: "Some bullshit",
    description: "Bullshit with fur.",
    image: "./images/bullshit.jpeg",
    category: "Bullshit",
    difficulty: "Advanced",
    techniques: ["Split Stitch", "Satin Stitch", "Stem Stitch"],
    link: ""
  }
];

// ============================================================================
// APPLICATION CODE - Do not edit below unless you know what you're doing
// ============================================================================

let currentFilter = "All";
let searchQuery = "";

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
    <article class="patch-card" data-category="${patch.category}">
      <div class="patch-image-container" onclick="openImageViewer('${patch.image}')">
        <img src="${patch.image}" alt="${patch.title}" class="patch-image" loading="lazy">
        <span class="difficulty-badge ${getDifficultyClass(patch.difficulty)}">${patch.difficulty}</span>
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
      <img src="${tech.demoImage}" alt="${tech.name}" class="technique-thumb" onerror="this.style.display='none'">
      <div class="technique-info">
        <h4 class="technique-name">${tech.name}</h4>
        <p class="technique-description">${tech.description}</p>
        <span class="technique-count">${getTechniqueCount(tech.name)} design${getTechniqueCount(tech.name) !== 1 ? "s" : ""}</span>
      </div>
    </div>
  `).join("");
}

// Update statistics counters
function updateStats() {
  document.getElementById("stat-designs").textContent = patches.length;
  document.getElementById("stat-techniques").textContent = techniques.length;
  document.getElementById("stat-categories").textContent = categories.length;
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
        <h2 class="modal-title">${technique.name}</h2>
        <p class="modal-subtitle">${technique.description}</p>
      </div>
    </div>
    ${stepsHtml}
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close technique modal
function closeTechniqueModal() {
  const modal = document.getElementById("technique-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Open image viewer
function openImageViewer(imageSrc) {
  const viewer = document.getElementById("image-viewer");
  const img = document.getElementById("image-viewer-img");
  img.src = imageSrc;
  viewer.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close image viewer
function closeImageViewer() {
  const viewer = document.getElementById("image-viewer");
  viewer.classList.remove("active");
  document.body.style.overflow = "";
}

// Initialize application
function init() {
  updateStats();
  renderFilterButtons();
  renderPatches();
  renderTechniques();

  // Search functionality
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderPatches();
    renderTechniques();
  });

  // Modal close button
  document.getElementById("modal-close").addEventListener("click", closeTechniqueModal);

  // Close modal on overlay click
  document.getElementById("technique-modal").addEventListener("click", (e) => {
    if (e.target.id === "technique-modal") {
      closeTechniqueModal();
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
      closeTechniqueModal();
      closeImageViewer();
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
}

document.addEventListener("DOMContentLoaded", init);
