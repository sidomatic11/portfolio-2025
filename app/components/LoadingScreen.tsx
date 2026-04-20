"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [visible, setVisible] = useState(isHomePage);
  const logoControls = useAnimation();
  const overlayControls = useAnimation();
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHomePage) return;

    const run = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      const headerLogo = document.querySelector("[data-header-logo]");
      const loadingLogo = logoRef.current;

      if (headerLogo && loadingLogo) {
        const targetRect = headerLogo.getBoundingClientRect();
        const sourceRect = loadingLogo.getBoundingClientRect();

        const x =
          targetRect.left +
          targetRect.width / 2 -
          (sourceRect.left + sourceRect.width / 2);
        const y =
          targetRect.top +
          targetRect.height / 2 -
          (sourceRect.top + sourceRect.height / 2);
        const scale = targetRect.width / sourceRect.width;

        await logoControls.start({
          x,
          y,
          scale,
          transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
        });
      }

      await overlayControls.start({
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      setVisible(false);
    };

    run();
  }, [isHomePage, logoControls, overlayControls]);

  if (!isHomePage || !visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <motion.div
        animate={overlayControls}
        className="absolute inset-0 bg-[#F8FAFC]"
      />
      <motion.div
        ref={logoRef}
        animate={logoControls}
        style={{ originX: 0.5, originY: 0.5, position: "relative", zIndex: 1 }}
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={192}
          height={192}
          className="h-48 w-48"
          priority
        />
      </motion.div>
    </div>
  );
}
