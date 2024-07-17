import ReCAPTCHA from 'react-google-recaptcha';

import { cn } from 'utils/cn';
export default function Recaptcha({
  recaptchaRef,
  variant = 'dark',
}: {
  recaptchaRef: React.RefObject<typeof ReCAPTCHA>;
  variant?: 'dark' | 'light';
}) {
  if (!process.env.NEXT_PUBLIC_SITE_KEY) return null;
  const linkClass = cn('underline', {
    'hover:text-white': variant === 'dark',
    'hover:text-black': variant === 'light',
  });
  return (
    <>
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
      <div
        className={cn('mt-2 text-sm', {
          'text-gray-600': variant === 'light',
          'text-gray-400': variant === 'dark',
        })}
      >
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Terms of Service
        </a>{' '}
        apply.
      </div>
    </>
  );
}
