'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const currentPath = usePathname();

  return (
    <div className="relative mt-40 font-DungGeunMo font-thin text-center text-base">
      <Link
        href="/"
        className={`absolute w-20 -right-9 py-1.5 border rounded-tr-lg rounded-br-lg ${
          currentPath === "/"
            ? "bg-white border-border-content"
            : "bg-font-main text-white border-border-main"
        }`}
      >
        홈
      </Link>
      <Link
        href="/profile"
        className={`absolute w-20 top-12 -right-9 py-1.5 border rounded-tr-lg rounded-br-lg ${
          currentPath === "/profile"
            ? "bg-white border-border-content"
            : "bg-font-main text-white border-border-main"
        }`}
      >
        프로필
      </Link>
      <Link
        href="/project"
        className={`absolute w-20 top-24 -right-9 py-1.5 border rounded-tr-lg rounded-br-lg ${
          currentPath === "/project"
            ? "bg-white border-border-content"
            : "bg-font-main text-white border-border-main"
        }`}
      >
        프로젝트
      </Link>
      <Link
        href="/music"
        className={`absolute w-20 top-36 -right-9 py-1.5 border rounded-tr-lg rounded-br-lg ${
          currentPath === "/music"
            ? "bg-white border-border-content"
            : "bg-font-main text-white border-border-main"
        }`}
      >
        쥬크박스
      </Link>
      <Link
        href="/guest"
        className={`absolute w-20 top-48 -right-9 py-1.5 border rounded-tr-lg rounded-br-lg ${
          currentPath === "/guest"
            ? "bg-white border-border-content"
            : "bg-font-main text-white border-border-main"
        }`}
      >
        방명록
      </Link>
    </div>
  );
}
