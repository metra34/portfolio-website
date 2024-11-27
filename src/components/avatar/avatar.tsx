import Image from "next/image";

export function Avatar({
  alt,
  src,
  type,
  className = "",
}: {
  alt: string;
  src: string;
  type: string;
  className?: string;
}) {
  const clssName = `rounded-full border-2 border-zinc-400 p-1 ${className}`;
  return (
    <span className={clssName}>
      <Image src={src} alt={alt} width="64" height="64" typeof={type} />
    </span>
  );
}
