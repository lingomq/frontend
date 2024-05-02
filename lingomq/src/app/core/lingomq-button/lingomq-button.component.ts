import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lingomq-button',
  standalone: true,
  imports: [],
  templateUrl: './lingomq-button.component.html',
  styleUrl: './lingomq-button.component.scss',
})
export class LingomqButtonComponent {
  @Input() type: 'primary' | 'warning' | 'alternative' | 'error' = 'primary';

  @Output() buttonClick = new EventEmitter<MouseEvent>();
}
