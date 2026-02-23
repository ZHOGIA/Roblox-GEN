// State Management
const state = {
    avatar: '',
    action: '',
    genre: '',
    prop: '',
    style: '',
    camera: ''
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    setupOptionButtons();
});

// --- Navigation Logic ---
function nextStep(stepNumber) {
    // Basic validation
    if (stepNumber === 2 && (!state.avatar || !state.action)) {
        alert('Please select both a Character type and an Action before proceeding to the next step.');
        return;
    }
    if (stepNumber === 3 && (!state.genre || !state.prop)) {
        alert('Please select both an Environment Genre and a Key Prop before proceeding to the final step.');
        return;
    }

    // Hide all steps
    document.querySelectorAll('.step-card').forEach(card => {
        card.classList.remove('active');
    });

    // Show target step
    const targetStep = document.getElementById(`step-${stepNumber}`);
    if (targetStep) {
        targetStep.classList.add('active');
        targetStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function prevStep(stepNumber) {
    document.querySelectorAll('.step-card').forEach(card => {
        card.classList.remove('active');
    });

    const targetStep = document.getElementById(`step-${stepNumber}`);
    if (targetStep) {
        targetStep.classList.add('active');
        targetStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- Selection Logic ---
function setupOptionButtons() {
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');
            const value = e.target.getAttribute('data-value');
            const parentGrid = e.target.closest('.options-grid');

            // Remove selected class from siblings in the same grid
            parentGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

            // Add selected class to clicked button
            e.target.classList.add('selected');

            // Update state
            state[type] = value;
        });
    });
}

// --- Generator Logic ---
function generateContent() {
    // Final Validation
    if (!state.style || !state.camera) {
        alert('Please select a Visual Style and Camera Angle to generate the magic!');
        return;
    }

    // Hide all steps explicitly just in case
    document.querySelectorAll('.step-card').forEach(card => card.classList.remove('active'));
    document.querySelector('.generator-section').style.display = 'none';

    // Show output section
    const outputSection = document.getElementById('output-section');
    outputSection.classList.remove('hidden');

    // Generate output
    const imagePrompt = generateImagePrompt();
    const videoPlan = generateVideoPlan();

    // Inject output
    document.getElementById('image-prompt-text').textContent = imagePrompt;
    document.getElementById('video-plan-text').textContent = videoPlan;

    outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateImagePrompt() {
    return `${state.style}, 8k resolution, ${state.camera} of a ${state.avatar} ${state.action} in ${state.genre}, holding ${state.prop}, dramatic shadows, vibrant colors, emotional atmosphere, highly detailed, trending on ArtStation, --ar 16:9`;
}

function generateVideoPlan() {
    return `🎯 TITLE: The Unbelievable ${state.avatar} Journey
    
🔥 HOOK (0:00 - 0:03): 
"You won't believe what happens when a ${state.avatar} gets trapped in ${state.genre}..."
[Visual: Quick jump-cut to the ${state.avatar} holding ${state.prop} looking terrified]

👀 VISUAL INTRO (0:03 - 0:08):
- Shot Type: ${state.camera}
- Action: Show the ${state.avatar} cautiously moving through ${state.genre}.
- Aesthetic: ${state.style}.

⚔️ CORE ACTION (0:08 - 0:20):
Suddenly, the action kicks off! Emphasize the ${state.avatar} ${state.action}.
[Sound: Dramatic Roblox bass drop / Oof sound effect]
Make sure to visibly showcase ${state.prop} as the key item to survival/success.

📢 CALL TO ACTION (0:20 - 0:25):
"Could you survive this? Tag a friend who would instantly fail! 👇"
[Visual: Slow fade out from the intense action]`;
}

// --- Utility Functions ---
function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).textContent;
    const btn = event.target;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied! ✓';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text.');
    });
}

function resetGenerator() {
    // Reset state
    Object.keys(state).forEach(key => state[key] = '');

    // Deselect all buttons
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));

    // Hide output, show generator
    document.getElementById('output-section').classList.add('hidden');
    document.querySelector('.generator-section').style.display = 'flex';

    // Go back to step 1
    nextStep(1);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
