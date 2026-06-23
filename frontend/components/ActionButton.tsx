type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  color: string;
};

export default function ActionButton({ label, href, onClick, color }: Props) {
  const classes = `flex items-center justify-center h-14 rounded-lg text-white ${color}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
