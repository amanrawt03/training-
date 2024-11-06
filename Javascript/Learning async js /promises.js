const yourFunc = () => {
    return new Promise((res, rej) => {
      res("hehhe");
    });
};

async function myFunc() {
  const result = await yourFunc();
  console.log(typeof result);
}
myFunc()
