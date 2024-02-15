var user = {
  name: `Dilshodbek`,
  surname: `Makhmudov`,
  age: 25,
  nationality: `Uzbekistan`,
};

function order(update) {
  if ("create") console.log((user["Current city"] = `South Korea, Daejeon`));
  else if ("update") console.log((user.age = 26));
  else if ("delete") console.log(delete user.nationality);
  else console.log("Error");
}
order("update");
