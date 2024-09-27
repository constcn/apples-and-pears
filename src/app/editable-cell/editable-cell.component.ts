import { Component, Input } from '@angular/core';

@Component({
  selector: 'editable-cell',
  templateUrl: './editable-cell.component.html',
  styleUrls: ['./editable-cell.component.css']
})
export class EditableCellComponent {
  @Input() value: string = '123';
}
