
        // Blog posts data
        const blogPosts = [
            {
                id: 1,
                title: "Getting Started with HTML5",
                author: "John Doe",
                date: "May 10, 2025",
                category: "Web Development",
                excerpt: "Learn the basics of HTML5 and how to structure your web pages effectively.",
                image: "blog1.avif"
            },
            {
                id: 2,
                title: "CSS Flexbox Layout",
                author: "Jane Smith",
                date: "May 8, 2025",
                category: "CSS",
                excerpt: "Master the flexbox layout system to create responsive designs with ease.",
                image: "blog2.avif"
            },
            {
                id: 3,
                title: "JavaScript for Beginners",
                author: "John Doe",
                date: "May 5, 2025",
                category: "JavaScript",
                excerpt: "A comprehensive guide to JavaScript basics for beginners.",
                image: "blog3.avif"
            },
            {
                id: 4,
                title: "Responsive Web Design",
                author: "Sarah Johnson",
                date: "May 3, 2025",
                category: "Web Design",
                excerpt: "Learn how to create websites that look great on all devices.",
                image: "blog4.avif"
            },
            {
                id: 5,
                title: "Introduction to CSS Grid",
                author: "Mike Wilson",
                date: "May 1, 2025",
                category: "CSS",
                excerpt: "Learn how to use CSS Grid to create complex layouts with ease.",
                image: "blog5.avif"
            },
            {
                id: 6,
                title: "JavaScript ES6 Features",
                author: "Jane Smith",
                date: "April 28, 2025",
                category: "JavaScript",
                excerpt: "Discover the powerful features introduced in ECMAScript 6.",
                image: "blog6.avif"
            }
        ];
        
        // DOM Elements
        const postsContainer = document.querySelectorAll('.posts-container');
        const menuBtn = document.querySelector('.menu-btn');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        const newsletterForm = document.getElementById('newsletter-form');
        const subscriptionModal = document.getElementById('subscription-modal');
        const closeModal = document.querySelector('.close-modal');
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        const toast = document.getElementById('toast');
        
        // Render blog posts
        function renderPosts() {
            postsContainer.forEach(container => {
                container.innerHTML = '';
                
                blogPosts.forEach(post => {
                    const postEl = document.createElement('article');
                    postEl.classList.add('post');
                    
                    postEl.innerHTML = `
                        <div class="post-image">
                            <img src="${post.image}" alt="${post.title}">
                        </div>
                        <div class="post-content">
                            <h2>${post.title}</h2>
                            <div class="post-meta">
                                <span>${post.author}</span>
                                <span>${post.date}</span>
                                <span>${post.category}</span>
                            </div>
                            <p class="post-excerpt">${post.excerpt}</p>
                            <a href="#" class="btn read-more-btn" data-id="${post.id}">Read More</a>
                        </div>
                    `;
                    
                    container.appendChild(postEl);
                });
            });
        }
        
        // Toggle mobile menu
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Hide all sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show the selected section
                const sectionId = link.getAttribute('data-section');
                document.getElementById(sectionId).style.display = 'block';
                
                // Close mobile menu
                nav.classList.remove('active');
            });
        });
        
        // Dark mode toggle
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
        
        // Newsletter subscription
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show subscription modal
            subscriptionModal.style.display = 'flex';
            
            // Clear the form
            newsletterForm.reset();
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            subscriptionModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === subscriptionModal) {
                subscriptionModal.style.display = 'none';
            }
        });
        
        // Contact form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show success message
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = 'green';
            
            // Show toast notification
            toast.textContent = 'Thank you for your message!';
            toast.classList.add('show');
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
            
            // Clear the form
            contactForm.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
        
        // Read more button functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-btn')) {
                e.preventDefault();
                
                // In a real application, this would navigate to the full blog post
                // For this demo, we'll just show an alert
                alert('This would navigate to the full blog post in a real application.');
            }
        });
        
        // Initialize the application
        function init() {
            renderPosts();
        }
        
        // Run initialization when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', init);
 