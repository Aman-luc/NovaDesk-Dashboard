/**
 * NOVA DESK | Interaction Logic
 * Written in Vanilla JS - No Dependencies
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Loader & Skeleton Removal
    // Simulating app load for premium feel
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
        
        // Trigger Counter Animation after load
        startCounters();
    }, 800);

    // 2. Sidebar Toggle (Mobile)
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');

    if(openBtn && closeBtn && sidebar) {
        openBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
        
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // 3. Dropdown Logic (Notifications & Profile)
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('button');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close others
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            
            // Toggle current
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns on clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Prevent closing when clicking inside dropdown menu
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // 4. Animated Number Counters
    function startCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Lower is faster

        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                // Remove commas if any exist, convert string to number
                const count = +counter.innerText.replace(/,/g, '');
                
                // Calculate increment increment step
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc).toLocaleString('en-US');
                    requestAnimationFrame(animate);
                } else {
                    counter.innerText = target.toLocaleString('en-US');
                }
            };
            animate();
        });
    }

    // 5. Theme Toggle UI interaction (Visual only as requested)
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Visual rotation effect to register the click
            themeBtn.style.transform = "rotate(180deg)";
            themeBtn.style.transition = "transform 0.3s ease";
            
            // Reset rotation
            setTimeout(() => {
                themeBtn.style.transform = "none";
            }, 300);
            
            // Note: Dark mode logic omitted as per constraint "Light mode only"
        });
    }
});