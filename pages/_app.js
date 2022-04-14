import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
        body{
          background-color: black;
          color: white  
        }
      `}
    </style>
  </>
  )
}

export default MyApp
