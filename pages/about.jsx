const AboutPage = () => {
  return (
    <>
      <h3>Versatile web developer skilled in frontend and backend technologies, crafting dynamic interfaces with HTML, CSS, and JavaScript. Proficient
in backend development using Ruby on Rails, Dart, and Python, optimizing processes for a 20% reduction in page load times and a 15%
improvement in API response. Acknowledged for a commitment to robust application performance and extensive proficiency in diverse
technologies, I contribute innovation and excellence to collaborative web development projects</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
