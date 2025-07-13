import ContactForm from '~/components/forms/contact-form';

const ContactPage = () => {
  return (
    <div className="container mx-auto mt-12 w-min p-2">
      <h2 className="w-full pb-2 text-4xl font-semibold">Contact Me</h2>
      <ContactForm className="w-calc-90" />
    </div>
  );
};

export default ContactPage;
