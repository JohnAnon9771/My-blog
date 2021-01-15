import { Button } from './styles';

interface Props {
  IsOpen: () => void;
  className?: string;
}

export default function ButtonToggle({
  IsOpen,
  className,
}: Props): JSX.Element {
  return (
    <Button
      className={className}
      size={22}
      color="var(--color-text-variant)"
      onClick={() => IsOpen()}
    />
  );
}
