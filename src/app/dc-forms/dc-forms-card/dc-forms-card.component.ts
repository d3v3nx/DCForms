import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dc-forms-card',
  templateUrl: './dc-forms-card.component.html',
  styleUrl: './dc-forms-card.component.css'
})
export class DcFormsCardComponent {
  @Input() dcform : any
}
