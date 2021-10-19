import '../style/header.scss'

interface Props {
  title: string
}

function Header(props: Props) {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">{props.title}</h1>
      </header>
    </div>
  )
}

export default Header
