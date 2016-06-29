function showPostIt(point) {
  console.log(point);
  $('.postit h1').text(point.series.name);
  $('.postit .possibility').text('Possibility: ' + point.possibility);
  $('.postit .priority').text('Priority: ' + point.priority);
  $('.postit .statement').text(point.statement);

  if (point.question) {
    $('.postit .question').text('Question: ' + point.question);
  }
}
