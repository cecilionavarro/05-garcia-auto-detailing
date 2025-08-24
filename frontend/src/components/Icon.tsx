interface Props {
  variant?: "light" | "dark";
}
const Icon = ({ variant = "light" }: Props) => {
  const isDark = variant === "dark";
  const borderClass = isDark && "border border-light";
  return (
    <span className="inline-grid shrink-0 align-middle grid-cols-4 grid-rows-2">
      <span
        className={`w-[var(--square-size)] h-[var(--square-size)] bg-dark col-start-2 row-start-1 ${borderClass}`}
      />
      <span
        className={`w-[var(--square-size)] h-[var(--square-size)] bg-brand col-start-4 row-start-1 ${borderClass}`}
      />
      <span
        className={`w-[var(--square-size)] h-[var(--square-size)] bg-accent col-start-1 row-start-2 ${borderClass}`}
      />
      <span
        className={`w-[var(--square-size)] h-[var(--square-size)] bg-dark col-start-3 row-start-2 ${borderClass}`}
      />
    </span>
  );
};

export default Icon;
