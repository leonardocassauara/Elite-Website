import Image from "next/image";

type AppProps = {
  width: number;
  height: number;
};

export default function Logo({ width, height, ...props }: AppProps) {
  return (
    <>
      <Image
        src="/img/Logo.png"
        width={width}
        height={height}
        alt="Logo da Elite Auto Center"
        {...props}
      />
    </>
  );
}
