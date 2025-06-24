import FullScreenSection from '@/components/common/full-screen-section';
import ProfileSection from '@/components/professional/profile-section';
import WorkExperienceSection from '@/components/professional/work-experience-section';
import ProjectsSection from '@/components/professional/projects-section';
import TimelineSection from '@/components/personal/timeline-section';
import CertificationsSection from '@/components/professional/certifications-section';
import SkillsSection from '@/components/professional/skills-section';
import InterestsSection from '@/components/professional/interests-section';
import IntroAnimationWrapper from '@/components/common/intro-animation-wrapper';

export default function ProfessionalPortfolioPage() {
  return (
    <IntroAnimationWrapper>
      <>
        <FullScreenSection id="profile" className="bg-background">
          <ProfileSection />
        </FullScreenSection>
        <FullScreenSection id="work-experience" className="bg-card">
          <WorkExperienceSection />
        </FullScreenSection>
        <FullScreenSection id="projects" className="bg-background">
          <ProjectsSection />
        </FullScreenSection>
        <FullScreenSection id="timeline" className="bg-card">
          <TimelineSection />
        </FullScreenSection>
        <FullScreenSection id="certifications" className="bg-background">
          <CertificationsSection />
        </FullScreenSection>
        <FullScreenSection id="skills" className="bg-card">
          <SkillsSection />
        </FullScreenSection>
        <FullScreenSection id="interests" className="bg-background">
          <InterestsSection />
        </FullScreenSection>
      </>
    </IntroAnimationWrapper>
  );
}
