import Link from "next/link";

export default function Navigation() {
  return (
    <div className="relative mt-40 font-DungGeunMo font-thin text-center text-base">
      <Link
        href="/"
        className="absolute w-20 -right-9 py-1.5  bg-white border border-border-content rounded-tr-lg rounded-br-lg"
      >
        홈
      </Link>
      <Link
        href="/profile"
        className="absolute w-20 top-12 -right-9 py-1.5 text-white bg-font-main border border-border-main rounded-tr-lg rounded-br-lg"
      >
        프로필
      </Link>
      <Link
        href="/project"
        className="absolute w-20 top-24 -right-9 py-1.5 text-white bg-font-main border border-border-main rounded-tr-lg rounded-br-lg"
      >
        프로젝트
      </Link>
      <Link
        href="/music"
        className="absolute w-20 top-36 -right-9 py-1.5 text-white bg-font-main border border-border-main rounded-tr-lg rounded-br-lg"
      >
        쥬크박스
      </Link>
      <Link
        href="/guest"
        className="absolute w-20 top-48 -right-9 py-1.5 text-white bg-font-main border border-border-main rounded-tr-lg rounded-br-lg"
      >
        방명록
      </Link>
    </div>
  );
}
