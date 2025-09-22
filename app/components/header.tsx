import Link from "next/link";
import Image from "next/image";
// import ExploreSwitch from "./ExploreSwitch";
import { ArrowLeft } from "iconoir-react";

export default function Header({ isProjectHeader }: { isProjectHeader?: boolean }) {


	return (
		<header className="w-full flex items-center justify-between h-16 bg-white fixed bottom-0 left-0 right-0 z-50 border-y border-gray-900 sm:top-0 ">

			<div className="w-full max-w-5xl mx-auto lg:w-[calc(100%-4rem)] h-full flex items-center justify-between">
				<div className="border-r lg:border-x border-gray-900 h-full w-16 flex items-center justify-center flex-shrink-0">
					<Link href="/" title={isProjectHeader ? "Back" : "Home"} className="h-full w-full flex items-center justify-center hover:bg-gray-200">
						{isProjectHeader ? (
							<ArrowLeft className="w-6 h-6" />
						) : (
							<Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-8 h-8" />
						)}
					</Link>
				</div>

				{/* {toggleExploreSolve && (
					<div className="flex-1 min-w-0 flex justify-center items-center h-full">
						<ExploreSwitch isExploreVisible={isExploreVisible || false} onClick={toggleExploreSolve} />
					</div>
				)} */}

				{!isProjectHeader && (
					<div className="flex items-center h-full w-full sm:w-auto">
						<div className="sm:border-l border-gray-900 h-full flex-1 sm:w-fit sm:flex-none flex items-center justify-center flex-shrink-0 hover:bg-gray-200">
							<Link href="/#work" title="Work" className="h-full w-full flex items-center justify-center px-4 sm:px-6">work</Link>
						</div>

						{/* <div className="border-l border-gray-900 h-full flex-1 sm:w-fit sm:flex-none flex items-center justify-center flex-shrink-0 hover:bg-gray-200">
							<Link href="/#explore" title="Explore" className="h-full w-full flex items-center justify-center px-4 sm:px-6">explore</Link>
						</div> */}

						<div className="border-l border-gray-900 h-full flex-1 sm:w-fit sm:flex-none flex items-center justify-center flex-shrink-0 hover:bg-gray-200">
							<Link href="/#about" title="About" className="h-full w-full flex items-center justify-center px-4 sm:px-6">about</Link>
						</div>

						<div className="border-l lg:border-x border-gray-900 h-full flex-1 sm:w-fit sm:flex-none flex items-center justify-center flex-shrink-0 hover:bg-gray-200">
							<Link href="https://drive.google.com/file/d/1LTnv9bKLkjsilegSi3ngFTEiwMaeAWn-/view" target="_blank" rel="noopener noreferrer" title="CV" className="h-full w-full flex items-center justify-center px-4 sm:px-6">cv</Link>
						</div>
					</div>
				)}
			</div>

		</header>
	);
}
