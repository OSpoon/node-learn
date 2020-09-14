const logTime = (name) => {
  console.log(`Log...${name}` + new Date().toLocaleTimeString());
};

// 嵌套使用
exports.callback = () => {
  setTimeout(() => {
    logTime("callback 1");
    setTimeout(() => {
      logTime("callback 2");
    }, 100);
  }, 100);
};

// Promise 异步处理
const promise = (name, delay = 100) =>
  new Promise((resolve) => {
    setTimeout(() => {
      logTime(name);
      resolve();
    }, delay);
  });

exports.promise = () => {
  promise("promise 1").then(promise("promise 2")).then(promise("promise 3"));
};

// generator
exports.generator = () => {
  const generator = function* (name) {
    yield promise(name + 1);
    yield promise(name + 2);
    yield promise(name + 3);
  };

  let co = (generator) => {
    if (it == generator.next().value) {
      it.then((res) => {
        co(generator);
      });
    } else {
      return;
    }
  };
  co(generator("Co-Generator"));
};

// async/await
exports.asyncAwait = async () => {
    await promise('Async/Await-1')
    await promise('Async/Await-2')
    await promise('Async/Await-3')
    await promise('Async/Await-4')
}
