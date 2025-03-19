"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import { useState, useEffect } from "react";
import ProjectCard from "./components/project-card";
export default function Home() {

	const [isExploreVisible, setIsExploreVisible] = useState(false);

	// Use useEffect to safely handle localStorage after component mounts
	useEffect(() => {
		const storedValue = localStorage.getItem('isExploreVisible');
		if (storedValue) {
			setIsExploreVisible(storedValue === 'true');
		}
	}, []);

	const toggleExploreSolve = () => {
		setIsExploreVisible(!isExploreVisible);
		// Update localStorage with the new state
		if (typeof window !== 'undefined') {
			localStorage.setItem('isExploreVisible', (!isExploreVisible).toString());
		}
	}

	return (
		<div className=" bg-blue-200 ">

			<Header toggleExploreSolve={toggleExploreSolve} isExploreVisible={isExploreVisible} />
			<main className="w-full">

				{isExploreVisible ? (

					// EXPLORE SECTION
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

						<ProjectCard title="Three Music" link="/explore/three-music">
							<p>Three Music description</p>
						</ProjectCard>

						<ProjectCard title="Three Visuals" link="/explore/three-visuals">
							<p>Three Visuals description</p>
						</ProjectCard>

					</section>
				) : (

					// SOLVE SECTION
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] row-start-2 items-center sm:items-start">

						<ProjectCard title="IHH POC" link="/solve/ihh-poc">
							<p>IHH POC description</p>
						</ProjectCard>

						<ProjectCard title="What will the future of our data platform look like?" link="/solve/ihh-poc">
						</ProjectCard>

						<ProjectCard title="Improve the developer experience of our portal" link="/solve/ihh-poc">
						</ProjectCard>

						<ProjectCard title="What can multi-app management in XR look like?" link="/solve/ihh-poc">
						</ProjectCard>

						<ProjectCard title="Helping the elderly adhere to mediterranean diet" link="/solve/ihh-poc">
						</ProjectCard>

						<ProjectCard title="Enterprise Software Development @ Contentserv" link="/solve/ihh-poc">
						</ProjectCard>

					</section>
				)}


			</main>

		</div>
	);
}
