import Image from "next/image";
import LeftWrapper from "../UI/LeftWrapper";

export default function Info() {
  return (
    <LeftWrapper>
      <Image
        src="/images/profile.png"
        alt="profile"
        width={130}
        height={200}
        className="mx-auto"
      />
      <div className="flex items-center justify-around border border-x-gray-300 rounded-md">
        <p>TODAY IS... </p>
        <p>행복</p>
      </div>
      <p>
        안녕하세요!
        <br />
        저의 포트폴리오 방문을 <br />
        환영합니다
      </p>
      <div>
        <p className="border-b-2">▶ HISTORY</p>
        <p>고민경 (Ko Minkyung)</p>
        <p className="text-orange-600">komg00@naver.com</p>
      </div>
      <div>파도타기</div>
    </LeftWrapper>
  );
}
