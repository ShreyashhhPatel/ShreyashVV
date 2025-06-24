import FullScreenSection from '@/components/common/full-screen-section';
import ContactSection from '@/components/contact/contact-section';

export default function SayHiPage() {
  return (
    <>
      <FullScreenSection id="contact" className="bg-background">
        <ContactSection />
      </FullScreenSection>
    </>
  );
}
