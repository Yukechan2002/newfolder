function label_create(tagname, attrname, attrvalue, content) {
  var label_ele = document.createElement(tagname);
  label_ele.setAttribute(attrname, attrvalue);
  label_ele.innerHTML = content;
  return label_ele;
}

function break_create() {
  var break_create = document.createElement("br");
  return break_create;
}
function input_create(inputtag, attrname, attrval, attrname1, attrval1) {
  var input_ele = document.createElement(inputtag);
  input_ele.setAttribute(attrname, attrval);
  input_ele.setAttribute(attrname1, attrval1);
  return input_ele;
}

function foo() {
  var data1 = document.getElementById("firstname").value;
  var data2 = document.getElementById("middlename").value;
  var data3 = document.getElementById("lastname").value;
  var data4 = document.getElementById("email").value;

  let data = document.createElement("div");
  let para1 = document.createElement("p");
  let para2 = document.createElement("p");
  let para3 = document.createElement("p");
  let para4 = document.createElement("p");

  para1.innerHTML = `${data1}`;
  para2.innerHTML = `${data2}`;
  para3.innerHTML = `${data3}`;
  para4.innerHTML = `${data4}`;

  data.append(para1, para2, para3, para4);
  document.body.append(data);
}

var firstname = label_create("label", "for", "firstname", "First Name");
var firstname_break = break_create();
var input_firstname = input_create("input", "type", "text", "id", "firstname");
var firstname_break1 = break_create();
document.body.append(
  firstname,
  firstname_break,
  input_firstname,
  firstname_break1
);

var Middlename = label_create("label", "for", "middlename", "Middle Name");
var middlename_break = break_create();
var input_middlename = input_create(
  "input",
  "type",
  "text",
  "id",
  "middlename"
);
var middlename_break1 = break_create();
document.body.append(
  Middlename,
  middlename_break,
  input_middlename,
  middlename_break1
);

var Lastname = label_create("label", "for", "lastname", "Last Name");
var lastname_break = break_create();
var input_lastname = input_create("input", "type", "text", "id", "lastname");
var lastname_break1 = break_create();
document.body.append(Lastname, lastname_break, input_lastname, lastname_break1);

var email = label_create("label", "for", "email", "Email");
var email_break = break_create();
var input_email = input_create("input", "type", "email", "id", "email");
var email_break1 = break_create();
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("onclick", "foo()");
button.innerHTML = "Click me";
document.body.append(email, email_break, input_email, email_break1, button);
