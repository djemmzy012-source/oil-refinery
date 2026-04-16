// --- BTK GLOBAL NAVIGATION COMPONENT ---
document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="navbar">
        <a href="index.html" class="logo-container">
            <div class="logo-emblem">
                <i class="fas fa-shield-halved"></i>
            </div>
            <div class="logo-text">
                <h1>АВТОДОРТРЕЙД</h1>
                <span>БТК / GLOBAL ENERGY</span>
            </div>
        </a>
        <div class="nav-wrap">
            <ul class="nav-links">
                <li class="nav-item">
                    <button class="nav-toggle">Governance</button>
                    <div class="mega-menu">
                        <div class="mega-col">
                            <h4>Board & Control</h4>
                            <a href="board.html">Board of Directors</a>
                            <a href="risk.html">Risk Management</a>
                            <a href="audit.html">Internal Audit</a>
                        </div>
                        <div class="mega-col">
                            <h4>Investors</h4>
                            <a href="reports.html">Financial Reports</a>
                            <a href="shareholders.html">Shareholder Center</a>
                            <a href="docs.html">Statutory Docs</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <button class="nav-toggle" style="color:#c8a15a;">Industrial Business</button>
                    <div class="mega-menu">
                        <div class="mega-col">
                            <h4>Upstream</h4>
                            <a href="geology.html">Exploration & Geology</a>
                            <a href="reserves.html">Hydrocarbon Reserves</a>
                            <a href="gas.html">Natural Gas Ops</a>
                        </div>
                        <div class="mega-col">
                            <h4>Downstream</h4>
                            <a href="refining.html">Refining Complex</a>
                            <a href="products.html">Product Catalog</a>
                            <a href="tsa.html">Storage Logistics</a>
                        </div>
                    </div>
                </li>
                <li><a href="products.html" class="nav-link">Production</a></li>
                <li><a href="tsa.html" class="nav-link">Logistics</a></li>
                <li><a href="strategy.html" class="nav-link">Strategy</a></li>
            </ul>
            <a href="contact.html" class="nav-cta">Trade Portal</a>
            <button class="menu-btn" id="drawerOpen"><i class="fas fa-bars"></i></button>
        </div>
    </nav>
    `;

    // Inject the navigation into any element with the id "global-nav"
    const navPlaceholder = document.getElementById("global-nav");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
});