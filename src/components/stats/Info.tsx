type Props = {
    definition: string
    link: string
    title: string
  }

  export const Info = ({ definition, link, title}: Props) => {
      return (
          <div>
            <div className="columns-1 justify-left m-2 text-base text-white">
                {definition}
            </div>
            <div className="columns-1 justify-left m-2 text-base text-blue-400">
                <a href={link}>{title}</a>
            </div>
          </div>
      )


}