type MainProps = JSX.IntrinsicElements['main']

const Main = ({ ...htmlMainProps }: MainProps) => {
  return <main {...htmlMainProps} />
}

export default Main
