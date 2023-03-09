import { Component } from '@angular/core';

@Component({
  selector: 'test-page',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.scss']
})
export class TestComponent {
  test: string = 'test';

  constructor() {}
}
