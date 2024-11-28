import HoverCard from '~/components/card/hover-card';

const ProjectsPage = () => {
  return (
    <div className="container">
      <HoverCard
        title={'Fionet Deki Device'}
        imgSrc="/assets/images/fio.jpg"
        href="https://www.fio.com/"
      >
        Fio’s Deki Reader is a rugged, in vitro diagnostic device for use with commercially
        available lateral flow immunoassays (commonly known as rapid diagnostic tests) and Fionet
        mobile software
      </HoverCard>
    </div>
  );
};

export default ProjectsPage;
