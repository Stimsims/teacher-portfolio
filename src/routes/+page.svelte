

<script>
  /** @type {{ examples: { title: string, summary: string, details: string }[] }} */
  export let data;
  import TeachingExampleCard from '$lib/Card/Card.svelte';
  import Modal from '$lib/Modal/Modal.svelte';
  import DataList from '$lib/DataList/DataList.svelte'
  import DocumentationView from '$lib/DocumentationView/DocumentationView.svelte'
  import ImageCollage from '$lib/ImageCollage/ImageCollage.svelte';
  import MarkdownList from '$lib/DataList/MarkdownList.svelte';
  import PieChart from '$lib/Charts/Pie.svelte';
  import LineChart from '$lib/Charts/Line.svelte';

   import { examples } from '$lib/+Data/test-md-paths.js';
  import { examples as math_posts } from '$lib/+Data/math_posts.js';

  //import BarChart from '$lib/Charts/Bar.svelte'
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
  nav.sidebar {
    width: 180px;
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 1rem;
    background: var(--pico-muted-border-color);
  }
  nav.sidebar ul {
    display: block;         /* Override Pico's display: flex */
    padding: 0;
    margin: 0;
    list-style: none;
  }
  nav.sidebar li {
    margin-bottom: 1rem;
    display:block;
  }
  nav.sidebar a{
    display: block;
    color: inherit;
    text-decoration: none;
  }
  nav.sidebar a.active {
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

  .page {
    min-height: 100vh; /* Make each section at least one full viewport height */
    display: flex;     /* Enable flexbox for centering */
    align-items: center; /* Vertical centering */
    justify-content: center; /* Optional: horizontal centering */
    flex-direction: column;  /* Keep text and elements stacked */
    padding: 2rem;           /* Still allow for some breathing space */
    border-bottom: 5px solid var(pico-background-pink-600);
    box-sizing: border-box;
  }

</style>

<div class="layout">
  <nav class="sidebar">
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
    <section id="home" class="page">
        <h2>Home</h2>
        <p>Welcome to my teacher portfolio!</p>
        <p>Current status: Pre-service teacher, 2/4 terms complete</p>
        <p>CV: math graduate certificate in calculus and linear algebra, safe ministry officer and administration at Church.</p>
    </section>
    <section id="about" class="page">
        <h2>About Me</h2>
        <p>Games for fluency, self-assessment for growth, celebrating mistakes, connecting with funds of knowledge</p>
    </section>
    <section id="professional_development" class="page">
        <h2>Here are some course badges I've completed</h2>
        <p>Microsoft licenses, AI licenses</p>
    </section>
    <section id="math" class="page">
        <h2>Math</h2><p>Here's how I teach mathematics...</p>
        <MarkdownList examples={math_posts}/>
        <!-- <DataList examples={math_posts} on:select={(e) => selected = e.detail} /> -->
        {#if selected}
            <Modal onClose={() => (selected = null)}>
                <DocumentationView example={selected} />
            </Modal>
        {/if}
    </section>
    <section id="technology" class="page">
        <h2>Technology</h2><p>With a background in programming, web development and AI product development...</p>
    </section>
    <section id="footer" class="page"><h2>Contact</h2><p>Get in touch: email@example.com</p></section>
  </main>
</div>
