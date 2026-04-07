<script>
  // That tells SvelteKit: “Treat all my pages as static and prerender them.”
  
  export const prerender = true;
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import '../app.css';
  import '../text.css';
  import '../grid.css';``
  import '../lib/animations.css';  /* ✅ Correct shared animation path */

  let isSidebarOpen = false;
  let currentSection = 'home';
  let currentPath = '/'; // local variable to hold the current path

  // ✅ Subscribe to the `page` store (Svelte 5 way)
  page.subscribe(($page) => {
    currentPath = $page.url.pathname;
  });
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'work_experience', label: 'Work Experience' },
    { id: 'professional_development', label: 'Professional Development' },
    { id: 'classroom_management', label: 'Classroom Management' },
    { id: 'math', label: 'Math' },
    { id: 'literacy', label: 'Literacy' },
    { id: 'contact', label: 'Contact' }
  ];

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  const handleScroll = () => {
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el && el.getBoundingClientRect().top <= 100) {
        currentSection = section.id;
      }
    }
  };

  // ✅ Scroll if on root, else navigate
  function scrollToSection(id) {
    if (currentPath === '/') {
      // Already on homepage → smooth scroll
      const sectionEl = document.getElementById(id);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        isSidebarOpen = false;
      }
    } else {
      // In a subdirectory → navigate to root with hash
      goto(`/#${id}`, { replaceState: false });
    }
  }

</script>

<svelte:window on:scroll={handleScroll} />
 
<div class="layout" data-theme="light" >
  <!-- Sidebar -->
  <aside class:is-open={isSidebarOpen}>
    <nav class="sidebar">
      <ul>
        {#each sections as section}
          <li>
            <a
              href={`#${section.id}`}
              class:active={currentSection === section.id}
              on:click|preventDefault={() => scrollToSection(section.id)}
            >
              {section.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>

  <!-- Main content -->
  <main >
    <!-- Mobile toggle with reusable fade-in animation -->
    <button class="sidebar-toggle fade-in" on:click={toggleSidebar}>
      {isSidebarOpen ? "X" : "☰"}
    </button>

    <slot />
  </main>
</div>

<style>

  /* Allow children to shrink below their content width (fixes snapping at ~575px) */
  .layout,
  main,
  aside {
    min-width: 0;
  }
  .layout {
    min-height: 100vh;
  }

  main {
    margin-left:200px;
    position: absolute;
    top: 0px;
    left: 0px;
    right:0px;
    flex: 1;
    padding: 2rem;
  }


  aside {
    background: var(--pico-secondary-background);
    padding-left: 1rem;
    transition: transform 0.3s ease;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
  }

  nav.sidebar a.active {
    font-weight: bold;
    text-decoration: underline;
  }
  nav.sidebar ul {
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left; /* ✅ Left-align links */
  }

  nav.sidebar li {
    margin-bottom: 1rem;
  }

  nav.sidebar a {
    display: block;
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  /* Sidebar toggle button (hidden by default) */
  .sidebar-toggle {
    display: none;
    margin: 10px;
    background: var(--pico-primary-button-background);
    color: var(--pico-primary-background-light);
  }
  @media (max-width: 768px) {

    /* more compact padding on very small screens */
    main {
      padding: 1rem;
      margin:0px 0px 0px 0px!important;
    }

    .layout {
      grid-template-columns: 1fr; /* only main content visible */
    }
  
    aside {
      position: fixed;
      top: 0;
      left: 0;
      width: 220px;
      height: 100%;
      transform: translateX(-100%); /* hidden by default */
      z-index: 10;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    }


    aside.is-open {
      transform: translateX(0);
    }

    aside nav a {
      display: block;
      padding: 0.5rem 0;
      text-decoration: none;
    }
    aside nav a:hover {
      text-decoration: underline;
    }

        /* Show toggle button */
    .sidebar-toggle {
      display: inline-block;
    }

    .sidebar-toggle {
      position: fixed;
      top: 10px;
      left: 10px;
      z-index: 1100;
    }
  }
</style>
