const AppFooter = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm select-none">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
