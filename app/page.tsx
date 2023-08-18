import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import prisma from "@/lib/prisma";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, CalendarIcon } from "lucide-react";
import SocialButtons from "@/components/social-buttons";

export default async function Home() {
  const posts = await prisma.posts.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main>
      <div className="mx-auto max-w-2xl space-y-8 my-10">
        <h1 className="text-4xl font-bold">Greetings 👋</h1>
        <div>
          <div className="space-y-4">
            <p>
              I&apos;m Deta, a software engineer student at{" "}
              <span className="underline hover:no-underline cursor-pointer">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://www.stis.ac.id/"
                      target="_blank"
                      aria-label="Polstat STIS Website"
                    >
                      Polstat STIS
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://www.stis.ac.id/media/source/logo.png" />
                        <AvatarFallback>STIS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Polstat STIS</h4>
                        <p className="text-sm">
                          STIS Statistics Polytechnic is an official college
                          within the Central Bureau of Statistics.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Studying @ STIS since 2020
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </span>
              . Computer provision by day, building random stuff by night.
            </p>
            <p>
              Currently interning at{" "}
              <span className="underline hover:no-underline cursor-pointer">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="https://bps.go.id" target="_blank">
                      Badan Pusat Statistik
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage
                          className="bg-white"
                          src="https://www.bps.go.id/images/bps.ico"
                        />
                        <AvatarFallback>BPS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                          Badan Pusat Statistik
                        </h4>
                        <p className="text-sm">
                          The Central Bureau of Statistics is a non-departmental
                          government agency responsible for statistics in
                          Indonesia.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Interning @ BPS since 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </span>
              .
            </p>
          </div>
        </div>

        <p className="font-semibold text-lg">Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
          {siteConfig.projects.map((project) => (
            <div key={project.name} className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={project.url}
                      className="underline hover:no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{project.url}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between my-auto">
          <p className="my-auto font-semibold text-lg">Articles</p>
          <Link
            href="/articles"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="All articles"
          >
            All articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/article/${encodeURIComponent(post.slug)}`}
                  prefetch={false}
                  aria-label={post.title}
                >
                  <div className="sm:flex justify-between gap-2">
                    <p className="truncate">{post.title}</p>

                    <div className="flex gap-2">
                      <p className="whitespace-nowrap">{post.views} views</p>/
                      <Badge variant="secondary">{post.tag}</Badge>/
                      <p className="whitespace-nowrap">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SocialButtons />
      </div>
    </main>
  );
}
