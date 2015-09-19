export default function(className, alg, args) {
  let start = process.hrtime();
  let result = className[alg](args);
  let time = process.hrtime(start)[1];
  return { result, time };
}