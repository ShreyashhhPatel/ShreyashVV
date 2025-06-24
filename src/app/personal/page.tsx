import FullScreenSection from '@/components/common/full-screen-section';
import HobbiesSection from '@/components/personal/hobbies-section';
import TravelSection from '@/components/personal/travel-section';
import BooksSection from '@/components/personal/books-section';

export default function NonchalantMePage() {
  return (
    <>
      <FullScreenSection id="hobbies" className="bg-card">
        <HobbiesSection />
      </FullScreenSection>
      <FullScreenSection id="travel" className="bg-background">
        <TravelSection />
      </FullScreenSection>
      <FullScreenSection id="books" className="bg-card">
        <BooksSection />
      </FullScreenSection>
    </>
  );
}
