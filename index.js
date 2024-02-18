var user = {
  name: "Dilshodbek",
  surname: "Makhmudov",
  age: 25,
  nationality: "Uzbekistan",
};

// 1st Method with if

function info(operation) {
  if (operation.method === "create") {
    user[operation.key] = operation.value;
  } else if (operation.method === "update") {
    user[operation.key] = operation.value;
  } else if (operation.method === "delete") {
    delete user[operation.key];
  }
  console.log(user);
}

info({
  method: "create",
  key: "Current city",
  value: "South Korea, Daejeon",
});

info({
  method: "update",
  key: "age",
  value: 26,
});

info({
  method: "delete",
  key: "Current city",
});

// 2nd Method with switch

// function info(edit) {
//   switch (edit.method) {
//     case "create":
//       user[edit.key] = edit.value;
//     case "update":
//       user.age = 26;
//       break;
//     case "delete":
//       delete user.nationality;
//       break;
//   }
// }

// info({ method: "create", key: "Nickname", value: "David" });
// info({ method: "update" });
// info({ method: "delete" });

// console.log(user);
