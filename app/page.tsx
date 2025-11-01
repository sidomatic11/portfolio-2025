"use client";

import Image from "next/image";
import Header from "./components/header";
import { useState, useEffect } from "react";
import ProjectCard from "./components/project-card";
import WorkProjectCard from "./components/work-project-card";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { OpenNewWindow } from "iconoir-react";
import HeroCanvas from "./components/HeroCanvas";

// const defaultIsExploreVisible = false;

// Client component that uses useSearchParams
function HomeContent() {
  // const [isExploreVisible, setIsExploreVisible] = useState(defaultIsExploreVisible);
  const [showNDAProjects] = useState(false);
  // const [showAnimatedSpans, setShowAnimatedSpans] = useState(false);
  const searchParams = useSearchParams();

  // Use useEffect to safely handle localStorage and sessionStorage after component mounts
  useEffect(() => {
    // const storedValue = localStorage.getItem('isExploreVisible');
    // if (storedValue) {
    // 	setIsExploreVisible(storedValue === 'true');
    // }
    // Show animated spans after mount
    // setShowAnimatedSpans(true);
    // Handle NDA projects visibility
    // if (searchParams.get('password') === 'CreativeLab' && !sessionStorage.getItem('showNDAProjects')) {
    // 	sessionStorage.setItem('showNDAProjects', 'true');
    // }
    // setShowNDAProjects(sessionStorage.getItem('showNDAProjects') === 'true');
  }, [searchParams]);

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
      <main className="w-full">
        {/* HERO SECTION */}
        {/* padding bottom extra on small devices to accomodate for the image size */}
        <div className="hero-section relative min-h-[calc(100svh-4rem)] w-full pt-12 pb-48 sm:min-h-auto sm:pt-20 sm:pb-28">
          <HeroCanvas />

          <div className="w-full">
            <div className="w-fit border border-gray-900 bg-white px-6 py-4 shadow-[8px_8px_0_0_var(--color-brand-yellow),16px_16px_0_0_var(--color-brand-orange)]">
              <p className="text-3xl leading-normal font-light text-gray-700 sm:text-4xl">
                I conceptualize, design and prototype <br />
                ambitious software.
              </p>
            </div>

            <div className="relative mt-16 w-fit overflow-hidden border border-gray-900 bg-white pb-8 shadow-[8px_8px_0_0_var(--color-gray-300)]">
              <div className="w-full px-6 py-4">
                <p className="text-lg leading-normal font-light md:text-2xl">
                  siddhant v patil
                </p>
                <p className="text-lg leading-normal font-light md:text-2xl">
                  designer / creative technologist
                </p>
              </div>
              <div className="marquee-container absolute bottom-0 left-0 flex h-8 w-full items-center overflow-hidden border-t border-gray-900">
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

          <div className="absolute right-0 bottom-0 scale-x-[-1] transform sm:block">
            <Image
              src="/profile-opaque.webp"
              alt="Profile photo of Siddhant"
              width={284}
              height={284}
              className="h-42 w-42 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72"
              draggable={false}
            />
          </div>
        </div>

        {/* WORK SECTION */}

        <div className="full-width-borders relative mb-16 w-full border-x border-gray-900 bg-white px-6 py-4">
          <p className="text-3xl font-light">work</p>
          <div
            id="work"
            className="absolute top-0 left-0 h-16 w-full sm:top-[-63px]"
          ></div>
        </div>

        <section className="row-start-2 mb-16 grid grid-cols-1 items-center gap-[32px] sm:grid-cols-2 sm:items-start lg:grid-cols-3">
          <WorkProjectCard
            link="/solve/ihh-poc"
            title="Patient Monitoring System PoC"
            imageSrc="/thumbnails/image.webp"
            imageAlt="IHH POC"
            description="Integrated real-time data from ICU/OT medical devices into an interface that preserved nurses&#39; mental model"
            tags={[
              "Proof-of-Concept",
              "UI frontend",
              "data parsing",
              "Cursor AI",
              "2024",
            ]}
          />

          {showNDAProjects && (
            <ProjectCard link="/solve/ihh-poc">
              <p>NFT based loyalty program: Concept & Communication</p>
            </ProjectCard>
          )}

          <WorkProjectCard
            link="/solve/svb"
            title="API Portal Redesign for SVB"
            imageSrc="/thumbnails/svb.webp"
            imageAlt="Silicon Valley Bank"
            description="Led the redesign of Silicon Valley Bank&#39;s Developer API Portal into a fully self-service experience"
            tags={[
              "Design Sprints",
              "Content Model",
              "Flows",
              "UI prototypes",
              "Design System",
              "2022",
            ]}
          />

          <WorkProjectCard
            link="/solve/data-platform"
            title="Data Fabric Platform Vision"
            imageSrc="/thumbnails/iris.webp"
            imageAlt="Data Fabric Platform Vision"
            description="Helped a data company envision the future of their platform, grounded in user needs and business objectives"
            tags={["Research", "User Mindsets", "Product Vision", "2021"]}
          />

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

          <ProjectCard
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
          </ProjectCard>
        </section>

        {/* EXPLORE SECTION */}

        <div
          id="explore"
          className="mb-16 w-fit border border-gray-900 bg-white px-6 py-4"
        >
          <p className="text-2xl font-light">creative explorations</p>
        </div>

        <section className="row-start-2 mb-32 grid grid-cols-1 items-center gap-[32px] sm:grid-cols-2 sm:items-start lg:grid-cols-3">
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

          <ProjectCard link="/explore/mediapipe-threejs">
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
          </ProjectCard>

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
        </section>

        {/* ABOUT SECTION */}
        <div className="full-width-borders relative mb-16 w-full border-x border-gray-900 bg-white px-6 py-4">
          <p className="text-3xl font-light">about</p>
          <div
            id="about"
            className="absolute top-0 left-0 h-16 w-full sm:top-[-63px]"
          ></div>
        </div>

        <div className="w-full">
          {/* Intro Section */}
          {/* <div className="w-full mt-24 mb-32 font-light">
						<div className="flex flex-col items-start">
							<div className="w-full rounded-md mb-8 overflow-hidden" >
								<img src="/about/siddhant.jpg" alt="Siddhant Patil" className="w-full h-full object-contain object-bottom border-1 border-gray-200 rounded-md" />
							</div>
							<p className="text-lg md:text-xl leading-relaxed text-gray-700">
								Hey! This is Siddhant, your friendly neighborhood creative technologist :)
							</p>
						</div>

						<p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700">
							I am in an exploratory phase in my career, looking to leverage the various skills acquired so far — across UX design, technology and art — onto new innovative frontiers.
						</p>
					</div> */}

          {/* Background Section */}
          <section className="mb-16 md:mb-24">
            {/* <h2 className="w-full text-2xl md:text-3xl font-bold mb-12">
							My background
						</h2> */}

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {/* Design Card */}
              <div className="">
                <h3 className="mb-2 text-2xl font-light">Design</h3>
                <div className="relative mb-4 aspect-square overflow-hidden">
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
              <div className="">
                <h3 className="mb-2 text-2xl font-light">Technology</h3>
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
              <div className="">
                <h3 className="mb-2 text-2xl font-light">Art</h3>
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
          <section className="w-full">
            <div className="mb-12 w-fit border border-gray-900 bg-white px-6 py-4 text-2xl font-light">
              I love working on...
            </div>
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
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
              <li className="flex items-start gap-4">
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
