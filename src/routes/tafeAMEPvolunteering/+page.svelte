

<script>
    // That tells SvelteKit: “Treat all my pages as static and prerender them.”
  export const prerender = true;
  import './../../app.css';
  import img_map from './../../assets/images/tafeAMEP/morwell_map.png?enhanced&w=300;600;900;1200;2000&format=webp';
  import img_tafe from './../../assets/images/tafeAMEP/tafe_building.webp?enhanced&w=300;600;900;1200;2000&format=webp';
  import img_activity_house from './../../assets/images/tafeAMEP/activity_house.jpeg?enhanced&w=300;600;900;1200;2000&format=webp';
  import img_activity_idioms from './../../assets/images/tafeAMEP/activity_idioms.jpeg?enhanced&w=300;600;900;1200;2000&format=webp';
  import selfie from './../../assets/images/selfies/hvb-far.png?enhanced&w=300;600;900;1200;2000&format=webp'

  import Header from '$lib/Header/Header.svelte';
  import ImageCollage from '$lib/ImageCollage/ImageCollage.svelte';
</script>


<style>

</style>

<div class="layout">
  <main>
    <section id="tafe_amep" class="page">
      <h1>TAFE AMEP Volunteering</h1>
      <Header img={img_tafe} alt="The Tafe building in Morwell, Victoria" class="margin-vertical-large"  >
        <p>In 2025 I volunteered in the <a href="https://immi.homeaffairs.gov.au/settling-in-australia/amep/overview">Australian Migrant English Program (AMEP)</a> at TAFE in Morwell, Victoria.</p>
        <p>Through this program I worked with a wide range of new arrivals to Australia. This volunteer role required creativity in communicating complex ideas like English idioms to students. </p>
        <p>Importantly, sensitivity to students often difficult circumstances was critically important to creating a positive learning space.</p>
      </Header>
      <div class="margin-vertical-large">
        <ImageCollage images={[img_activity_house, img_activity_idioms]} class="margin-vertical-small" />
        <h4 class="text-center">Creative and Quality English Lessons</h4>
        <ul>
          <li> <p class="text-left">Working with <a href="https://immi.homeaffairs.gov.au/settling-in-australia/amep/resources">government resources to support all learners</a>, no matter what prior knowledge or experiences they have is a pertinent skill in the modern, multicultural classroom.</p></li>
          <li> <p class="text-left">The teachers delivering these programs were pioneers in English education. It was a privilege to work with passioante teachers who innovated creative ways to make English useful and enjoyable for their students. </p></li>
        </ul>
      </div>
      <Header img={selfie} alt="A selfie of pre-service teacher student" class="margin-vertical-large" >
        <div>
          <h4>Teaching English to Beginners</h4>
        <p>Through this wonderful volunteering opportunity in which I worked with creative and passionate teachers, and warm and patient students, I gained experience in connecting English with a wide variety of cultures and backgrounds.</p>
        </div>
      </Header>
    </section>
  </main>
</div>
