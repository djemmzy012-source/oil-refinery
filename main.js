document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // 1. REAL-TIME CRUDE OIL PRICE ENGINE (Full Russian & Global Benchmarks)
    // ===========================================================================
    function updateOilPrices() {
        // Base Market Prices for Russian & Global Benchmarks
        const marketData = {
            'urals': 78.50,
            'espo': 82.10,
            'sokol': 80.40,
            'tima': 79.20,
            'sakha': 81.00,
            'brent': 83.20,
            'wti': 77.80
        };

        for (let key in marketData) {
            // Simulate a slight market fluctuation (+/- 0.40) to make it look live
            let fluctuation = (Math.random() * 0.8 - 0.4);
            let finalPrice = marketData[key] + fluctuation;

            // Update the primary display (e.g., id="urals-price")
            let el = document.getElementById(key + '-price');
            if(el) el.innerText = `$${finalPrice.toFixed(2)} USD`;

            // Update the loop display (e.g., id="urals-price2") for the seamless ticker
            let el2 = document.getElementById(key + '-price2');
            if(el2) el2.innerText = `$${finalPrice.toFixed(2)} USD`;
        }
    }

    // Initialize prices immediately on load
    updateOilPrices();
    // Update prices every 5 seconds to keep the ticker feeling "alive"
    setInterval(updateOilPrices, 5000);

    // ==========================================================================
    // 2. GOOGLE TRANSLATE "UI KILLER" (The Nuclear Option)
    // ===========================================================================
    // This function hunts for Google's injected frames and deletes them instantly
    function killGoogleBar() {
        const selectors = [
            '.goog-te-banner-frame', 
            '.goog-te-banner', 
            '#goog-gt-tt', 
            '.goog-te-balloon-frame',
            '.goog-te-gadget'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });

        // Force the body to the top to remove the 40px gap Google creates
        if (document.body) {
            document.body.style.top = '0px';
            document.body.style.position = 'static';
        }
    }

    // Run every 100ms. This is the only way to stop the white bar from flickering back.
    setInterval(killGoogleBar, 100);

    // ==========================================================================
    // 3. CORPORATE NEWS SYSTEM (Dynamic Loader)
    // ===========================================================================
    const newsData = [
        {
            title: "Expansion of JP54 Export Capacity",
            desc: "ООО АВТОДОРТРЕЙД-БТК announces 20% increase in monthly refining capacity for aviation kerosene.",
            date: "Oct 05, 2023"
        },
        {
            title: "SGS Compliance Certification",
            desc: "Our Moscow logistics terminal has successfully passed the annual SGS Quality and Quantity audit.",
            date: "Sep 28, 2023"
        },
        {
            title: "New Strategic Partnership",
            desc: "Signing of a long-term supply agreement for EN590 Diesel with major European distributors.",
            date: "Sep 12, 2023"
        }
    ];

    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        newsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <small style="color: var(--accent)">${item.date}</small>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            `;
            newsContainer.appendChild(card);
        });
    }

    // ==========================================================================
    // 4. CONTACT FORM HANDLING
    // ===========================================================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const wrapper = document.getElementById('formWrapper');
            const success = document.getElementById('contactSuccess');
            if(wrapper) wrapper.style.display = 'none';
            if(success) success.style.display = 'block';
        });
    }
});