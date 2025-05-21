import Link from "next/link";
import ExploreSwitch from "./ExploreSwitch";
import { Home, ArrowLeft, InfoCircle } from "iconoir-react";

export default function Header({ toggleExploreSolve, isExploreVisible, isProjectHeader }: { toggleExploreSolve?: () => void, isExploreVisible?: boolean, isProjectHeader?: boolean }) {


	return (
		<header className="w-full flex items-center justify-between h-16 bg-white fixed bottom-0 left-0 right-0 z-50 border-y border-gray-900 sm:top-0 ">

			<div className="w-full max-w-5xl mx-auto lg:w-[calc(100%-4rem)] h-full flex items-center justify-between">
				<div className="border-r lg:border-x border-gray-900 h-full w-16 flex items-center justify-center flex-shrink-0">
					<Link href="/" className="h-full w-full flex items-center justify-center hover:bg-gray-200">
						{isProjectHeader ? <ArrowLeft className="w-6 h-6" /> : <Home className="w-6 h-6" />}
					</Link>
				</div>

				{toggleExploreSolve && (
					<div className="flex-1 min-w-0 flex justify-center items-center h-full">
						<ExploreSwitch isExploreVisible={isExploreVisible || false} onClick={toggleExploreSolve} />
					</div>
				)}

				<div className="border-l lg:border-x border-gray-900 h-full w-16 flex items-center justify-center flex-shrink-0">
					{!isProjectHeader && <Link href="/about" className="h-full w-full flex items-center justify-center hover:bg-gray-200"><InfoCircle className="w-6 h-6" /></Link>}
				</div>
			</div>

		</header>
	);
}
