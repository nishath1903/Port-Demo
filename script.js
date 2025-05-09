    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".section").forEach(section => {
      observer.observe(section);
    });
  
