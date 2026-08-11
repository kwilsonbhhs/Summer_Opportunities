// program id -> uploaded school imagery. Base name matches the uploaded file pair
// "<name>.png" (campus photo) and "<name>-LOGO.png" (logo).
// To add a school: drop both files in uploads/ and add a line here.
const M = {
  au: "American University",
  bard: "Simon's Rock at Bard College",
  brandeis: "Brandeis University",
  brown: "Brown University",
  bucknell: "Bucknell University",
  dartmouthhci: "Dartmouth College",
  tutti: "Denison University",
  reynolds: "Denison University",
  emory: "Emory University",
  gwu: "George Washington University",
  hofstra: "Hofstra University",
  lehigh: "Lehigh University",
  manhattan: "Manhattan University",
  mercy: "Mercy University",
  miamioh: "Miami University",
  newschool: "The New School",
  parsonsparis: "The New School",
  northeastern: "Northeastern University",
  northwestern: "Northwestern University",
  princetonsjp: "Princeton University",
  purchase: "SUNY Purchase",
  quinnipiac: "Quinnipiac University",
  rochester: "University of Rochester",
  rochesterlive: "University of Rochester",
  rutgers: "Rutgers University",
  scad: "SCAD",
  simons: "Stony Brook University",
  skidmore: "Skidmore College",
  stamps: "University of Michigan",
  syracuse: "Syracuse University",
  uchicago: "University of Chicago",
  udel: "University of Delaware",
  umass: "UMass Amherst",
  vanderbilt: "Vanderbilt University",
  villanova: "Villanova University",
  wakeforest: "Wake Forest University",
  washu: "Washington Univeristy in St. Louis",
  wpi: "Worcester Polytechnic Institute"
};
const media = {};
for (const id in M) {
  media[id] = {
    photo: "uploads/" + M[id] + ".png",
    logo: "uploads/" + M[id] + "-LOGO.png"
  };
}
export default media;
