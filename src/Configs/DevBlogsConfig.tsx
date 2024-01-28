const getArticles = async () => {
  const res = new Promise(async (resolve, reject) => {
  try {
    fetch('https://dev.to/api/articles?username=akashmallick')
.then((response) => response.json())
.then(data => resolve(data))
.catch((error) => console.log(error));
  }
  catch (error) {
    console.log(error);
    reject(error);
  }
});


return res;

}

export default getArticles;