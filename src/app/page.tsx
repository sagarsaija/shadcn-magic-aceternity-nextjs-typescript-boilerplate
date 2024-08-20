import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import BlurIn from "@/components/magicui/blur-in";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-6">
        <div className="flex flex-col items-center justify-center">
          <h2>{"Darkmode Toggle Demo:"}</h2>
          <ThemeToggle />
        </div>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" Sagar Saija "}
          </a>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://ui.aceternity.com/docs/cli"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Aceternity docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Aceternity UI.
          </p>
        </a>

        <a
          href="https://magicui.design/docs/cli"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Magic UI docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Magic UI.
          </p>
        </a>

        <a
          href="https://ui.shadcn.com/docs/cli"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            ShadCn UI docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about ShadCn UI.
          </p>
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Next.js docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
      <section className="mt-12 space-y-12">
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-4 text-xl font-semibold">Aceternity UI Showcase</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Add Aceternity UI components here to test them out */}
            <FlipWords words={["Aceternity", "UI"]} />
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-4 text-xl font-semibold">Magic UI Showcase</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Add Magic UI components here to test them out*/}
            <BlurIn word="Magic UI" />
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-4 text-xl font-semibold">ShadCn UI Showcase</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Add ShadCn UI components here to test them out*/}
            <div className="flex justify-start">
              <Badge>ShadCn</Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
