interface HeroLabelProps {
  className?: string;
  icon?: React.ReactNode;
  label: string;
}

export default function HeroLabel({ className, icon, label }: HeroLabelProps) {
  return (
    <div className={`hero__label ${className}`}>
      {icon}
      <h3 className="leading-0">{label}</h3>
    </div>
  );
}
