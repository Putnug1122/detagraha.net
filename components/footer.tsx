import { Github, Mail, Rss, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import { FaDiscord, FaSpotify } from "react-icons/fa6";
import { Button, buttonVariants } from "./ui/button";
import NowPlaying from "./now-playing";

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto w-full space-y-4">
      <Separator />
      <NowPlaying />
      <div className="flex justify-between">
        <p className="text-sm my-auto">Putra Nugraha</p>

        <div className="flex my-auto">
          <Button variant="ghost" size="sm">
            <Rss className="w-4 h-4" />
          </Button>
          <a
            href="mailto:putnug1122@gmail.com"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/detactl"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/putnug1122"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
