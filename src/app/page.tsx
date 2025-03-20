import HeroSection from "./components/HeroSection";
import UserFeedback from "./components/UserFeedback";
import RecentBlogs from "./components/RecentBlogs";
import AboutAuthor from "./components/AboutAuthor";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutAuthor />
      {/* <UserFeedback />
      <RecentBlogs /> */}
    </main>
  );
}
