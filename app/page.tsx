"use client";

import Image from "next/image";
import Header from "./components/header";
import { useState, useEffect } from "react";
import ProjectCard from "./components/project-card";
import { useSearchParams } from 'next/navigation';

export default function Home() {
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

	return (
		<div>

			<Header toggleExploreSolve={toggleExploreSolve} isExploreVisible={isExploreVisible} />
			<main className="w-full py-16 px-8">

				{isExploreVisible ? (

					// EXPLORE SECTION
					<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

						<ProjectCard link="/explore/voice-typing">
							<p>Can voice typing be better?</p>
						</ProjectCard>

						<ProjectCard link="/explore/vertical-calendar">
							<p>Exploring Vertical Calendar</p>
						</ProjectCard>

						<ProjectCard link="/explore/hci-notes">
							<p>Notes on Humans, Computers and their Interaction</p>
						</ProjectCard>

						<ProjectCard link="/explore/threejs-music">
							<p>Music + Three.js</p>
						</ProjectCard>

						<ProjectCard link="/explore/mediapipe-threejs">
							<p>Mediapipe + Three.js</p>
						</ProjectCard>

						<ProjectCard link="/explore/threejs-visuals">
							<p>Three.js Visuals & Interactivity</p>
						</ProjectCard>

						<ProjectCard link="/explore/shock-ghosts">
							<p>Shock all ghosts!</p>
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

						<ProjectCard link="/solve/data-platform">
							<p>What is the future of our data platform? — a data company</p>
						</ProjectCard>

						{showNDAProjects && (
							<ProjectCard link="/solve/ihh-poc">
							</ProjectCard>
						)}

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

		</div>
	);
}
