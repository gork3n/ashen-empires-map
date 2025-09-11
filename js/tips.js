document.addEventListener('DOMContentLoaded', function() {
    // Array of tips to cycle through, excluding the initial one.
    const cyclingTips = [
        "Use the sidebar toggles to show or hide different categories of markers and labels, helping you declutter the map.",
        "The coordinates in the bottom-left corner match the in-game X/Y positions, perfect for finding your way.",
        "Hover over any icon on the map to see a tooltip with its name and type.",
        "Remember to visit a trainer to spend your experience points and level up your skills.",
        "Banks are shared across your account. Use them to transfer items between your characters.",
        "Different weapons have different swing timers and damage types. Experiment to see what works best against certain monsters!",
        "Quests from NPCs are a great way to earn experience, gold, and unique items."
    ];

    // All tips for the modal, categorized.
    const allTips = {
        "Map Tips": [
            "Click on location labels like 'Valinor' or 'Lotor's Summer Palace' to open a detailed, high-resolution map of that area.",
            "Use the sidebar toggles to show or hide different categories of markers and labels, helping you declutter the map.",
            "The coordinates in the bottom-left corner match the in-game X/Y positions, perfect for finding your way.",
            "Hover over any icon on the map to see a tooltip with its name and type."
        ],
        "Gameplay Tips": [
            "Remember to visit a trainer to spend your experience points and level up your skills.",
            "Banks are shared across your account. Use them to transfer items between your characters.",
            "Different weapons have different swing timers and damage types. Experiment to see what works best against certain monsters!",
            "Quests from NPCs are a great way to earn experience, gold, and unique items."
        ]
    };

    const quickTipsContainer = document.getElementById('quick-tips-container');
    const quickTipsText = document.getElementById('quick-tips-text');
    const tipsModal = document.getElementById('tips-modal');
    const tipsModalCloseBtn = document.getElementById('tips-modal-close-btn');
    const tipsModalBody = document.getElementById('tips-modal-body');

    if (!quickTipsContainer || !tipsModal) {
        console.warn("Quick tips or modal elements not found. Feature will be disabled.");
        return;
    }

    let currentTipIndex = 0;
    let tipInterval;

    // Function to update the displayed tip
    function showNextTip() {
        if (quickTipsText) {
            quickTipsText.textContent = cyclingTips[currentTipIndex];
            currentTipIndex = (currentTipIndex + 1) % cyclingTips.length;
        }
    }

    // Function to populate and show the modal
    function showTipsModal() {
        if (tipsModalBody) {
            tipsModalBody.innerHTML = ''; // Clear previous content

            for (const category in allTips) {
                const categoryTitle = document.createElement('h3');
                categoryTitle.textContent = category;
                tipsModalBody.appendChild(categoryTitle);

                const tipList = document.createElement('ul');
                allTips[category].forEach(tipText => {
                    const listItem = document.createElement('li');
                    listItem.textContent = tipText;
                    tipList.appendChild(listItem);
                });
                tipsModalBody.appendChild(tipList);
            }
        }
        if (tipsModal) {
            tipsModal.style.display = 'flex';
        }
        // Pause cycling while modal is open
        clearInterval(tipInterval);
    }

    // Function to close the modal
    function closeTipsModal() {
        if (tipsModal) {
            tipsModal.style.display = 'none';
        }
        // Resume cycling when modal is closed
        tipInterval = setInterval(showNextTip, 30000);
    }

    // --- Initial Setup ---
    // 1. Set the initial, fixed tip.
    if (quickTipsText) {
        quickTipsText.textContent = "You can click on labels like 'Valinor' to zoom into cities for more information!";
    }

    // 2. Start the 30-second cycle for subsequent tips.
    tipInterval = setInterval(showNextTip, 30000);

    // 3. Add event listeners for the modal.
    quickTipsContainer.addEventListener('click', showTipsModal);
    if (tipsModalCloseBtn) tipsModalCloseBtn.addEventListener('click', closeTipsModal);
    window.addEventListener('click', (event) => (event.target === tipsModal) && closeTipsModal());
});