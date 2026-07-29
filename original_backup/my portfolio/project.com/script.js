// Blog Posts
const blogPosts = [
    { title: "How to Build a Responsive Website", snippet: "Learn the fundamentals of responsive web design.", link: "#" },
    { title: "UI/UX Trends for 2025", snippet: "Discover the latest trends in UI/UX design for modern applications.", link: "#" },
    { title: "JavaScript Best Practices", snippet: "Tips and tricks for writing clean, maintainable JavaScript.", link: "#" }
];

const blogContainer = document.getElementById("blog-posts");

blogPosts.forEach(post => {
    let div = document.createElement("div");
    div.classList.add("blog-post");
    div.innerHTML = `<h3>${post.title}</h3><p>${post.snippet}</p><a href="${post.link}">Read More</a>`;
    blogContainer.appendChild(div);
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll(".section");
const blogItems = document.querySelectorAll(".blog-post");

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });

    blogItems.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        if (postTop < window.innerHeight - 100) {
            post.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
