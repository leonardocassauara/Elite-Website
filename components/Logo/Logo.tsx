import Image from "next/image";

type AppProps = {
  width: number;
  height: number;
  priority?: boolean;
};

export default function Logo({ width, height, priority }: AppProps) {
  return (
    <>
      <Image
        src="/img/Logo.png"
        width={width}
        height={height}
        alt="Logo da Elite Auto Center"
        priority={priority}
      />
    </>
  );
}
