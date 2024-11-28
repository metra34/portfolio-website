import HoverCard from '~/components/card/hover-card';

export default function HomePage() {
  const title = 'Some Awesome Title!';
  const description =
    'Mollit qui ut cupidatat anim mollit veniam eiusmod excepteur. Cillum aliquip consequat occaecat laborum nulla eu. Minim culpa irure enim ad elit cillum. Ad ipsum est aute id qui culpa ad enim. Culpa cillum pariatur dolor minim incididunt.';

  return (
    <div className="container mx-auto w-full">
      <HoverCard title={title} imgSrc="/assets/images/fio.jpg" href="https://www.fio.com/">
        {description}
      </HoverCard>
    </div>
  );
}
