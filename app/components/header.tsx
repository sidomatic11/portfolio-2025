import Link from "next/link";
import ExploreSwitch from "./ExploreSwitch";
import { Home, ArrowLeft, InfoCircle } from "iconoir-react";

export default function Header({ toggleExploreSolve, isExploreVisible, isProjectHeader }: { toggleExploreSolve?: () => void, isExploreVisible?: boolean, isProjectHeader?: boolean }) {


	return (
		<header className="w-full flex items-center justify-between h-16 bg-white fixed bottom-0 left-0 right-0 z-50 shadow-[inset_0_1px_0_0_black] sm:top-0 sm:shadow-[0_1px_0_0_black]">

			<div className="w-full max-w-5xl mx-auto h-full flex items-center justify-between lg:px-8">
				<div className="shadow-[inset_-1px_0_0_0_black,-1px_0_0_0_black] h-full w-16 flex items-center justify-center flex-shrink-0">
					<Link href="/" className="h-full w-full flex items-center justify-center">
						{isProjectHeader ? <ArrowLeft className="w-6 h-6" /> : <Home className="w-6 h-6" />}
					</Link>
				</div>

				{toggleExploreSolve && (
					<div className="flex-1 min-w-0 flex justify-center items-center h-full">
						<ExploreSwitch isExploreVisible={isExploreVisible || false} onClick={toggleExploreSolve} />
					</div>
				)}

				<div className="shadow-[1px_0_0_0_black,inset_1px_0_0_0_black] h-full w-16 flex items-center justify-center flex-shrink-0">
					{!isProjectHeader && <Link href="/about" className="h-full w-full flex items-center justify-center"><InfoCircle className="w-6 h-6" /></Link>}
				</div>
			</div>

		</header>
	);
}
