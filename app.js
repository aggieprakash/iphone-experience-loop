// ============================================
// DATA STRUCTURE
// ============================================

const data = {
    // Hero's Journey - Current State
    heroJourneyCurrent: {
        ordinary: {
            title: "The Ordinary World",
            bullets: [
                "Smartphones have converged into the same glass slab. Differentiation is subtle.",
                "iPhone is default infrastructure. Loved, but rarely 'felt' anymore.",
                "People are in a mixed state: trust + habit + affection + fatigue."
            ],
            soWhat: "The category is stable, but meaning is stale."
        },
        call: {
            title: "The Call to Adventure",
            bullets: [
                "A new tension rises: privacy, AI, platform power, attention, repair, cost.",
                "Users start asking: is Apple still 'the good one,' or just another Big Tech giant.",
                "The brand promise gets re-tested in public, in memes, in forums, in culture."
            ],
            soWhat: "The next era is a trust and meaning test, not a feature race."
        },
        threshold: {
            title: "Crossing the Threshold",
            bullets: [
                "A moment forces a choice: upgrade, switch, stay, or disengage.",
                "Switching costs (ecosystem, iMessage, photos, habits) keep people in.",
                "The decision becomes emotional: 'I'm staying, but I'm watching.'"
            ],
            soWhat: "Retention is no longer devotion. It's conditional commitment."
        },
        transformation: {
            title: "Transformation",
            bullets: [
                "The experience either renews meaning or deepens fatigue.",
                "Quiet wins: reliability, safety, continuity, polish. Quiet losses: boredom, control, ads creeping in.",
                "AI is the inflection point: magic returns, or Apple looks behind."
            ],
            soWhat: "Transformation now means 'felt progress,' not spec progress."
        },
        boon: {
            title: "The Ultimate Boon",
            bullets: [
                "The ideal outcome is not a new phone. It's restored belief.",
                "Users feel: 'This fits my life, protects me, and respects me.'",
                "The iPhone becomes a calm, trusted extension again, not a tolerated necessity."
            ],
            soWhat: "The prize is renewed trust and renewed meaning."
        },
        return: {
            title: "The Return",
            bullets: [
                "The iPhone returns to being invisible infrastructure, but with a refreshed story people actually feel.",
                "Word of mouth becomes: 'It's boring in the best way. It just works. I trust it.'",
                "The loop resets until the next cultural or tech shock hits."
            ],
            soWhat: "Apple wins by repeatedly closing the promise-to-experience gap."
        }
    },
    
    // Hero's Journey - Alternate (iPhone as Hero)
    heroJourneyAlternate: {
        ordinary: {
            title: "The Ordinary World (Before the iPhone)",
            bullets: [
                "Phones were functional tools: calls, texts, buttons, friction.",
                "Digital life was fragmented across devices and contexts.",
                "Technology felt complicated, exclusionary, and unhuman."
            ],
            soWhat: "The world was ready for simplification and magic."
        },
        call: {
            title: "The Call to Adventure (2007)",
            bullets: [
                "Apple introduces a phone that promises to put 'the internet in your pocket.'",
                "Touch replaces buttons. Software replaces manuals.",
                "The phone is framed not as tech, but as intuition."
            ],
            soWhat: "A new relationship with technology is proposed."
        },
        threshold: {
            title: "Crossing the Threshold",
            bullets: [
                "Users adopt the iPhone and leave old mental models behind.",
                "Phones become always-on, always-with-you, always-personal.",
                "The App Store turns the phone into a platform for life."
            ],
            soWhat: "The phone stops being a tool and starts becoming an extension."
        },
        transformation: {
            title: "Transformation",
            bullets: [
                "The iPhone reshapes behavior: how we communicate, work, create, date, navigate, remember.",
                "Entire industries reorganize around the device.",
                "The phone becomes central to identity, status, and social belonging."
            ],
            soWhat: "The iPhone doesn't just change users. It changes culture."
        },
        boon: {
            title: "The Ultimate Boon",
            bullets: [
                "A single object becomes a camera, map, wallet, diary, studio, and social lifeline.",
                "Technology finally feels human, friendly, and empowering.",
                "Apple earns deep emotional trust and loyalty."
            ],
            soWhat: "The iPhone becomes indispensable infrastructure."
        },
        return: {
            title: "The Return",
            bullets: [
                "The magic normalizes. What once felt miraculous becomes expected.",
                "The iPhone fades into the background of daily life.",
                "Dependence replaces wonder. Trust replaces awe."
            ],
            soWhat: "The hero succeeds so completely it disappears."
        }
    },
    
    // Kapferer Prism Data
    prism: {
        physique: {
            left: "Precision-made, premium, beautifully minimal, engineered to disappear.",
            right: "Flawless, but increasingly samey; a mature slab that blends into life.",
            alignment: "Medium"
        },
        personality: {
            left: "Calm, confident, human, tasteful. A quiet leader.",
            right: "Polished, but cautious and corporate; less 'rebel,' more institution.",
            alignment: "Medium"
        },
        culture: {
            left: "Privacy-forward, craft-driven, principled, pro-creator, pro-user.",
            right: "Still 'better than most,' but not pure; profit shows up in control and ads.",
            alignment: "Medium–Low"
        },
        relationship: {
            left: "A trusted guardian. 'Your life, protected.'",
            right: "The lesser evil they rely on. Trusted, but watched closely.",
            alignment: "Medium–High"
        },
        reflection: {
            left: "Creative, intentional, high-taste users who value quality and originality.",
            right: "Everyone has one; it's default. Status is real but normalized.",
            alignment: "Low–Medium"
        },
        'self-image': {
            left: "Users feel empowered, capable, elevated, in control of their digital life.",
            right: "Users feel secure and competent, but also dependent and locked in.",
            alignment: "Medium"
        }
    },
    
    // Flashcard Data
    flashcards: {
        a: [
            "Behavioral psychologist (habit, dependence, identity)",
            "Privacy ethicist / data rights scholar",
            "Consumer culture theorist (icons becoming infrastructure)",
            "Product anthropologist / ethnographer (lived device rituals)",
            "Human–computer interaction researcher (trust, friction, attention)",
            "Service designer (end-to-end experience, not touchpoints)",
            "Tech critic or historian (Jobs myth, Cook scale, meaning drift)"
        ],
        b: [
            "Apple Store: observe upgrades, Genius Bar, trade-in conversations",
            "Carrier store experience: Verizon/AT&T/T-Mobile upgrade friction and 'deal traps'",
            "Independent repair shop: right-to-repair sentiment, failure moments, cost realities",
            "A college campus: group chat norms, iMessage pressure, default-phone culture",
            "A creator setting: photographers, videographers, editors using iPhone as tool",
            "A privacy community meetup or panel (or online live event): trust language in the wild",
            "A tech conference talk track on AI assistants and mobile OS futures"
        ],
        c: [
            "Privacy and surveillance discussions (consumer-level language)",
            "Apple-focused communities (fans, skeptics, power users)",
            "Tech criticism and product philosophy essays",
            "Culture writers on 'default tech' and infrastructural brands",
            "AI commentary focused on assistants and on-device intelligence",
            "Right-to-repair and platform power reporting",
            "Creator economy content (Shot on iPhone reality vs myth)",
            "Design and interaction critique (why products feel 'done')",
            "Youth culture signals (teens, group chat behavior, status norms)"
        ]
    },
    
    // Final Section
    final: {
        paragraph1: "People feel four things at once: trust, habit, affection, and fatigue. The iPhone is reliable and socially frictionless, so it stays. But it no longer feels like a breakthrough. For many, it has shifted from a product you choose to infrastructure you live with. The love is real, but it is quieter now. Less excitement. More dependence. More watching.",
        paragraph2: "Apple does not need louder stories. It needs experiences that close the gap between who it says it is and how it is actually lived. The goal is meaning renewal: small, felt moments that restore trust, control, and delight without gimmicks. In the next era, winning is not about adding features. It is about rebuilding belief through the loop, again and again."
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    selectedNode: null,
    selectedFacets: { left: null, right: null },
    journeyVersion: 'current', // 'current' or 'alternate'
    flippedCards: new Set()
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    populateFlashcards();
    populateFinalSection();
    setupScrollButton();
});

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
    // Hero's Journey nodes
    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('click', handleNodeClick);
        node.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNodeClick(e);
            }
        });
        node.setAttribute('tabindex', '0');
        node.setAttribute('role', 'button');
    });
    
    // Prism facets
    document.querySelectorAll('.facet').forEach(facet => {
        facet.addEventListener('click', handleFacetClick);
        facet.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFacetClick(e);
            }
        });
        facet.setAttribute('tabindex', '0');
        facet.setAttribute('role', 'button');
    });
    
    // Toggle journey version
    const toggleBtn = document.getElementById('toggleJourneyBtn');
    toggleBtn.addEventListener('click', toggleJourneyVersion);
    
    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', resetAll);
    
    // Flashcards
    document.querySelectorAll('.flashcard').forEach(card => {
        card.addEventListener('click', handleFlashcardClick);
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFlashcardClick(e);
            }
        });
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// HERO'S JOURNEY HANDLERS
// ============================================

