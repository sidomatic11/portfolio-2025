"use client";

import Image from "next/image";
import Header from "./components/header";
// import { useState, useEffect } from "react";
import ProjectCard from "./components/project-card";
import WorkProjectCard from "./components/work-project-card";
// import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import HeroCanvas from "./components/HeroCanvas";
import Link from "next/link";

// const defaultIsExploreVisible = false;

// Client component that uses useSearchParams
function HomeContent() {
  // const [isExploreVisible, setIsExploreVisible] = useState(defaultIsExploreVisible);
  // const [showNDAProjects] = useState(false);
  // const [showAnimatedSpans, setShowAnimatedSpans] = useState(false);
  // const searchParams = useSearchParams();

  // // Use useEffect to safely handle localStorage and sessionStorage after component mounts
  // useEffect(() => {
  //   // const storedValue = localStorage.getItem('isExploreVisible');
  //   // if (storedValue) {
  //   // 	setIsExploreVisible(storedValue === 'true');
  //   // }
  //   // Show animated spans after mount
  //   // setShowAnimatedSpans(true);
  //   // Handle NDA projects visibility
  //   // if (searchParams.get('password') === 'CreativeLab' && !sessionStorage.getItem('showNDAProjects')) {
  //   // 	sessionStorage.setItem('showNDAProjects', 'true');
  //   // }
  //   // setShowNDAProjects(sessionStorage.getItem('showNDAProjects') === 'true');
  // }, [searchParams]);

  // const toggleExploreSolve = () => {
  // 	setIsExploreVisible(!isExploreVisible);
  // 	// Update localStorage with the new state
  // 	if (typeof window !== 'undefined') {
  // 		localStorage.setItem('isExploreVisible', (!isExploreVisible).toString());
  // 	}
  // }

  // const imageSrc = isExploreVisible ? '/footer/mountains.svg' : '/footer/city.svg';

  return (
    <div className="w-full">
      <Header />
      <main
        className="relative w-full sm:pt-16"
        style={{
          boxShadow:
            "inset 1px 0 0 0 var(--border-level-0), inset -1px 0 0 0 var(--border-level-0)",
        }}
      >
        <div className="border-border-level-0 absolute top-0 left-0 z-[-1] h-full w-1/2 border-r"></div>

        {/* HERO SECTION */}
        {/* padding bottom extra on small devices to accomodate for the image size */}
        <div className="hero-section relative mb-40 min-h-[calc(100svh-4rem)] w-full pt-12 pb-48 sm:min-h-auto sm:pt-20 sm:pb-28">
          <HeroCanvas />

          <div className="relative w-full">
            <div className="border-border-level-1 w-fit border bg-white px-6 py-6 shadow-[8px_8px_0_0_var(--color-brand-yellow),16px_16px_0_0_var(--color-brand-orange)]">
              <p className="text-3xl leading-normal font-light text-gray-700 sm:text-4xl">
                I shape <span className="font-bold">ambitious ideas</span> into{" "}
                <span className="italic">meaningful software</span>.
              </p>
            </div>

            <div className="border-border-level-1 relative mt-16 w-fit overflow-hidden border bg-white pb-8 shadow-[8px_8px_0_0_var(--color-gray-300)]">
              <div className="w-full px-6 py-4">
                <p className="mb-1 text-lg leading-normal font-light md:text-2xl">
                  Siddhant V Patil
                </p>
                <p className="text-base leading-normal md:text-lg">
                  <span className="font-semibold">product design</span>
                  <span className="font-normal"> / strategy / </span>
                  <span className="font-light">code</span>
                </p>
              </div>
              <div className="marquee-container border-border-level-1 absolute bottom-0 left-0 flex h-8 w-full items-center overflow-hidden border-t">
                <div className="marquee">
                  <span className="marquee-content text-xs tracking-widest text-gray-500 uppercase md:text-sm">
                    6 years in design & tech &nbsp;•&nbsp; open to work
                    &nbsp;•&nbsp; Germany &nbsp;•&nbsp;&nbsp;
                  </span>
                  <span className="marquee-content text-xs tracking-widest text-gray-500 uppercase md:text-sm">
                    6 years in design & tech &nbsp;•&nbsp; open to work
                    &nbsp;•&nbsp; Germany &nbsp;•&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-border-level-0 absolute right-0 bottom-12 border sm:bottom-[-60px] sm:block">
            <Image
              src="/profile-26.png"
              alt="Profile photo of Siddhant"
              width={284}
              height={284}
              className="h-auto w-42 sm:w-48 md:w-56 lg:w-72"
              draggable={false}
            />
          </div>
          <div className="border-border-level-0 absolute right-0 bottom-[-60px] h-[60px] w-2/3 border-b border-l"></div>
        </div>

        {/* WORK SECTION */}

        <div className="relative mb-24 h-16 w-full">
          <div className="bg-background-level-1 border-border-level-0 absolute top-0 left-0 w-full border px-8 py-6 sm:left-[-32px] sm:w-2/3">
            <p className="text-text-dark text-2xl font-bold tracking-[0.12em] uppercase sm:text-3xl">
              featured work
            </p>
            <div
              id="work"
              className="absolute top-0 left-0 h-16 w-full sm:top-[-63px]"
            ></div>
          </div>
        </div>

        <section className="mb-48 grid grid-cols-1 items-center gap-[48px] sm:grid-cols-2 sm:items-start lg:grid-cols-3">
          <WorkProjectCard
            link="/solve/svb"
            category="product design"
            title="API Developer Portal Redesign for SVB"
            imageSrc="/thumbnails/svb.webp"
            imageAlt="Silicon Valley Bank"
            description="Transformed a dated, support-dependent portal into a fully self-service platform"
            tags={["Team Lead", "Design Sprints", "UX", "2022"]}
          />

          <WorkProjectCard
            link="/solve/data-platform"
            category="strategy"
            title="Data Fabric Platform Vision"
            imageSrc="/thumbnails/iris.webp"
            imageAlt="Data Fabric Platform Vision"
            description="Crafted a user-centered product vision for a complex data-fabric platform"
            tags={["Product Concept", "Research", "User Mindsets", "2021"]}
          />

          <WorkProjectCard
            link="/solve/ihh-poc"
            category="code"
            title="Patient Monitoring System for IHH Malaysia"
            imageSrc="/thumbnails/image.webp"
            imageAlt="IHH POC"
            description="Unified chaotic ICU device data into a single nurse-friendly interface"
            tags={["Proof-of-Concept", "UI frontend", "Cursor AI", "2024"]}
          />

          {/* {showNDAProjects && (
            <ProjectCard link="/solve/ihh-poc">
              <p>NFT based loyalty program: Concept & Communication</p>
            </ProjectCard>
          )} */}

          {/* <ProjectCard link="/solve/svb">
						<div className="flex flex-col gap-4 h-full">
							<p className="text-lg font-light">API Portal Redesign for Silicon Valley Bank</p>
							<div className="relative w-full flex-1 flex flex-col items-end">
								<Image src="/thumbnails/svb.webp" alt="Silicon Valley Bank" fill className="object-contain object-bottom" />
							</div>
						</div>
					</ProjectCard> */}

          {/* <ProjectCard link="/solve/ux-at-concentrix">
            <div className="flex h-full flex-col gap-4">
              <p className="text-lg font-light">UX Design @ Concentrix</p>
              <div className="relative flex w-full flex-1 flex-col items-end">
                <Image
                  src="/thumbnails/concentrix.png"
                  alt="Concentrix"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </ProjectCard> */}

          {/* <ProjectCard
            link="https://like-period-e24.notion.site/XR-Multitasking-Design-Guide-7d7b5e393bd34aa6a81090839dd869c0"
            newTab={true}
          >
            <div className="flex h-full flex-col gap-4">
              <div className="flex flex-row items-start justify-between gap-2">
                <p className="flex-1 text-lg font-light">
                  How might we{" "}
                  <span className="font-bold">manage multiple apps</span> in{" "}
                  <span className="font-bold">XR</span>?
                </p>
                <OpenNewWindow
                  width={20}
                  height={20}
                  className="flex-shrink-0 text-gray-500"
                />
              </div>
              <div className="relative w-full flex-1">
                <Image
                  src="/thumbnails/xrm.png"
                  alt="XR Multitasking Design Guide"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </ProjectCard>

          <ProjectCard
            link="https://like-period-e24.notion.site/Olitor-UW-School-of-Nursing-094630a0cc714395905ad675631a6c4f"
            newTab={true}
          >
            <div className="flex h-full flex-col gap-4">
              <div className="flex flex-row items-start justify-between gap-2">
                <p className="flex-1 text-lg font-light">
                  Helping the elderly adhere to mediterranean diet
                </p>
                <OpenNewWindow
                  width={20}
                  height={20}
                  className="flex-shrink-0 text-gray-500"
                />
              </div>
              <div className="relative flex w-full flex-1 flex-col items-end">
                <Image
                  src="/thumbnails/olitor.png"
                  alt="Olitor"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </ProjectCard>

          <ProjectCard
            link="https://like-period-e24.notion.site/Contentserv-171b41fa91b645c3b1dcfaf48dfffc18"
            newTab={true}
          >
            <div className="flex h-full flex-col gap-4">
              <div className="flex flex-row items-start justify-between gap-2">
                <p className="flex-1 text-lg font-light">
                  UI Design + Development for Enterprise SaaS Product
                </p>
                <OpenNewWindow
                  width={20}
                  height={20}
                  className="flex-shrink-0 text-gray-500"
                />
              </div>
              <div className="relative flex w-full flex-1 flex-col items-end">
                <Image
                  src="/thumbnails/contentserv.png"
                  alt="Contentserv"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </ProjectCard> */}
        </section>

        {/* EXPLORE SECTION */}

        <div className="relative mb-24 h-16 w-full">
          <div className="bg-background-level-1 border-border-level-0 absolute top-0 left-0 w-full border px-8 py-6 sm:left-[-32px] sm:w-2/3">
            <p className="font-eb-garamond text-text-dark text-2xl font-bold lowercase italic sm:text-3xl">
              creative explorations
            </p>
            <div
              id="explore"
              className="absolute top-0 left-0 h-16 w-full sm:top-[-63px]"
            ></div>
          </div>
        </div>

        <section className="mb-48 grid grid-cols-1 items-center gap-[32px] sm:grid-cols-2 sm:items-start lg:grid-cols-3">
          {/* <ProjectCard link="/explore/voice-typing">
						<div className="flex flex-col h-full">
							<div className="w-full">
								<div className="w-full flex flex-wrap gap-y-2 items-start">
									{showAnimatedSpans && Array.from({ length: 16 }).map((_, i) => (
										<motion.span
											key={i}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 0.25,
												delay: i * 0.025,
												ease: "easeOut"
											}}
											className="h-4 mr-2 rounded-sm bg-gray-400 hover:bg-pink-400 transition-colors"
											style={{ width: `${Math.floor(Math.random() * 40) + 20}px` }}
										/>
									))}
								</div>
							</div>
							<div className="mt-auto">
								<MicrophoneSpeaking className="w-12 h-auto grow max-h-12 mb-4" />
								<p className="text-3xl font-light">Can voice typing be better?</p>
							</div>
						</div>
					</ProjectCard> */}

          {/* <ProjectCard link="/explore/vertical-calendar">
							<p>Exploring Vertical Calendar</p>
						</ProjectCard> */}

          <Link
            href="https://sidomatic11.github.io/day-15/"
            target="_blank"
            className="group relative col-span-1 aspect-square overflow-hidden border border-gray-900 hover:border-amber-500"
          >
            <video
              src="/duck.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ display: "block" }}
            />
            {/* Hover chip surfaces tech stack only when the preview is in focus */}
            <span className="pointer-events-none absolute top-3 right-3 translate-y-1 rounded-full border border-amber-400 bg-gray-900 px-3 py-1 text-xs font-medium tracking-wide text-amber-200 opacity-0 backdrop-blur transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              three.js
            </span>
          </Link>

          <ProjectCard link="/explore/hci-notes">
            <div className="flex h-full flex-col gap-4">
              <p className="text-lg font-light">
                Notes on <span className="font-bold">Humans, Computers</span>{" "}
                and their <span className="font-bold">Interaction</span>
              </p>
              <div className="relative w-full flex-1">
                <Image
                  src="/thumbnails/hci.jpg"
                  alt="HCI Notes"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </ProjectCard>

          {/* <ProjectCard link="/explore/code-abstraction">
							<p>What if we have variable code abstraction levels while using AI?</p>
						</ProjectCard> */}

          <ProjectCard link="/explore/shock-ghosts">
            <div className="relative h-full w-full">
              <div className="absolute top-0 left-0 font-light">
                <p className="text-lg">
                  <span className="font-bold">Ghosts</span> &
                </p>
                {/* <p className="text-md mb-2 ml-2">&</p> */}
                <p className="text-lg italic">Thunder</p>
              </div>
              <Image
                src="/thumbnails/ghosts.png"
                alt="Shock Ghosts"
                fill
                className="object-contain"
              />
            </div>
          </ProjectCard>

          <ProjectCard link="/explore/threejs-music">
            <div className="flex h-full flex-col gap-4">
              <p className="text-lg">
                <span className="font-bold">Music</span>
                <span className="font-light"> + Three.js</span>
              </p>
              <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                <Image
                  src="/thumbnails/music.jpg"
                  alt="Music + Three.js"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </ProjectCard>

          {/* <ProjectCard link="/explore/mediapipe-threejs">
            <div className="flex h-full flex-col gap-4">
              <p className="text-lg">
                <span className="font-bold">MediaPipe</span>
                <span className="font-light"> + Three.js</span>
              </p>
              <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                <Image
                  src="/thumbnails/mediapipe.jpg"
                  alt="Mediapipe + Three.js"
                  fill
                  className="rounded-lg object-cover object-right"
                />
              </div>
            </div>
          </ProjectCard> */}

          <ProjectCard
            link="https://www.instagram.com/sidomatic11/"
            newTab={true}
          >
            <div className="flex h-full flex-col gap-4">
              <div className="relative w-full flex-1 overflow-hidden">
                <Image
                  src="/thumbnails/visuals.png"
                  alt="Three.js Visuals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ProjectCard>

          <Link
            href="https://sidomatic11.github.io/day-12/"
            target="_blank"
            className="group relative col-span-1 aspect-square overflow-hidden border border-gray-900 hover:border-amber-500"
          >
            <video
              src="/hand.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{
                display: "block",
                position: "absolute",
                top: "-5px",
                width: "calc(100% + 10px)",
                height: "calc(100% + 10px)",
                objectFit: "cover",
              }}
            />
            {/* Hover chip surfaces tech stack only when the preview is in focus */}
            <span className="pointer-events-none absolute top-3 right-3 translate-y-1 rounded-full border border-amber-400 bg-gray-900 px-3 py-1 text-xs font-medium tracking-wide text-amber-200 opacity-0 backdrop-blur transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              mediapipe + three.js
            </span>
          </Link>
        </section>

        {/* ABOUT SECTION */}
        <div className="relative mb-24 h-16 w-full">
          <div className="bg-background-level-1 border-border-level-0 absolute top-0 left-0 w-full border px-8 py-6 sm:left-[-32px] sm:w-2/3">
            <p className="text-text-dark text-2xl font-bold tracking-[0.12em] uppercase sm:text-3xl">
              about
            </p>
            <div
              id="about"
              className="absolute top-0 left-0 h-16 w-full sm:top-[-63px]"
            ></div>
          </div>
        </div>

        <div className="w-full">
          {/* Background Section */}
          <section className="mb-16 md:mb-24">
            {/* <h2 className="w-full text-2xl md:text-3xl font-bold mb-12">
							My background
						</h2> */}

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
              {/* Design Card */}
              <div className="bg-background-level-0 border-border-level-0 border px-6 pt-4 pb-8">
                <h3 className="mb-4 text-xl font-bold">Design</h3>
                <div className="border-border-level-1 relative mb-4 aspect-square overflow-hidden">
                  <video
                    src="/about/design.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full border-1 border-gray-300 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-light text-gray-700">
                    Versatile design from product strategy and concept design to
                    mobile and web design.
                  </p>
                  <p className="text-sm leading-relaxed font-light text-gray-700">
                    Interactive prototypes, video prototypes, UI design,
                    storyboards, user flows, wireframes, journey maps, service
                    blueprints, UX research
                  </p>
                  <p className="text-sm font-light text-gray-700">
                    3+ years work experience in UX Design
                  </p>
                </div>
              </div>

              {/* Technology Card */}
              <div className="bg-background-level-0 border-border-level-0 border px-6 pt-4 pb-8 md:border-l-0">
                <h3 className="mb-4 text-xl font-bold">Technology</h3>
                <div className="relative mb-4 aspect-square overflow-hidden">
                  <video
                    src="/about/tech.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full border-1 border-gray-300 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-light text-gray-700">
                    Have built complex front-end for enterprise product,
                    physical prototyping with arduino, hardware interfacing with
                    medical devices and more.
                  </p>
                  <p className="text-sm leading-relaxed font-light text-gray-700">
                    JavaScript, React.js, Three.js, Node, MediaPipe, Arduino
                    etc.
                  </p>
                  <p className="text-sm font-light text-gray-700">
                    2+ years work experience in Software Development
                  </p>
                </div>
              </div>

              {/* Art Card */}
              <div className="bg-background-level-0 border-border-level-0 border px-6 pt-4 pb-8 md:border-l-0">
                <h3 className="mb-4 text-xl font-bold">Art</h3>
                <div className="relative mb-4 aspect-square overflow-hidden">
                  <video
                    src="/about/art.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full border-1 border-gray-300 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-light text-gray-700">
                    Traditional mediums, to digital art and now also art with
                    code.
                  </p>
                  <p className="text-sm font-light text-gray-700">
                    {`Lifelong hobby :D`}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Interests Section */}
          <section className="w-full pb-32">
            <div className="bg-background-level-0 border-border-level-0 w-full border px-6 py-8 text-2xl font-light">
              I love working on...
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <li className="border-border-level-0 bg-background-level-0 flex items-start gap-4 border border-t-0 p-4">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    src="/icon-01.svg"
                    alt="Prototyping icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">
                    Prototyping & Proof of Concepts
                  </h3>
                  <p className="text-gray-600">
                    Getting started from zero, and going from ambiguity to
                    clarity.
                  </p>
                </div>
              </li>
              <li className="border-border-level-0 bg-background-level-0 flex items-start gap-4 border border-t-0 p-4 sm:border-l-0">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    src="/icon-02.svg"
                    alt="Innovative Explorations icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">
                    Innovative Explorations
                  </h3>
                  <p className="text-gray-600">
                    Always love to challenge the status quo.
                  </p>
                </div>
              </li>
              <li className="border-border-level-0 bg-background-level-0 flex items-start gap-4 border border-t-0 p-4 md:border-l-0">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    src="/icon-03.svg"
                    alt="Emerging Tech icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Emerging Tech</h3>
                  <p className="text-gray-600">
                    I enjoy researching, keeping up and working with the latest
                    in tech.
                  </p>
                </div>
              </li>
              <li className="border-border-level-0 bg-background-level-0 flex items-start gap-4 border border-t-0 p-4 sm:border-l-0 md:border-l-1">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    src="/icon-04.svg"
                    alt="Social Impact icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Social Impact</h3>
                  <p className="text-gray-600">
                    Real problems, real solutions.
                  </p>
                </div>
              </li>
              <li className="border-border-level-0 bg-background-level-0 flex items-start gap-4 border border-t-0 p-4 md:border-l-0">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    src="/icon-05.svg"
                    alt="Art with Tech icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Art with Tech</h3>
                  <p className="text-gray-600">For the pure joy of it.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* <div className="absolute bottom-[-1px] left-0 w-full h-full z-[-1]">
				<motion.div
					key={imageSrc}
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.25,
						ease: "easeOut"
					}}
					className="w-full h-full"
				>
					<Image
						src={imageSrc}
						alt=""
						fill
						className="w-full h-auto object-contain object-bottom"
						priority
					/>
				</motion.div>
			</div> */}
    </div>
  );
}

// Main page component
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
