import HeroSection from "./components/HeroSection";
import UserFeedback from "./components/UserFeedback";
import RecentBlogs from "./components/RecentBlogs";
import AboutAuthor from "./components/AboutAuthor";
import Novels from "./components/Novels";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutAuthor />
      {/* <UserFeedback />
      <RecentBlogs /> */}
      {/* <Novels /> */}
    </main>
  );
}
