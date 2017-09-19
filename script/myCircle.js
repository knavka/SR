$(document).ready(function () {

var circle_surname_rating = Circles.create({
  id:                  'circle-surname-rating',
  radius:              65,
  value:               65,
  maxValue:            100,
  width:               12,
  text:                function(value){return value + '%';},
  colors:              ['rgb(240,240,240)','rgb(91,180,73)'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});


var circle_delay = Circles.create({
  id:                  'circle-delay',
  radius:              20,
  value:               20,
  maxValue:            100,
  width:               4,
  text:                function(value){return value + '%';},
  colors:              ['rgb(240,240,240)','rgb(91,180,73)'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});


var circle_auto_ipoteka = Circles.create({
  id:                  'circle-auto-ipoteka',
  radius:              20,
  value:               20,
  maxValue:            100,
  width:               4,
  text:                function(value){return value + '%';},
  colors:              ['rgb(240,240,240)','rgb(91,180,73)'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var circle_open_credit = Circles.create({
  id:                  'circle-open-credit',
  radius:              20,
  value:               20,
  maxValue:            100,
  width:               4,
  text:                function(value){return value + '%';},
  colors:              ['rgb(240,240,240)','rgb(91,180,73)'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

});
