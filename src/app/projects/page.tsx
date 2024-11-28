import HoverCard from '~/components/card/hover-card';

const ProjectsPage = () => {
  const description =
    'Mollit qui ut cupidatat anim mollit veniam eiusmod excepteur. Cillum aliquip consequat occaecat laborum nulla eu. Minim culpa irure enim ad elit cillum. Ad ipsum est aute id qui culpa ad enim. Culpa cillum pariatur dolor minim incididunt.';

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <HoverCard
        title={'Fionet Deki Device'}
        imgSrc="/assets/images/fio.jpg"
        href="https://www.fio.com/"
      >
        {description}
      </HoverCard>
    </div>
  );
};

export default ProjectsPage;
