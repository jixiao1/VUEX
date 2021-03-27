export default {
  tIMEout (...rest) {
    console.log(rest)
    setTimeout(() => {
      console.log('鄢吃打印')
    }, 1000)
  }
}
