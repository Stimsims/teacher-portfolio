

<script>
  /** @type {{ examples: { title: string, summary: string, details: string }[] }} */
  export let data;
  export let {work_posts, engagement_posts, 
    math_posts, math_engage_posts, math_access_posts, math_assessment_posts, math_extension_posts, 
    ai_certificate_posts, literacy_posts, tag_count} = data;
  import './../app.css';
  import TeachingExampleCard from '$lib/Card/Card.svelte';
  import Modal from '$lib/Modal/Modal.svelte';
  import DataList from '$lib/DataList/DataList.svelte'
  import DocumentationView from '$lib/DocumentationView/DocumentationView.svelte'
  import ImageCollage from '$lib/ImageCollage/ImageCollage.svelte';
  import MarkdownList from '$lib/DataList/MarkdownList.svelte';
  import PieChart from '$lib/Charts/Pie.svelte';
  import LineChart from '$lib/Charts/Line.svelte';
  import BarChart from '$lib/Charts/Bar.svelte';
  import Header from '$lib/Header/Header.svelte';
  import TagList from '$lib/TagList/TagList.svelte';
  import ExpandableList from '$lib/ExpandableList/list.svelte';


  import cert_protecting_children from '$lib/assets/images/certificates/protecting_children.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_cyber_security from '$lib/assets/images/certificates/cyber-security.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_google_ai from '$lib/assets/images/certificates/google_ai_educators.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_teaching_ai_primary from '$lib/assets/images/certificates/teaching_ai_primary.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_solar_language from '$lib/assets/images/certificates/solar_language.png?enhanced&w=300;600;900;1200;2000&format=webp'
  import selfie from '$lib/assets/images/selfies/hvb-far.png?enhanced&w=300;600;900;1200;2000&format=webp'
  import img_map from '$lib/assets/images/tafeAMEP/morwell_map.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import img_tafe from '$lib/assets/images/tafeAMEP/tafe_building.webp?enhanced&w=300;600;900;1200;2000&format=webp';
  import img_activity_house from '$lib/assets/images/tafeAMEP/activity_house.jpeg?enhanced&w=300;600;900;1200;2000&format=webp';
  import img_activity_idioms from '$lib/assets/images/tafeAMEP/activity_idioms.jpeg?enhanced&w=300;600;900;1200;2000&format=webp';

  let selected = /** @type {null | { title: string, summary: string, details: string }} */ (null);

  function handleChartClick(event) {
    const { series, x, y } = event;
    console.log('Parent received click:', { series, x, y });
    // Handle your logic here
    window.location.href = `/tag/${x}`;
  }
</script>


<style>

  .home-hero {
    width: 100%;
    max-width: 720px;
    margin: 1.25rem auto;
    display: block;
    border-radius: 0.5rem;
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
    object-fit: cover;
  }

</style>

