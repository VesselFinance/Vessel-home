var test = require('tape')
var classes = require('./');

function getElement() {
  var el = document.createElement('div');
  el.classList = undefined;
  return el
}

test('add(element, class)', function(t){
  t.test('should add a class', function(t){
    var el = getElement()
    classes.add(el, 'foo');
    t.equal('foo', el.className);
    t.end()
  });

  t.test('should not add the same class twice', function(t){
    var el = getElement()
    classes.add(el, 'foo');
    classes.add(el, 'foo');
    classes.add(el, 'foo');
    classes.add(el, 'bar');
    t.equal('foo bar', el.className);
    t.end()
  });

});

test('remove(el, class)', function(t){

  t.test('should remove a class from the beginning', function(t){
    var el = getElement()
    el.className = 'foo bar baz';
    classes.remove(el, 'foo');
    t.equal('bar baz', el.className);
    t.end()
  });

  t.test('should remove a class from the middle', function(t){
    var el = getElement()
    el.className = 'foo bar baz';
    classes.remove(el, 'bar');
    t.equal('foo baz', el.className);
    t.end()
  });

  t.test('should remove a class from the end', function(t){
    var el = getElement()
    el.className = 'foo bar baz';
    classes.remove(el, 'baz');
    t.equal('foo bar', el.className);
    t.end()
  });
});

test('remove(el, regexp)', function(t){
  t.test('should remove matching classes', function(t){
    var el = getElement()
    el.className = 'foo item-1 item-2 bar';
    classes.remove(el, /^item-/);
    t.equal('foo bar', el.className);
    t.end()
  });
});

test('toggle(el, class)', function(t){
  t.test('when present', function(t){
    t.test('should remove the class', function(t){
      var el = getElement()
      el.className = 'foo bar hidden';
      classes.toggle(el, 'hidden');
      t.equal('foo bar', el.className);
      t.end()
    });
  });

  t.test('when not present', function(t){
    t.test('should add the class', function(t){
      var el = getElement()
      el.className = 'foo bar';
      classes.toggle(el, 'hidden');
      t.equal('foo bar hidden', el.className);
      t.end()
    });
  });
});

test('has(el, class)', function(t){
  t.test('should check if the class is present', function(t){
    var el = getElement()
    el.className = 'hey there';
    t.notOk(classes.has(el, 'foo'));
    t.ok(classes.has(el, 'hey'));
    t.ok(classes.has(el, 'there'));
    t.end()
  });
});

test('classes(el)', function(t){
  t.test('should return an array of classes', function(t){
    var el = getElement()
    el.className = 'foo bar baz';
    var ret = classes(el);
    t.equal('foo', ret[0]);
    t.equal('bar', ret[1]);
    t.equal('baz', ret[2]);
    t.end()
  });

  t.test('should return an empty array when no className is defined', function(t){
    var el = getElement()
    var ret = classes(el);
    t.equal(0, ret.length);
    t.end()
  });

  t.test('should ignore leading whitespace', function(t){
    var el = getElement()
    el.className = '  foo bar    baz';
    var ret = classes(el);
    t.equal('foo', ret[0]);
    t.equal('bar', ret[1]);
    t.equal('baz', ret[2]);
    t.equal(3, ret.length);
    t.end()
  });

  t.test('should ignore trailing whitespace', function(t){
    var el = getElement()
    el.className = 'foo bar   baz     ';
    var ret = classes(el);
    t.equal('foo', ret[0]);
    t.equal('bar', ret[1]);
    t.equal('baz', ret[2]);
    t.equal(3, ret.length);
    t.end()
  });
});
