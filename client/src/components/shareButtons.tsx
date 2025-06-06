'use client';

import {
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Mail,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
export default function ShareButtons({
  title,
  url,
  className = '',
}: {
  title: string;
  url: string;
  className?: string;
}) {
  const fullUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloginn.space'
  }${url}`;

  const handleShare = (platform: string) => {
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          fullUrl
        )}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(fullUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          fullUrl
        )}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(fullUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          title + ' ' + fullUrl
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    // Optionally show toast here
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      <button
        onClick={() => handleShare('facebook')}
        className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </button>
      <button
        onClick={() => handleShare('whatsapp')}
        className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp size={18} />
      </button>
      <button
        onClick={() => handleShare('email')}
        className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share via Email"
      >
        <Mail size={18} />
      </button>
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={18} />
      </button>
    </div>
  );
}
