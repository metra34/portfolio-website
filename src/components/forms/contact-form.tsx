'use client';

import React, { useState } from 'react';

type ContactFormProps = React.HTMLProps<HTMLFormElement> & {
  className?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const clssName = `mx-auto ${className}`;

  return (
    <form onSubmit={handleSubmit} className={clssName}>
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-100">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2 text-neutral-600"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-100">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 py-2 text-neutral-600"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-neutral-100">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2 text-neutral-600"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-100">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2 text-neutral-600"
          rows={4}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-6/12 rounded bg-neutral-600 px-4 py-2 text-white hover:bg-neutral-800"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
