export function devBaseURL() {
  //DEV
  const protocol = "http";
  const host = "localhost";
  const port = "8081";
  return `${protocol}://${host}:${port}`;
}

export function productionBaseURL() {
  //e.g https://portfolio-server26052021.herokuapp.com/api/projects
  
  //production
  const protocol = "https";
  const host = "portfolio-server26052021.herokuapp.com";
  //const port = "80";
  return `${protocol}://${host}`;
}