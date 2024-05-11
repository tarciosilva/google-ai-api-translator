const getKey = async () => {
  let key = "";

  const response = await fetch("../../api-key.txt");
  if (!response.ok) {
    key = prompt("API Key Error, please try to put it below: ");
  }else {
    key = await response.text();
  }
  return key;
};
export default getKey;
