import Image from "next/image";
import Link from "next/link";

type AppProps = {
  width: number;
  height: number;
  priority?: boolean;
  clickable?: boolean;
};

export default function Logo({
  width,
  height,
  priority,
  clickable = true,
}: AppProps) {
  if (clickable)
    return (
      <Link href="/">
        <Image
          src="/img/Logo.png"
          width={width}
          height={height}
          alt="Logo da Elite Auto Center"
          priority={priority}
        />
      </Link>
    );

  return (
    <Image
      src="/img/Logo.png"
      width={width}
      height={height}
      alt="Logo da Elite Auto Center"
      priority={priority}
    />
  );
}
