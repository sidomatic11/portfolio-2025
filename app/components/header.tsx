import Link from "next/link";
import ExploreSwitch from "./ExploreSwitch";

export default function Header({ toggleExploreSolve, isExploreVisible, isProjectHeader }: { toggleExploreSolve?: () => void, isExploreVisible?: boolean, isProjectHeader?: boolean }) {


	return (
		<header className="w-full flex items-center justify-between h-16 bg-white sm:relative sm:bottom-auto fixed bottom-0 shadow-[inset_0_1px_0_0_black] sm:shadow-[inset_0_-1px_0_0_black]">

			<div className="shadow-[inset_-1px_0_0_0_black,inset_1px_0_0_0_black] h-full w-16 flex items-center justify-center flex-shrink-0">
				<Link href="/" className="h-full w-full flex items-center justify-center">{isProjectHeader ? "Back" : "Home"}</Link>
			</div>

			{toggleExploreSolve && (
				<div className="flex-1 min-w-0 flex justify-center items-center h-full">
					<ExploreSwitch isExploreVisible={isExploreVisible || false} onClick={toggleExploreSolve} />
				</div>
			)}

			<div className="shadow-[inset_-1px_0_0_0_black,inset_1px_0_0_0_black] h-full w-16 flex items-center justify-center flex-shrink-0">
				{!isProjectHeader && <Link href="/about" className="h-full w-full flex items-center justify-center">About</Link>}
			</div>

		</header>
	);
}
