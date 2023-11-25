import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarIcon,
  HandMetal,
  HardHat,
  MoveRight,
  Newspaper,
} from "lucide-react";
import Call from "@/components/call";
import Image from "next/image";
import { CardHover } from "@/components/card-hover";

export default async function Home() {
  const posts = await prisma.posts.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main>
      <div className="mx-auto max-w-2xl space-y-8 my-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold flex gap-2 my-auto">
            G&apos;day
            <HandMetal className="w-8 h-8 my-auto" />
          </h1>
          <Image
            src="/avatar.png"
            width={200}
            height={200}
            alt="Zacchary Puckeridge"
            className="w-14 h-14 rounded-full border-4 border-muted my-auto"
          />
        </div>
        <div>
          <div className="space-y-4">
            <p className="dark:text-muted-foreground text-black">
              I&apos;m Deta, a software engineer and student at{" "}
              <span className="underline hover:no-underline cursor-pointer">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://www.stis.ac.id/"
                      target="_blank"
                      aria-label="Polstat STIS Website"
                      className="text-black dark:text-white"
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
            <p className="dark:text-muted-foreground text-black">
              Currently working on bachelor thesis about{" "}
              <span className="underline hover:no-underline cursor-pointer">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://en.wikipedia.org/wiki/Large_language_model"
                      target="_blank"
                      className="text-black dark:text-white"
                    >
                      Large Language Models
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage
                          className="bg-white"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Neural_network_with_dark_background.png/220px-Neural_network_with_dark_background.png"
                        />
                        <AvatarFallback>LLM</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                          Large Language Models
                        </h4>
                        <p className="text-sm">
                          A large language model is a type of language model
                          notable for its ability to achieve general-purpose
                          language understanding and generation.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Working on it since 2023
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

        <div className="flex justify-between my-auto border-b py-1">
          <p className="font-semibold text-lg flex gap-2 my-auto">
            <HardHat width={20} height={20} className="my-auto" />
            Projects
          </p>
          <Link
            href="/projects"
            className={`flex gap-2 ${buttonVariants({
              variant: "ghost",
            })}`}
            aria-label="All projects"
          >
            All projects
            <MoveRight className="w-5 h-5" />
          </Link>
        </div>
        <div>
          <CardHover />
        </div>

        <div className="flex justify-between my-auto border-b py-1">
          <p className="my-auto font-semibold text-lg flex gap-2 ">
            <Newspaper width={20} height={20} className="my-auto" /> Articles
          </p>
          <Link
            href="/articles"
            className={`flex gap-2 ${buttonVariants({
              variant: "ghost",
            })}`}
            aria-label="All articles"
          >
            All articles
            <MoveRight className="w-5 h-5" />
          </Link>
        </div>
        <div>
          <ul className="">
            {posts.map((post: any) => (
              <li
                key={post.id}
                className="rounded-lg p-2 hover:bg-muted hover:shadow-2xl transition-all duration-300"
              >
                <Link
                  href={`/article/${encodeURIComponent(post.slug)}`}
                  prefetch={false}
                  aria-label={post.title}
                >
                  <div className="sm:flex justify-between gap-2 space-y-1 sm:space-y-0">
                    <p className="truncate">{post.title}</p>

                    <div className="flex gap-2 text-sm dark:text-muted-foreground text-black my-auto">
                      <p className="whitespace-nowrap">{post.views} views</p>/
                      <Badge variant="secondary" className="font-mono">
                        {post.tag}
                      </Badge>
                      /
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
        <Call />
      </div>
    </main>
  );
}
