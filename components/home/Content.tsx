import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "../UI/ContentWrapper";

export default function Content() {
  return (
    <ContentWrapper>
      <p className="text-font-main text-xl font-DungGeunMo border-b-2">
        Mini room
      </p>
      <Image
        src="/images/miniroom.png"
        alt="miniroom"
        width={450}
        height={200}
        className="my-10 mx-auto"
      />
      <div className="w-full">
        <p className="text-font-main text-xl font-DungGeunMo border-b-2">
          What friends say
        </p>
        <div className="grid px-1 gap-2 p-2 text-base">
          <p>안녕하세요</p>
          <p>오늘도 화이팅</p>
        </div>
        <Link href="guest" className="text-sm underline text-blue px-1">
          방명록 남기러 가기
        </Link>
      </div>
    </ContentWrapper>
  );
}
