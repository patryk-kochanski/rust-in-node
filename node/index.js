const ffi = require('ffi-napi');

const rustLib = ffi.Library('../rust-lib/target/release/libMath', {
  'add':['int', ['int', 'int']] // 'the_function_you_import' : ['return_type', ['function_param_1', 'function_param_2']]
});

const result = rustLib.add(2,2);
console.log(result);