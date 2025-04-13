"use client";

import Image from "next/image";
import Header from "./components/header";
import { useState, useEffect } from "react";
import ProjectCard from "./components/project-card";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import { MicrophoneSpeaking } from "iconoir-react";
import { motion } from "framer-motion";

// Client component that uses useSearchParams
function HomeContent() {
	const [isExploreVisible, setIsExploreVisible] = useState(false);
	const [showNDAProjects, setShowNDAProjects] = useState(true);
	const searchParams = useSearchParams();

	// Use useEffect to safely handle localStorage and sessionStorage after component mounts
	useEffect(() => {
		const storedValue = localStorage.getItem('isExploreVisible');
		if (storedValue) {
			setIsExploreVisible(storedValue === 'true');
		}

		// Handle NDA projects visibility
		if (searchParams.get('password') === 'CreativeLab' && !sessionStorage.getItem('showNDAProjects')) {
			sessionStorage.setItem('showNDAProjects', 'true');
		}
		setShowNDAProjects(sessionStorage.getItem('showNDAProjects') === 'true');
	}, [searchParams]);

	const toggleExploreSolve = () => {
		setIsExploreVisible(!isExploreVisible);
		// Update localStorage with the new state
		if (typeof window !== 'undefined') {
			localStorage.setItem('isExploreVisible', (!isExploreVisible).toString());
		}
	}

	const imageSrc = isExploreVisible ? '/footer/mountains.svg' : '/footer/city.svg';

	return (
		<div className="w-full">
			<Header toggleExploreSolve={toggleExploreSolve} isExploreVisible={isExploreVisible} />
			<main className="w-full pt-16 px-8 lg:px-0">
				{isExploreVisible ? (
					// EXPLORE SECTION
					<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

						<ProjectCard link="/explore/voice-typing">
							<div className="flex flex-col h-full">
								<div className="w-full">
									<div className="w-full flex flex-wrap gap-y-2 items-start">
										{Array.from({ length: 16 }).map((_, i) => (
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
						</ProjectCard>

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
				) : (
					// SOLVE SECTION
					<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

						<ProjectCard link="/solve/ihh-poc">
							<p className="text-md">hardware integration, data visualization</p>
							<Image src="/thumb-ihh.jpg" alt="IHH POC" width={400} height={400} className="h-1/2 object-contain" />
							<p className="text-lg">Real time patient monitoring.</p>
						</ProjectCard>

						{showNDAProjects && (
							<ProjectCard link="/solve/ihh-poc">
								<p>Defining & Communicating an NFT based loyalty program</p>
							</ProjectCard>
						)}

						<ProjectCard link="/solve/data-platform">
							<p>What is the future of our data platform? — a data company</p>
						</ProjectCard>

						<ProjectCard link="/solve/data-platform">
							<p>SVB Developer Portal Redesign</p>
						</ProjectCard>

						<ProjectCard link="https://like-period-e24.notion.site/XR-Multitasking-Design-Guide-7d7b5e393bd34aa6a81090839dd869c0" newTab={true}>
							<p>How might we manage multiple apps in XR?</p>
							<p>2020</p>
						</ProjectCard>

						<ProjectCard link="https://like-period-e24.notion.site/Olitor-UW-School-of-Nursing-094630a0cc714395905ad675631a6c4f" newTab={true}>
							<p>Helping the elderly adhere to mediterranean diet</p>
							<p>2021</p>
						</ProjectCard>

						<ProjectCard link="https://like-period-e24.notion.site/Contentserv-171b41fa91b645c3b1dcfaf48dfffc18" newTab={true}>
							<p>Enterprise Software Development @ Contentserv</p>
							<p>2018</p>
						</ProjectCard>

					</section>
				)}
			</main>

			<div className="absolute bottom-[-1px] left-0 w-full h-full z-[-1]">
				<Image
					src={imageSrc}
					alt=""
					fill
					className="w-full h-auto object-contain object-bottom"
					priority
				/>
			</div>

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
