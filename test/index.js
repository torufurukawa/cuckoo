import test from 'ava'
import { webIntentUrl } from '../src/index.js'

test('hello', t => {
  let result = webIntentUrl('hello')
  t.is(result, 'hello')
})

test('with URL', t => {
  let result = webIntentUrl('hello https://example.com/')
  t.is(result, 'hello%20https%3A%2F%2Fexample.com%2F')
})

test('Japanese with URL', t => {
  let result = webIntentUrl('はろー https://example.com/')
  t.is(result, '%E3%81%AF%E3%82%8D%E3%83%BC%20https%3A%2F%2Fexample.com%2F')
})
