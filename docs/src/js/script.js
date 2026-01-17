// ============================================
// PARTICLE SYSTEM (OPTIMIZED)
// ============================================

const moteColors = [
    'rgba(78, 205, 196, 0.8)',
    'rgba(255, 140, 66, 0.7)',
    'rgba(78, 205, 196, 0.6)',
    'rgba(255, 215, 0, 0.75)',
    'rgba(100, 220, 210, 0.7)',
    'rgba(255, 140, 66, 0.5)',
    'rgba(78, 205, 196, 0.5)',
    'rgba(255, 180, 100, 0.65)',
    'rgba(60, 180, 175, 0.8)',
    'rgba(255, 215, 0, 0.6)',
    'rgba(100, 220, 210, 0.5)',
    'rgba(255, 140, 66, 0.8)',
];

let particleContainer = null;
let particleLayers = [];
let moteIndex = 0;
let moteCounter = 0;
let capMoteCount = 0;

// Keyframe cache to avoid creating duplicate animations
const keyframeCache = new Map();

// Initialize particle system when DOM is ready
function initializeParticleSystem() {
    particleContainer = document.getElementById('particles');
    if (!particleContainer) return;

    particleLayers = document.querySelectorAll('.particle-layer');
    if (particleLayers.length === 0) return;

    calculateCapMoteCount();
    syncParticleLayerHeights();

    // Create initial motes
    particleLayers.forEach((layer, layerIndex) => {
        const initialMotes = 2;
        for (let i = 0; i < initialMotes; i++) {
            createMote(layer, layerIndex);
        }
    });

    // Start creating new motes
    setInterval(() => {
        if (particleLayers.length > 0 && moteCounter < calculateCapMoteCount()) {
            let randomLayerIndex = Math.floor(Math.random() * particleLayers.length);
            createMote(particleLayers[randomLayerIndex], randomLayerIndex);
        }
    }, 15);

    // Setup event listeners
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', () => {
        calculateCapMoteCount();
        syncParticleLayerHeights();
    });
    window.addEventListener('load', () => {
        setTimeout(syncParticleLayerHeights, 500);
    });
}

function syncParticleLayerHeights() {
    const docHeight = document.documentElement.scrollHeight;
    particleLayers.forEach(layer => {
        layer.style.height = docHeight + 'px';
    });
}

function calculateCapMoteCount() {
    // Check if we're on the Burning of Golandra page
    const isGolandraPage = window.location.pathname.includes('burning-of-golandra');

    // Double particles on all pages except Burning of Golandra
    const pixelsPerMote = isGolandraPage ? (800 * 800) : (400 * 800);

    const pageArea = document.documentElement.scrollWidth * document.documentElement.scrollHeight;
    const motePerLayer = Math.floor(pageArea / pixelsPerMote);
    capMoteCount = motePerLayer * particleLayers.length;
    return capMoteCount;
}

function createRandomDrift(index, driftMultiplier = 1) {
    const keyframeName = `drift${index}`;

    // Check if we already created this animation
    if (keyframeCache.has(keyframeName)) {
        return keyframeName;
    }

    // Base drift values - Layer 2 uses multiplier of 1
    const baseDriftX = 60;
    const baseDriftY = 40;

    const driftX = baseDriftX * driftMultiplier;
    const driftY = baseDriftY * driftMultiplier;

    const keyframes = `
        @keyframes ${keyframeName} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * driftX - driftX/2}px, ${Math.random() * driftY - driftY/2}px); }
            50% { transform: translate(${Math.random() * driftX - driftX/2}px, ${Math.random() * driftY - driftY/2}px); }
            75% { transform: translate(${Math.random() * driftX - driftX/2}px, ${Math.random() * driftY - driftY/2}px); }
            100% { transform: translate(0, 0); }
        }
    `;

    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    keyframeCache.set(keyframeName, style);

    return keyframeName;
}

