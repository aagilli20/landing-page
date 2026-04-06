'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const footerLinks = {
  product: [
    { key: 'components', href: '#' },
    { key: 'templates', href: '#' },
    { key: 'documentation', href: '#' },
  ],
  social: [
    { key: 'social1', href: 'https://www.instagram.com/aagilli20/' },
    { key: 'social2', href: 'https://www.facebook.com/aagilli20/' },
    { key: 'social3', href: 'https://www.tiktok.com/@andresgilli/' },
  ],
  service: [
    { key: 'privacy', href: '#' },
    { key: 'terms', href: '#' },
    { key: 'contact', href: 'contact' },
  ],
  community: [
    { key: 'social1', href: 'https://www.instagram.com/aagilli20/' },
    { key: 'social2', href: 'https://www.facebook.com/aagilli20/' },
    { key: 'social3', href: 'https://www.tiktok.com/@andresgilli/' },
  ],
};

export default function Footer() {
  const t = useTranslations('Footer');
  const [showComponentsPopup, setShowComponentsPopup] = useState(false);
  const [showTemplatesPopup, setShowTemplatesPopup] = useState(false);
  const [showDocumentationPopup, setShowDocumentationPopup] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  return (
    <footer className="w-full border-t border-border/40 bg-white">
      <div className="container mx-auto px-4 pt-16 pb-5">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="AndresGilli Logo"
                width={32}
                height={32}
                className="h-6 w-auto rounded-full"
              />
              <h2 className="text-xl font-bold text-black">AndresGilli</h2>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('product')}</h3>
            {footerLinks.product.map(({ key, href }) => {
              if (key === 'components') {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowComponentsPopup(true);
                    }}
                    className="text-sm text-left text-black/70 hover:text-black"
                  >
                    {t(key)}
                  </button>
                );
              }
              if (key === 'templates') {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTemplatesPopup(true);
                    }}
                    className="text-sm text-left text-black/70 hover:text-black"
                  >
                    {t(key)}
                  </button>
                );
              }
              if (key === 'documentation') {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowDocumentationPopup(true);
                    }}
                    className="text-sm text-left text-black/70 hover:text-black"
                  >
                    {t(key)}
                  </button>
                );
              }
              return (
                <Link
                  key={key}
                  href={href}
                  className="text-sm text-black/70 hover:text-black"
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('social')}</h3>
            {footerLinks.social.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-sm text-black/70 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('service')}</h3>
            {footerLinks.service.map(({ key, href }) => {
              if (key === 'privacy') {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPrivacyPopup(true);
                    }}
                    className="text-sm text-left text-black/70 hover:text-black"
                  >
                    {t(key)}
                  </button>
                );
              }
              if (key === 'terms') {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTermsPopup(true);
                    }}
                    className="text-sm text-left text-black/70 hover:text-black"
                  >
                    {t(key)}
                  </button>
                );
              }
              return (
                <Link
                  key={key}
                  href={href}
                  className="text-sm text-black/70 hover:text-black"
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('community')}</h3>
            {footerLinks.community.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-sm text-black/70 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(key)}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} • AndresGilli {t('copyright')}
        </div>

        {/* Uneed Embed Badge */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.uneed.best/tool/AndresGilli-landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      {/* Components Popup */}
      {showComponentsPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowComponentsPopup(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowComponentsPopup(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="mb-4 text-xl font-bold">{t('components')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('componentsContent')}
            </p>
          </div>
        </div>
      )}

      {/* Templates Popup */}
      {showTemplatesPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowTemplatesPopup(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowTemplatesPopup(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="mb-4 text-xl font-bold">{t('templates')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('templatesContent')}
            </p>
          </div>
        </div>
      )}

      {/* Documentation Popup */}
      {showDocumentationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowDocumentationPopup(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDocumentationPopup(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="mb-4 text-xl font-bold">{t('documentation')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('documentationContent')}
            </p>
          </div>
        </div>
      )}

      {/* Privacy Popup */}
      {showPrivacyPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowPrivacyPopup(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg relative max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPrivacyPopup(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="mb-4 text-xl font-bold">{t('privacy')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t('privacyContent1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('privacyContent2')}
            </p>
          </div>
        </div>
      )}

      {/* Terms Popup */}
      {showTermsPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowTermsPopup(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg relative max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowTermsPopup(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="mb-4 text-xl font-bold">{t('terms')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t('termsContent1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('termsContent2')}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}