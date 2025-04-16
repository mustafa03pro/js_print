// document.writeln("# # # # #");
// document.writeln("<br>");
// document.writeln("  \t#  ");document.write("<br>");
// document.writeln("  \t#  ");document.write("<br>");
// document.writeln("  \t#  ");document.write("<br>");
// document.writeln("  \t#  ");document.write("<br>");
// document.writeln("# # # # #");
// First Pattern
const pattern1 = [
    "#      #",
    "# #    #",
    "#  #   #",
    "#   #  #",
    "#    # #",
    "#      #"
  ];
  
  document.write("<pre>");
  console.log("First Pattern:");
  pattern1.forEach(line => {
    document.write(line + "\n");
    console.log(line);
  });
  document.write("</pre>");
  
  // Second Pattern
  const pattern2 = [
    "# # # # #",
    "    #    ",
    "    #    ",
    "    #    ",
    "    #    ",
    "# # # # #"
  ];
  
  document.write("<pre>");
  console.log("\nSecond Pattern:");
  pattern2.forEach(line => {
    document.write(line + "\n");
    console.log(line);
  });
  document.write("</pre>");
  
  //Third Pattern
  const pattern4 = [
    "# # # # #",
    "    #    ",
    "    #    ",
    "    #    ",
    "    #    ",
    "    #    "
  ];
const pattern3=[
    "#           #",
    "# #       # #",
    "#  #     #  #",
    "#    #  #   #",
    "#      #    #"
];
  document.write("<pre>");
  console.log("\nThird Pattern:");
  pattern3.forEach(line => {
    document.write(line + "\n");
    console.log(line);
  });
  document.write("</pre>");
// const pattern4=[
//     "#           #",
//     "# #       # #",
//     "#  #     #  #",
//     "#    #  #   #",
//     "#      #    #"
// ];
document.write("<pre>");
console.log("\nForth pattern:");
pattern4.forEach(line =>{
    document.write(line + "\n");
    console.log(line);

});  
document.write("<pre>");