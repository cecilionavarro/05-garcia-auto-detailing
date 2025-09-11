import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    id?: string;
    dark?: boolean;
}
const Section = ({children, id, dark = false}: Props) => {
  return (
    <div data-header-theme={dark ? "dark" : "light"} id={id} className={`px-10 py-20 ${dark ? "bg-dark text-light": "bg-light text-dark"}`}>{children}</div>
  )
}

export default Section