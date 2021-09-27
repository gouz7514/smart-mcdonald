interface Props {
  color: string
  text?: string
}

function Button({ color, text }: Props) {
  return (
    <div>
      <button style={{ backgroundColor: color }}>
        <span>{ text }</span>
      </button>
    </div>
  )
}

export default Button
