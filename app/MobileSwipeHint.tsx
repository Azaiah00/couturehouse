import { MoveHorizontal } from "lucide-react";

type MobileSwipeHintProps = {
  label?: string;
};

export default function MobileSwipeHint({ label = "Swipe to see more" }: MobileSwipeHintProps) {
  return (
    <p className="mobile-swipe-hint">
      <MoveHorizontal aria-hidden="true" />
      <span>{label}</span>
    </p>
  );
}
