import UserInfoCard from '~/components/card/user-info-card';

export default function HomePage() {
  return (
    <div className="container w-full max-w-2xl">
      <UserInfoCard
        avatarUrl="/assets/images/self_portrait_sq.jpg"
        name="Artem Clement"
        title="Full Stack Developer"
        summary="Back-end-focused professional with over 7 years of experience, specializing in Java and JavaScript development."
        location="Mississauga, ON"
        socialLinks={{}}
      />
    </div>
  );
}
