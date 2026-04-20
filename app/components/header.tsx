import Link from "next/link";
import Image from "next/image";
// import ExploreSwitch from "./ExploreSwitch";
import { ArrowLeft } from "iconoir-react";

export default function Header({
  isProjectHeader,
}: {
  isProjectHeader?: boolean;
}) {
  return (
    <header className="bg-background-level-1 border-border-level-1 fixed right-0 bottom-0 left-0 z-50 flex h-16 w-full items-center justify-between border-y sm:top-0">
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between lg:w-[calc(100%-4rem)]">
        <div className="border-border-level-1 bg-background-level-1 flex h-full w-16 flex-shrink-0 items-center justify-center border-r lg:border-x">
          <Link
            href={isProjectHeader ? "/#work" : "/#home"}
            title={isProjectHeader ? "Back" : "Home"}
            className="flex h-full w-full items-center justify-center"
          >
            {isProjectHeader ? (
              <ArrowLeft className="h-6 w-6" />
            ) : (
              <div data-header-logo>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
            )}
          </Link>
        </div>

        {/* {toggleExploreSolve && (
					<div className="flex-1 min-w-0 flex justify-center items-center h-full">
						<ExploreSwitch isExploreVisible={isExploreVisible || false} onClick={toggleExploreSolve} />
					</div>
				)} */}

        {!isProjectHeader && (
          <div className="flex h-full w-full items-center sm:w-auto">
            <div className="border-border-level-1 bg-background-level-1 flex h-full flex-1 flex-shrink-0 items-center justify-center sm:w-fit sm:flex-none sm:border-l">
              <Link
                href="/#work"
                title="Work"
                className="flex h-full w-full items-center justify-center px-4 sm:px-6"
              >
                work
              </Link>
            </div>

            {/* <div className="border-border-level-1 bg-background-level-1 border-l h-full flex-1 sm:w-fit sm:flex-none flex items-center justify-center flex-shrink-0">
							<Link href="/#explore" title="Explore" className="h-full w-full flex items-center justify-center px-4 sm:px-6">explore</Link>
						</div> */}

            <div className="border-border-level-1 bg-background-level-1 flex h-full flex-1 flex-shrink-0 items-center justify-center border-l sm:w-fit sm:flex-none">
              <Link
                href="/#about"
                title="About"
                className="flex h-full w-full items-center justify-center px-4 sm:px-6"
              >
                about
              </Link>
            </div>

            <div className="border-border-level-1 bg-background-level-1 flex h-full flex-1 flex-shrink-0 items-center justify-center border-l sm:w-fit sm:flex-none lg:border-x">
              <Link
                href="https://drive.google.com/file/d/1LTnv9bKLkjsilegSi3ngFTEiwMaeAWn-/view"
                target="_blank"
                rel="noopener noreferrer"
                title="CV"
                className="flex h-full w-full items-center justify-center px-4 sm:px-6"
              >
                cv
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
