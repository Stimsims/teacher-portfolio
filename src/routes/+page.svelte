

<script>
  /** @type {{ examples: { title: string, summary: string, details: string }[] }} */
  export let data;
  import TeachingExampleCard from '$lib/Card/Card.svelte';
  import Modal from '$lib/Modal/Modal.svelte';
  import DataList from '$lib/DataList/DataList.svelte'
  import DocumentationView from '$lib/DocumentationView/DocumentationView.svelte'
  import ImageCollage from '$lib/ImageCollage/ImageCollage.svelte';
  import MarkdownList from '$lib/DataList/MarkdownList.svelte';


  let selected = /** @type {null | { title: string, summary: string, details: string }} */ (null);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'math', label: 'Math' },
    { id: 'footer', label: 'Footer' }
  ];

  let currentSection = 'home';

  const handleScroll = () => {
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el && el.getBoundingClientRect().top <= 100) {
        currentSection = section.id;
      }
    }
  };
  
</script>

<svelte:window on:scroll={handleScroll} />

<style>
  .layout {
    display: flex;
  }
  nav {
    width: 180px;
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 1rem;
    background: var(--pico-muted-border-color);
  }
  nav ul {
    list-style: none;
    padding: 0;
  }
  nav li {
    margin-bottom: 1rem;
  }
  nav a.active {
    font-weight: bold;
    text-decoration: underline;
  }
  main {
    padding: 2rem;
    flex: 1;
  }
  section {
    padding: 100px 0;
    border-bottom: 1px solid var(--pico-muted-border-color);
  }
</style>

<div class="layout">
  <nav>
    <ul>
      {#each sections as section}
        <li>
          <a
            href={`#${section.id}`}
            class:active={currentSection === section.id}
          >
            {section.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <main>
    <section id="home">
        <h2>Home</h2>
        <p>Welcome to my teacher portfolio!</p>
        <MarkdownList />
    </section>
    <section id="about">
        <h2>About Me</h2>
        <p>I am a passionate educator...</p>
        <ImageCollage />
    </section>
    <section id="math">
        <h2>Math</h2><p>Here's how I teach mathematics...</p>
        <DataList examples={data.examples} on:select={(e) => selected = e.detail} />
        {#if selected}
            <Modal onClose={() => (selected = null)}>
                <DocumentationView example={selected} />
            </Modal>
        {/if}
    </section>
    <section id="footer"><h2>Contact</h2><p>Get in touch: email@example.com</p></section>
  </main>
</div>