<div class="layout">

  <main>
    <section id="home" class="page">
          <TagList tags={["math", "literacy", "engagement", "behaviour_management", "classroom_management", "lesson_planning", "technology"]} />
          <div class="responsive-row-equal ">
            <div class="max-width-small" >
              <h2>Welcome to my teacher portfolio (Work in Progress)</h2>
              <p>I am currently completing my primary teaching degree at Deakin University</p>
              <h4>Degree Progress:</h4>
              <ul>
                <li>Pre-service teacher with permission to teach</li> 
                <li>3/4 terms complete</li>
              </ul>
            </div>
            <div class="max-width-small">
              <enhanced:img src={selfie} alt="A picture of student teacher hvb" class="home-hero" />
            </div>
          </div>
          <div style="width:100%">
            <BarChart title="my bar chart" series={[{name:'tag counts', data: tag_count}]} onClick={handleChartClick} />
          </div>
    </section>
    <section id="about" class="page">
        <h2>About Me</h2>
        <p>Games for fluency, self-assessment for growth, celebrating mistakes, connecting with funds of knowledge</p>
    </section>
    <section id="work_experience" class="page">
        <h2>Work and Volunteering Experience</h2>
        <MarkdownList examples={work_posts}/>
    </section>
    <section id="professional_development" class="page">
        <h2>Professional Development</h2>
        <h4>Generative AI Privacy and Ethics</h4>
        <ImageCollage images={[cert_teaching_ai_primary, cert_cyber_security, cert_google_ai]}  />
        <div class="stack-grid">
          <div class="grid-item">
            <h4>Literacy Certificates</h4>
            <ImageCollage images={[cert_solar_language]}  />
          </div>
          <div class="grid-item">
            <h4>Health and Wellbeing</h4>
            <ImageCollage images={[cert_protecting_children]}  />
          </div>
        </div>
        <MarkdownList examples={ai_certificate_posts}/>
    </section>
    <section id="classroom_management">
        <h2>Classroom Management</h2>
        <p>Research shows that effective classroom management is fundamental to student learning and teacher success. Students in poorly managed classrooms receive less academic instruction and higher levels of anxiety. Effective classroom management prevents problems by clearly defining behavioral expectations and reinforcing good behaviours.</p>
        <div class="stack-grid">
          <div class="grid-item">
            <h4>Establishing Classroom Norms</h4>
            <ul>
              <li>Co-created norms: Develop agreed conventions collaboratively with students</li>
              <li>Positive framing: Focus on what students should do, not what they shouldn't</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Environmental Predictability</h4>
            <ul>
              <li>Schedules and timers: Visual indicators help students understand daily rhythms</li>
              <li>Assigned Seating: Avoid social status struggles on mat by assigning student seating</li>
            </ul>
          </div>
        </div>
      <h2>Engagement</h2>
      <MarkdownList examples={engagement_posts}/>
      <h2>Lesson Planning</h2>
      <div class="grid-item">
          <h4>Lessons</h4>
          <p>Lessons are built around a chosen pedagogical approach that suits the learning criteria — explicit instruction, inquiry, problem-solving, or a blend. Social constructivist principles underpin activities, with students using domain-specific vocabulary to interpret and theorise about tests and tasks completed in class. In mathematics, lesson design follows Piagetian stages of development, ensuring that students master concrete representations before progressing to abstract concepts.</p>
          <h4>Sequences</h4>
          <p>The sequence of learning begins with analysis of student assessment data to identify needs and prioritise concepts. Lessons within the sequence must generate further assessment evidence that students can use to measure their distance to success and predict their own achievement. This ongoing self-assessment is a key factor in improving outcomes, as identified in Hattie’s review. Teachers use the same data to refine the proportion of time allocated to different concepts in the sequence, ensuring targeted support where it is most needed.</p>
          <h4>Favourites</h4>
          <ul>
            <li>Albert Bandura. (1971). Social Learning Theory. General Learning Press. <a href="https://www.asecib.ase.ro/mps/Bandura_SocialLearningTheory.pdf">https://www.asecib.ase.ro/mps/Bandura_SocialLearningTheory.pdf</a></li>
            <li>Rudolf Dreikurs, Pearl Cassel, & Eva Dreikurs Ferguson. (2004). Discipline without tears. <a href="https://archive.org/details/isbn_0723812835089">https://archive.org/details/isbn_0723812835089</a></li>
            <li>Hattie, J., author. (2009). Visible learning: A synthesis of over 800 meta-analyses relating to achievement / John A.C. Hattie. <a href="https://research.ebsco.com/linkprocessor/plink?id=0bc5a0eb-efc3-3860-bbde-f7350413cc2c">https://research.ebsco.com/linkprocessor/plink?id=0bc5a0eb-efc3-3860-bbde-f7350413cc2c</a></li>
          </ul>
        </div>
      <h2>Behaviour Management</h2>
      <div class="stack-grid">
          <div class="grid-item">
            <h4>Misguided Behaviour</h4>
            <p>Following Dreikurs’ observation that misbehaviour often stems from a desire for attention or power, I redirect these motivations by rewarding positive behaviour with greater influence over class activities, leadership opportunities, and time in front of the class.</p>
          </div>
          <div class="grid-item">
            <h4>Social Learning</h4>
            <p>In line with Bandura’s social learning theory, I ensure that student attention is drawn to these positive role models so that peers can observe, imitate, and adopt constructive behaviours.</p>
          </div>
          <div class="grid-item">
            <h4>Constructive Dialogues</h4>
            <p>Using Vygotsky’s social constructivist principles, I then create opportunities for dialogue and the development of metacognitive language, enabling students to articulate, justify, and take ownership of their behavioural choices.</p>
          </div>
      </div>
    </section>

    <section id="math" class="page">
        <h2>Math</h2>
    <ExpandableList items={[
      { 
        title: "Engagement - Answer 'Why?' with Place-Based Modelling", 
        content: 'I like to engage students in a lesson by first focusing on why a math concept is useful. My math lessons often start with a place-based context question using the math concept of the lesson. Students are invited to guess or deduce an answer, and write it on the board. This represents the math concept in a real-life context.',
        posts: math_engage_posts
      },
      { 
        title: 'Access - Universal Design and Quick Reviews', 
        content: "Beginner mathematicians access to the lesson is facilitated by five minute quick reviews at the start of the lesson. The teacher's demonstration of using basic math operations to model the problem, and then refine the model using the math concept starts with the basics for beginners, and goes upward from there. Student's can use the model to solve the lesson that they are ready for.",
        posts: math_access_posts
      },
      { 
        title: 'Data - Peer-Assessment through Consensus', 
        content: "Math is a vehicle for decision making. In real life, computations have correct answers, but the 'best' course of action does not. Student's understanding of the concepts is illuminated by their ability to understand which answer best aligns with their personal values in this context, and calculate it. Outliers could be a misunderstanding of math, or a difference of opinion. Mathematical justification determines which.",
        posts: math_assessment_posts
      },
      { 
        title: 'Extension - Representing in Contexts of Student Interest', 
        content: "Student's who have mastered the concept are invited to find examples of the math concept in contexts of their personal interest. Well chosen contexts are shared with the class to support abstraction. Additionally, there are more complex extension problems available for student's who wish to try them. ",
        posts: math_extension_posts
      }
    ]} />
    </section>
    <section id="literacy" class="page">
        <h2>Literacy</h2>
        <p>Pedagogical Approach - explicit teaching and games - to get reading practice up</p>
        <p>Lesson Planning - oral first in humanities lessons, culturally responsive stories, authentic reading and writing tasks</p>
        <p>Assessment: self-assessment and randomised assessment. Whole class chooses what to assess in their writing, and scores themselves. Random checks to ensure they're getting it right.</p>
        <MarkdownList examples={literacy_posts}/>
    </section>
    <!-- <section id="technology" class="page">
        <h2>Technology</h2><p>With a background in programming, web development and AI product development...</p>
    </section> -->
    <section id="contact" class="page">
      <h2>Contact</h2>
      <p>Get in touch: hvbanning at gmail dot com</p>
    </section>
      {#if selected}
          <Modal onClose={() => (selected = null)}>
              <DocumentationView example={selected} />
          </Modal>
      {/if}
  </main>
</div>
