import test from 'ava';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cuckoo from './../src/cuckoo'

configure({adapter: new Adapter()});

function Foo() {
  return (
    <div className="foo">
      <span>Foo</span>
      <FooInner />
    </div>
  );
}

function FooInner() {
  return (
    <span className="foo-inner">FooInner</span>
  );
}

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

test('shallow', t => {
  const wrapper = shallow(<Foo />);
  t.is(wrapper.contains(<span>Foo</span>), true);
});

test('mount', t => {
  const wrapper = mount(<Foo />);
  const fooInner = wrapper.find('.foo-inner');
  t.is(fooInner.is('.foo-inner'), true);
});
