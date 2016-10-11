import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'lifecycle',
        label: 'Lifecycle Status',
        options: [
          {key: 'standard', value: 'Standard'},
          {key: 'research', value: 'Research'},
          {key: 'containment', value: 'Containment'},
          {key: 'retirement', value: 'Retirement'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'productName',
        label: 'Product Name',
        value: 'Apple OS X',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'version',
        label: 'Version',
        value: '10.3',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'enteredBy',
        label: 'E-Mail',
        type: 'email',
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

}
