import Link from "next/link";

export default function Header({ toggleExploreSolve, isExploreVisible, isProjectHeader }: { toggleExploreSolve?: () => void, isExploreVisible?: boolean, isProjectHeader?: boolean }) {


	return (
		<header className="w-full flex gap-[24px] flex-wrap items-center justify-between h-16 bg-white border-b border-black sm:border-b sm:relative sm:bottom-auto fixed bottom-0 border-t">

			<div className="border-x border-black h-full w-16 flex items-center justify-center">
				<Link href="/" className="h-full w-full flex items-center justify-center">{isProjectHeader ? "Back" : "Home"}</Link>
			</div>

			{toggleExploreSolve && (
				<div className="flex gap-4 cursor-pointer grow justify-center items-center h-full" onClick={toggleExploreSolve}>
					<div className={isExploreVisible ? "font-bold" : ""}>Explore</div>
					<div>{isExploreVisible ? "<" : ">"}</div>
					<div className={!isExploreVisible ? "font-bold" : ""}>Solve</div>
				</div>
			)}

			<div className="border-x border-black h-full w-16 flex items-center justify-center">
				{!isProjectHeader && <Link href="/about" className="h-full w-full flex items-center justify-center">About</Link>}
			</div>

		</header>
	);
}
