import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
        body{
          background-color: #d2e8ff;  
        }
      `}
    </style>
  </>
  )
}

export default MyApp
