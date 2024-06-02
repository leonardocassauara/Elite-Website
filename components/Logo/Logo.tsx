import Image from "next/image";
import Link from "next/link";

type AppProps = {
  width: number;
  height: number;
  priority?: boolean;
};

export default function Logo({ width, height, priority }: AppProps) {
  return (
    <>
      <Link href="/">
        <Image
          src="/img/Logo.png"
          width={width}
          height={height}
          alt="Logo da Elite Auto Center"
          priority={priority}
        />
      </Link>
    </>
  );
}
