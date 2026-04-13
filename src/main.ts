import "./style.css";

let sections = document.getElementsByClassName("section");
for (let section of sections) {
    const title = section.getElementsByClassName("title");
    title.item(0)?.addEventListener("click", () => {
        // hideAllSection(sections);
        if (section.classList.contains('active')) {
            section.classList.remove("active");
        } else {
            hideAllSection(sections)
            section.classList.add("active");
        }
        window.scrollTo(0, 0)
    });
}

const hideAllSection = (sections: HTMLCollectionOf<Element>) => {
    for (let section of sections) section.classList.remove("active");
};
