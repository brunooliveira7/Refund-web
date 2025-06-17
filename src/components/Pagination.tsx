import { Button } from "./Button";
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex flex-1 items-center mt-6 justify-center gap-4">
      <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>
      <span className="text-gray-200 text-sm">
        {current}/{total}
      </span>
      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  );
}
