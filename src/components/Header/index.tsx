import Image from 'next/image';

interface Props {
  onClick: () => void;
}

export default function Header({ onClick }: Props): JSX.Element {
  return (
    <div>
      <Image src="/Brand.svg" alt="brand" width={50} height={50} />
      <button onClick={onClick}>Theme</button>
    </div>
  );
}
