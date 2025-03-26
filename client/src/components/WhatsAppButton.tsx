'use client';

const WhatsAppButton = () => {
  return (
    <a
      href="http://chat.whatsapp.com/LewbrSC0D2hGNnV7aUmO74"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[99999] cursor-pointer"
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path d="M17.6 6.3A8.88 8.88 0 0 0 11.9 4C7.7 4 4.3 7.4 4.3 11.6c0 1.5.4 2.9 1 4.2l-1.1 4 4.1-1.1a8.72 8.72 0 0 0 4.1 1c0 0 0 0 0 0 4.2 0 7.6-3.4 7.6-7.6 0-2.1-.8-4-2.3-5.5zm-5.6 11.6c-1.1 0-2.3-.3-3.2-.9l-.2-.1-2.2.6.6-2.2-.1-.2a7.38 7.38 0 0 1-1.1-3.9c0-3.5 2.9-6.4 6.4-6.4 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.6-2.9 6.5-6.5 6.5h-.1zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.3 0-.2-.1-.7-.3-1.4-.9-.5-.5-.8-1-.9-1.2-.1-.2 0-.3.1-.4.1-.1.2-.2.2-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3s-.4-1.1-.6-1.4c-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.1-.6.6-.6 1.4s.6 1.6.7 1.7c.1.1 1.4 2.1 3.3 2.9.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.8.1-.9 0-.1-.2-.1-.4-.2z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
