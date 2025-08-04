<script>
  import '../app.css';
  import '../lib/animations.css';  /* ✅ Correct shared animation path */
  import "@picocss/pico/css/pico.min.css";

  let isSidebarOpen = false;
  let currentSection = 'home';

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'math', label: 'Math' },
    { id: 'literacy', label: 'Literacy' },
    { id: 'technology', label: 'Technology' },
    { id: 'footer', label: 'Footer' }
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

  function scrollToSection(id) {
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      isSidebarOpen = false;
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="layout">
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
  <main>
    <!-- Mobile toggle with reusable fade-in animation -->
    <button class="sidebar-toggle fade-in" on:click={toggleSidebar}>
      {isSidebarOpen ? "✖" : "☰"}
    </button>

    <slot />
  </main>
</div>

<style>
  .layout {
    display: flex;
  }

  aside {
    width: 200px;
    background: var(--pico-muted-border-color);
    transition: transform 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

  nav.sidebar a.active {
    font-weight: bold;
    text-decoration: underline;
  }

  main {
    flex: 1;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    aside {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      transform: translateX(-100%);
      z-index: 1000;
    }

    aside.is-open {
      transform: translateX(0);
    }

    .sidebar-toggle {
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1100;
    }
  }
</style>
