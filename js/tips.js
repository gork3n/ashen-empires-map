document.addEventListener('DOMContentLoaded', function() {
    // Array of tips to cycle through, excluding the initial one.
    const cyclingTips = [
        "Use the sidebar toggles to show or hide different categories of markers and labels, helping you declutter the map.",
        "The coordinates in the bottom-left corner match the in-game X/Y positions, perfect for finding your way.",
        "Hover over any icon on the map to see a tooltip with its name and type.",
        "Banks are shared across your characters on the same server. Use them to transfer items between your characters. VIP subscription is required to use shared banks.",
        "Learn to use the Hunter's Handbook; it will become your best friend.",
        "Once you've killed a monster and explored its spawn area, the handbook will show you where that monster spawns.",
        "Press the 'H' key to open the Hunter's Handbook and the 'L' key to open your Quest Log.",
        "Quests from NPCs are a great way to earn experience, gold, and unique items."
    ];

    // All tips for the modal, categorized.
    const allTips = {
        "Map Tips": [
            "Click on location labels like 'Valinor' or 'Lotor's Summer Palace' to open an information panel about that area.",
            "Use the filter menu toggles to show or hide different categories of markers and labels, helping you declutter the map.",
            "The coordinates in the bottom-left corner match the in-game X/Y positions, perfect for finding your way.",
            "Hover over any icon on the map to see a tooltip with its name and type."
        ],
        "Gameplay Tips": [
            "Learn to use the Hunter's Handbook; it will become your best friend. Once you've killed a monster and explored its spawn area, the handbook will show you where that monster spawns.",
            "Press the 'H' key to open the Hunter's Handbook and the 'L' key to open your Quest Log.",
            "After leaving Valinor, get a town bonus orb from a Town Steward. Whisperdale offers Dexterity, Krog offers Strength, and Silvest offers Intelligence. This allows you to start Patron quests, which give great XP and gear until level 43.",
            "Some quests require a specific reputation (the color of your name). Consider locking your reputation early to avoid becoming too 'good', which can block you from entering evil towns for certain quests, like the Parian Warlord questline at level 50.",
            "When you die, your gear gets damaged, reducing its effectiveness. Remember to repair your equipment using spells, potions, or an NPC to maintain its full power.",
            "You can get a cheap sail by completing a quest from Captain Rictor at the Valmond docks.",
            "If you need storage crates, an NPC named Rella at the woodworking shop in east Parian sells them for 50,000 gold."
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
        quickTipsText.textContent = "Click on labels like 'Valinor' to get more information about the city!";
    }

    // 2. Start the 30-second cycle for subsequent tips.
    tipInterval = setInterval(showNextTip, 30000);

    // 3. Add event listeners for the modal.
    quickTipsContainer.addEventListener('click', showTipsModal);
    if (tipsModalCloseBtn) tipsModalCloseBtn.addEventListener('click', closeTipsModal);
    window.addEventListener('click', (event) => (event.target === tipsModal) && closeTipsModal());
});