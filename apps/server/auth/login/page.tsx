import { Metadata } from "next";
import { MockResume } from "../../../../packages/components/landing/mock-resume";
import { MockResumeMobile } from "../../../../packages/components/landing/mock-resume-mobile";
import { BenefitsList } from "../../../../packages/components/landing/benefits-list";
import { ActionButtons } from "../../../../packages/components/landing/action-buttons";
import { Logo } from "../../../../packages/components/ui/logo";
import { PricingSection } from "../../../../packages/components/landing/pricing-section";
import { ErrorDialog } from "../../../../packages/components/auth/error-dialog";
import { CreatorStory } from "../../../../packages/components/landing/creator-story";
import { HowItWorks } from "../../../../packages/components/landing/how-it-works";
import { HeroVideoSection } from "../../../../packages/components/landing/hero-video-section";
import { Footer } from "../../../../packages/components/layout/footer";
import { SplitContent } from "../../../../packages/components/ui/split-content";
import { NavLinks } from "../../../../packages/components/layout/nav-links";
import { ModelShowcase } from "../../../../packages/components/landing/model-showcase";

// import { WaitlistSection } from "@/components/waitlist/waitlist-section";

export const metadata: Metadata = {
  title: "Login | ResumeLM - AI-Powered Resume Builder",
  description: "Create tailored, ATS-optimized resumes powered by AI. ResumeLM helps you land your dream tech job with personalized resume optimization.",
  keywords: ["resume builder", "AI resume", "ATS optimization", "tech jobs", "career tools", "job application"],
  authors: [{ name: "ResumeLM" }],
  openGraph: {
    title: "ResumeLM - AI-Powered Resume Builder",
    description: "Create tailored, ATS-optimized resumes powered by AI. Land your dream tech job with personalized resume optimization.",
    url: "https://resumelm.com/auth/login",
    siteName: "ResumeLM",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "ResumeLM - AI Resume Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeLM - AI-Powered Resume Builder",
    description: "Create tailored, ATS-optimized resumes powered by AI. Land your dream tech job with personalized resume optimization.",
    images: ["/og.webp"],
    creator: "@resumelm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "google-site-verification-code", // Replace with actual verification code
  // },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const showErrorDialog = params?.error === 'email_confirmation' || params?.error === 'auth_code_missing';

  return (
    <>
      <main className="relative overflow-x-hidden selection:bg-violet-200/50 -my-14 mb-6">
        {/* Error Dialog */}
        <ErrorDialog isOpen={!!showErrorDialog} />

        {/* Enhanced Gradient Background Elements */}
        <div className="fixed inset-0 z-0">
          {/* Primary gradient mesh with improved colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 via-blue-50/60 to-indigo-50/60 animate-gradient-slow" />
          
          {/* Enhanced animated gradient orbs with better positioning and animations - mobile optimized */}
          <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-r from-violet-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-slow opacity-80 mix-blend-multiply" />
          <div className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-delayed opacity-80 mix-blend-multiply" />
          <div className="absolute top-1/2 right-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-gradient-to-r from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl animate-float opacity-80 mix-blend-multiply" />
          
          {/* Enhanced mesh grid overlay with subtle animation */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] animate-mesh-slow" />
        </div>

        {/* Enhanced Navigation with backdrop blur and border */}
        <nav className="border-b border-white/40 backdrop-blur-xl shadow-md fixed top-0 w-full bg-white/15 z-[1000]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Logo />
              <NavLinks />
            </div>
          </div>
        </nav>

        {/* Enhanced Content with better spacing and animations */}
        <div className="relative z-10">


          
          {/* Hero Section with Split Layout */}
          <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-16 max-h-[80vh]">
              {/* Left Column - Content */}
              <div className="flex flex-col gap-6 lg:gap-10 lg:pr-12">
                <div className="space-y-6 lg:space-y-8">
                  {/* GitHub Badge */}
                  <a
                    href="https://github.com/olyaiy/resume-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full 
                      bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-violet-500/10
                      hover:from-violet-500/15 hover:via-blue-500/15 hover:to-violet-500/15
                      border border-violet-200/20 hover:border-violet-300/30
                      backdrop-blur-xl shadow-lg shadow-violet-500/10
                      transition-all duration-500 hover:scale-105 group
                      max-w-fit"
                  >
                    <svg
                      className="w-5 h-5 text-violet-600 group-hover:text-violet-700 transition-colors duration-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                      Open Source on GitHub
                    </span>
                    <svg
                      className="w-4 h-4 text-violet-500 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:text-violet-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <div className="space-y-3 lg:space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                      <span className="inline-block bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-clip-text text-transparent animate-gradient-x pb-2">
                        Free AI Resume Builder
                      </span>
                      <br />
                      <span className="inline-block bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-violet-500/90 bg-clip-text text-transparent animate-gradient-x relative">
                        that lands you tech jobs
                        <div className="absolute -bottom-2 left-0 w-16 sm:w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
                      </span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl font-medium">
                      Create tailored, ATS-optimized resumes powered by AI.
                    </p>
                  </div>

                  <BenefitsList />
                </div>
                
                <ActionButtons />
              </div>

              {/* Right Column - Floating Resume Preview */}
              <div className="relative mt-8 lg:mt-0">
                {/* Mobile-only single resume view */}
                <div className="block lg:hidden">
                  <div className="relative w-full max-w-[min(85vw,_6in)] mx-auto">
                    {/* Decorative Elements - Subtle gradients for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 to-blue-500/3 rounded-sm transform rotate-2 scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 to-blue-500/3 rounded-sm transform -rotate-2 scale-[1.02]" />
                    
                    {/* Stacked Resume Previews - Mobile Optimized */}
                    <div className="relative">
                      {/* Background Resume - Third Layer */}
                      <div className="absolute -right-4 top-2 opacity-80  scale-[0.99] rotate-[-6deg] ">
                        <MockResumeMobile />
                      </div>
                      
                      {/* Middle Resume - Second Layer */}
                      <div className="absolute -right-2 top-1 opacity-100 scale-[0.995] rotate-[-3deg] origin-center">
                        <MockResumeMobile />
                      </div>

                      {/* Front Resume - Main Layer */}
                      <div className="relative">
                        <MockResumeMobile />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop stacked resume view */}
                <div className="relative hidden lg:block">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-3xl transform rotate-3 scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-3xl transform -rotate-3 scale-105" />
                  
                  {/* Stacked Resume Previews */}
                  <div className="relative">
                    {/* Background Resume - Third Layer */}
                    <div className="absolute -right-12 top-4 opacity-60 blur-[1px] scale-[0.97] rotate-[-8deg] origin-bottom-right">
                      <MockResume />
                    </div>
                    
                    {/* Middle Resume - Second Layer */}
                    <div className="absolute -right-6 top-2 opacity-80 blur-[0.5px] scale-[0.985] rotate-[-4deg] origin-bottom-right">
                      <MockResume />
                    </div>

                    {/* Front Resume - Main Layer */}
                    <div className="relative">
                      <MockResume />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className=" ">
            <HeroVideoSection />
          </div>
          
          <ModelShowcase />

          <div className="flex flex-col gap-20 py-16" id="features">
            <SplitContent
              imageSrc="/SS Chat.png"
              heading="AI-Powered Resume Assistant"
              description="Get real-time feedback and suggestions from our advanced AI assistant. Optimize your resume content, improve your bullet points, and ensure your skills stand out to recruiters and ATS systems."
              imageOnLeft={false}
              imageOverflowRight={true}
            />

            <SplitContent
              imageSrc="/Dashboard Image.png"
              heading="Beautiful Resume Dashboard"
              description="Manage all your resumes in one place with our intuitive dashboard. Create base resumes, generate tailored versions for specific jobs, and track your application progress with ease."
              imageOnLeft={false}
            />

            <SplitContent
              imageSrc="/SS Score.png"
              heading="Resume Performance Scoring"
              description="Get detailed insights into your resume's effectiveness with our comprehensive scoring system. Track key metrics, identify areas for improvement, and optimize your resume to stand out to employers and ATS systems."
              imageOnLeft={false}
              imageOverflowRight={true}
            />

            <SplitContent
              imageSrc="/SS Cover Letter.png"
              heading="AI Cover Letter Generator"
              description="Create compelling, personalized cover letters in minutes with our AI-powered generator. Tailor your message to specific job opportunities while maintaining a professional and engaging tone that captures attention."
              imageOnLeft={false}
            />
          </div>

          {/* How It Works Section */}
          <div id="how-it-works">
            <HowItWorks />
          </div>

          {/* Pricing Section */}
          <div id="pricing">
            <PricingSection />
          </div>

          {/* Creator Story */}
          <div id="about">
            <CreatorStory />
          </div>
        </div>
      </main>
      <Footer variant="static"/>
    </>
  );
}
