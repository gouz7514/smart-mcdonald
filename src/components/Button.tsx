import '../style/style.scss'

interface Props {
  color?: string
  textColor?: string
  text?: string
  className: string
  onClick?: any
  name?: string
}

function Button(props: Props & React.HTMLAttributes<HTMLButtonElement>) {
  const onClickButton = (name:string):void => console.log(`Hello ${props.name}`)

  return (
    <div>
      <button
        style={{ backgroundColor: props.color, color: props.textColor }}
        className={ props.className }
        onClick={(event: any) => {
          onClickButton('')
        }}
      >
        <span>{ props.text }</span>
      </button>
    </div>
  )
}

export default Button
