test("TEST callback", (done) => {
  const { callback } = require("../index");
  callback();
  //延迟1s结束
  setTimeout(done, 1000);
});

test("TEST promise", (done) => {
  const { promise } = require("../index");
  promise();
  setTimeout(done, 1000);
});

test("TEST generator", (done) => {
  const { generator } = require("../index");
  generator();
  setTimeout(done, 1000);
});

test("TEST asyncAwait", (done) => {
  const { asyncAwait } = require("../index");
  asyncAwait();
  setTimeout(done, 1000);
});
