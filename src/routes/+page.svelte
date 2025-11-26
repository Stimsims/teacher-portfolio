

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

  import { examples as math_posts } from '$lib/+Data/math_posts.js';
  import { examples as ai_certificate_posts } from '$lib/+Data/ai_certificates_posts.js';
  import { examples as product_posts } from '$lib/+Data/product_posts.js';
  import { examples as literacy_posts } from '$lib/+Data/literacy_posts.js';

  import cert_protecting_children from './../assets/images/certificates/protecting_children.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_cyber_security from './../assets/images/certificates/cyber-security.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_ai_for_edu from './../assets/images/certificates/generative_ai_for_education.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_google_ai from './../assets/images/certificates/google_ai_educators.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_teaching_ai_primary from './../assets/images/certificates/teaching_ai_primary.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import cert_solar_language from './../assets/images/certificates/solar_language.png?enhanced&w=300;600;900;1200;2000&format=webp'
import selfie from './../assets/images/selfies/hvb-far.png?enhanced&w=300;600;900;1200;2000&format=webp'


  let selected = /** @type {null | { title: string, summary: string, details: string }} */ (null);

  
</script>


<style>



  main {
    padding: 2rem;
 
  }
  section {
    padding: 100px 0;
    border-bottom: 1px solid var(--pico-muted-border-color);
  }

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
          <div class="responsive-row-equal ">
            <div class="max-width-small" >
              <h2>Welcome to my teacher portfolio</h2>
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
    </section>
    <section id="about" class="page">
        <h2>About Me</h2>
        <p>Games for fluency, self-assessment for growth, celebrating mistakes, connecting with funds of knowledge</p>
        <div class="stack-grid">
          <div class="grid-item">
            <h4>Engagement and Behaviour</h4>
            <p>Calm, predictable routines with co-created norms; expectations are explicitly taught and positively reinforced. Visual schedules, timers, clean transitions, and purposeful seating reduce anxiety and keep momentum, with consistent de-escalation/restorative language.</p>
          </div>
          <div class="grid-item">
            <h4>Pedagogical Style</h4>
            <p>I match method to purpose—explicit instruction for new skills, guided practice for consolidation, and inquiry/problem-solving for transfer—using “I do–We do–You do,” worked examples, retrieval, and spacing. In literacy and numeracy I move modelled→shared→guided→independent and concrete→pictorial→abstract.</p>
          </div>
          <div class="grid-item">
            <h4>Differentiation</h4>
            <p>Low-floor/high-ceiling tasks with multiple product options and fading scaffolds (manipulatives, organisers, sentence frames) ensure access and stretch. Flexible grouping, quick conferring, EAL-sensitive routines, interest-driven contexts, and extension challenges keep everyone engaged.</p>
          </div>
          <div class="grid-item">
            <h4>Assessment</h4>
            <p>Sequences begin with analysis of student assessment and continue with frequent formative checks (exit tickets, observations, whiteboards) that drive real-time adjustments. Clear learning intentions/success criteria and concise feedback shape next steps; summative tasks align to taught goals and are communicated in clear, strengths-first language.</p>
          </div>
      </div>
      <MarkdownList examples={ai_certificate_posts}/>
    </section>
    <section id="professional_development" class="page">
        <h2>Professional Development</h2>
        <p>I've completed a variety of short courses to improve my skills in technology, AI and literacy.</p>
        <ImageCollage images={[cert_teaching_ai_primary, cert_protecting_children, 
        cert_ai_for_edu, cert_cyber_security, cert_google_ai, cert_solar_language]}  />
    </section>
    <section id="engagement">
      <h2>Engagement</h2>
      <div class="stack-grid">
          <div class="grid-item">
            <h4>Personalised Contexts</h4>
            <p>Use AI to create examples that connect the big ideas of math, to topics the student has a rich knowledge and interest in.</p>
          </div>
          <div class="grid-item">
            <h4>Concrete Manipulatives</h4>
            <p>Using the Australian math interview online, the students comprehension of numeracy concepts like numbers, counting on, multiplication arrays and division strategies can be understood. It is critical to give beginner math maticians many opportunities to connect abstract numbers and math language with concrete scenarios and motions (Bragg and Herbert, 2017).</p>
          </div>
          <div class="grid-item">
            <h4>Self Assessment and Growth Mindset</h4>
            <p>Ask students to estimate their strengths and weaknesses in different areas of math, using mathematical vocabulary. Verbalising and justifying why they are confident or unconfident in areas of math is a form of self-assessment. It is a useful technique to reduce anxiety around disappointing or unexpected performance on questions, by shifting emphasis to accuracy of their own understanding of their skills and growth.</p>
          </div>
      </div>
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
        <div>
          <h4>Daily Engagement: The Mystery Motivator Game</h4>
          <p>Each day, use this gamified ritual to refresh attention on behavioral expectations:</p>
          <ol>
            <li>Collaborative behavior list: Create an agreed list of positive behaviors showing respect to peers and teacher</li>
            <li>Random selection: Each morning, a student randomly selects one behavior from the list for fairness. This prevents the teacher from arbitrarily enforcing behaviours for specific students.</li>
            <li>Secret posting: Keep the selected behavior confidential and post it somewhere visible</li>
            <li>End-of-day reveal: Open the mystery behavior and ask a student who modelled it to lead a small game for the class.</li>
          </ol>
        </div>
    </section>
    <section id="lesson_planning">
      <h2>Lesson Planning</h2>
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
    </section>

    <section id="behaviour_management">
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
        <p>Mathematics is a subject where anxiety is common. Connecting the abstract subject to students interests and real life projects can help students stop stressing if the answer is right, and instead support development of 'math sense'. An undertanding of the kind of answer to expect. Bigger? Smaller? Whole Number? Negative?</p>
        <ul>
          <li>Emphasise understanding the big ideas and how they connect, over memorisation of steps. Connect this information to the students interests, where they have rich understandings and opportunities for enthusiasm and insight.</li>
          <li>Design problems that have multiple solution pathways that involve students comparing and evaluating strategies.</li>
          <li>Reduce test anxiety by asking students to estimate their skill at math topics, before tests are taken. Emphasising accurate understanding of their skills at topics draws student attention to the big ideas of the math curriculum.</li>
        </ul>
        <MarkdownList examples={math_posts}/>
    </section>
        <section id="math_differentiation">
      <h2>Math Differentiation</h2>
      Adapting the math curriculum to student interests can be especially helpful in supporting the following:
      <ul>
        <li>Generalisation - showing the big idea in a few examples the student has knowledge and interest in can connect the concepts together and make them more motivational to learn.</li>
        <li>Prioritise meaning - show, don't tell the student how the math concept is useful in examples and contexts that are relevant to their interests.</li>
        <li>Engaging tsks with low floor and high ceilings for easy entry and anxiety free exit from the problem, keeping the student in their zone of proximal development.</li>
      </ul>
      <h4>Adapting the Curriculum for a Child that Loves Pokemon</h4>
      <div class="stack-grid">
          <div class="grid-item">
            <h4>Algebra</h4>
            <p>Pokémon daily streak:</p>
            <p>Each day you keep your catch streak going, you earn a bonus that grows by 5 XP more than the day before. On day 1 you get 5 XP, on day 2 you get 10 XP, on day 3 you get 15 XP, and so on. How can we model the XP you earn each day and the total XP across days?</p>
            <h4>Define variables</h4>
            <ol>
              <li>dn: XP earned on day n (the daily bonus)</li>
              <li>Tn: total XP earned after n days</li>
            </ol>
          </div>
          <div class="grid-item">
            <h4>Plan Your Pokémon Journey</h4>
            <p>Your Goal
            Get from Pallet Town to the Cerulean Gym and check in between 10:30 and 10:50. Build a feasible itinerary using the timetables below. Show your working for time conversions, durations, and layovers.
            Timetables (24-hour times)
            Rail: Pallet Town → Pewter Junction
            T1: Dep 08:12 → Arr 09:02 (50 min)
            T2: Dep 08:28 → Arr 09:20 (52 min)
            T3: Dep 08:45 → Arr 09:40 (55 min)
            Bus: Pewter Junction → Cerulean City
            B1: Dep 09:15 → Arr 09:55 (40 min)
            B2: Dep 09:35 → Arr 10:15 (40 min)
            B3: Dep 10:05 → Arr 10:45 (40 min)
            Walks & Open Hours
            Cerulean Station → Gym: 1.2 km (assume 5 km/h walking speed)
            Poké Mart (Cerulean): 09:45–16:30 (shopping takes 10 min)</p>
          </div>
          <div class="grid-item">
            <h4>Wild Grass Rectangle Run — Probability Example</h4>
            <p>
            Scenario
            A trainer walks across every tile of a rectangular patch of wild grass.
            Each tile independently has a 10% chance of triggering a wild Pokémon encounter when stepped on.
            The patch is 5 × 5 tiles (so you step on 25 tiles, once each).
            Questions
            What is the probability you get at least one encounter while crossing the whole patch?
            What is the expected number of encounters?
            Worked Solution
            Number of tiles: 
            N=5×5=25
            Chance of an encounter on a tile: 
            p=0.10
            Chance of no encounter on one tile: 
            1−p=0.90
            </p>
          </div>
        </div>
      <div>
        <h4>Adapting the Curriculum for a Child that Loves My Little Pony</h4>
          <div class="stack-grid">
            <div class="grid-item">
              <h2>Fractions</h2>
              <p>Rainbow Dash is training on three race courses. Each lap has a different length:   </p>
              <p>Cloudsdale Sprint: 400 m per lap </p>
              <p>Equestria Oval: 600 m per lap </p>
              <p>Wonderbolt Loop: 1 km (1000 m) per lap </p>
              <p>Use: </p>
              <p>Distance flown = (fraction of a lap) × (lap length) </p>
              <p>Laps completed = (total distance) ÷ (lap length) </p>
              <p>A) Cloudsdale Sprint – 400 m laps Rainbow flies 3/4 of a lap. How far is that in metres? </p>
              <p>B) Equestria Oval – 600 m laps. Compare: Which is farther— 2/3 of the 600 m track, or 3/4 of the 400 m track? Show your working and circle the larger distance.</p>
            </div>
            <div class="grid-item">
              <h2>Mail Route Arithmetic Sequence</h2>
              <p>Story: The mailmare delivers to 8 houses on day 1, then adds 2 houses each day on the same route.</p>
              <p>Model: </p>
              <p>hn=8+2(n−1).</p>
              <p>Tasks:</p>
              <p>a) How many houses on day 12?</p>
              <p>b) Find a rule for the total houses delivered over n days, and use it to get the total for 12 days.</p>
          </div>
        </div>
    </section>
    <section id="literacy" class="page">
        <h2>Literacy</h2>
        <p>Here's how I teach literacy...</p>
        <ul>
          <li>Shared reading and writing: paired activities of reading and writing can turn an isolated activity into a creative game. It allows students an important degree of autonomy in which writing task they'd like to do, with their partner performing the other. This evaluation is useful in developing student awareness of the components of reading and comprehension.</li>
          <li>Ordering story events: to support student comprehension and understand of sequence, cause and effect, ordering story events is an excellent activity. Taking a print out of a story apart and re-organising the events back into order is an excellent exercise in understanding character motivations.</li>
          <li>Self-assessment: asking students to assess the quality of their answer against a rubric focuses student attention on the core skills of reading and writing. By articulating and justifying their strengths and weaknesses, students learn how activities contribute to their mastery of skills. </li>
        </ul>
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