function handleNodeClick(e) {
    const node = e.currentTarget;
    const nodeId = node.dataset.node;
    
    // Clear previous selection
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    
    // If clicking the same node, deselect it
    if (state.selectedNode === nodeId) {
        state.selectedNode = null;
        hideExplainerCard();
        return;
    }
    
    // Select new node
    state.selectedNode = nodeId;
    node.classList.add('active');
    
    // Show explainer card
    showExplainerCard(nodeId);
}

function showExplainerCard(nodeId) {
    const journeyData = state.journeyVersion === 'current' 
        ? data.heroJourneyCurrent 
        : data.heroJourneyAlternate;
    
    const nodeData = journeyData[nodeId];
    const card = document.getElementById('explainerCard');
    
    const bulletsList = nodeData.bullets.map(bullet => `<li>${bullet}</li>`).join('');
    
    card.innerHTML = `
        <h3>${nodeData.title}</h3>
        <ul>${bulletsList}</ul>
        <div class="so-what"><strong>So what:</strong> ${nodeData.soWhat}</div>
    `;
    
    card.classList.add('visible');
}

function hideExplainerCard() {
    const card = document.getElementById('explainerCard');
    card.classList.remove('visible');
}

function toggleJourneyVersion() {
    const toggleBtn = document.getElementById('toggleJourneyBtn');
    
    if (state.journeyVersion === 'current') {
        state.journeyVersion = 'alternate';
        toggleBtn.classList.add('active');
    } else {
        state.journeyVersion = 'current';
        toggleBtn.classList.remove('active');
    }
    
    // Refresh the explainer card if a node is selected
    if (state.selectedNode) {
        showExplainerCard(state.selectedNode);
    }
}

