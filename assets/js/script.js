function main_title() {
  let main_title = document.getElementById("main_title")

  if (window.innerWidth <= 768) {
    main_title.innerHTML = "<strong>IFPB-CG</strong> POP-CG"
  }
}