Package.describe({
  name: "thebakery:autoform",
  summary: "Lite version of autoform based on 5.8.1. No bootstrap templates + moment included as NPM dependency.",
  git: "https://github.com/bakery/meteor-autoform.git",
  version: "5.8.2"
});

Package.onUse(function(api) {
  // Dependencies
  api.versionsFrom(['METEOR@1.6']);
  // common
  api.use('aldeed:simple-schema@1.5.4');
  api.use('check');
  // client
  api.use([
    'livedata',
    'underscore',
    'deps',
    'templating@1.3.2',
    'ui@1.0.13',
    'blaze@2.3.3',
    'ejson',
    'reactive-var',
    'reactive-dict',
    'random',
    'jquery'
], 'client');

  Npm.depends({
    'moment': '2.21.0',
  });

  api.use('mrt:moment-timezone@0.2.1', 'client', {weak: true});
  api.use('aldeed:moment-timezone@0.4.0', 'client', {weak: true});
  api.use(['aldeed:collection2@2.0.0', 'reload'], 'client', {weak: true});

  // Imply SS to make sure SimpleSchema object is available to app
  api.imply('aldeed:simple-schema');

  // Exports
  api.export('AutoForm', 'client');
  api.export('Utility', 'client', {testOnly: true});

  // Common Files
  api.addFiles(['autoform-common.js']);

  // Client Files
  api.addFiles([
    // utilities and general init
    'utility.js',
    'form-preserve.js',
    'autoform-hooks.js',
    'autoform-formdata.js',
    'autoform-arrays.js',
    'autoform.js',
    // global helpers
    'autoform-helpers.js',
    // validation
    'autoform-validation.js',
    // inputs
    'autoform-inputs.js',
    // public API
    'autoform-api.js',
    // form types
    'formTypes/insert.js',
    'formTypes/update.js',
    'formTypes/update-pushArray.js',
    'formTypes/method.js',
    'formTypes/method-update.js',
    'formTypes/normal.js',
    'formTypes/readonly.js',
    'formTypes/disabled.js',
    // input types
    'inputTypes/value-converters.js',
    'inputTypes/boolean-checkbox/boolean-checkbox.html',
    'inputTypes/boolean-checkbox/boolean-checkbox.js',
    'inputTypes/boolean-radios/boolean-radios.html',
    'inputTypes/boolean-radios/boolean-radios.js',
    'inputTypes/boolean-select/boolean-select.html',
    'inputTypes/boolean-select/boolean-select.js',
    'inputTypes/button/button.html',
    'inputTypes/button/button.js',
    'inputTypes/color/color.html',
    'inputTypes/color/color.js',
    'inputTypes/contenteditable/contenteditable.html',
    'inputTypes/contenteditable/contenteditable.js',
    'inputTypes/date/date.html',
    'inputTypes/date/date.js',
    'inputTypes/datetime/datetime.html',
    'inputTypes/datetime/datetime.js',
    'inputTypes/datetime-local/datetime-local.html',
    'inputTypes/datetime-local/datetime-local.js',
    'inputTypes/email/email.html',
    'inputTypes/email/email.js',
    'inputTypes/file/file.html',
    'inputTypes/file/file.js',
    'inputTypes/hidden/hidden.html',
    'inputTypes/hidden/hidden.js',
    'inputTypes/image/image.html',
    'inputTypes/image/image.js',
    'inputTypes/month/month.html',
    'inputTypes/month/month.js',
    'inputTypes/number/number.html',
    'inputTypes/number/number.js',
    'inputTypes/password/password.html',
    'inputTypes/password/password.js',
    'inputTypes/radio/radio.html',
    'inputTypes/radio/radio.js',
    'inputTypes/range/range.html',
    'inputTypes/range/range.js',
    'inputTypes/reset/reset.html',
    'inputTypes/reset/reset.js',
    'inputTypes/search/search.html',
    'inputTypes/search/search.js',
    'inputTypes/select/select.html',
    'inputTypes/select/select.js',
    'inputTypes/select-checkbox/select-checkbox.html',
    'inputTypes/select-checkbox/select-checkbox.js',
    'inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'inputTypes/select-multiple/select-multiple.html',
    'inputTypes/select-multiple/select-multiple.js',
    'inputTypes/select-radio/select-radio.html',
    'inputTypes/select-radio/select-radio.js',
    'inputTypes/select-radio-inline/select-radio-inline.html',
    'inputTypes/select-radio-inline/select-radio-inline.js',
    'inputTypes/submit/submit.html',
    'inputTypes/submit/submit.js',
    'inputTypes/tel/tel.html',
    'inputTypes/tel/tel.js',
    'inputTypes/text/text.html',
    'inputTypes/text/text.js',
    'inputTypes/textarea/textarea.html',
    'inputTypes/textarea/textarea.js',
    'inputTypes/time/time.html',
    'inputTypes/time/time.js',
    'inputTypes/url/url.html',
    'inputTypes/url/url.js',
    'inputTypes/week/week.html',
    'inputTypes/week/week.js',
    // components that render a form
    'components/autoForm/autoForm.html',
    'components/autoForm/autoForm.js',
    'components/quickForm/quickForm.html',
    'components/quickForm/quickForm.js',
    // components that render controls within a form
    'components/afArrayField/afArrayField.html',
    'components/afArrayField/afArrayField.js',
    'components/afEachArrayItem/afEachArrayItem.html',
    'components/afEachArrayItem/afEachArrayItem.js',
    'components/afFieldInput/afFieldInput.html',
    'components/afFieldInput/afFieldInput.js',
    'components/afFormGroup/afFormGroup.html',
    'components/afFormGroup/afFormGroup.js',
    'components/afObjectField/afObjectField.html',
    'components/afObjectField/afObjectField.js',
    'components/afQuickField/afQuickField.html',
    'components/afQuickField/afQuickField.js',
    'components/afQuickFields/afQuickFields.html',
    'components/afQuickFields/afQuickFields.js',
    // event handling
    'autoform-events.js',
    // plain Template
    'templates/plain/components/quickForm/quickForm.html',
    'templates/plain/components/quickForm/quickForm.js',
    'templates/plain/components/afArrayField/afArrayField.html',
    'templates/plain/components/afFormGroup/afFormGroup.html',
    'templates/plain/components/afObjectField/afObjectField.html',
    'templates/plain/components/afObjectField/afObjectField.js',
    // plain-fieldset Template
    'templates/plain-fieldset/plain-fieldset.html',
    'templates/plain-fieldset/plain-fieldset.js',
  ], 'client');
});

Package.onTest(function (api) {
  api.use(['aldeed:autoform', 'tinytest', 'underscore', 'mongo']);
  api.use('momentjs:moment', 'client');
  api.addFiles(['tests/utility-tests.js', 'tests/autoform-tests.js']);
});
