"use client";

import Image from "next/image";
import Header from "./components/header";
import { useState, useEffect } from "react";
import ProjectCard from "./components/project-card";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import { MicrophoneSpeaking, OpenNewWindow } from "iconoir-react";
import { motion } from "framer-motion";

// const defaultIsExploreVisible = false;

// Client component that uses useSearchParams
function HomeContent() {
	// const [isExploreVisible, setIsExploreVisible] = useState(defaultIsExploreVisible);
	const [showNDAProjects] = useState(false);
	const [showAnimatedSpans, setShowAnimatedSpans] = useState(false);
	const searchParams = useSearchParams();

	// Use useEffect to safely handle localStorage and sessionStorage after component mounts
	useEffect(() => {
		// const storedValue = localStorage.getItem('isExploreVisible');
		// if (storedValue) {
		// 	setIsExploreVisible(storedValue === 'true');
		// }

		// Show animated spans after mount
		setShowAnimatedSpans(true);

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
			<main className="w-full mb-8">

				<div className="w-full flex flex-col items-center justify-center pt-32 pb-16">
					<div className="w-full">
						{/* <p className="text-2xl font-light leading-normal">Hallo! I'm Sid.👋🏽</p> */}
						{/* <p className="text-2xl font-light leading-normal">designer / creative technologist</p> */}
						{/* <p className="text-3xl font-light pt-4"></p> */}
						<p className="text-gray-700 text-4xl font-bold pt-4 leading-normal">I conceptualize, design and prototype ambitious software.</p>
						{/* <p className="text-4xl font-bold pt-4 leading-normal"><span className="opacity-70">I conceptualize</span><span className="opacity-80">, design</span> and <span>prototype</span> <span className="text-gray-900">ambitious software.</span></p> */}
						<p className="text-2xl font-light pt-8 leading-normal">Siddhant V Patil — Designer / Creative Technologist</p>
						<div className="flex flex-col md:flex-row gap-4 md:gap-4 text-md font-light pt-4">
							<p className="text-gray-700 bg-slate-100 px-3 py-[2px] rounded-lg w-fit border border-slate-300">6 years in design & tech</p>
							<p className="text-gray-700 bg-slate-100 px-3 py-[2px] rounded-lg w-fit border border-slate-300 pl-6 relative"><span className="inline-block w-2 h-2 rounded-full bg-lime-500 absolute left-2 top-1/2 -translate-y-1/2"></span> open to work </p>
							<p className="text-gray-700 bg-slate-100 px-3 py-[2px] rounded-lg w-fit border border-slate-300">📍 Germany</p>
						</div>
					</div>
				</div>

				{/* <div id="work" className="flex flex-col items-center justify-center h-16 border border-gray-200 rounded-lg my-16 relative bg-white">
					<div className="text-gray-500 uppercase text-sm absolute -top-8 left-0 border border-gray-200 rounded-lg bg-gray-100 px-4 py-1">work mode</div>
					<div className="w-full h-16">
						<ExploreSwitch isExploreVisible={isExploreVisible} onClick={toggleExploreSolve} />
					</div>
				</div> */}

				{/* SOLVE SECTION */}

				<div id="work" className="w-full pt-32 mb-8 pb-2">
					<p className="text-3xl font-bold">Featured <span className="text-amber-500">Work</span></p>
				</div>

				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

					<ProjectCard link="/solve/ihh-poc">
						<div className="flex flex-col gap-4 h-full">
							<div className="flex flex-col gap-2">
								<p className="text-lg font-light">Critical Patient Monitoring System</p>
								<p className="text-sm text-gray-500">POC development</p>
							</div>
							<div className="relative w-full flex-1">
								<Image src="/thumbnails/ihh.png" alt="IHH POC" fill className="object-contain object-bottom" />
							</div>
						</div>
					</ProjectCard>

					{showNDAProjects && (
						<ProjectCard link="/solve/ihh-poc">
							<p>NFT based loyalty program: Concept & Communication</p>
						</ProjectCard>
					)}

					<ProjectCard link="/solve/ux-at-concentrix">
						<div className="flex flex-col gap-4 h-full">
							<p className="text-lg font-light">UX Design @ Concentrix</p>
							<div className="relative w-full flex-1 flex flex-col items-end">
								<Image src="/thumbnails/concentrix.png" alt="Concentrix" fill className="object-contain object-bottom" />
							</div>
						</div>
					</ProjectCard>


					<ProjectCard link="https://like-period-e24.notion.site/XR-Multitasking-Design-Guide-7d7b5e393bd34aa6a81090839dd869c0" newTab={true}>
						<div className="flex flex-col gap-4 h-full">
							<div className="flex flex-row gap-2 justify-between items-start">
								<p className="text-lg font-light flex-1">How might we <span className="font-bold">manage multiple apps</span> in <span className="font-bold">XR</span>?</p>
								<OpenNewWindow width={20} height={20} className="text-gray-500 flex-shrink-0" />
							</div>
							<div className="relative w-full flex-1">
								<Image src="/thumbnails/xrm.png" alt="XR Multitasking Design Guide" fill className="object-contain" />
							</div>
						</div>
					</ProjectCard>

					<ProjectCard link="https://like-period-e24.notion.site/Olitor-UW-School-of-Nursing-094630a0cc714395905ad675631a6c4f" newTab={true}>
						<div className="flex flex-col gap-4 h-full">
							<div className="flex flex-row gap-2 justify-between items-start">
								<p className="text-lg font-light flex-1">Helping the elderly adhere to mediterranean diet</p>
								<OpenNewWindow width={20} height={20} className="text-gray-500 flex-shrink-0" />
							</div>
							<div className="relative w-full flex-1 flex flex-col items-end">
								<Image src="/thumbnails/olitor.png" alt="Olitor" fill className="object-contain object-bottom" />
							</div>
						</div>
					</ProjectCard>

					<ProjectCard link="https://like-period-e24.notion.site/Contentserv-171b41fa91b645c3b1dcfaf48dfffc18" newTab={true}>
						<div className="flex flex-col gap-4 h-full">
							<div className="flex flex-row gap-2 justify-between items-start">
								<p className="text-lg font-light flex-1">Enterprise Software @ Contentserv</p>
								<OpenNewWindow width={20} height={20} className="text-gray-500 flex-shrink-0" />
							</div>
							<div className="relative w-full flex-1 flex flex-col items-end">
								<Image src="/thumbnails/contentserv.png" alt="Contentserv" fill className="object-contain object-bottom" />
							</div>
						</div>
					</ProjectCard>

				</section>

				{/* EXPLORE SECTION */}

				<div id="explore" className="w-full pt-32 mb-8 pb-2">
					<p className="text-3xl font-bold">Creative <span className="text-amber-500">Explore</span><span className="text-amber-700">~</span>ations</p>
				</div>

				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

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
						<div className="flex flex-col gap-4 h-full">
							<p className="text-lg font-light">Notes on <span className="font-bold">Humans, Computers</span> and their <span className="font-bold">Interaction</span></p>
							<div className="relative w-full flex-1">
								<Image src="/thumbnails/hci.jpg" alt="HCI Notes" fill className="object-contain" />
							</div>
						</div>
					</ProjectCard>

					{/* <ProjectCard link="/explore/code-abstraction">
							<p>What if we have variable code abstraction levels while using AI?</p>
						</ProjectCard> */}


					<ProjectCard link="/explore/shock-ghosts">
						<div className="w-full h-full relative">
							<div className="absolute top-0 left-0 font-light">
								<p className="text-lg mb-2 font-bold">Ghosts</p>
								<p className="text-md mb-2 ml-2">&</p>
								<p className="text-lg italic">Thunder</p>
							</div>
							<Image src="/thumbnails/ghosts.png" alt="Shock Ghosts" fill className="object-contain" />
						</div>
					</ProjectCard>

					<ProjectCard link="/explore/threejs-music">
						<div className="flex flex-col gap-4 h-full">
							<p className="text-lg"><span className="font-bold">Music</span><span className="font-light"> + Three.js</span></p>
							<div className="relative w-full flex-1 rounded-lg overflow-hidden">
								<Image src="/thumbnails/music.jpg" alt="Music + Three.js" fill className="object-cover rounded-lg" />
							</div>
						</div>
					</ProjectCard>

					<ProjectCard link="/explore/mediapipe-threejs">
						<div className="flex flex-col gap-4 h-full">
							<p className="text-lg"><span className="font-bold">MediaPipe</span><span className="font-light"> + Three.js</span></p>
							<div className="relative w-full flex-1 rounded-lg overflow-hidden">
								<Image src="/thumbnails/mediapipe.jpg" alt="Mediapipe + Three.js" fill className="object-cover rounded-lg object-right" />
							</div>
						</div>
					</ProjectCard>

					<ProjectCard link="https://www.instagram.com/sidomatic11/" newTab={true}>
						<div className="flex flex-col gap-4 h-full">
							<div className="relative w-full flex-1 overflow-hidden">
								<Image src="/thumbnails/visuals.png" alt="Three.js Visuals" fill className="object-cover" />
							</div>
						</div>
					</ProjectCard>


				</section>

				{/* ABOUT SECTION */}
				<div id="about" className="w-full pt-32 mb-8 pb-2">
					<p className="text-3xl font-bold"><span className="text-amber-500">About </span>Me</p>
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

						<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
							{/* Design Card */}
							<div className="p-4 bg-gray-100 rounded-lg border-1 border-gray-200">
								<h3 className="text-xl font-bold mb-4">Design</h3>
								<div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
									<video
										src="/about/design.mp4"
										autoPlay
										muted
										loop
										playsInline
										className="object-contain w-full h-full border-1 border-gray-300 rounded-lg"
									/>
								</div>
								<div className="space-y-4">
									<p className="text-gray-700 text-sm font-light">
										Versatile design from product strategy and concept design to mobile and web design.
									</p>
									<p className="text-gray-700 text-sm font-light leading-relaxed">
										Interactive prototypes, video prototypes, UI design, storyboards, user flows, wireframes, journey maps, service blueprints, UX research
									</p>
									<p className="text-gray-700 text-sm font-light">
										3+ years work experience in UX Design
									</p>
								</div>
							</div>

							{/* Technology Card */}
							<div className="p-4 bg-gray-100 rounded-lg border-1 border-gray-200">
								<h3 className="text-xl font-bold mb-4">Technology</h3>
								<div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
									<video
										src="/about/tech.mp4"
										autoPlay
										muted
										loop
										playsInline
										className="object-contain w-full h-full border-1 border-gray-300 rounded-lg"
									/>
								</div>
								<div className="space-y-4">
									<p className="text-gray-700 text-sm font-light">
										Have built complex front-end for enterprise product, physical prototyping with arduino, hardware interfacing with medical devices and more.
									</p>
									<p className="text-gray-700 text-sm font-light leading-relaxed">
										JavaScript, React.js, Three.js, Node, MediaPipe, Arduino etc.
									</p>
									<p className="text-gray-700 text-sm font-light">
										2+ years work experience in Software Development
									</p>
								</div>
							</div>

							{/* Art Card */}
							<div className="p-4 bg-gray-100 rounded-lg border-1 border-gray-200">
								<h3 className="text-xl font-bold mb-4">Art</h3>
								<div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
									<video
										src="/about/art.mp4"
										autoPlay
										muted
										loop
										playsInline
										className="object-contain w-full h-full border-1 border-gray-300 rounded-lg"
									/>
								</div>
								<div className="space-y-4">
									<p className="text-gray-700 text-sm font-light">
										Traditional mediums, to digital art and now also art with code.
									</p>
									<p className="text-gray-700 text-sm font-light">
										{`Lifelong hobby :D`}
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Interests Section */}
					<section className="w-full">
						<h2 className="text-3xl font-bold mb-8">
							I love working on...
						</h2>
						<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							<li className="bg-gray-100 rounded-lg p-6 border-1 border-gray-200">
								<h3 className="text-lg font-semibold mb-3">
									Prototyping & Proof of Concepts
								</h3>
								<p className="text-gray-600">
									Getting started from zero, and going from ambiguity to clarity.
								</p>
							</li>
							<li className="bg-gray-100 rounded-lg p-6 border-1 border-gray-200">
								<h3 className="text-lg font-semibold mb-3">
									Innovative Explorations
								</h3>
								<p className="text-gray-600">
									Always love to challenge the status quo.
								</p>
							</li>
							<li className="bg-gray-100 rounded-lg p-6 border-1 border-gray-200">
								<h3 className="text-lg font-semibold mb-3">
									Emerging Tech
								</h3>
								<p className="text-gray-600">
									I enjoy researching, keeping up and working with the latest in tech.
								</p>
							</li>
							<li className="bg-gray-100 rounded-lg p-6 border-1 border-gray-200">
								<h3 className="text-lg font-semibold mb-3">
									Social Impact
								</h3>
								<p className="text-gray-600">
									Real problems, real solutions.
								</p>
							</li>
							<li className="bg-gray-100 rounded-lg p-6 border-1 border-gray-200">
								<h3 className="text-lg font-semibold mb-3">
									Art with Tech
								</h3>
								<p className="text-gray-600">
									For the pure joy of it.
								</p>
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
