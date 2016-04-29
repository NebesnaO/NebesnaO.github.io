var obj = {
 createElement: function(tagName, className, content, parent) {
  var element = document.createElement(tagName);


  element.className = className;
  element.innerHTML = content;

  if (parent) {
   parent.appendChild(element);
  }

  return element;
 },
 createInput: function(tagName, inputType, value, parent, idName) {
  var element = document.createElement(tagName);

  element.setAttribute('type', inputType);
  element.setAttribute('value', value);
  element.setAttribute('id', idName);

  parent.appendChild(element);
  return element;
 },
 createQuestions: function(questionsCount, responseCount) {
        
        for (var i = 0; i < questionsCount; i ++) {
            
            this.createElement('h2', 'questions',((i+1) + '. ' + 'Вопрос №' + (i+1)), form);
           
                
          for (var j = 0; j < responseCount; j ++) {
              
                var label = this.createElement('label', 'response', 'Вариант ответа №' + (j+1), form);
                
               var checkbox = this.createInput('input', 'checkbox', '', form, 'box');
                
                label.insertAdjacentElement('afterBegin', checkbox);
          };
        };
 }
}

var body = document.querySelector('body');

body.setAttribute('id', 'fon');

obj.createElement('div', 'container', '', body);


var container = document.querySelector('.container');

obj.createElement('h1', 'header', 'Тест по программированию', container);

var form = obj.createElement('form', 'box', '', container);

obj.createQuestions(3, 3);

obj.createInput('input', 'submit',  'Проверить мои результаты', form , 'result');