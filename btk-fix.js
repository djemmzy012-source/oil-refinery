// BTK-FIX.JS - ONE FILE TO FIX EVERYTHING
(function() {
    // 1. FIX THE WIDTH (Stop the screen from being too wide)
    const style = document.createElement('style');
    style.innerHTML = `
        .table-panel, .pipeline-grid, .hub-grid, .data-strip, .metrics-panel, .dashboard-grid {
            width: 100% !important;
            overflow-x: auto !important;
            display: block !important;
            -webkit-overflow-scrolling: touch;
        }
        table { min-width: 600px !important; }
        .mobile-drawer { opacity: 0; pointer-events: none; transition: 0.3s; }
        .mobile-drawer.open { opacity: 1; pointer-events: auto; }
    `;
    document.head.appendChild(style);

    // 2. FIX THE MENU (Force all links to show)
    window.addEventListener('load', () => {
        const drawerPanel = document.querySelector('.drawer-panel');
        if (drawerPanel) {
            drawerPanel.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:15px;">
                    <span style="font-weight:800; font-size:11px; letter-spacing:2px; color:#c8a15a;">NAVIGATION</span>
                    <button onclick="closeDrawer()" style="background:none; border:none; color:#fff; font-size:20px; cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
                <div style="text-align:left;">
                    <p style="color:#c8a15a; font-size:10px; text-transform:uppercase; margin-top:20px;">Governance</p>
                    <a href="about.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">About BTK Group</a>
                    <a href="board.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">Board of Directors</a>
                    <a href="risk.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">Risk Management</a>
                    
                    <p style="color:#c8a15a; font-size:10px; text-transform:uppercase; margin-top:20px;">Industrial Business</p>
                    <a href="geology.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">Exploration & Geology</a>
                    <a href="reserves.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">Hydrocarbon Reserves</a>
                    <a href="refining.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">Refining Complex</a>
                    <a href="tsa.html" style="display:block; padding:8px 0; color:#94a3b8; text-decoration:none;">Logistics & TSA</a>
                </div>
                <a href="contact.html" style="display:block; text-align:center; margin-top:30px; background:#c8a15a; color:#000; padding:12px; border-radius:5px; text-decoration:none; font-weight:800;">TRADE PORTAL</a>
            `;
        }
    });
})();

// Helper functions for the menu button
function openDrawer() { document.getElementById('mobileDrawer').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeDrawer() { document.getElementById('mobileDrawer').classList.remove('open'); document.body.style.overflow = ''; }
