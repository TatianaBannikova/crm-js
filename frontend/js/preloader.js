import { svgLoader } from "./svgHTML.js";
export function createPreloader() {
  const preloderContainer = document.createElement('div');
  const preloaderCircle = document.createElement('div');
  //
  preloderContainer.classList.add('main__preloader');
  preloaderCircle.id = 'loader';
  //
  preloaderCircle.innerHTML = svgLoader;
  //
  preloderContainer.append(preloaderCircle);
  return preloderContainer;
}
const tableBody = document.querySelector(".table__tbody");
tableBody.append(createPreloader());