function createMote(layer, layerIndex) {
    const mote = document.createElement('div');
    mote.className = 'mote';

    // Calculate size based on layer - background layers (0, 1) are smallest, foreground layers are largest
    const totalLayers = particleLayers.length;
    const depthFactor = layerIndex / (totalLayers - 1); // 0 (back) to 1 (front)
    const minSize = 2 + (depthFactor * 8);
    const maxSize = 5 + (depthFactor * 18);
    const size = minSize + Math.random() * (maxSize - minSize);

    // Calculate opacity based on layer - furthest layers (0, 1) are 0.15-0.4, nearest layer (6) is 0.5-0.8
    const minOpacity = 0.15 + (depthFactor * 0.35); // 0.15 (back) to 0.5 (front)
    const maxOpacity = 0.4 + (depthFactor * 0.4); // 0.4 (back) to 0.8 (front)
    const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);

    // Get random base color and apply layer-based opacity
    const baseColor = moteColors[Math.floor(Math.random() * moteColors.length)];
    const colorMatch = baseColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),/);
    const color = `rgba(${colorMatch[1]}, ${colorMatch[2]}, ${colorMatch[3]}, ${opacity})`;

    // Calculate drift multiplier - Layer 2 = 1.0, scales from 0.3 (layer 0) to 2.0 (layer 6)
    // Formula: Layer 2 stays at 1.0, further layers get less, nearer layers get more
    const driftMultiplier = 0.3 + (depthFactor * 1.7);
    const driftAnimation = createRandomDrift(moteIndex++, driftMultiplier);
    const duration = 40 + Math.random() * 30;
    const fadeInDuration = 2;
    const fadeOutDuration = 3;
    const fadeOutStart = duration - fadeOutDuration;

    mote.style.width = size + 'px';
    mote.style.height = size + 'px';
    mote.style.background = color;
    mote.style.position = 'absolute';

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * document.documentElement.scrollHeight;

    mote.style.left = x + 'px';
    mote.style.top = y + 'px';

    const fadeKeyframeName = `fade-${moteIndex}`;
    const fadeKeyframes = `
        @keyframes ${fadeKeyframeName} {
            0% { opacity: 0; }
            ${(fadeInDuration / duration) * 100}% { opacity: 1; }
            ${(fadeOutStart / duration) * 100}% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = fadeKeyframes;
    document.head.appendChild(fadeStyle);

    mote.style.animation = `${driftAnimation} ${duration}s ease-in-out, ${fadeKeyframeName} ${duration}s ease-in-out`;
    mote.style.animationIterationCount = '1';
    mote.style.animationFillMode = 'forwards';

    layer.appendChild(mote);
    moteCounter++;

    setTimeout(() => {
        if (mote.parentNode) {
            mote.remove();
            moteCounter--;
        }
        // Clean up fade keyframe
        fadeStyle.remove();
    }, duration * 1000 + 100);
}

function updateParallax() {
    const scrollPos = window.pageYOffset;
    particleLayers.forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0.5;
        layer.style.transform = `translateY(${scrollPos * speed}px)`;
    });
}

// Call initialize function when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeParticleSystem);
} else {
    initializeParticleSystem();
}

// ============================================
// MOBILE NAVIGATION MENU (LEGACY SUPPORT)
// ============================================
// Note: This is kept for backwards compatibility with pages not using components.js
// New pages should use Components.initializeSharedComponents() instead

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelectorAll('.nav-btn');

    if (!mobileMenuToggle || !navLinks) return;

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Prevent body scroll when menu is open and add overlay class
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking a nav link (but not dropdown toggles)
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Don't close menu if this is a dropdown toggle on mobile
            const isDropdownToggle = button.closest('.nav-dropdown');
            if (isDropdownToggle && window.innerWidth <= 1024) {
                return; // Let the dropdown handler manage this
            }

            // Only close menu for regular nav links
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside (on overlay)
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) &&
            !mobileMenuToggle.contains(e.target) &&
            navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    });

    // Handle dropdown menus
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.nav-btn');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        if (dropdownBtn && dropdownMenu) {
            dropdownBtn.addEventListener('click', (e) => {
                // On mobile, toggle dropdown
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });

            // Close mobile menu when clicking a dropdown link
            const dropdownLinks = dropdownMenu.querySelectorAll('a');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 1024) {
                        mobileMenuToggle.classList.remove('active');
                        navLinks.classList.remove('active');
                        document.body.style.overflow = '';
                        document.body.classList.remove('menu-open');
                    }
                });
            });
        }
    });
});