// ============================================
// PRISM HANDLERS
// ============================================

function handleFacetClick(e) {
    const facet = e.currentTarget;
    const facetName = facet.dataset.facet;
    const side = facet.dataset.side;
    
    // Get all facets on this side
    const sideFacets = document.querySelectorAll(`.facet[data-side="${side}"]`);
    
    // Clear previous selection on this side
    sideFacets.forEach(f => f.classList.remove('active'));
    
    // If clicking the same facet, deselect it
    if (state.selectedFacets[side] === facetName) {
        state.selectedFacets[side] = null;
        hideExplainerCard();
        checkAlignment();
        return;
    }
    
    // Select new facet
    state.selectedFacets[side] = facetName;
    facet.classList.add('active');
    
    // Show facet description
    showFacetDescription(facetName, side);
    
    // Check alignment
    checkAlignment();
}

function showFacetDescription(facetName, side) {
    const facetData = data.prism[facetName];
    const card = document.getElementById('explainerCard');
    
    const description = side === 'left' ? facetData.left : facetData.right;
    const sideLabel = side === 'left' ? 'Apple sees itself' : 'People live it';
    
    card.innerHTML = `
        <h3>${formatFacetName(facetName)}</h3>
        <p class="facet-description"><strong>${sideLabel}:</strong> ${description}</p>
    `;
    
    card.classList.add('visible');
}

function formatFacetName(name) {
    return name.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function checkAlignment() {
    const indicator = document.getElementById('alignmentIndicator');
    
    // Check if same facet is selected on both sides
    if (state.selectedFacets.left && 
        state.selectedFacets.left === state.selectedFacets.right) {
        
        const facetName = state.selectedFacets.left;
        const facetData = data.prism[facetName];
        
        indicator.innerHTML = `
            <h4>🎯 Alignment Analysis: ${formatFacetName(facetName)}</h4>
            <p><strong>Apple sees itself:</strong> ${facetData.left}</p>
            <p><strong>People live it:</strong> ${facetData.right}</p>
            <div class="alignment-level">Alignment: ${facetData.alignment}</div>
        `;
        
        indicator.classList.add('visible');
    } else {
        indicator.classList.remove('visible');
    }
}

// ============================================
// RESET FUNCTIONALITY
// ============================================

function resetAll() {
    // Clear node selection
    state.selectedNode = null;
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    
    // Clear facet selections
    state.selectedFacets = { left: null, right: null };
    document.querySelectorAll('.facet').forEach(f => f.classList.remove('active'));
    
    // Hide cards
    hideExplainerCard();
    document.getElementById('alignmentIndicator').classList.remove('visible');
    
    // Reset journey version
    state.journeyVersion = 'current';
    document.getElementById('toggleJourneyBtn').classList.remove('active');
    
    // Reset flashcards
    state.flippedCards.clear();
    document.querySelectorAll('.flashcard').forEach(card => {
        card.classList.remove('flipped');
    });
}

// ============================================
// FLASHCARD HANDLERS
// ============================================

function handleFlashcardClick(e) {
    const card = e.currentTarget;
    const cardId = card.dataset.card;
    
    if (state.flippedCards.has(cardId)) {
        state.flippedCards.delete(cardId);
        card.classList.remove('flipped');
    } else {
        state.flippedCards.add(cardId);
        card.classList.add('flipped');
    }
}

function populateFlashcards() {
    // Flashcard A
    const listA = document.getElementById('flashcardContentA');
    data.flashcards.a.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listA.appendChild(li);
    });
    
    // Flashcard B
    const listB = document.getElementById('flashcardContentB');
    data.flashcards.b.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listB.appendChild(li);
    });
    
    // Flashcard C
    const listC = document.getElementById('flashcardContentC');
    data.flashcards.c.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listC.appendChild(li);
    });
}

// ============================================
// FINAL SECTION
// ============================================

function populateFinalSection() {
    document.getElementById('finalParagraph1').textContent = data.final.paragraph1;
    document.getElementById('finalParagraph2').textContent = data.final.paragraph2;
}

// ============================================
// SCROLL BUTTON
// ============================================

function setupScrollButton() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}