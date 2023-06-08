import Image from "next/image";
import { FaTypo3 } from "react-icons/fa";
import ts from "typescript";

export default function MyProflePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile-image.jpeg"
        width={200}
        height={200}
        alt="hwangblood"
        priority={true}
      />
    </section>
  );
}
