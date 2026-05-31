import DecorativeRoseImage from "./DecorativeRoseImage";

type FloralAccentProps = {
  className?: string;
  variant:
    | "pinkBouquet"
    | "whiteBouquet"
    | "blueLily"
    | "orangeLily"
    | "pinkWrappedBouquet"
    | "redWrappedBouquet"
    | "floralCornerSpray"
    | "whiteLilies"
    | "pinkLilyBouquet";
};

export default function FloralAccent({ className = "", variant }: FloralAccentProps) {
  return (
    <div className={`pointer-events-none absolute z-0 hidden md:block opacity-70 ${className}`}>
      <DecorativeRoseImage variant={variant} className="w-full" />
    </div>
  );
}
