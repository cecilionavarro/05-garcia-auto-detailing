import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    dark?: boolean;
}
const Section = ({children, dark = false}: Props) => {
  return (
    <div className={`px-10 py-20 ${dark ? "bg-dark text-light": "bg-light text-dark"}`}>{children}</div>
  )
}

export default Section