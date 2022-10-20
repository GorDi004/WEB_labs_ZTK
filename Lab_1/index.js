const app = document.getElementById("app");
const users = [
    {
      content: "Frontend Misha",
      id: "fe",
      relations: ["pm", "be", "ds"],
    },
    {
      content: "Design Pasha",
      id: "ds",
      relations: ["pm", "fe"],
    },
    {
      content: "Project Manager Sanya",
      id: "pm",
      relations: ["ba", "fe", "be", "ds"],
    },
    {
      content: "Backend Grisha",
      id: "be",
      relations: ["pm", "fe", "ba"],
    },
    {
      content: "Business Analyst Sveta",
      id: "ba",
      relations: ["pm"],
    },
  ];
  
const ul = document.createElement("ul");
const CreateLi = () =>{
  for (const item of users) {
    const li = document.createElement("li");
    li.id = item.id;
    li.classList.add("static");
    li.addEventListener("click", OnClickLi.bind(null, li, item.relations));
    li.textContent = item.content;
    ul.appendChild(li);
  }
  app.appendChild(ul);
}
function OnClickLi(element, arrId) {
  if (element.classList.contains("en")) {
    for (li of ul.children) 
      li.classList.remove("en", "active");
  } else {
    for (let li of ul.children) {
      li.classList.remove("active", "en");
      element.classList.add("en");
      for (let id of arrId) {
        if (li.id === id)
          li.classList.add("active");
      }
    }
  }
}
CreateLi();