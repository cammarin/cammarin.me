type MainProps = JSX.IntrinsicElements['main']

const Main = ({ className = '', ...htmlMainProps }: MainProps) => {
  return <main className={`${className} pt-14 px-3`} {...htmlMainProps} />
}

export default Main
