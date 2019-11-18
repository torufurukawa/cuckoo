import test from "ava"

test('foo', async t => {
  let foo = Promise.resolve("foo");
  t.is(await foo, "foo")
})
