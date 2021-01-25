import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-8">
      <div className="col-start-2 col-span-6">
        <Component {...pageProps} />
      </div>
    </div>
    
  )
}

export default MyApp
