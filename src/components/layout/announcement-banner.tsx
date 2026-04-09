import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnnouncementBannerProps {
  scrolled: boolean;
}

const AnnouncementBanner = ({ scrolled }: AnnouncementBannerProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100",
      )}
    >
      <div className="bg-[#f1b434]/50 text-black text-center text-xs px-4 py-1.5 leading-relaxed w-full">
        <span className="opacity-80">
          ⚠️ Not an official bakery website &mdash; this is a{" "}
          <strong className="font-semibold">proof-of-work showcase</strong>{" "}
          for{" "}
        </span>
        <Link
          href="https://zarasana.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:opacity-100 opacity-90 transition-opacity"
        >
          zarasana.com
        </Link>
        <span className="opacity-80"> by </span>
        <Link
          href="https://github.com/AnchalDevBytes/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:opacity-100 opacity-90 transition-opacity"
        >
          AnchalDevBytes
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
