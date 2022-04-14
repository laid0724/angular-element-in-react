import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'demo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() modalOpenState = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.isOpen = false;
    this.modalOpenState.emit(this.isOpen);
  }
}
