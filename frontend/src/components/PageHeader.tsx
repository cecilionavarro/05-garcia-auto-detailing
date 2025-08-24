import Icon from "./Icon"

interface PageHeaderProps {
    title: string;
}

const PageHeader = ({title}: PageHeaderProps) => {
  return (
    <div className="px-10 py-20 pt-40">
        <h1 className="col-span-full flex flex-row items-center font-bold text-8xl pb-10">
        {title}
        <div className="flex ml-5 align-middle">
          <Icon />
        </div>
      </h1>
      
    </div>
    
  )
}

export default PageHeader