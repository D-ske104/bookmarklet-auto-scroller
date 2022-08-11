// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// ==/ClosureCompiler==

// ADD YOUR CODE HERE
javascript:(() => {
  const num = window.prompt("0.05秒ごとにスクロールするpx（オススメ: 1～10）", 10)

  function scroller() {
    window.scrollBy({
      top: num,
      behavior: "smooth"
    })
  }

  let intervalId = setInterval(scroller, 50, num)

  function clearScroll() {
    window.clearInterval(intervalId)
    document.removeEventListener("wheel", clearScroll)
  }

  document.addEventListener("wheel", clearScroll)
})()
