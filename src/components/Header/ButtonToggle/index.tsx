import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  IsOpen: () => void;
}

export default function ButtonToggle({ IsOpen }: Props): JSX.Element {
  return (
    <AiOutlineMenu
      size={22}
      color="var(--color-text-variant)"
      onClick={() => IsOpen()}
    />
  );
}
