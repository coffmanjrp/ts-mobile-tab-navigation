const contents = document.querySelectorAll(
  '.content'
) as NodeListOf<HTMLImageElement>;
const listItems = document.querySelectorAll(
  'nav ul li'
) as NodeListOf<HTMLElement>;

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});
